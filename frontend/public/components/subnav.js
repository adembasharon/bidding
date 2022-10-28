import React, { useEffect, useState ,useContext, useRef, useCallback} from "react"
import Link from "next/link"
import { BidContext } from "../../state"

const SubNav=()=>{

    const [reload,setReload]=useState()
    const biddingContext = useContext(BidContext);
    const { posts } = biddingContext;
    const [post, setPost] = posts;


const searchRef=useRef(null)
const [query,setQuery]=useState("")
const [active,setActive]=useState(false)
const [results,setResults]=useState([])

const searchEndPoint=(query)=>`https://biddingbackend.onrender.com/api/post/${query}`

const onChange=useCallback((e)=>{
    const query=e.target.value;
    setQuery(query)
    if(query.length){
        fetch(searchEndPoint(query))
        .then((res)=>res.json())
        .then((res)=>{
            setResults(res.results)
        })
    }else{
        setResults([])
    }
},[])

const onFocus=()=>{
    setActive(true)
    window.addEventListener("click",onclick)
}
const onclick=useCallback((e)=>{
    if(searchRef.current && !searchRef.current.contains(e.target.value)){
        setActive(false)
        setQuery("")
        setResults([])
        window.addEventListener("click",onclick)

    }
},[])



// useEffect(()=>{
// setPost(
// items.filter(item=>
//     item.name.toLowerCase().includes(search.toLowerCase)
// )
// ),[search,items]})
// if(loading){
//     return<div>Loading ...</div>
// }
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
        <input type="text" placeholder="Search for a product"
        onChange={onChange}
        onFocus={onFocus}
        value={query}
        // onChange={(e)=>setSearch(e.target.value)}
        />
        {active && results.length> 0 &&(
            <p>next</p>
        )}
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