import React from "react";
import "./cssFile/PageDetails.css";
import { GrMail } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function PageDetails() {
  return (
    <div className="pageParent">
      <div className="address">
        <h1
          style={{
            paddingLeft: "10px",
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          VidyutTech
        </h1>
        <div className="contact">
          <GrMail style={{ fontSize: "30px", marginRight: "3%" }} />
          <p>Contact us - Contact@vidyutTech.com</p>
        </div>
        <div className="location">
          <ImLocation2 style={{ fontSize: "30px", marginRight: "3%" }} />
          <p>
            VidyutTech India Pvt Ltd Plot no, 19 A, 3rd Cross , Veerasandra
            Industrial Area, Electronic City Phase 2 , Bengaluru, Karnataka,
            India Pincode : 560100
          </p>
        </div>
      </div>
      <div className="pages">
        <h3
          style={{
            fontStyle: "italic",
          }}
        >
          PAGES
        </h3>
        <h3>
          <a href="/home">Home</a>
        </h3>
        <h3>
          <a href="/login">Login</a>
        </h3>
        <h3>
          <a href="/about">About</a>
        </h3>
        <h3>
          <a href="/userFeature">UserFeature</a>
        </h3>
      </div>
      <div className="contactUs">
        <h3
          style={{
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          CONTACT US
        </h3>
        <form>
          <input className="input" placeholder="Name" />
          <input className="input" placeholder="Your Email" />
          <input className="input" placeholder="Your Phone Number" />
          <input className="query" placeholder="Your Query" />
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PageDetails;
