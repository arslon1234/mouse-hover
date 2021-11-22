import React, { useState } from "react";
import "./app.scss";
import Glasscart from "./Glasscart";

export default function App() {

  // document.addEventListener("mousemove", (e) => {
  //   document.getElementById("myBtn").style.top = ${e.pageY}px;
  //   document.getElementById("myBtn").style.left = ${e.pageX}px;
  //   document.getElementById("myBtn2").style.top = ${e.pageY - 12}px;
  //   document.getElementById("myBtn2").style.left = ${e.pageX - 12}px;
  // });
  return (
  
    <div className="app"> 
      <Glasscart/>
      {/* <div id="myBtn" className="cursor"></div>
      <div id="myBtn2" className="cursor-follower">
        MD
      </div> */}
    </div>
  );
}
