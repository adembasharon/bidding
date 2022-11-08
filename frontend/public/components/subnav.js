import React, { useEffect, useState,useContext} from "react"
import Link from "next/link"
import algoliasearch from 'algoliasearch';
import { BidContext } from "../../state"
import { InstantSearch, SearchBox, Hits }from "react-instantsearch-dom";
    const SubNav=()=>{
    const biddingContext = useContext(BidContext);
    const { posts } = biddingContext;
    const [post, setPost] = posts;



// const searchClient=algoliasearch(
//     "bb4630731dbfca3e69b9451792297933",
//     "663405f6df386091a9c13ddfae6c213e",
// )


    const searchClient=()=>{
    const client = algoliasearch('bb4630731dbfca3e69b9451792297933', '663405f6df386091a9c13ddfae6c213e');
    const index = client.initIndex('dev_bid');
    
    // Search for "query string" in the index "contacts"
    index.search('query string').then(({ hits }) => {
      console.log(hits);
    });
    
    // Perform the same search, but only retrieve 50 results
    // Return only the attributes "firstname" and "lastname"
    index.search('query string', {
      attributesToRetrieve: ['title', 'name','description'],
      hitsPerPage: 50,
    }).then(({ hits }) => {
      console.log(hits);
    });
}
    return(
        <>
        
        <div className="subnav_container">
<div className="sub_nav_container">
    <Link href="/">
    <div style={{cursor:"pointer"}}>
        <img src="../images/logo.png" width={90}/>
    </div>
    </Link>
    <Link href="/">
    <h4 style={{cursor:"pointer"}}>Home</h4>
    </Link>
    <div className="subNav_input">
        <div>
            <img src="../images/search.svg" width={15}/>
        </div>
        <div>
        <input type="text" placeholder=""   
            //    onChange={filterData}      
        />  
        {/* <Hits /> */}

 <InstantSearch 
        searchClient={searchClient} 
        indexName="dev_bid">  
        <SearchBox />  
        <Hits />
      </InstantSearch> 
        </div>
    </div>
    <div className="subnav_login">
        <div  className="subnav_credentials">
        <div style={{cursor:"pointer"}}>
           <Link href="/admin/login" passHref><p>Login/</p></Link>
            </div>
            <div style={{cursor:"pointer"}}>
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