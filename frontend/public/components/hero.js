import Link from "next/link";
import React, { useState,useEffect, useContext } from "react";
import axios from "axios"
import Partners from "./partners";
import { BidContext } from "../../state";

const Hero=()=>{

    const biddingContext = useContext(BidContext)
    const {posts} = biddingContext
    const [post, setPost] = posts
    console.log(post)

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


    return(
        <div className="hero_container">



            <div>
            
            <div>
<div className="hero_heading1">
    <h2>Popular Cartegories</h2>
</div>

<div className="hero_items">
<div className="hero_sinle_item">
    <div>
        <img src="../images/laptop.png" width={150}/>
    </div>
    <div>
        <p>Electronics</p>
    </div>
</div>

<div className="hero_sinle_item">
    <div>
        <img src="../images/chair.png" width={150}/>
    </div>
    <div>
        <p>Furniture</p>
    </div>
</div>

<div className="hero_sinle_item">
    <div>
        <img src="../images/jacket.png" width={150}/>
    </div>
    <div>
        <p>Cloths</p>
    </div>
</div>

<div className="hero_sinle_item">
    <div>
        <img src="../images/vehicle.png" width={150}/>
    </div>
    <div>
        <p>Vehicle</p>
    </div>
</div>


</div>

    </div>

            <div>
<div className="hero_bid_heading">
    <h2>Ongoing Bids</h2>
</div>
<div className="hero_Biding">
{post.map(item => (
<div className="hero_sinle_item">
    <div>
    <img src={item.image} width={200}/>
    </div>
    <div>
        <div>
    <p>{item.name}</p>
    </div>
    <div className="hero_bidders_font">
        <p>7 Bidders</p>
    </div>
    <div>
    <Link href={`/bids/${item._id}`}>
        <button>View Bid</button>
        </Link>
    </div>
    </div>
</div>
 ))} 
             </div>
             </div>
 <div className="hero_service_container">
    <h2>Objectives</h2>
<div className="hero_service_icon">
    <div>
    <div>
        <img src="../images/clock.png" width={200}/>
        </div>
            </div>
    <div>
        <div>

        <img src="../images/lock.png" width={200}/>
            </div>
   

    </div>
    <div>
        <div>

        <img src="../images/sure.png" width={200}/>
            </div>
    

    </div>

</div>

</div>

</div> 
<Partners/>
        </div>
    )
}
export default Hero