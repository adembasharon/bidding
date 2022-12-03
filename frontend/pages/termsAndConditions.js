import React from "react";
import Footer from "../public/components/footer";
import Nav from "../public/components/nav";
import Partners from "../public/components/partners";
import SubNav from "../public/components/subnav";

const Terms_And_Condition=()=>{
    return(
        <div style={{fontFamily: "Josefin Sans, sans-serif "}}>   
        <Nav/>
        <SubNav/>
             <div className="Terms_main_cont">
                <div>
<h4>Public Auction: Simply Auction, is the process by which two or more individuals compete to purchase an item.</h4>
<p>A person who bids the highest is at the end of the bidding declared the purchaser.
You are All Welcome to Bidnunua to enjoy the power and the fun of a Public Auction. Where the sellers and the buyers of the lots on Auction will be in the same space.
</p>
<p>To bid ,one will be required to register and upon registration a free catalogue will be availed to those who will have made a refundable deposit in the event you are not declared the Highest Bidder on any attempt at bidding.</p>
        </div>

        <div>
            <h4>Incase of any inconviniency please Contact Us:</h4>
            <p>Office: 020 375 426</p>
            <p>Tel: 0731 066 135</p>
            <p>Email: bidnunua@gmail.com</p>

        </div>
        </div>
        <Partners/>
        <Footer/>
        </div>
        

    )
}
export default Terms_And_Condition