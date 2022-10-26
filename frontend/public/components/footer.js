import Link from "next/link";
import React from "react";

const Footer=()=>{
    return(
        <div className="footer_main_container">
            <div className="footer_Container">
<div>
    <img src="../images/logo.png" width={80}/>
</div>
<div className="footer_help_links">
    <div>
    <h3>Need help?</h3>
    </div>
    <div>
        <Link href="/F.A.Q">
        <p style={{cursor:"pointer"}}>FAQ</p>
        </Link>
    </div>

    <div>
        <Link href="/termsAndConditions">
        <p style={{cursor:"pointer"}}>Help and Feedback</p>
        </Link>
    </div>
</div>

<div className="footer_contact">
    <div>
        <h3>Contact Us</h3>
    </div>
    <div>
        <p>0731066135  / 0712801538</p>
    </div>
    <div>
        <p>bidders@gmail.com</p>
    </div>
    <div>
        <p>Nairobi,Kenya</p>
    </div>
</div>


            </div>
        </div>
    )
}
export default Footer