import React,{useContext, useState,useEffect} from "react";
import Router, { useRouter } from "next/router";
import { BidContext } from "../../state"
import SubNav from "../../public/components/subnav";
import Nav from "../../public/components/nav"
import Partners from "../../public/components/partners";
import Footer from "../../public/components/footer";
import axios from "axios"
import { IndeterminateCheckBox } from "@mui/icons-material";

const Post = () => {
    const [reload,setReload]=useState()
  const biddingContext = useContext(BidContext);
  const { posts } = biddingContext;
  const [post, setPost] = posts;
  const [timer , setTimer]=useState({})

 
 
useEffect(()=>{
  post.map(item=>{
if(item._id == bid ){
  setInterval(()=>{
  const startingDate=new Date(item.currentdate)
  const endingDate=new Date(item.endingdate)
  const difference=endingDate-startingDate
  
  console.log(difference)

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours=Math.floor(difference/(1000 * 60 *60)%24);
  const minutes = Math.floor(difference / (1000 / 60)%60);
      const seconds = Math.floor((difference / 1000)%60);
      
 

        setTimer({days,hours,minutes,seconds});
    
    
    console.log(`${days}:${hours}:${minutes}:${seconds}`)
  },1000)
}
  })



},[])


  useEffect(()=>{
    const url=  "https://biddingbackend.onrender.com/api/post/"
    const options={

        headers: {
            'Content-type': 'application/json',
        },
    }
    axios.get(url,options)
    .then(res=>setPost(res.data))
    

},[])


   const countDownTime=()=>{
{
  post.map(item=>{
if(item._id == id){
  return item
}
  })
}
    const bidIdRouter = useRouter()
    const id=bidIdRouter.query.bid
    console.log(id)


   }

  const router = useRouter();
  const { bid } = router.query;


  const[number,setNumber]=useState(1)
  const increase=()=>{
      if(number<5){
          setNumber((previousNum)=>previousNum+1)}
  }
 const decrease=()=>{
      if(number>1){
          setNumber((previousNum)=>previousNum-1)}
  }
  

  
  return (
    <div>
      <Nav/>
      <SubNav/>
  {
    post.map(item=>{
        if(item._id == bid){

      return(
                <div>
<div className="biddingpage_main_container">
  
        <div className="biddingpage_main_container">
          <div className="biddingPage_time_container1">
            <div>
              <img src="../images/watched.svg" width={25} />
            </div>
               <div>
            {
              new Date(item.endingdate)-new Date(item.currentdate) <=0 ? "This bid has ended" :
              
              <div className="biddingPage_time_container">

              <div className="biddingPage_time">
                <div>
                  
                    <p style={{ color: "red" }}>{timer.days} </p>
                  

                  {console.log(new Date(item.endingdate)-new Date(item.currentdate))}
                  
                </div>
                <div>
                  <p> Days</p>
                </div>
              </div>
              <div className="biddingPage_time">
                <div>
                  <p style={{ color: "red" }}>{timer.hours} </p>
                </div>
                <div>
                  <p> Hrs</p>
                </div>
              </div>

              <div className="biddingPage_time">
                <div>
                  <p style={{ color: "red" }}>{timer.minutes} </p>
                </div>
                <div>
                  <p> Mins</p>
                </div>
              </div>

              <div className="biddingPage_time">
                <div>
                  <p style={{ color: "red" }}>{timer.seconds} </p>
                </div>
                <div>
                  <p> Sec</p>
                </div>
              </div>
              </div>
            }
            </div>
          </div>

          <div className="biddingpage_container">
            <div className="biddingpage_first_container">
              <div className="imgBid">
                <img src={item.image} width={330} />
              </div>
              <div className="singlePost">
                {
                    item.subimages.map(src=>{
return <img src={src} width={30} />
                    })
                }
              </div>
            </div>

            <div className="biddingpage_price_of_items_container biddingpage_second_container">
              <h2> {item.name}</h2>
              <div className="biddingpage_price_of_items">
                <div>
                  <p>Starting Bid</p>
                </div>
                <div style={{ color: "green" }}>
                  <p>{item.startingPrice}</p>
                </div>
              </div>
              <div className="biddingpage_price_of_items_button_container">
                <div className="inputbtn">
                  <input type="number"/>
                </div>
                <div>
                  <div>
                    <img src="../images/plus.svg" width={15} onClick={increase}/>
                  </div>
                  <div>
                    <img src="../images/remove.png" width={15} onClick={decrease}/>
                  </div>
                </div>
              </div>


              <div className="biddingpage_price_of_items_button_container_bid_now">
                <button>Bid Now</button>
              </div>
            </div>

            <div className="biddingpage_wathed_details_container biddingpage_third_container">
              <div className="biddingpage_wathed_details">
                <div>
                  <img src="../images/today.png" width={19} />
                </div>
                <div>
                  <div>
                    <p style={{ color: "yellow" }}>14</p>
                  </div>
                  <p>Today's Bid</p>
                </div>
              </div>

              <div className="biddingpage_wathed_details">
                <div>
                  <img src="../images/watchers.png" width={19} />
                </div>
                <div>
                  <div>
                    <p style={{ color: "yellow" }}>154</p>
                  </div>
                  <p>Watched</p>
                </div>
              </div>

              <div className="biddingpage_wathed_details">
                <div>
                  <img src="../images/totalbids.png" width={19} />
                </div>
                <div>
                  <div>
                    <p style={{ color: "yellow" }}>54</p>
                  </div>
                  <p>Total Bids</p>
                </div>
              </div>
              <div className="biddingpage_highest_bid">
                <h5>Current Highest Bid</h5>
                <p>Ksh.30,321 , Ouma</p>
              </div>
            </div>
          </div>

        </div>
        <div className="bidingpage_propery_heading">
          <h2>Properties</h2>
        </div>
        <div className="biddingpage_vehicle_properties">
          <div style={{width:"30%"}}>
            <h3>Description</h3>
            <p>{item.description}</p>            
          </div>
          <div>
            <h3>Name</h3>
            <p>{item.name}</p>
            
          </div>
          <div>
            <h3>Cartegory</h3>
            <p>{item.cartegory}</p>
           
          </div>
          <div>
            <h3>Other Properties</h3>
            <p>{item.cartegory}</p>
           
          </div>
        </div>
      </div>
                  
                </div>
            )
        }
    })
  }
  <Partners/>
  <Footer/>
  </div>
  )
};
export default Post;






