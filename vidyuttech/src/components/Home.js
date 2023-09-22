import React from "react";
import "./cssFile/Home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import HomeMedia from "./HomeMedia";
import PageDetails from "./PageDetails";

function Home() {
  return (
    <div>
      <p
        style={{
          fontFamily: "Visby Round CF, sans-serif;",
          fontWeight: "42px",
          fontSize: "50px",
          fontStyle: "italic",
        }}
      >
        “Making Sustainable Safe Smart batteries possible.”
      </p>
      <div className="aboutFirstDiv">
        <div className="ness">
          <img
            alt="NESS"
            src="https://i0.wp.com/nunam.com/wp-content/uploads/elementor/thumbs/image-1-q7oci1gxzkinqmqg0jdbbfpvxrzvdtwukprhxr0qlg.png?w=800&ssl=1"
          ></img>
          <h2>NESS</h2>
          <p className="textInFirstDiv">
            Smart, affordable, sustainable and safe second life battery modules
          </p>
          <a href="https://nunam.com/products/">
            <span>Read More</span>
            <FaArrowRightLong />
          </a>
        </div>
        <div className="qmax">
          <img
            alt="Qmaxx"
            src="https://i0.wp.com/nunam.com/wp-content/uploads/elementor/thumbs/Frame-11-q5moe5fi8p80iusi5k4vvg0m3si7a78wixofda2o1e.png?w=800&ssl=1"
          ></img>
          <div>
            <h2>Qmax - Battery Analytics</h2>
            <p className="textInFirstDiv">
              Enabling safer, reliable, bankable and circular batteries with
              battery data
            </p>
            <a href="https://nunam.com/products/">
              <span>Coming Soon</span>
              <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>

      <h1>Media</h1>
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

export default Home;
