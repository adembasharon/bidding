import Link from "next/link";
import React from "react";

const Dashboard=()=>{
    return(
        <div>
            <div>
                <Link href="/postProduct">
                <button>Add Post</button>
                </Link>
            </div>
        </div>
    )
}
export default Dashboard