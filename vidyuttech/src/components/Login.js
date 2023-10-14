import React, { useState } from "react";
import PageDetails from "./PageDetails";
import { useDispatch } from "react-redux";
import { setNameSlice } from "../redux/slice/userName";
import { useNavigate } from "react-router-dom";
import HomeMedia from "./HomeMedia";

function Login() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPass] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, password);
    if (name == null || email == null || password == null) {
      alert("Please enter the vaild details");
    } else {
      let num = Math.floor(Math.random() * 100);
      let cookie = name + num;
      localStorage.setItem("cookie", JSON.stringify(cookie));
      dispatch(setNameSlice(name));
      navigate("/userFeature");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
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
