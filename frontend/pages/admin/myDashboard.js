import React, { useContext, useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { BidContext } from "../../state";
import { async } from "@firebase/util";
import axios from "axios";
const MyDashboard=()=>{

    const [reload, setReload] = useState();
    const biddingContext = useContext(BidContext);
    const { posts } = biddingContext;
    const [post, setPost] = posts;
    const router=useRouter();
    
    try{
        const url = ' https://biddingbackend.onrender.com/api/post/'
    const options={
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }
    useEffect(() => {
        axios.get(url,options)
            .then((res) => {
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [url])
}catch(err){
        console.log(err)
    }
    // const allBidders=()=>{
        // const bidders=[]
        // singlePost && singlePost.bids.map((bid)=>{
        //   bidders.push(bid["username"])
        // });
        // console.log(bid)


// }else("You have not posted anything yet")
    // }


    
    // const allBidders=()=>{
    //     const bidders=[]
    //     singlePost && singlePost.bids.map((bid)=>{
    //       bidders.push(bid["username"])
    //     });
    //     console.log(singlePost)       
    //   }


return(
    <div>
        {
            post.map(item=>{
                return(
                    <p>{item.name}</p>
                )
            }
                
                )
        }
        {/* <button onClick={myPost()}>My Dashboard</button> */}
        <p></p>
    </div>
)
}
export default MyDashboard