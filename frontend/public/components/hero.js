import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios"
import Partners from "./partners";
import { BidContext } from "../../state";
import { useRouter } from 'next/router'


const Hero = () => {

    const biddingContext = useContext(BidContext)
    const { posts } = biddingContext;
    const [post, setPost] = posts
    console.log(post)
const {cartegory}=biddingContext;
    const [cartegories, setCartegories] = cartegory;


    try {
        const url = ' https://biddingbackend.onrender.com/api/post/'
        const options = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }

        useEffect(() => {
            axios.get(url, options)
                .then((res) => {
                    setPost(res.data)
                })
                .catch(err => {
                    console.log(err)
                })

        }, [url])
    } catch (err) {
        console.log(err)
    }
    const router=useRouter();

    const getCartegory = (e) => {
        e.preventDefault();
        setCartegories(e.target.innerText)
        router.push("../../filterPage")
      }
      console.log(cartegories)

    return (
        <div className="hero_container" style={{fontFamily: "Josefin Sans, sans-serif "}}>



            <div>

                <div>
                    <div className="hero_heading1">
                        <h2>Popular Cartegories</h2>
                    </div>

                    <div className="hero_items">
                        <div className="hero_sinle_item">
                            <div>
                                <img src="../images/laptop.png" width={150} />
                            </div>
                            <div>
                                <p style={{cursor:"pointer"}} onClick={e => getCartegory(e)}>Electronics</p>
                            </div>
                        </div>

                        <div className="hero_sinle_item">
                            <div>
                                <img src="../images/chair.png" width={150} />
                            </div>
                            <div>
                                <p style={{cursor:"pointer"}} onClick={e => getCartegory(e)}>Furniture</p>
                            </div>
                        </div>

                        <div className="hero_sinle_item">
                            <div>
                                <img src="../images/jacket.png" width={150} />
                            </div>
                            <div>
                                <p style={{cursor:"pointer"}} onClick={e => getCartegory(e)}>Cloths</p>
                            </div>
                        </div>

                        <div className="hero_sinle_item">
                            <div>
                                <img src="../images/vehicle.png" width={150} />
                            </div>
                            <div>
                                <p style={{cursor:"pointer"}} onClick={e => getCartegory(e)}>Vehicle</p>
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
                                    <img src={item.image} width={200} />
                                </div>
                                <div>
                                    <div>
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="hero_bidders_font">
                                        <p>{item.bids.length} bidders</p>
                                    </div>
                                    <div>
                                        <Link href={`/bids/${item._id}`}>
                                            <button>View Product</button>
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
                                <img src="../images/clock.png" width={200} />
                            </div>
                        </div>
                        <div>
                            <div>

                                <img src="../images/lock.png" width={200} />
                            </div>


                        </div>
                        <div>
                            <div>

                                <img src="../images/sure.png" width={200} />
                            </div>


                        </div>

                    </div>

                </div>

            </div>
            <Partners />
        </div>
    )
}
export default Hero