import Link from "next/link"
import React from "react"

const Nav=()=>{
    return(
        <div className="nav_container">
          <div className="nav_Main_Container">
            <div className="nav_social_icons">
                <div>
                    <p>Find Us On:</p>
                </div>
                <div className="nav_icon">
                    <img src="../images/twitter.svg" width={13}/>
                </div>
                <div>
                    <img src="../images/insta.png" width={13}/>
                </div>
                <div>
                    <img src="../images/facebook.svg" width={7}/>
                </div>
            </div>

            <div className="nav_Accounts">
            <Link href="/myAccount">
                <div className="nav_Account_icons">
                    <div>
                        <img src="../images/account.svg" width={12}/>
                    </div>
                    <div>
                       <p>My Account</p>
                    </div>
                </div>
                    </Link>

                <div className="nav_Account_icons">
                    <div>
                        <img src="../images/wish.svg" width={12}/>
                    </div>
                    <div>
                       <p>Wishlist</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
export default Nav