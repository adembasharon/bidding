import React, { useState, useEffect } from "react";
import Footer from "../public/components/footer";
import Nav from "../public/components/nav";
import SubNav from "../public/components/subnav";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "next/link";

const Signup = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [message, setMessage] = useState("");
  const [validationMessage, setValidationMessage] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: ""
})


const validatePassword = () => {
  if (confirmPassword !== "") {
    return password === confirmPassword ? (
      <CheckOutlinedIcon style={{ color: "green" }} />
    ) : (
      <ClearIcon style={{ color: "red" }} />
    );
  }

  // if (confirmPassword !== "") {
  //   return password === confirmPassword ?
  //    (
  //     <CheckOutlinedIcon style={{ color: "green" }} />,
  //     <p style={{ color: "green" }}>Password is correct</p>
  //   ) 
  //   :
  //    (
  //     <ClearIcon style={{ color: "red" }}/>,
  //     <p style={{ color: "red" }}>Password does not match</p>
  //   );
  // }
};
// const [password,setPassword]=useState("")
// const [conPassword,setConpasswor]

 useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user))
  }, [user])


  const [showPass, setShowPass] = useState(false);
  const togglePassWardVisibility = () => {
    setShowPass(!showPass);
  }; 

  const handleChange = (e) => {
    e.preventDefault();

    if (details.username == "") {
      setValidationMessage({
        ...validationMessage,
        username: "user Name is required",
      });
    } else if (details.password == "") {
      setValidationMessage({
        ...validationMessage,
        password: "Password is required",
      });
    } else if (details.email == "") {
      setValidationMessage({
        ...validationMessage,
        email: "Email is required",
      });
    } else {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      };

      fetch("https://biddingbackend.onrender.com/api/auth/register", options)
        .then((res) => res.json())
        .then((data) => {
          if (data.code === 11000) {
            return setMessage("User already registered");
          } else {
            setMessage("succesfully registerd you can now login");
            return data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(details);
    }

    console.log(validationMessage);
  };

  return (
    <>
      <Nav />
      <SubNav />
      <div className="signup_main_container">
        <div className="signup_container">
          <div className="signup_first_container">
            <div className="signup_bid_icon">
              <div>
                <h1>Signup</h1>
                <div className="succes_login">
                  <p>{message}</p>
                </div>
              </div>

              <div>
                <img src="../images/logo.png" width={150} />
              </div>
              <div>
                <p>BidNunua</p>
              </div>
            </div>
            <div className="signup_inputs">
              <div className="signup_single_inputs">
                <div className="validation_error">
                  <p>{details.username == "" && validationMessage.username}</p>
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) =>
                    setDetails({ ...details, username: e.target.value })
                  }
                />
              </div>

              <div className="signup_single_inputs">
                <div className="validation_error">
                  <p>{details.email == "" && validationMessage.email}</p>
                </div>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                />
              </div>

              <div className="signup_password_input">
                <div className="validation_error">
                  <p>{details.password == "" && validationMessage.password}</p>
                </div>
                <div className="signup_icon_visibility">
                  <div >
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                    />
                  </div>
                  <div onClick={togglePassWardVisibility}>
                    {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>
              </div>

              <div className="signup_password_input">
                <div className="signup_icon_visibility">
                  <div >
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Confirm Password"
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                    />
                  </div>
                  <div onClick={togglePassWardVisibility}>
                    {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>
              </div>
              <div>
                {validatePassword()}
              </div>
              
            </div>
            <Link href={`/dashboard/login`}>
            <button style={{marginBottom:"2em"}} onClick={handleChange}>Signup</button>
            </Link>
          </div>

          <div className="signup_background_image signup_second_container">
            <img src="../images/login.png" width={350} />
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};
export default Signup;
