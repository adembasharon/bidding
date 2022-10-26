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

 
    useEffect(()=>{
        post.map(item=>{
      if(item._id == bid ){
        setInterval(()=>{
        const startingDate=new Date()
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
        const url=  "http://localhost:5000/api/post/"
        const options={
    
            headers: {
                'Content-type': 'application/json',
            },
        }
        axios.get(url,options)
        .then(res=>setPost(res.data))
        
    
    },[])    
    return(
        <>
        <Nav/>
        <SubNav/>
        <div className="bid_main_container">
          
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
                <img src="../images/car.png" width={170}/>
            </div>
            <div className="bid_desc_cont bid_first_container">
                <div className="bid_image_desc bid_description">
                    <p>V8 car 180km/hr brand new from supermarket</p>
                </div>
                <div className="bid_clock_icon">
                    <div>
                        <img src="../images/clock1.png" width={23}/>
                    </div>
                    <div>
                        <p>Ends in `{}`6days,10hrs </p>
                    </div>
                </div>
                <div className="bid_price">
                    <div>
                        <p>Highest Bid Ksh.3000</p>
                    </div>
                    <div>
                        <button>Bid Now</button>
                    </div>
                </div>
            </div>
    </div>

    <div className="bidding_container">

        <div className="bid_cont_time bid_sold">
            <div>
                <p>Not For Sale</p>
            </div>
            <div>
                <img src="../images/love.png" width={27}/>
            </div>
            
        </div>
        <div className="bid_image">
                <img src="../images/tv.png" width={170}/>
            </div>
            <div className="bid_desc_cont bid_sec_container">
                <div className="bid_description  ">
                    <p>32 inch Hp desktop</p>
                </div>
                <div className="bid_clock_icon">
                    <div>
                        <img src="../images/clock1.png" width={23}/>
                    </div>
                    <div>
                        <p>Ends in 3days,10hrs </p>
                    </div>
                </div>
                <div className="bid_price">
                    <div>
                        <p>Highest Bid Ksh.3000</p>
                    </div>
                    <div>
                        <button>Bid Now</button>
                    </div>
                </div>
            </div>
    </div>

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
                <img src="../images/house.jpg" width={170}/>
            </div>
            <div className="bid_desc_cont bid_third_container">
                <div className="bid_description  ">
                    <p>3 Bedroom houe,+ water and electricity</p>
                </div>
                <div className="bid_clock_icon">
                    <div>
                        <img src="../images/clock1.png" width={23}/>
                    </div>
                    <div>
                        <p>Ends in 3days,10hrs </p>
                    </div>
                </div>
                <div className="bid_price">
                    <div>
                        <p>Highest Bid Ksh.3000</p>
                    </div>
                    <div>
                        <button>Bid Now</button>
                    </div>
                </div>
            </div>
    </div>

    <div className="bidding_container">

        <div className="bid_cont_time bid_sold">
            <div>
                <p>Not For Sale</p>
            </div>
            <div>
                <img src="../images/love.png" width={27}/>
            </div>
            
        </div>
        <div className="bid_image">
                <img src="../images/table2.png" width={170}/>
            </div>
            <div className="bid_desc_cont">
                <div className="bid_description  ">
                    <p>Japaneese Timber Table </p>
                </div>
                <div className="bid_clock_icon">
                    <div>
                        <img src="../images/clock1.png" width={23}/>
                    </div>
                    <div>
                        <p>Ends in 3days,10hrs </p>
                    </div>
                </div>
                <div className="bid_price">
                    <div>
                        <p>Highest Bid Ksh.3000</p>
                    </div>
                    <div>
                        <button>Bid Now</button>
                    </div>
                </div>
            </div>
    </div>
</div>

        </div>

        <Partners/>
        <Footer/>
       </>
    )
}
export default OngoingBid