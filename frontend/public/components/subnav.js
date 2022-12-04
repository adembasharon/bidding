import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";

// import algoliasearch from 'algoliasearch';
import { BidContext } from "../../state";
import { useRouter } from 'next/router'


import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const SubNav = ({ children }) => {
  const biddingContext = useContext(BidContext);
  const { posts } = biddingContext;
  const [post, setPost] = posts;
  const [user, setUser] = useState(null)
  const [show, setShow] = useState(false)
  const { cartegory } = biddingContext;
  const [cartegories, setCartegories] = cartegory;

  const router=useRouter();

  const customSearchClient = {
    search(requests) {
      return fetch("https://biddingbackend.onrender.com/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requests }),
      }).then((res) => res.json());
    },
    searchForFacetValues(requests) {
      return fetch("https://biddingbackend.onrender.com/api/sffv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requests }),
      }).then((res) => res.json());
    },
  };
  // useEffect(() => {
  useEffect(()=>{
    const user = localStorage.getItem("loggedInUser")
    setUser(JSON.parse(user))
  }, [])


  const logout = () => {
    localStorage.removeItem("loggedInUser")
    setUser(false)
  }

    const getCartegory = (e) => {
    e.preventDefault();
    setCartegories(e.target.innerText)
    router.push("../../filterPage")
  }
  console.log(cartegories)
  return (
    <div style={{fontFamily: "Josefin Sans, sans-serif "}}>

      <div className="subnav_container">
        <div className="sub_nav_container">
          <Link href="/">
            <div style={{ cursor: "pointer" }}>
              <img src="../images/logo.png" width={90} />
            </div>
          </Link>
          <div style={{cursor:"pointer"}}>
          <Link href="/">
          <h2>Bid And Buy</h2>
          </Link>
          </div>

          <div>    

          <div className="subnav_login">
            {

              user ?
                <div className="dropdownCont">
                  <p className="username" style={{ cursor: "pointer", color: "#4990e2", position: "relative" }} onClick={() => setShow(prev => !prev)} ><span style={{ color: "black" }}>LoggedIn As    </span><span style={{ cursor: "pointer", color: "#4990e2", position: "relative" }} >{user[0].username}</span></p>

                  <div style={{ position: "absolute", padding: "2px", border: "1px solid rgb(230, 221, 221)", backgroundColor: "rgb(224, 204, 204)" }} className={show ? "dropdown" : "dropDownItem"}>
                    <p onClick={logout} style={{ cursor: "pointer", color: "#4990e2" }}>Logout</p>
                    <Link href="/admin/dashboard"><p style={{ cursor: "pointer", color: "#4990e2" }}>Dashboard</p></Link>
                  </div>

                </div>
                :
                <div>
                  <div className="subnav_credentials">

                    <div style={{ cursor: "pointer" }}>
                      <Link href="/admin/login" passHref>
                        <p>Login/</p>
                      </Link>
                    </div>
                    <div style={{ cursor: "pointer" }}>
                      <Link href="/signup">
                        <p>Register</p>
                      </Link>
                    </div>

                  </div>
                </div>
            }

          </div>
        </div>
      </div>
      <div className="subNav_list_container">
        <div className="subNav_list_item">

          <div>
         
            <p style={{cursor:"pointer"}} onClick={e => getCartegory(e)}>Vehicle</p>
            

          </div>
           
          <div>
            <p style={{cursor:"pointer"}} onClick={e => getCartegory(e)}>Furniture</p>
          </div>
         
         
          <div>
            <p style={{cursor:"pointer"}} onClick={e => getCartegory(e)}>Electronic</p>
          </div>
          
         
          <div>
            <p style={{cursor:"pointer"}} onClick={e => getCartegory(e)}>Properties</p>
          </div>
          
          <div>
            <p style={{cursor:"pointer"}} onClick={e => getCartegory(e)}>Land</p>
          </div>
         
          <div>
            <p style={{cursor:"pointer"}} onClick={e => getCartegory(e)}>Clothing</p>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};
export default SubNav;
