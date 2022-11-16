import Link from "next/link";
import React ,{useState,useContext,useEffect}from "react";
import { BidContext } from "../../state"
import Router, { useRouter } from "next/router";
import axios from "axios"
import Nav from "../../public/components/nav";
import SubNav from "../../public/components/subnav";
import Footer from "../../public/components/footer";


const Dashboard=()=>{

    const [reload,setReload]=useState()
    const biddingContext = useContext(BidContext);
    const { posts } = biddingContext;
    const [post, setPost] = posts;
    const [currentUser,setCurrentUser]=useState([])
    const [user,setUser]=useState()

    const [formInput, setFormInput] = useState({
        image: "",
        name: "",
        description: "",
        cartegory: "",
        subimages: [],
        endingdate:"",
        currentdate:"",
        startingPrice:""
    })


    const router = useRouter();
    // useEffect(() => {

    //     const user = localStorage.getItem("loggedInUser")

    //     setCurrentUser(JSON.parse(user))

    //     if (JSON.parse(user)[0] ) {
    //         router.push("/admin/dashboard")
    //     } else {
    //         router.push("/admin/login")

    //     }

    //     console.log(user)
    // }, [])
// .catch((err)=>{
//     console.log(err)
// })

    const url = 'https://biddingbackend.onrender.com/api/post/'
    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => axios.get(url)
        .then((res) => {
            setPost(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

    useEffect(() => {
        localStorage.setItem("post", JSON.stringify(post))
    }, [post])

    const detail = async (id) => {
        try{
        const data = JSON.parse(localStorage.getItem("post"));
        const dataId = data.indexOf(data.find(item => item._id === id))
        data.splice(dataId, 1);
        setPost([...data]);
        localStorage.setItem("post", JSON.stringify(post))

        const deletedItem = await fetch(`https://biddingbackend.onrender.com/api/post/${id}`, {
            method: "DELETE",
            headers: {
                "token": `Bearer ${currentUser[0].accessToken}`
            }
        })
     
        console.log(await deletedItem.json())
        console.log(currentUser[0].accessToken)
    }catch(err){
            console.log(err)
        }
    }


    const logout = () => {
        localStorage.removeItem("user", JSON.stringify(user))
        setUser(false)
        router.push("/")
    }

  
    
    return (
        <div>
            <Nav/>
            <SubNav/>
            <div className="dashboard_firstButton">
             <div>
                    <Link href="/admin/postProduct">
                    <button>Add New Bid</button>
                    </Link>
                </div>
              
               <div>
                <button onClick={logout}>Logout</button>
               </div>
               </div>
<div className="dashboard_container">
            {post!==undefined && post.map(item=>{
            return <div  key={item._id}>
                
               

               
                <div>
                <img src={item.image} width={200} />
                </div>
                <div>
                {
                    item.subimages.map(src=>{
return <img  src={src}  width={30} />
                    })
                }
                </div>
                <div className="dashboard_items">
                <p>Name:<span>{item.name}</span></p>
                <p>Description:<span style={{width:"10%"}}>{item.description}</span></p>
                <p>Cartegory:<span>{item.cartegory}</span></p>
                <p>Starting Date:<span>{item.currentdate}</span></p>
                <p>Ending Date:<span>{item.endingdate}</span></p>
                <p >Starting Price:<span>{item.startingPrice}</span></p>
                </div>
             
                <div className="dashboard_clickButton" >
                    <div>
                        <button onClick={() => detail(item._id)} style={{backgroundColor:"red"}}>Delete</button>
                    </div>
                    <div>
                        <Link href={`/edit/${item._id}`}>
                        <button>Edit</button>
                        </Link>
                        </div>
                </div>


            </div>
})}
</div>
<Footer/>
        </div>
    )
}
export default Dashboard
