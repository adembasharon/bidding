import React,{useEffect,useState} from "react";
import Footer from "../public/components/footer";
import Nav from "../public/components/nav";
import Partners from "../public/components/partners";
import SubNav from "../public/components/subnav";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
const MyAcount = () => {
  const [mpesa,setMpesa]=useState({
    phone:"",
    amount:""
  })
  
  const mpesaFunction=()=>{
const url= "https://biddingbackend.onrender.com/api/stk/push"
const options={
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(mpesa)
}
 fetch(url,options)
 .then(res=>setMpesa(res))

  }
  
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])





  return (
    
    <>
      <Nav />
      <SubNav />
      <div className="myaccount_main_container">
        <div className="myaccount_container">
          <div className="myaccount_bids_posts">
            <div className="myaccount_bid_cont1">
                <Link href="/myAccount">
              <p style={{cursor:"pointer"}}>My Bids</p>
              </Link>
            </div>
            <div className="myaccount_post_cont1">
                <Link href="/admin/dashboard">
              <p style={{cursor:"pointer"}}>My Posts</p>
              </Link>
            </div>
          </div>
          <div className="myaccount_bal_container">
            <div>
              <Link href="/admin/dashboard">
                <button>Go to Dashboard</button>
              </Link>
            </div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add balance
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">You can reverse your balance anytime</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input type="" placeholder="Amount" style={{marginBottom:"1em"}}
      onChange={(e)=> setMpesa({phone:e.target.value})}
      
      />

        <input type="" placeholder="Your phone number"
              onChange={(e)=> setMpesa({amount:e.target.value})}

        />

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary"
              onClick={mpesaFunction}

        >Send</button>
      </div>
    </div>
  </div>
</div>
            <div>
              <p>My Balance, Ksh 60,000</p>
            </div>
            <div>
              <button>Withdraw</button>
            </div>
          </div>
        </div>

        <div className="myaccount_bid_items">
          <div>
            <img src="../images/desktop.png" width={100} />
          </div>
          <div>
            <p>Desktop</p>
          </div>
          <div>
            <p
              style={{
                color: "white",
                background: "green",
                padding: ".3em 1em",
              }}
            >
              Ongoing
            </p>
            <div>
              <p>Ksh.30,000</p>
            </div>
          </div>
        </div>

        <div className="myaccount_bid_items">
          <div>
            <img src="../images/table1.png" width={100} />
          </div>
          <div>
            <p>Table</p>
          </div>
          <div>
            <p
              style={{
                color: "black",
                background: "yellow",
                padding: ".3em 1em",
              }}
            >
              Ongoing
            </p>
            <div>
              <p>Ksh.60,000</p>
            </div>
          </div>
        </div>

        <div className="myaccount_bid_items">
          <div>
            <img src="../images/newcar.png" width={100} />
          </div>
          <div>
            <p>Lambogini</p>
          </div>
          <div>
            <p
              style={{
                color: "white",
                background: "green",
                padding: ".3em 1em",
              }}
            >
              Ongoing
            </p>
            <div>
              <p>Ksh.30,000</p>
            </div>
          </div>
        </div>

        <div className="myaccount_bid_items">
          <div>
            <img src="../images/home.png" width={100} />
          </div>
          <div>
            <p>House</p>
          </div>
          <div>
            <p
              style={{
                color: "black",
                background: "yellow",
                padding: ".3em 1em",
              }}
            >
              Ongoing
            </p>
            <div>
              <p>Ksh.60,000</p>
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <Footer />
    </>
  );
};
export default MyAcount;
