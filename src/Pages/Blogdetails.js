import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Home/Navbar";
function Blogdetails() {
    const location = useLocation();
    

  return (
    <>
    <Navbar />
        <div style={{display:"flex",alignItems:"center"}}> 
            <h2 style={{ margin: "auto", marginTop:"3%",fontWeight:"bold"}}>How to Download Photoshop in windows</h2>
            
    </div>
        <p style={{ paddingLeft: "25%", paddingRight: "25%",marginTop:"3%",fontSize:"18px"}}>{location.state.discreption}</p>
  </>
  );
}

export default Blogdetails;
