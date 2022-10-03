import React ,{useEffect, useState} from "react";

const PostProduct=()=>{
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
const [imgs , setImgs]=useState([])
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
                  return setFormInput(prev=>({...prev, subimages:[...prev.subimages, data.secure_url]}))
              })
      }
  
  catch (err) {
      console.log(err)
  }
    })
    }
  
    const [category, setCategory] = useState();
    const submitForm = async (e) => {
        e.preventDefault()
        console.log(formInput)
        const url = " http://localhost:5000/api/post/new"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput)
        };
        console.log(formInput)

        return fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.code === 11000) {
                    console.log("post added sucessfully")
                }
                else {
                    console.log(data)
                    return data
                }
            }) 
    }
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
                    return setFormInput({
                        ...formInput, image: data.secure_url
                    })
                })
        }
        catch (err) {
            console.log(err)
        }
    }

  
   const [timer , setTimer]=useState({})

   useEffect(()=>{
    setInterval(()=>{
    

    })
   },1000)
 
   const countDownTime=(e)=>{
    e.preventDefault()
    const startingDate= new Date(formInput.currentdate)
const endingDate=new Date(formInput.endingdate)
const differenceDate=endingDate-startingDate

const days = Math.floor(differenceDate/(1000*60*60*24));
const hours=Math.floor(differenceDate/(1000*60*60));
const minutes=Math.floor(differenceDate/(1000*60));
const seconds=Math.floor(differenceDate/(1000));

console.log(`${days}-${hours}-${minutes}-${seconds}`)
const d = days;
  const h = hours - days * 24;
  const m = minutes - hours * 60;
  const s = seconds - minutes * 60;

    setTimer({
        d,
        h,
        m,
        s
    })

   }

   console.log(timer)


    return(
        <div className="postproduct_main_container">
            <div className="postProduct_background_image">
<form className="postproduct_form_container">
<h1>Post a Product</h1>
 <div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Name</p>
    </div>

    <div className="postproduct_input_label_item">
    <input type="text" placeholder="Name of the product" onChange={e => setFormInput({ ...formInput, name: e.target.value })}/>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Description</p>
    </div>
    <div className="postproduct_input_label_item">
    <textarea  onChange={e => setFormInput({ ...formInput, description: e.target.value })}/>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Cartegory</p>
    </div>
    <div className="postproduct_input_label_item">
    <select className="postproduct_input_label_item" 
     name="category"
     id="category"
     onChange={(e) =>
       setFormInput({ ...formInput, cartegory: e.target.value })
     }
     value={formInput.cartegory}
    >
        <option>Select</option>
        <option>Vehicle</option>
        <option>Clothing</option>
        <option>Land</option>
        <option>Electronic</option>
        <option>Furniture</option>
    </select>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p >Starting Time</p>
        {/* {CountDownTimer} */}
    </div>
    <div>
    <input type="datetime-local"  onChange={(e)=>setFormInput({...formInput,currentdate:e.target.value})}/>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Ending Time</p>
    </div>
    <div className="postproduct_input_label_item">
    <input type="datetime-local"  onChange={(e)=>setFormInput({...formInput,endingdate:e.target.value})} />
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Starting Price</p>
    </div>
    <div className="postproduct_input_label_item">
    <input type="number" placeholder="Starting Price" onChange={e => setFormInput({ ...formInput, startingPrice: e.target.value })}/>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Upload Image</p>
    </div>
    <div className="postproduct_input_label_item">
    <input type="file" placeholder="upload Image"   onChange={(e) => uploadImage(e)} />
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Sub-images </p>
    </div>
    <div className="postproduct_input_label_item">
    <input type="file" onChange={(e)=>imagesUpload(e)} multiple/>
    </div>
</div> 


<div className="postproduct_btn">
    <button  onClick={(e)=>submitForm(e)}>Post</button>
</div>

</form>



                
            </div>
        </div>
    )    
}
export default PostProduct;