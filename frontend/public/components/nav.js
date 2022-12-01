import Link from "next/link"
import React from "react"

const Nav=()=>{
    return(
        <div className="nav_container">
          <div className="nav_Main_Container">
            <div className="nav_social_icons">
                <div style={{color:"white"}}>
                    <p>Find Us On:</p>
                </div>
                <div className="nav_icon" style={{cursor:"pointer"}}>
                    <Link href="https://twitter.com/Arona_crev">
                    <img src="../images/twitter.svg" width={13}/>
                    </Link>
                </div>
                <div style={{cursor:"pointer"}}>
                    <Link href="">
                    <img src="../images/insta.png" width={13}/>
                    </Link>
                </div>
                <div style={{cursor:"pointer"}}>
                    <Link href="https://web.facebook.com/profile.php?id=100078940822960">
                    <img src="../images/facebook.svg" width={7}/>
                    </Link>
                </div>
            </div>

            <div className="nav_Accounts">
            <Link href="/myAccount">
                <div className="nav_Account_icons">
                    <div>
                        <img src="../images/account.svg" width={12}/>
                    </div>
                    <div style={{cursor:"pointer",color:"white"}}>
                        <Link href="/admin/dashboard">
                       <p>My Account</p>
                       </Link>
                    </div>
                </div>
                    </Link>

                <div className="nav_Account_icons">
                    <div>
                        <img src="../images/wish.svg" width={12}/>
                    </div>
                    <div style={{color:"white"}}>
                       <p>Wishlist</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
export default Nav