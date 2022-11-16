import axios from "axios";
import React from "react"

const Allbidders=()=>{
    const [user, setUser] = useState({
        username: "",
    })
    const [amountInput,setAmountInput]=useState({
        amount:""
      })
    const [formInput, setFormInput] = useState({
        image: "",
        name: "",
        description: "",
        cartegory: "",
        subimages: [],
        endingdate: "",
        currentdate: "",
        startingPrice: "",
        bids:[]
      });


      const dataArray=()=>{
        const url = " https://biddingbackend.onrender.com/api/post/new";
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formInput),
        };
        axios.get(url,options)
        .then((res)=>res.json())
      }

    return(
        <div>
<h2>All Bidders</h2>

        </div>
    )
}
export default Allbidders