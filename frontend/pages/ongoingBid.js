import React,{useContext, useState,useEffect} from "react";
import Footer from "../public/components/footer";
import Nav from "../public/components/nav";
import Partners from "../public/components/partners";
import SubNav from "../public/components/subnav";
import { BidContext } from "../state";
import axios from "axios";

const OngoingBid=()=>{
    const biddingContext = useContext(BidContext);
    const { posts } = biddingContext;
    const [post, setPost] = posts;
    const [timer , setTimer]=useState({})

 
    // useEffect(()=>{
    //     post.map(item=>{
    //   if(item._id == bid ){
    //     setInterval(()=>{
    //     const startingDate=new Date()
    //     const endingDate=new Date(item.endingdate)
    //     const difference=endingDate-startingDate
        
    //     console.log(difference)
      
    //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    //     const hours=Math.floor(difference/(1000 * 60 *60)%24);
    //     const minutes = Math.floor(difference / (1000 / 60)%60);
    //         const seconds = Math.floor((difference / 1000)%60);
            
       
      
    //           setTimer({days,hours,minutes,seconds});
          
          
    //       console.log(`${days}:${hours}:${minutes}:${seconds}`)
    //     },1000)
    //   }
    //     })
      
      
      
    //   },[])




    useEffect(()=>{
        try{
        const url=  "https://biddingbackend.onrender.com/api/post/"
        const options={
    
            headers: {
                'Content-type': 'application/json',
            },
        }
        axios.get(url,options)
        .then(res=>setPost(res.data))
    } catch(err){
        console.log(err)
    }
    
    },[])    
    return(
        <div style={{fontFamily: "Josefin Sans, sans-serif "}}>
        <Nav/>
        <SubNav/>
        <div className="bid_main_container">
          {
            post.map(item =>(
                <div>
                   
           
<div className="bid_sub_main">

    <div className="bidding_container">

        <div className="bid_cont_time">
            <div>
                <p>Ongoing Bid</p>
            </div>
            <div>
                <img src="../images/love.png" width={27}/>
            </div>
            
        </div>
        <div className="bid_image">
                <img src={item.image} width={170}/>
            </div>
            <div className="bid_desc_cont bid_first_container">
                <div className="bid_image_desc bid_description">
                    <p>{item.description}</p>
                </div>
                <div className="bid_clock_icon">
                    <div>
                        <img src="../images/clock1.png" width={23}/>
                    </div>
                    <div>
                        <p>Ends in 6days,10hrs </p>
                    </div>
                </div>
                <div className="bid_price">
                    <div>
                        <p>Highest Bid Ksh.{item.startingPrice}</p>
                    </div>
                    <div>
                        <button>Bid Now</button>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </div>
         ))
        }
           </div>

        <Partners/>
        <Footer/>
       </div>
    )
}
export default OngoingBid