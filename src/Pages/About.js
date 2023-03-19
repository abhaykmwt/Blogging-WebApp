import { display, textAlign } from "@mui/system";
import React from "react";
import Navbar from "../Home/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center"}}>ABout</h1>
      <div style={{display:"flex",justifyContent:"center",marginTop:"10%"}}>
        <div
          style={{
            width: "40%",
            background: "#008b8b",
            height: "40vh",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",  
          }}
        >
          <h2 style={{ textAlign: "center" }}>Hello’ everyone</h2>
          <h5 style={{
            marginLeft: "20%", marginRight: "20%",
          }}>
            It’s great to have you on the blog and fantastic that you’re taking
            an interest in who we are and what we do!I am telling you about tech
            blogging Technology Bloggers is a community blog, which is run and
            supported by several individuals.
          </h5>
        </div>
      </div>
    </>
  );
}

export default About;
