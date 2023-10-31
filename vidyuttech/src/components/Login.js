import React, { useRef, useState } from "react";
import PageDetails from "./PageDetails";
import { useDispatch } from "react-redux";
import { setNameSlice } from "../redux/slice/userName";
import { useNavigate } from "react-router-dom";
import HomeMedia from "./HomeMedia";
import axios from "axios";

function Login() {
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPass] = useState(null);
  const [number, setNumber] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numRef = useRef(null);
  const passRef = useRef(null);
  const idRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, password, number);
    if (name == null || email == null || password == null || number == null) {
      alert("Please enter the vaild details");
    } else {
      try {
        await axios
          .post("http://localhost:8080/user/signUp", {
            userId: userId,
            name: name,
            number: number,
            email: email,
            password: password,
          })
          .then((response) => {
            console.log(response);
          });
        let num = Math.floor(Math.random() * 100);
        let cookie = name + num;
        sessionStorage.setItem("cookie", JSON.stringify(cookie));
        dispatch(setNameSlice(name));
        navigate("/userFeature");
      } catch (error) {
        alert(error.response.data.message);
        nameRef.current.value = "";
        idRef.current.value = "";
        emailRef.current.value = "";
        passRef.current.value = "";
        numRef.current.value = "";

        console.log("meri error ", error.response.data.message);
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="userId"
          required
          ref={idRef}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Name"
          required
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
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
          type="email"
          placeholder="email"
          ref={emailRef}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
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
