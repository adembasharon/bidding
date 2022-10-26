// import React ,{useState,useContext,useEffect}from "react";
// import { BidContext } from "./state";
// import Router, { useRouter } from "next/router";


// const MyPost=()=>{

//     const [reload,setReload]=useState()
//     const biddingContext = useContext(BidContext);
//     const { posts } = biddingContext;
//     const [post, setPost] = posts;
//     const [currentUser,setCurrentUser]=useState([])
    

  

//     const router = useRouter();
//     useEffect(() => {

//         const user = localStorage.getItem("loggedInUser")

//         setCurrentUser(JSON.parse(user))

//         if (JSON.parse(user)[0] ) {
//             router.push("/admin/dashboard")
//         } else {
//             router.push("/admin/login")

//         }

//     }, [])



//     }
// export default MyPost