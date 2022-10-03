import Link from "next/link";
import React from "react";
import Partners from "./partners";

const Hero=()=>{
    return(
        <div className="hero_container">
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
<div className="hero_sinle_item">
    <div>
    <img src="../images/desktop.png" width={150}/>
    </div>
    <div>
        <div>
    <p>Desktop</p>
    </div>
    <div className="hero_bidders_font">
        <p>7 Bidders</p>
    </div>
    <div>
    <Link href="/biddingPage">
        <button>View Bid</button>
        </Link>
    </div>
    </div>
</div>

<div className="hero_sinle_item">
    <div>
    <img src="../images/table1.png" width={150}/>
    </div>
    <div>
        <div>
    <p>Table</p>
    </div>
    <div className="hero_bidders_font">
        <p>10 Bidders</p>
    </div>
    <div>
    <Link href="/biddingPage">
        <button>View Bid</button>
        </Link>
    </div>
    </div>
</div>

<div className="hero_sinle_item">
    <div>
    <img src="../images/newcar.png" width={230}/>
    </div>
    <div>
        <div>
    <p>Vihicle</p>
    </div>
    <div className="hero_bidders_font">
        <p>9 Bidders</p>
    </div>
    <div>
        <Link href="/biddingPage">
        <button>View Bid</button>
        </Link>
    </div>
    </div>
</div>

<div className="hero_sinle_item">
    <div>
    <img src="../images/home.png" width={150}/>
    </div>
    <div>
        <div>
    <p>House</p>
    </div>
    <div className="hero_bidders_font">
        <p>13 Bidders</p>
    </div>
    <div>
    <Link href="/ongoingBid">
        <button>View Bid</button>
        </Link>
    </div>
    </div>
</div>
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



<Partners/>
        </div>
    )
}
export default Hero