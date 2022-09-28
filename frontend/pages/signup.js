import React,{useState,useEffect} from "react";
import Footer from "../public/components/footer";
import Nav from "../public/components/nav";
import SubNav from "../public/components/subnav";
const Signup=()=>{

    const [details, setDetails] = useState({
        email: "",
        password: "",
        username: "",

    })
    const [message, setMessage] = useState("")
const [validationMessage,setValidationMessage]=useEffect({
    username:false,
    password:false,
    email:false
})

    const handleChange = (e) => {
        e.preventDefault()

if(

)

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details)
        }

        fetch("http://localhost:5000/api/auth/register", options)
            .then(res => res.json())
            .then(data => {
                if (data.code === 11000) {
                    return setMessage("User already registered")
                } else {
setMessage("succesfully registerd you can now login")
                    return data
                }
            })
.catch(error=>{
    console.log(error)
})
        console.log(details)

       
    }
    useEffect(() => {
        localStorage.setItem("details", JSON.stringify(details))
    }, [details])

    return(

<>
<Nav/>
<SubNav/>
        <div className="signup_main_container">
<div className="signup_container">

<div className="signup_first_container">
<div className="signup_bid_icon">
    <div>
    <h1>Signup</h1>
    <p>{message}</p>
    </div>
    
        <div>
            <img src="../images/logo.png" width={150}/>
        </div>
        <div>
            <p>BidNunua</p>
        </div>
    </div>
<div className="signup_inputs">
<div>
    <input type="text" placeholder="Email" onChange={(e) => setDetails({ ...details, email: e.target.value })}/>
</div>
<div>
    <input type="text" placeholder="Password" onChange={(e) => setDetails({ ...details, password: e.target.value })}/>
</div>

 <div>
    <input type="text" placeholder="Confirm Password" onChange={(e) => setDetails({ ...details, password: e.target.value })}/>
</div> 
<div>
    <input type="text" placeholder="Username" onChange={(e) => setDetails({ ...details, username: e.target.value })}/>
</div> 
</div>
<button onClick={handleChange}>Signup</button>
</div>

<div className="signup_background_image signup_second_container">
   <img src="../images/login.png" width={350}/>
</div>

</div>
        </div>
        <Footer/>
        </>
    )
}
export default Signup