import React, { useRef, useState } from "react";
import PageDetails from "./PageDetails";
import "./cssFile/UserFeature.css";
import { useSelector } from "react-redux";
import HomeMedia from "./HomeMedia";

function UserFeature() {
  const [batteryID, setBatterID] = useState("");
  const [type, setType] = useState("");
  const [specificType, setSpecificType] = useState("");
  const [batteryInfo, setBatterInfo] = useState(null);
  const [msg, setMessage] = useState(null);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const name = useSelector((state) => state?.userNameReducer?.name);

  async function getBatteryInfo() {
    // console.log("getbatteryInfo", batteryID);
    try {
      const response = await fetch(
        `http://localhost:8080/user/getBatteryInfo?batteryId=${batteryID}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      console.log("result hai : ", result);
      if (result.message === undefined) {
        setBatterInfo(result);
        // console.log("batterInfo hello ", batteryInfo);
      } else {
        setBatterInfo(null);
        alert(`OOPS ! Battery Not found with given BatteryID : ${batteryID}`);
      }
    } catch (error) {
      console.log("Error hai : ", error);
    }
    ref.current.value = "";
  }

  async function getSpecificInfo(e) {
    e.preventDefault();
    if (type === "none" || type === "") {
      alert("Please Select Valid Type in Get Specific Info of Battery");
    }
    try {
      const response = await fetch(
        `http://localhost:8080/user/getSpecificInfo${type}?batteryId=${batteryID}`,
        {
          method: "GET",
        }
      );
      const result = await response.text();
      console.log("result hai : ", result);
      setMessage(result);
    } catch (error) {
      console.log("error :", error);
    }
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

  const cookie = JSON.parse(sessionStorage.getItem("cookie")) || "";

  if (name === "" && cookie === "") {
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
          Hello, {name} Welcome to VidyutTech
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
        {batteryInfo ? (
          <div className="receivedbatteryInfo">
            <img
              style={{ width: "35%" }}
              src="https://i0.wp.com/nunam.com/wp-content/uploads/2023/08/Frame-26.png?resize=1024%2C908&ssl=1"
              alt="battery"
            />
            <div>
              <h4>BatteryID : {batteryInfo.batteryID}</h4>
              <h4>Voltage : {batteryInfo.voltage} </h4>
              <h4>Current : {batteryInfo.current}</h4>
              <h4>Temprature : {batteryInfo.temp}</h4>
              <h4>Time : {batteryInfo.time}</h4>
            </div>
            <button
              style={{ marginTop: "23px" }}
              className="removebtn"
              onClick={() => setBatterInfo(null)}
            >
              Remove !
            </button>
          </div>
        ) : (
          ""
        )}
        <form className="batteryInfo" onSubmit={(e) => getSpecificInfo(e)}>
          <h2>Get Specific Info of Battery</h2>
          <input
            required
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
          <button className="inputButton">Submit</button>
        </form>
        {msg ? (
          <div className="specificInfo">
            {msg}
            <button className="removebtn" onClick={() => setMessage(null)}>
              Remove !
            </button>
          </div>
        ) : (
          ""
        )}

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
