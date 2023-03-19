import React from "react";
import Navbar from "../Home/Navbar";
import styled from "@emotion/styled";

import { useLocation } from "react-router-dom";
import Canavmodapp from "../Useless/Canavmodapp";
import { Grid } from "@mui/material";
import Nothing from "./Nothing";
import Instadiactivate from "../Useless/Instadiactivate";
import Googledocs from "../Useless/Googledocs";
import Newpost from "./Newpost";


function Blogs() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <br />
      <h1 style={{
        textAlign: "center",
      }}>All Blogs</h1>
        
      
      <Grid item xs={12} container spacing={2} marginLeft={"10px"} marginRight={"20px"} marginTop={"40px"}>
        
        <Grid item xs={12} sm={6} lg={4} ><Nothing/></Grid>
        <Grid item xs={12} sm={6} lg={4} ><Canavmodapp/></Grid>
        <Grid item xs={12} sm={6} lg={4} ><Instadiactivate/></Grid>
        <Grid item xs={12} sm={6} lg={4} ><Googledocs/></Grid>
       
        <Grid  item xs={12} sm={6} lg={4}><Newpost/></Grid>
     

      
      
      </Grid>
      
    </>
  );
}

export default Blogs;
