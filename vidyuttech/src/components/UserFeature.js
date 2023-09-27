import React, { useRef, useState } from "react";
import PageDetails from "./PageDetails";
import "./cssFile/UserFeature.css";
import { useSelector } from "react-redux";
import HomeMedia from "./HomeMedia";

function UserFeature() {
  const [batteryID, setBatterID] = useState("");
  const [type, setType] = useState("");
  const [specificType, setSpecificType] = useState("");
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const name = useSelector((state) => state?.userNameReducer?.name);

  function getBatteryInfo() {
    console.log("getBatteryInfo ", batteryID);
    ref.current.value = "";
  }

  function getSpecificInfo() {
    if (type === "none") {
      alert("Please Select Valid Type in Get Specific Info of Battery");
    }
    console.log("getSpecificInfo ", batteryID, "type is ", type);
    ref1.current.value = "";
  }

  function specificInfoAtTime() {
    console.log(
      "specificInfoAtTime ",
      batteryID,
      "specificType is ",
      specificType
    );
    ref2.current.value = "";
  }

  function everyMinuteData() {
    console.log("everyMinuteData");
  }

  if (name === "") {
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
          <input
            placeholder="Enter Battery Id"
            className="inputBatteryID"
            ref={ref}
            onChange={(e) => setBatterID(e.target.value)}
          />
          <button className="inputButton" onClick={() => getBatteryInfo()}>
            Submit
          </button>
        </div>
        <div className="batteryInfo">
          <h2>Get Specific Info of Battery</h2>
          <input
            placeholder="Enter Battery Id"
            className="inputBatteryID"
            ref={ref1}
            onChange={(e) => setBatterID(e.target.value)}
          />
          <select
            name="type"
            className="dropDown"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="none">None</option>
            <option value="voltage">Voltage</option>
            <option value="current">Current</option>
            <option value="temprature">Temprature</option>
          </select>
          <button className="inputButton" onClick={() => getSpecificInfo()}>
            Submit
          </button>
        </div>
        <div className="batteryInfo">
          <h2>Get Specific Info from given Time</h2>
          <input
            placeholder="Enter Battery Id"
            className="inputBatteryID"
            ref={ref2}
            onChange={(e) => setBatterID(e.target.value)}
          />
          <input placeholder="DD-MM-YYYY HH:MM" className="inputBatteryID" />
          <select
            name="type"
            className="dropDown"
            onChange={(e) => setSpecificType(e.target.value)}
          >
            <option value="none">None</option>
            <option value="voltage">Voltage</option>
            <option value="current">Current</option>
            <option value="temprature">Temprature</option>
          </select>
          <button className="inputButton" onClick={() => specificInfoAtTime()}>
            Submit
          </button>
        </div>
        <div className="batteryInfo">
          <h2>Get Battery Data of Every Minute </h2>
          <button className="inputButton" onClick={() => everyMinuteData()}>
            Get
          </button>
        </div>
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
}

export default UserFeature;
