import React from "react";
import Link from "next/link";
const Main = () => {
  return (
    <div className="main_container" style={{fontFamily: "Josefin Sans, sans-serif "}}>
     
      <div className="main_haeding">
        <div>
        <h1>
          Kenya's <span className="main_span">No.1</span> Online <br /> Auction
          Marketplace
        </h1>
        </div>
        <div className="main_button">
        <div className="main_btn1">
          <Link href="/F.A.Q">
          <button>Learn More</button>
          </Link>
        </div>
        <Link href="/ongoingBid">
        <div className="main_btn2">
          <button>View Auctions</button>
        </div>
        </Link>
      </div>
      </div>
     
    </div>
  );
};

export default Main;
