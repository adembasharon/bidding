import { useContext, createContext,useState } from "react";

export const BidContext = createContext();
function AppWrapper({ children }) {
  const [post,setPost]= useState([])
  const [currentPost,setCurrentPost]=useState("")
  const[cartegories,setCartegories]=useState("")


  return <BidContext.Provider value={{posts:[post,setPost],editPost:[currentPost,setCurrentPost],cartegory:[cartegories,setCartegories]}}>
    {children}
    </BidContext.Provider>;
}

export  default AppWrapper