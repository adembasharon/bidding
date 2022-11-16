import React ,{useContext,useState,useEffect}from "react";
import { BidContext } from "../../state"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Footer from "../../public/components/footer";
import Nav from "../../public/components/nav";
import SubNav from "../../public/components/subnav";


const Edit =()=>{
    const biddingContext = useContext(BidContext);
    const { posts,editPost } = biddingContext;
    const [post, setPost] = posts;
    const [currentPost,setCurrentPost]=editPost;
    const [updatedPost,setUpdatedPost]=useState("")
    const [message,setMessage]=useState("")
    const [currentUser,setCurrentUser]=useState([])
    const [user,setUser]=useState()

    const router = useRouter();
    const bid = router.query.edit;

    useEffect(()=>{
        const url=  "https://biddingbackend.onrender.com/api/post/"
        const options={

            headers: {
                'Content-type': 'application/json',
            },
        }
        axios.get(url,options)
        .then(res=>setPost(res.data))
        
        

    },[])

    useEffect(()=>{
post.filter(item=>{
    item.id == bid && setCurrentPost(item)
    setUpdatedPost({...currentPost})


})
    },[post])

    useEffect(()=>{
        setFormInput({
            name: currentPost.name,
            image:currentPost.image,
            description:currentPost.description,
            cartegory:currentPost.cartegory,
            subimages:currentPost.subimages,
            currentdate:currentPost.currentdate,
            endingdate:currentPost.endingdate,
            startingPrice:currentPost.startingPrice
        
        })
    },[currentPost])
  
    const [formInput, setFormInput] = useState({
        image: "",
        description: "",
        cartegory: "",
        name:"",
        subimages:[],
        currentdate:"",
        endingdate: "",
        startingPrice: "",

    })
    

    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        console.log(files)

        for (let file of files) {
            data.append("file", file)
            data.append("upload_preset", "bidding")
        }

        try {
            await fetch(" https://api.cloudinary.com/v1_1/dkpvcnel8/image/upload", {
                method: "POST",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    console.log(data.secure_url)
                    return setUpdatedPost({
                        ...formInput, image: data.secure_url
                    })
                })
        }
        catch (err) {
            console.log(err)
        }
    }


    const imagesUpload = async (e) => {
        const filesArr = Array.from(e.target.files);
    
        const data = new FormData();
        filesArr.map(async file=>{        
          try {
            data.append("file", file)
            console.log(data)
            
          data.append("upload_preset", "bidding")
            await fetch("https://api.cloudinary.com/v1_1/dkpvcnel8/image/upload", {
                  method: "POST",
                  body: data,
              })
                  .then((res) => res.json())
                  .then((data) => {
                      console.log(data)
                      console.log(data.secure_url)
                      return setUpdatedPost(prev=>({...prev, subimages:[...prev.subimages, data.secure_url]}))
                  })
          }
      
      catch (err) {
          console.log(err)
      }
        })
        }
        useEffect(() => {        
            const user = localStorage.getItem("loggedInUser");
            setCurrentUser(JSON.parse(user))   
        }, [])
    
        const handleUpdate = async (currentId) =>{
            if(currentPost.name !== updatedPost.name || currentPost.cartegory !== updatedPost.cartegory || currentPost.description !== updatedPost.description || currentPost.image !== updatedPost.image || currentPost.subimages !== updatedPost.subimages|| currentPost.currentdate!== updatedPost.currentdate||currentPost.endingdate!==updatedPost.endingdate||currentPost.startingPrice!==updatedPost.startingPrice){
                
                const updatePosts = await fetch(`https://biddingbackend.onrender.com/api/post/${currentId}`, {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json',
                        "token": `Bearer ${currentUser[0].accessToken}`
                    },
                    body: JSON.stringify(updatedPost)
                })
        
                await updatePosts.json()   
                console.log(updatedPost)  

                    setMessage("Update is Successful")
                
            }else{
               setMessage("No updates made")
            }
         
    }
    const url = 'https://biddingbackend.onrender.com/api/post/'
    const options={
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }

    useEffect(() => {
        axios.get(url,options)
            .then((res) => {
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    }, [url])


return(
    <>
    <Nav/>
    <SubNav/>
        <div className="edit_container">
                         {
    post.map(currentPost=>{
        if(currentPost._id == bid){
        return(
            <div>
                  <div style={{color:"green",marginTop:".3em",marginBottom:".34em"}}>
                {message}
            </div>
             <div>
             <input type="file"   onChange={(e) => uploadImage(e)} />
             <div>
                <img src={updatedPost.image ? updatedPost.image : currentPost.image} width={100}/>
             </div>
                         </div>
                         <div>
                         <input type="file"  onChange={(e) => imagesUpload(e)} multiple />
                         <div>

                         {
                            currentPost &&
                    currentPost.subimages.map(src=>{
return <img  src={src} width={30} />
                    })
                }
                         </div>
                         </div>

             <div>
                <input type="text" defaultValue={ currentPost.name}  onChange={e => setUpdatedPost({ ...updatedPost, name: e.target.value })} />
            </div>

            <div>
                <input type="text" defaultValue={ currentPost.cartegory}   onChange={e => setUpdatedPost({ ...updatedPost, cartegory: e.target.value })} />
            </div>

            <div>
                <input type="text" defaultValue={ currentPost.description}   onChange={e => setUpdatedPost({ ...updatedPost, description: e.target.value })} />
            </div>
            <div>
                <input type="datetime-local" defaultValue={ currentPost.currentdate}   onChange={e => setUpdatedPost({ ...updatedPost, currentdate: e.target.value })} />
            </div>
            <div>
                <input type="datetime-local" defaultValue={ currentPost.endingdate}  onChange={e => setUpdatedPost({ ...updatedPost, endingdate: e.target.value })} />
            </div>
            <div>
                <input type="number" defaultValue={ currentPost.startingPrice}   onChange={e => setUpdatedPost({ ...updatedPost, startingPrice: e.target.value })} />
            </div>
            <div className="edit_btn">
            <div>
                    <button onClick={()=>handleUpdate(currentPost._id)}>Update Post</button>
                </div>
                <div>
                <Link href="/admin/dashboard">
                        <button>Go To Dashboard</button>
                    </Link>
                    </div>
                    </div>
                    </div>
        )
        }

})}
        </div>
        <Footer/>
        </>
    )
    
}

export default Edit