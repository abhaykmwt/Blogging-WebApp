import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Container1 = styled("Box")`
  justify-content: center;


  & > p {
    height: 30vh;
justify-content: center;
    color: "black";
    fontsize: "20px";
    width: 80%;
    fontweight: "bold";
  }
`;
const Container = styled("Box")`


 
`;
const Newpost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setData] = useState(location.state?.title);
  const [discreption, setdisacription] = useState(location.state?.discreption);
  const Readmore = () => {
    
    navigate("/Blogdetails", {
      state: {
        title: location.state.title,
        discreption: location.state.discreption,
      },
    });
  };

  return (
    <>
      <Container >
        <Container1 styled={{margiTop:"20%"}}>
          <h3 onClick={() => Readmore()}>{location.state?.title}</h3>
          <p>{location.state?.discreption }
          </p>
        </Container1>
      </Container>
    </>
  );
};

export default Newpost;
