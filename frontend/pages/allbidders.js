import axios from "axios";
import React, { useState,useContext,useEffect } from "react"
// import { BidContext } from "../../state"
import { BidContext } from "../state";
import Router, { useRouter } from "next/router";
const Allbidders=()=>{
  const biddingContext = useContext(BidContext);
  const { posts } = biddingContext;
  const [post, setPost] = posts;


    const [user, setUser] = useState({
        username: "",
    })
    const [amountInput,setAmountInput]=useState({
        amount:""
      })
      const [storeData,setStoreData]=useState([])
      console.log(storeData)
    const [formInput, setFormInput] = useState({
        image: "",
        name: "",
        description: "",
        cartegory: "",
        subimages: [],
        endingdate: "",
        currentdate: "",
        startingPrice: "",
        bids:[]
      });
      const dataArray= async()=>{

      //   const url ="https://biddingbackend.onrender.com/api/post/";
      //   const options = {
      //     method: "PATCH",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(storeData),
      //   };
      //   axios.get(url,options)
      //   .then((res) => {
      //     setStoreData(res.data)
      //   })
      //   console.log(res.data)
      // .catch(err=>{
      //     console.log(err)
      // })

      }

      const url = 'https://biddingbackend.onrender.com/api/post/'
      useEffect(() => {
          getPosts()
      }, [])
  
      const getPosts = () => axios.get(url)
          .then((res) => {
              setPost(res.data)
          })
          .catch((err) => {
              console.log(err)
          })

    return(
        <div>
                    {post!==undefined && post.map(item=>{
                      return(
                        <div>
                          <p>{item.name}</p>
                        </div>
                      )
                    })}


        </div>
    )
}
export default Allbidders