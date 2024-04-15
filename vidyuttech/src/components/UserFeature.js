import React, { useRef, useState } from "react";
import PageDetails from "./PageDetails";
import "./cssFile/UserFeature.css";
import { useSelector } from "react-redux";
import HomeMedia from "./HomeMedia";
import axios from "axios";

function UserFeature() {
  const [batteryId, setBatterID] = useState("");
  const [type, setType] = useState("");
  const [specificType, setSpecificType] = useState("");
  const [batteryInfo, setBatterInfo] = useState(null);
  const [msg, setMessage] = useState(null);
  const [time, setStartTime] = useState(null);
  const [specificInfoMessage, setSpecificInfoMessage] = useState([]);
  const [batteryObj, setBatterytoDB] = useState({
    batteryID: "",
    current: "",
    voltage: "",
    temp: "",
  });

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const timeRef = useRef(null);
  const name = useSelector((state) => state?.userNameReducer?.name);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBatterytoDB((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  async function addBattery() {
    console.log("Entered in add battery function");
    try {
      console.log(batteryObj);
      const addBatteryObject = await axios.post(
        "https://vidyuttech-production.up.railway.app/battery/addBattery",
        batteryObj
      );

      console.log(addBatteryObject);
      // Reset form after successful submission
      setBatterytoDB({
        batteryID: "",
        current: "",
        voltage: "",
        temp: "",
      });
      // setBatterytoDB(addBatteryObject);
    } catch (error) {
      console.log(error);
    }
  }
  async function getBatteryInfo() {
    // console.log("getbatteryInfo", batteryID);
    try {
      const response = await fetch(
        `https://vidyuttech-production.up.railway.app/user/getBatteryInfo?batteryId=${batteryId}`,
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
        alert(`OOPS ! Battery Not found with given BatteryID : ${batteryId}`);
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
    } else {
      try {
        const response = await fetch(
          `https://vidyuttech-production.up.railway.app/user/getSpecificInfo${type}?batteryId=${batteryId}`,
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
    }
    ref1.current.value = "";
  }

  async function specificInfoAtTime(e) {
    e.preventDefault();
    if (specificType === "none" || specificType === "") {
      alert("Please Select Valid Type in Get Specific Info of Battery");
    }
    const moment = require("moment");
    let date = moment(time).format("DD-MM-YYYY HH:mm");
    console.log("start ", date);
    const response = await fetch(
      `https://vidyuttech-production.up.railway.app/user/getSpecificInfoAtGivenTime${specificType}?batteryId=${batteryId}&startTime=${date}`,
      {
        method: "Get",
      }
    );
    const result = await response.text();
    const dataArray = result.split(",");
    // console.log( result);
    setSpecificInfoMessage(dataArray);

    ref2.current.value = "";
    timeRef.current.value = "";
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
          Hello, {name} Welcome to VidyutTech
        </h1>
        <div className="addBattery">
          <h2>Add Battery</h2>
          <form className="batteryAddingForm">
            <input
              name="batteryID"
              type="number"
              className="inputBatteryID"
              placeholder="Enter Battery Id"
              value={batteryObj.batteryID}
              onChange={handleChange}
            />
            <input
              name="current"
              type="number"
              className="inputBatteryID"
              placeholder="Enter current"
              value={batteryObj.current}
              onChange={handleChange}
            />
            <input
              name="voltage"
              type="number"
              className="inputBatteryID"
              placeholder="Enter voltage"
              value={batteryObj.voltage}
              onChange={handleChange}
            />
            <input
              name="temp"
              type="number"
              className="inputBatteryID"
              placeholder="Enter temprature"
              value={batteryObj.temp}
              onChange={handleChange}
            />
          </form>
          <button className="inputButton" onClick={() => addBattery()}>
            Submit
          </button>
        </div>
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
              <h4>BatteryID : {batteryInfo.batteryId}</h4>
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
            <option value="temp">Temprature</option>
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

        <form className="batteryInfo" onSubmit={(e) => specificInfoAtTime(e)}>
          <h2>Get Specific Info from given Time</h2>
          <input
            required
            placeholder="Enter Battery Id"
            className="inputBatteryID"
            onChange={(e) => setBatterID(e.target.value)}
            ref={ref2}
          />
          <input
            required
            type="datetime-local"
            placeholder="DD-MM-YYYY HH:MM"
            className="inputBatteryID"
            onChange={(e) => setStartTime(e.target.value)}
            ref={timeRef}
          />
          <select
            name="type"
            className="dropDown"
            onChange={(e) => setSpecificType(e.target.value)}
          >
            <option value="none">None</option>
            <option value="voltage">Voltage</option>
            <option value="current">Current</option>
            <option value="temp">Temprature</option>
          </select>
          <button className="inputButton">Submit</button>
        </form>
        {specificInfoMessage && specificInfoMessage.length > 0 && (
          <>
            <button
              className="removebtn"
              onClick={() => setSpecificInfoMessage(null)}
            >
              Remove !
            </button>
            <div className="specificInfo-AtTime-grid">
              {specificInfoMessage.map((data, index) => (
                <div key={index} className="gridItem">
                  {data}
                </div>
              ))}
            </div>
          </>
        )}
        {/* <div className="batteryInfo">
          <h2>Get Battery Data of Every Minute </h2>
          <button className="inputButton" onClick={() => everyMinuteData()}>
            Get
          </button>
        </div> */}
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
