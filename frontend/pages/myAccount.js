import React from "react";
import Footer from "../public/components/footer";
import Nav from "../public/components/nav";
import Partners from "../public/components/partners";
import SubNav from "../public/components/subnav";
const MyAcount=()=>{
    return(
        <>
        <Nav/>
        <SubNav/>
                <div className="myaccount_main_container">
            <div className="myaccount_container">
            <div className="myaccount_bids_posts">
                <div className="myaccount_bid_cont1">
                    <p>My Bids</p>
                </div>
                <div className="myaccount_post_cont1">
                    <p>My Posts</p>
                </div>
                </div>
                <div className="myaccount_bal_container">
                <div>
                        <button>Go to Dashboard</button>
                    </div>
                    <div>
                        <button>Add Balance</button>
                    </div>
                    <div>
                        <p>My Balance, Ksh 60,000</p>
                    </div>
                    <div>
                        <button>Withdraw</button>
                    </div>
                </div>
            </div>

            <div className="myaccount_bid_items">
                <div>
                    <img src="../images/desktop.png" width={100}/>
                </div>
                <div>
                    <p>Desktop</p>
                </div>
                <div>
                    <p style={{color:"white",background:"green",padding:".3em 1em"}}>Ongoing</p>
                    <div>
                    <p>Ksh.30,000</p>
                    </div>
                </div>
            </div>

            <div className="myaccount_bid_items">
                <div>
                    <img src="../images/table1.png" width={100}/>
                </div>
                <div>
                    <p>Table</p>
                </div>
                <div>
                    <p style={{color:"black",background:"yellow",padding:".3em 1em"}}>Ongoing</p>
                    <div>
                    <p>Ksh.60,000</p>
                    </div>
                </div>
            </div>

            <div className="myaccount_bid_items">
                <div>
                    <img src="../images/newcar.png" width={100}/>
                </div>
                <div>
                    <p>Lambogini</p>
                </div>
                <div>
                    <p style={{color:"white",background:"green",padding:".3em 1em"}}>Ongoing</p>
                    <div>
                    <p>Ksh.30,000</p>
                    </div>
                </div>
            </div>

            <div className="myaccount_bid_items">
                <div>
                    <img src="../images/home.png" width={100}/>
                </div>
                <div>
                    <p>House</p>
                </div>
                <div>
                    <p style={{color:"black",background:"yellow",padding:".3em 1em"}}>Ongoing</p>
                    <div>
                    <p>Ksh.60,000</p>
                    </div>
                </div>
            </div>

        </div>
        <Partners/>
        <Footer/>
        </>

    )
}
export default MyAcount