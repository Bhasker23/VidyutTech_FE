import React, { useState } from "react";
import PageDetails from "./PageDetails";
import { useDispatch } from "react-redux";
import { setNameSlice } from "../redux/slice/userName";
import { useNavigate } from "react-router-dom";

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
      <PageDetails />
    </div>
  );
}

export default Login;
