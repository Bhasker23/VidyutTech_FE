import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageDetails from "./PageDetails";

function Login() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPass] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let userLogedIn = false;

    console.log(name, email, password);
    if (name == null || email == null || password == null) {
      alert("Please enter the vaild details");
    } else {
      userLogedIn = true;
      navigate("/userFeature");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
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
