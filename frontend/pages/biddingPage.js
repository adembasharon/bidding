import React from "react";
const BiddingPage = () => {
  return (
    <div className="biddingpage_main_container">
      <div>
        <div className="biddingPage_time_container1">
          <div>
            <img src="../images/watched.svg" width={25} />
          </div>
          <div className="biddingPage_time_container">
            <div className="biddingPage_time">
              <div>
                <p style={{ color: "red" }}>10</p>
              </div>
              <div>
                <p>Days</p>
              </div>
            </div>
            <div className="biddingPage_time">
              <div>
                <p style={{ color: "red" }}>13</p>
              </div>
              <div>
                <p>Hrs</p>
              </div>
            </div>

            <div className="biddingPage_time">
              <div>
                <p style={{ color: "red" }}>14</p>
              </div>
              <div>
                <p>Mins</p>
              </div>
            </div>
          </div>
        </div>

        <div className="biddingpage_container">
          <div className="biddingpage_first_container">
            <div>
              <img src="../images/car.png" width={330} />
            </div>
            <div>
              <img src="../images/car.png" width={30} />
            </div>
          </div>

          <div className="biddingpage_price_of_items_container biddingpage_second_container">
            <h2>V8 Lambogini</h2>
            <div className="biddingpage_price_of_items">
              <div>
                <p>Starting Bid</p>
              </div>
              <div style={{ color: "green" }}>
                <p>Ksh.300,000</p>
              </div>
            </div>
            <div className="biddingpage_price_of_items_button_container">
              <div>
                <button>Ksh.24500</button>
              </div>
              <div>
                <div>
                  <img src="../images/plus.svg" width={15} />
                </div>
                <div>
                  <img src="../images/remove.png" width={15} />
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
<div>
    <h3>Type of Vehicle</h3>
    <p>Model 234</p>
    <p>Make ford</p>
    <p>Year 2000</p>
    <p>Type of fuel Regular</p>
</div>
<div>
    <h3>Type of Vehicle</h3>
    <p>Model 234</p>
    <p>Make ford</p>
    <p>Year 2000</p>
    <p>Type of fuel Regular</p>
</div>
<div>
    <h3>Type of Vehicle</h3>
    <p>Model 234</p>
    <p>Make ford</p>
    <p>Year 2000</p>
    <p>Type of fuel Regular</p>
</div>

      </div>
    </div>
  );
};
export default BiddingPage;
