import React from "react";
const FilteredItem=()=>{
    const biddingContext = useContext(BidContext)
    const { posts } = biddingContext
    const [post, setPost] = posts
    console.log(post)

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
        <div>
 <div className="hero_Biding">
                        {post.map(item => (
                            <div className="hero_sinle_item">
                                <div>
                                    <img src={item.image} width={200} />
                                </div>
                                <div>
                                    <img src={item.name} width={200} />
                                </div>
                                <div>
                                    <img src={item.description} width={200} />
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
                                            <button>View Bid</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
        </div>
    )
}
export default FilteredItem