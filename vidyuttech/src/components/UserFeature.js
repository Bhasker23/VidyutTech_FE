import React, { useEffect } from "react";
import PageDetails from "./PageDetails";
import "./cssFile/UserFeature.css";
import { useSelector } from "react-redux";

function UserFeature() {
  const name = useSelector((state) => state.userNameReducer.name);

  function handleSubmit() {
    console.log("object");
  }

  useEffect(() => {});

  console.log(name.valueOf());
  if (name === "" || name === "") {
    return (
      <>
        <h1>You are not Loged In, Please Login First</h1>
        <a href="/login" className="reLogin">
          Login
        </a>
      </>
    );
  } else {
    return (
      <div>
        <h1 style={{ margin: "50px 0px 100px 0px " }}>
          Hello {name} Welcome to VidyutTech
        </h1>
        <div className="batteryInfo">
          <h2>Get Battery Info</h2>
          <input placeholder="Enter Battery Id" className="inputBatteryID" />
          <button className="inputButton" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
        <div className="batteryInfo">
          <h2>Get Specific Info of Battery</h2>
          <input placeholder="Enter Battery Id" className="inputBatteryID" />
          <input placeholder="Enter type " className="inputBatteryID" />
          <button className="inputButton" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
        <div className="batteryInfo">
          <h2>Get Specific Info from given Time</h2>
          <input placeholder="Enter Battery Id" className="inputBatteryID" />
          <button className="inputButton" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
        <div className="batteryInfo">
          <h2>Get Battery Data of Every Minute </h2>
          <input placeholder="Enter Battery Id" className="inputBatteryID" />
          <button className="inputButton" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
        <PageDetails />
      </div>
    );
  }
}

export default UserFeature;
