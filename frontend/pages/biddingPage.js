// import React, { useState, useEffect } from "react";
// import Footer from "../public/components/footer";
// import Nav from "../public/components/nav";
// import Partners from "../public/components/partners";
// import SubNav from "../public/components/subnav";

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/api/post/");
//   const data = await res.json()
//   const paths = data.map(item => {
//       return {
//           params: { id: item._id.toString() }
//       }
//   })
//   return {
//       paths,
//       fallback: false
//   }}

  
// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch("http://localhost:5000/api/post/find/" + id)
//   const data = await res.json()

//   return {
//       props: { item: data }
//   }}


// const BiddingPage = ({item}) => { 

//   return (
//     <>
//       <Nav />
//       <SubNav />
//       <div className="biddingpage_main_container">
//         <div>
//           <div className="biddingPage_time_container1">
//             <div>
//               <img src="../images/watched.svg" width={25} />
//             </div>
//             <div className="biddingPage_time_container">
//               <div className="biddingPage_time">
//                 <div>
//                   <p style={{ color: "red" }}>{timer.d} </p>
//                 </div>
//                 <div>
//                   <p> Days</p>
//                 </div>
//               </div>
//               <div className="biddingPage_time">
//                 <div>
//                   <p style={{ color: "red" }}>{timer.h} </p>
//                 </div>
//                 <div>
//                   <p> Hrs</p>
//                 </div>
//               </div>

//               <div className="biddingPage_time">
//                 <div>
//                   <p style={{ color: "red" }}>{timer.m} </p>
//                 </div>
//                 <div>
//                   <p> Mins</p>
//                 </div>
//               </div>

//               <div className="biddingPage_time">
//                 <div>
//                   <p style={{ color: "red" }}>{timer.s} </p>
//                 </div>
//                 <div>
//                   <p> Sec</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="biddingpage_container">
//             <div className="biddingpage_first_container">
//               <div>
//                 <img src={item.image} width={330} />
//               </div>
//               <div>
//                 <img src={item.subimages} width={30} />
//               </div>
//             </div>

//             <div className="biddingpage_price_of_items_container biddingpage_second_container">
//               <h2> {item.name}</h2>
//               <div className="biddingpage_price_of_items">
//                 <div>
//                   <p>Starting Bid</p>
//                 </div>
//                 <div style={{ color: "green" }}>
//                   <p>{item.startingPrice}</p>
//                 </div>
//               </div>
//               <div className="biddingpage_price_of_items_button_container">
//                 <div>
//                   <button>Ksh.24500</button>
//                 </div>
//                 <div>
//                   <div>
//                     <img src="../images/plus.svg" width={15} />
//                   </div>
//                   <div>
//                     <img src="../images/remove.png" width={15} />
//                   </div>
//                 </div>
//               </div>
//               <div className="biddingpage_price_of_items_button_container_bid_now">
//                 <button>Bid Now</button>
//               </div>
//             </div>

//             <div className="biddingpage_wathed_details_container biddingpage_third_container">
//               <div className="biddingpage_wathed_details">
//                 <div>
//                   <img src="../images/today.png" width={19} />
//                 </div>
//                 <div>
//                   <div>
//                     <p style={{ color: "yellow" }}>14</p>
//                   </div>
//                   <p>Today's Bid</p>
//                 </div>
//               </div>

//               <div className="biddingpage_wathed_details">
//                 <div>
//                   <img src="../images/watchers.png" width={19} />
//                 </div>
//                 <div>
//                   <div>
//                     <p style={{ color: "yellow" }}>154</p>
//                   </div>
//                   <p>Watched</p>
//                 </div>
//               </div>

//               <div className="biddingpage_wathed_details">
//                 <div>
//                   <img src="../images/totalbids.png" width={19} />
//                 </div>
//                 <div>
//                   <div>
//                     <p style={{ color: "yellow" }}>54</p>
//                   </div>
//                   <p>Total Bids</p>
//                 </div>
//               </div>
//               <div className="biddingpage_highest_bid">
//                 <h5>Current Highest Bid</h5>
//                 <p>Ksh.30,321 , Ouma</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bidingpage_propery_heading">
//           <h2>Properties</h2>
//         </div>
//         <div className="biddingpage_vehicle_properties">
//           <div>
//             <h3>Type of Vehicle</h3>
//             <p>Model 234</p>
//             <p>Make ford</p>
//             <p>Year 2000</p>
//             <p>Type of fuel Regular</p>
//           </div>
//           <div>
//             <h3>Type of Vehicle</h3>

//     </>
//   );
// };
// export default BiddingPage;
