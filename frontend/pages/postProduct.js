import React from "react";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


const PostProduct=()=>{
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
    <input type="text" placeholder="Name of the product"/>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Description</p>
    </div>
    <div className="postproduct_input_label_item">
    <input type="text" placeholder="Short Description of the product"/>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Cartegory</p>
    </div>
    <div className="postproduct_input_label_item">
    <select className="postproduct_input_label_item">
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
        <p>Starting Time</p>
    </div>
    <div>
    <input type="time" placeholder="1250hrs"/>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Ending Time</p>
    </div>
    <div className="postproduct_input_label_item">
    <input type="time" placeholder="1300hrs"/>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Propeties</p>
    </div>
    <div className="postproduct_input_label_item">
    <input type="text" placeholder="Properties of the product"/>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Upload Image</p>
    </div>
    <div className="postproduct_input_label_item">
    <input type="image" placeholder="upload Image"/>
    </div>
</div>

<div className="postproduct_input">
    <div className="postproduct_input_label">
        <p>Sub-images </p>
    </div>
    <div className="postproduct_input_label_item">
    <input type="images" placeholder="different parts of the images"/>
    </div>
</div> 
{/* 
<Box
          sx={{
            display: 'flex',
            flexDirection:"column",
            width:"100%",
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
                    id="demo-helper-text-misaligned"
            label="Product Name"
            
          />
          <TextField id="demo-helper-text-misaligned-no-helper" label="Description" />
          <TextField id="demo-helper-text-misaligned-no-helper"
           label=""
           type="time"
           helperText="Please enter starting time"
           />
            <TextField id="demo-helper-text-misaligned-no-helper"
           label=""
           type="time"
           helperText="Please enter ending time"
           />
        </Box> */}

<div className="postproduct_btn">
    <button>Post</button>
</div>

</form>



                
            </div>
        </div>
    )    
}
export default PostProduct