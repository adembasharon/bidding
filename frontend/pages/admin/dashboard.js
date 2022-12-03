import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { BidContext } from "../../state";
import Router, { useRouter } from "next/router";
import axios from "axios";
import Nav from "../../public/components/nav";
import SubNav from "../../public/components/subnav";
import Footer from "../../public/components/footer";

const Dashboard = () => {
  const [reload, setReload] = useState();
  const biddingContext = useContext(BidContext);
  const { posts } = biddingContext;
  const [post, setPost] = posts;
  const [currentUser, setCurrentUser] = useState([]);
  const [user, setUser] = useState();
  const [postArray, setPostArray] = useState(null);
  const [formInput, setFormInput] = useState({
    image: "",
    name: "",
    description: "",
    cartegory: "",
    subimages: [],
    endingdate: "",
    currentdate: "",
    startingPrice: "",
    item: [],
  });

  const router = useRouter();

  const [availablePosts, setAvailablePosts] = useState(false)

  try {
    const user =JSON.parse(localStorage.getItem("loggedInUser"))
    if(!user){
      router.push("/admin/login")
    }else{
  
  useEffect(() => {
    getPosts();
       const user =JSON.parse(localStorage.getItem("loggedInUser"))
    setUser(user)

  }, []);

  const getPosts = () =>{
  const url = "https://biddingbackend.onrender.com/api/post/";
    axios
      .get(url)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    };

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(post));

    post.find(item =>{
console.log(item.bids)
      item.user==user[0]._id ? setAvailablePosts(true) : setAvailablePosts(false)
      
    })

  }, [post]);

}
    
  } catch (err) {
    console.log(err)
  }
  const detail = async (id) => {
    try {
      const data = JSON.parse(localStorage.getItem("post"));
      const dataId = data.indexOf(data.find((item) => item._id === id));
      data.splice(dataId, 1);
      setPost([...data]);
      localStorage.setItem("post", JSON.stringify(post));

      const deletedItem = await fetch(
        `https://biddingbackend.onrender.com/api/post/${id}`,
        {
          method: "DELETE",
        }
      );

      console.log(await deletedItem.json());
     
    } catch (err) {
      console.log(err);
    }
  };



  const logout = () => {
    localStorage.removeItem("user", JSON.stringify(user));
    setUser(false);
    router.push("/");
  };

  const renderPosts = ()=>{
console.log(availablePosts)
    if(availablePosts) {

      return (
        <div style={{display:"flex",flexDirection:"row",gap:".3em",fontFamily: "Josefin Sans, sans-serif "}}>
        {
  
          post !==undefined &&
  
          post.map((item) => {
  
            if(user[0]._id == item.user) {
        
              return (
                <div key={item._id} >
                  <div>
                    <img src={item.image} width={200} />
                  </div>
                  <div>
                    {item.subimages.map((src) => {
                      return <img src={src} width={30} />;
                    })}
                  </div>
                  <div className="dashboard_items">
                    <p> 
                      Name:<span>{item.name}</span>
                    </p>
                    <p>
                      Description:
                      <span style={{ width: "10%" }}>{item.description}</span>
                    </p>
                    <p>
                      Cartegory:<span>{item.cartegory}</span>
                    </p>
                    <p>
                      Starting Date:<span>{item.currentdate}</span>
                    </p>
                    <p>
                      Ending Date:<span>{item.endingdate}</span>
                    </p>
                    <p>
                      Starting Price:<span>{item.startingPrice}</span>
                    </p>
                  </div>
                  <div>
                    {
item.bids.map((bid)=>{
  return(
    <p>{bid.username}</p>
  )
})

                    }
                  </div>
        
                  <div className="dashboard_clickButton">
                    <div>
                      <button
                        onClick={() => detail(item._id)}
                        style={{ backgroundColor: "red" }}
                      >
                        Delete
                      </button>
                    </div>
                    <div>
                      <Link href={`/edit/${item._id}`}>
                        <button>Edit</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            } 
                     
          })       
  
               
  
        }
        </div>
  
      )
    } else {
      return (
        <h2>No posts yet</h2>
        
      )
    }

    
  
    

  }



  return (
    <div>
      <Nav />
      <SubNav />
      <div className="dashboard_firstButton">
        <div>
          <Link href="/admin/postProduct">
            <button>Add New Bid</button>
          </Link>
        </div>

        <div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="dashboard_container">


         { 

renderPosts()
         
        }
            
          
          
      </div>

      
      <Footer />
    </div>
  );
};
export default Dashboard;
