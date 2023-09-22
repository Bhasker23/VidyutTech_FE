import React from "react";
import "./cssFile/HomeMedia.css";
import { FaArrowRightLong } from "react-icons/fa6";

function HomeMedia({ imgUrl, text }) {
  return (
    <div className="media">
      <img alt="" src={imgUrl}></img>
      <div>
        <h2>{text}</h2>
        <p className="textInFirstDiv"></p>
        <a href="https://nunam.com/products/">
          <span>Source</span>
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
}

export default HomeMedia;
