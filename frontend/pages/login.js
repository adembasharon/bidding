import React, { useState,useEffect } from "react";
import { useRouter } from 'next/router';
import Nav from "../public/components/nav";
import SubNav from "../public/components/subnav";
import Footer from "../public/components/footer";
const Login = () => {
  
 

  const [user, setUser] = useState({
      username: "",
      password: ""
  })

 const [currentUser,setCurrentUser]=useState("")


  const [loginMessage, setLoginMessage] = useState("")
  const [validationMessage, setValidationMessage] = useState({
      username: "",
      password: ""
  });
  const [showValidationMessage, setShowValidationMessage] = useState({
      username: false,
      password: false

  })
 

  const router = useRouter();


  const handleSubmit = async e => {
      e.preventDefault()
      try {
          if (user.username === '') {
              setShowValidationMessage({ ...validationMessage, username: true })
              setShowValidationMessage({ ...validationMessage, password: false })
              setValidationMessage({ ...validationMessage, username: "UserName is required" })
              console.log(validationMessage)
          }
          else if (user.password === '') {
              setShowValidationMessage({ ...validationMessage, password: true })
              setShowValidationMessage({ ...validationMessage, username: false })
              setValidationMessage({ ...validationMessage, password: "Password is required" })
          }
          else {
              const data = await fetch("http://localhost:5000/api/auth/login", {
                  method: "POST",
      
                  body: JSON.stringify(user),
                  headers: {
                      "content-type": "application/json",
                      "accept": "application/json"
                  }
              }

              
              )
              console.log(data)

              const result = await data.json();
              localStorage.setItem("loggedInUser", JSON.stringify([result]))
              console.log(result)
              if (result.username !== undefined) {
                  setCurrentUser(result.username)
                  router.push(
                      {
                          pathname: "/myAccount",
                          query: { name: currentUser }
                      })
                  console.log(currentUser)

              } else {
                  setLoginMessage("Invalid credentials")

              }
          }
      } catch (error) {
          console.log(error)
      }

      console.log(user)
  }

  useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user))
  }, [user])

  

  return (
    <>
    <Nav/>
    <SubNav/>
    <div className="login_main_container">
      <div className="login_container">
        <div className="login_first_container">
          <div className="login_bid_icon">
            <div>
              <h1>Login</h1>
            </div>

            <div>
              <img src="../images/logo.png" width={150} />
            </div>
            <div>
              <p>BidNunua</p>
            </div>
            <p>{loginMessage}</p>
          </div>

          <div className="login_google">
            <div>
              <img src="../images/google.png" width={27} />
            </div>
            <div>
              <p>Login with Google</p>
            </div>
          </div>
        
          <div className="login_inputs">
            <p>{validationMessage.username}</p>
            <div>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  setUser({ ...user, username: e.target.value })
                }
              />
            </div>

            <p>{validationMessage.password}</p>
            <div>
              <input
                type="text"
                placeholder="Password"
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value })
                }
              />
            </div>
          </div>
          <button onClick={(e) => handleSubmit(e)}>Login</button>
        </div>

        <div className="login_background_image login_second_container">
          <img src="../images/login.png" width={350} />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
export default Login;
