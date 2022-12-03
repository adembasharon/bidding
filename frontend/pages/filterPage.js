import React ,{useContext,useState,useEffect}from "react";
import { BidContext } from "../state";
import Link from "next/link";
import axios from "axios";
import SubNav from "../public/components/subnav";
import Nav from "../public/components/nav";
import Footer from "../public/components/footer";
const FilteredItem=()=>{
    const biddingContext = useContext(BidContext)
    const { posts } = biddingContext
    const [post, setPost] = posts;
    const {cartegory}=biddingContext;
    const [cartegories,setCartegories]=cartegory;
    
     const [formInput, setFormInput] = useState({
        image: "",
        name: "",
        description: "",
        cartegory: "",
        subimages: [],
        endingdate: "",
        currentdate: "",
        startingPrice: "",
        user:""
      });

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

    return(
        <div style={{fontFamily: "Josefin Sans, sans-serif "}}>
            <Nav/>
            <SubNav/>
 <div className="hero_Biding">
                        {post.map(item => {
                            if(cartegories===""){
                                // console.log(item)
                                return(
                                    <div className="hero_sinle_item">
                                    <div>
                                        <img src={item.image} width={200} />
                                    </div>
                                    <div>
                                        <p>{item.name}  </p>
                                        <p>{item.cartegory}  </p>
                                    </div>
                                   
                                    <div>
                                       
                                        <div className="hero_bidders_font">
                                            <p>{item.bids.length} bidders</p>
                                        </div>
                                        <div>
                                            <Link href={`/bids/${item._id}`}>
                                                <button>View Bid</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                ) 
                            }
                            else if(item.cartegory===cartegories){
                            return(
                            <div className="hero_sinle_item">
                                <div>
                                    <img src={item.image} width={200} />
                                </div>
                                <div>
                                    <p>{item.name}  </p>
                                    <p>{item.cartegory}  </p>
                                </div>
                               
                                <div>
                                   
                                    <div className="hero_bidders_font">
                                        <p>{item.bids.length} bidders</p>
                                    </div>
                                    <div>
                                        <Link href={`/bids/${item._id}`}>
                                            <button>View Bid</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}})}
                    </div>
                    <Footer/>
        </div>
    )
}
export default FilteredItem