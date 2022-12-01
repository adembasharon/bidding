import Link from "next/link";
import React from "react";

const Footer=()=>{
    return(
<div className="footerContainer">
<div className="footerMainContainer">
    <div className="footerContent">
<div className="footerContainer1">
    <div>
 <img src="../images/logo.png" width={80}/>
    </div>
    <div>
        <p>Bidnunua provides you the best auctioneering method. We are highly convinient, Incase of any problem you can consult in the above links.</p>
    </div>
</div>

<div className="footerContainer2">
    <div>
        <h3>Get Help</h3>
    </div>
    <div>
    <Link href="/F.A.Q">
        <p style={{cursor:"pointer"}}>F.A.Q</p>
  </Link>
    </div>
<div>
</div>

<div className="footerContainer2">
<Link href="/termsAndConditions">
  <p style={{cursor:"pointer"}}>Help and Feedback</p>
 </Link>
</div>
</div>

<div>
    <div>
        <h3>Contact Us</h3>
    </div>
<div>
         <p>0731066135  / 0712801538</p>
            </div>

            <div>
        <p>bidders@gmail.com</p>
  </div>

</div>

</div>
</div>
</div>
    )
}
export default Footer