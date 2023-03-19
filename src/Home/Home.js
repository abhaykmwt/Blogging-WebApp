import React from "react";
import Newpost from "../Pages/Newpost";
import "./Home.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import styled from "@emotion/styled";
import { useNavigate , useLocation } from "react-router-dom";
import { Grid ,Button} from "@mui/material";

import Nothing from "../Pages/Nothing";
import Canavmodapp from "../Useless/Canavmodapp";
import Instadiactivate from "../Useless/Instadiactivate";
import Googledocs from "../Useless/Googledocs";



function Home( props) {
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const Readmore = () => {
    navigate("/Blogdetails", { state: { title: location.state?.title, discreption: location.state?.discreption} })
  };
  
  return (
    <>
      <Navbar />
      <Banner />
      <div>
        <h1 style={
          {margin:"40px"}
      } >Latest from the Blog    <Button href='/Createpost' style={{fontSize:"18px",backgroundColor:"blue",color:"white",marginTop:"50px",display:"flex",textAlign:"end"}}>New post</Button></h1>
   
      
      </div>
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

export default Home;
