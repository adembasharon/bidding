import React from "react";
import Footer from "../public/components/footer";
import Nav from "../public/components/nav";
import Partners from "../public/components/partners";
import SubNav from "../public/components/subnav";

const OngoingBid=()=>{



    
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