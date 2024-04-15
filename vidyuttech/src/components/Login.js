import React, { useRef, useState } from "react";
import PageDetails from "./PageDetails";
import { useDispatch } from "react-redux";
import { setNameSlice } from "../redux/slice/userName";
import { useNavigate } from "react-router-dom";
import HomeMedia from "./HomeMedia";
import axios from "axios";
import { setloginStatusSlice } from "../redux/slice/loginLogoutStatus";
import { FaLock } from "react-icons/fa";
import "./cssFile/Login.css";
// import { TextField } from "@mui/material";

function Login() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPass] = useState(null);
  const [number, setNumber] = useState(null);
  const dispatch = useDispatch();
  const status = useDispatch();

  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numRef = useRef(null);
  const passRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, password, number);
    if (name == null || email == null || password == null || number == null) {
      alert("Please enter the vaild details");
    } else {
      try {
        await axios
          .post("https://vidyuttech-production.up.railway.app/user/signUp", {
            name: name,
            number: number,
            email: email,
            password: password,
          })
          .then((response) => {
            console.log(response);
          });

        dispatch(setNameSlice(name));
        status(setloginStatusSlice(number));
        navigate("/userFeature");
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
        nameRef.current.value = "";
        emailRef.current.value = "";
        passRef.current.value = "";
        numRef.current.value = "";

        console.log("meri error ", error.response.data.message);
      }
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Login</h2>
          <FaLock style={{ marginTop: "25px", marginLeft: "8px" }} />
        </div>

        {/* <TextField id="inputTag" label="Name" variant="outlined" /> */}
        <input
          className="inputTag"
          type="text"
          placeholder="Name"
          required
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="inputTag"
          type="tel"
          placeholder="Mobile Number"
          required
          ref={numRef}
          maxLength={10}
          minLength={10}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <input
          className="inputTag"
          type="email"
          placeholder="email"
          ref={emailRef}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="inputTag"
          type="password"
          ref={passRef}
          placeholder="password"
          required
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
      <div className="homeMediadiv">
        <HomeMedia
          imgUrl={
            "https://i0.wp.com/nunam.com/wp-content/uploads/2023/07/1.png?w=750&ssl=1"
          }
          text={
            "Renewable energy storage of the future? Battery recycling for India"
          }
        />
        <HomeMedia
          imgUrl={
            "https://i0.wp.com/nunam.com/wp-content/uploads/2023/07/5.png?w=750&ssl=1"
          }
          text={
            "Second-life battery: Green power from used batteries are fabulas"
          }
        />
        <HomeMedia
          imgUrl={
            "https://i0.wp.com/nunam.com/wp-content/uploads/2023/07/3.png?w=750&ssl=1"
          }
          text={
            "Bengaluru Startup Gives Old Batteries New Life, Repurposes Them to Power Lights, Fans"
          }
        />
      </div>
      <PageDetails />
    </div>
  );
}

export default Login;
