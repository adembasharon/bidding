import React from "react"
import Link from "next/link"
const SubNav=()=>{
    return(
        <>
        
        <div className="subnav_container">
<div className="sub_nav_container">
    <Link href="/">
    <div>
        <img src="../images/logo.png" width={90}/>
    </div>
    </Link>
    <div className="subNav_input">
        <div>
            <img src="../images/search.svg" width={15}/>
        </div>
        <div>
        <input type="text" placeholder="Search for a product"/>
        </div>
    </div>
    <div className="subnav_login">
        <div  className="subnav_credentials">
        <div>
           <Link href="/dashboard/login" passHref><p>Login/</p></Link>
            </div>
            <div>
           <Link href="/signup"><p>Register</p></Link>
            </div>
            </div>
            <div>
         <p>Bal:  <span className="subnav_Amount_" style={{color:"green"}}>6,000</span></p>
        </div>
    </div>
</div>
        </div>
        <div className="subNav_list_container">
        <div className="subNav_list_item">
            <div>
                <p>Vihicles</p>
            </div>
            <div>
                <p>Furniture</p>
            </div>
            <div>
                <p>Electronics</p>
            </div>
            <div>
                <p>Properties</p>
            </div>
            <div>
                <p>Land</p>
            </div>
            <div>
                <p>Clothings</p>
            </div>
        </div>
        </div>
        
        
        </>
    )
}
export default SubNav