import React, { useContext, useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { BidContext } from "../../state";
import SubNav from "../../public/components/subnav";
import Nav from "../../public/components/nav";
import Partners from "../../public/components/partners";
import Footer from "../../public/components/footer";
import axios from "axios";
// import { IndeterminateCheckBox } from "@mui/icons-material";
// import { async } from "@firebase/util";

const Post = () => {
  const [reload, setReload] = useState();
  const biddingContext = useContext(BidContext);
  const { posts } = biddingContext;
  const [post, setPost] = posts;
  const [timer, setTimer] = useState({});
  const [message, setMessage] = useState("");
  const [user, setUser] = useState();
  const [amountInput, setAmountInput] = useState(null);
  const [singlePost, setSinglePost] = useState(null);
  useEffect(() => {
    post &&
      post.map((item) => {
        if (item._id == bid) {
          console.log(item._id);
          setSinglePost(item);
          setInterval(() => {
            const startingDate = new Date(item.currentdate);
            const endingDate = new Date(item.endingdate);
            const difference = endingDate - startingDate;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 / 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            setTimer({ days, hours, minutes, seconds });
          }, 1000);
        }
      });
  }, [post]);

  useEffect(() => {
    try {
      const url = "https://biddingbackend.onrender.com/api/post/";
      const options = {
        headers: {
          "Content-type": "application/json",
        },
      };
      axios.get(url, options).then((res) => setPost(res.data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const countDownTime = () => {
    {
      post.map((item) => {
        if (item._id == id) {
          return item;
        }
      });
    }
  };

  const router = useRouter();
  const { bid } = router.query;

  const [number, setNumber] = useState(1);
  const increase = () => {
    if (number < 5) {
      setNumber((previousNum) => previousNum + 1);
    }
  };
  const decrease = () => {
    if (number > 1) {
      setNumber((previousNum) => previousNum - 1);
    }
  };

  const bidIdRouter = useRouter();
  const AmounToBid = async (e) => {
    try {
      const user = localStorage.getItem("loggedInUser");

      if (!user) {
        router.push("/admin/login");
      } else {
        const user = localStorage.getItem("loggedInUser");
        const jsonUser = JSON.parse(user);
        const date = new Date();
        const id = bidIdRouter.query.bid;
        const bid = {
          username: jsonUser,
          amount: amountInput,
          date: date,
        };
        //         const amount=amountInput.sort()
        console.log(bid.amount);
        setMessage(`Your bid of ${bid.amount} has been placed`);
        singlePost &&
          setSinglePost((prev) => ({ ...prev, bids: [...prev.bids, bid] }));
        // console.log(singlePost && singlePost)

        const data = await fetch(
          `https://biddingbackend.onrender.com/api/post/${id}`,
          {
            method: "PATCH",
            body: JSON.stringify(singlePost),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const dataJson = await data.json();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleHighestBid = () => {
    const amountHolder = [];
    singlePost &&
      singlePost.bids.map((bid) => {
        amountHolder.push(bid["amount"]);
      });

    amountHolder.sort((a, b) => {
      return b - a;
    });

    return amountHolder[0];
  };

  return (
    <div>
      <Nav />
      <SubNav />
      {post.map((item) => {
        if (item._id == bid) {
          return (
            <div>
              <div className="biddingpage_main_container">
                <div className="biddingpage_main_container">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "1em",
                      }}
                      clmyPostassName="biddingPage_time_container1"
                    >
                      <div>
                        <img src="../images/watched.svg" width={25} />
                      </div>

                      <div>
                        {new Date(item.endingdate) -
                          new Date(item.currentdate) <=
                        0 ? (
                          "This bid has ended"
                        ) : (
                          <div className="biddingPage_time_container">
                            <div className="biddingPage_time">
                              <div>
                                <p style={{ color: "red" }}>{timer.days} </p>
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
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="biddingpage_container">
                    <div className="singleBiddingItem">
                      <div className="biddingpage_first_container">
                        <div className="imgBid">
                          <img src={item.image} width={330} />
                        </div>
                        <div className="singlePost">
                          {item.subimages.map((src) => {
                            return <img src={src} width={30} />;
                          })}
                        </div>
                      </div>

                      <div
                        style={{ marginLeft: "7em" }}
                        className="biddingpage_price_of_items_container biddingpage_second_container"
                      >
                        <h2> {item.name}</h2>
                        <div className="biddingpage_price_of_items">
                          <div>
                            <p>Starting Bid</p>
                          </div>
                          <div style={{ color: "green" }}>
                            <p>{item.startingPrice}</p>
                          </div>
                        </div>
                        <div>
                          <p>
                            Current highest bid is{" "}
                            <span style={{ color: "green" }}>
                              {handleHighestBid()}
                            </span>
                          </p>
                        </div>
                        <div className="biddingpage_price_of_items_button_container">
                          <div className="inputbtn">
                            <input
                              type="number"
                              placeholder="Enter Amount"
                              onChange={(e) => setAmountInput(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <p style={{ color: "green" }}>{message}</p>

                          <div className="biddingpage_price_of_items_button_container_bid_now">
                            <button onClick={(e) => AmounToBid(e)}>
                              Bid Now
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="bidingpage_propery_heading">
                            <h2>Description</h2>
                            <p>{item.description}</p>
                          </div>
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
                </div>

                {/* <div className="biddingpage_vehicle_properties">
                  <div style={{ width: "30%" }}>
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
                </div> */}
              </div>
            </div>
          );
        }
      })}
      <Partners />
      <Footer />
    </div>
  );
};
export default Post;
