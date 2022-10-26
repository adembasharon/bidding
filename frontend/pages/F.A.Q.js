import React from "react";
import Nav from "../public/components/nav";
import SubNav from "../public/components/subnav";
import Footer from "../public/components/footer";
import Partners from "../public/components/partners";


const FAQ=()=>{
    return(
        <>
        <Nav />
        <SubNav/>
        <div className="faq_main_items">
        <div>
            <h4>What is Bidnunua Auction?</h4>
            <p>

Bidnunua Auction is an online platform where sellers can post for items and buyers can bid for the items and the highest bidder wins the bid. We are not auction firm neither are we selling items for non-defaulters.
</p>
        </div>
        <div>
<h4>How does this platform work?</h4>
<p>
Our platforms gives the seller a chance to post for items and the buyer can either bid or trade-in, for the items.
</p>
        </div>
        <div>
            <h4>How Does the Process work ?</h4>
            <p>

Once the seller has posted his items the buyer has to try to give a better offer that the proposed offer of the seller and the one with the highest offer wins the bids.
</p>
        </div>
        <div>
            <h4>What is an Escrow system ?</h4>
            <p>An escrow is a financial arrangement where a third party holds and regulates payments of funds required for two parties, ( buyer & seller ) involved in a given transaction. An escrow transaction can be safely carried out without loosing any money or items sold due to fraud. In this case Bidnunua Auctions acts as the third party and once the seller and buyer agree the buyer send money to our system them once the items has been delivered we release the money to the seller</p>
        </div>
        <div>
            <h4>Who can I participate at Bidnunua Auction?</h4>
            <p>
Anyone who has an item to sell can participate on our platform.
</p>
        </div>
        <div>
            <h4>What is the proces of posting a bid ?</h4>
            <p>One must first create an account in the platform and then login and his/her account is cxreated automatically , thereafter he can bid or post a bid.  </p>
        </div>

        <div>
            <h4>How will I know if i'm the highest bidder?</h4>
            <p>You will get message informing you that you are the highest bidder.</p>
            </div>

        <div>
            <h4>How will I get the property if i'm the highest bidder ?</h4>
            <p>You will receive message if you are the highest bidder that contains the details of the owner of the property there after you can call for transportation or go for the item yourself. </p>
        </div>
        </div>
        <Partners/>
<Footer/>      
        </>
    )
}
export default FAQ