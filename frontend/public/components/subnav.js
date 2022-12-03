import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";

// import algoliasearch from 'algoliasearch';
import { BidContext } from "../../state";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const SubNav = ({ children }) => {
  const biddingContext = useContext(BidContext);
  const { posts } = biddingContext;
  const [post, setPost] = posts;
  const [user,setUser]=useState(null)
  const [show , setShow]=useState(false)

  useEffect(()=>{
    const user = localStorage.getItem("loggedInUser")
    setUser(JSON.parse(user))
  },[])

 
const logout = () => {
        localStorage.removeItem("loggedInUser")
        setUser(false)
    }

    const checkData=()=>{
      if(post.cartegory== "Vehicles"){
        router.push(`/bids/${item._id}`)
      }
    }

  return (
    <>
    {/* {console.log(user)} */}
      <div className="subnav_container">
        <div className="sub_nav_container">
          <Link href="/">
            <div style={{ cursor: "pointer" }}>
              <img src="../images/logo.png" width={90} />
            </div>
          </Link>
          <Link href="/">
            <h4 style={{ cursor: "pointer" }}>Home</h4>
          </Link>
          <div className="subNav_input">          
            <div>            
                          </div>
          </div>
          <div className="subnav_login">
              {
                
                user ?
                <div className="dropdownCont">
                  <p className="username" style={{cursor:"pointer",color:"#4990e2",position:"relative"}} onClick={()=>setShow(prev=>!prev)} >{user[0].username}</p>

                 <div style={{position:"absolute",padding:"2px",border:"1px solid rgb(230, 221, 221)",backgroundColor:"rgb(224, 204, 204)"}} className={show?"dropdown":"dropDownItem"}>
<p onClick={logout} style={{cursor:"pointer",color:"#4990e2"}}>Logout</p>
<Link href="/admin/dashboard"><p style={{cursor:"pointer",color:"#4990e2"}}>Dashboard</p></Link>
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
            <div>
              <p>
                Bal:{" "}
                <span className="subnav_Amount_" style={{ color: "green" }}>
                  6,000
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="subNav_list_container">
        <div className="subNav_list_item">
          <div>
            <p>Vehicles</p>
          </div>
          <div>
            <p>Furniture</p>
          </div>
          <div>
            <p>Electronics</p>
          </div>
          <div>
            <p>Properties</p>
          </div>
          <div>
            <p>Land</p>
          </div>
          <div>
            <p>Clothings</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubNav;
