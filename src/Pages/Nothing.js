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
  width: 30%;

  height: 35vh;
`;
const Nothing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setData] = useState();
  const [discreption, setdisacription] = useState();
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
      <Container>
        <Container1>
        <h3  styled={{ hover: { color: "red" }, cursor: "pointer" }} onClick={() => {
              navigate("/HDphotoshop");
            }}
           
          >
            How to Download Photoshop
          </h3>
          <p>
            Welcome to photoshop! Photoshop is a famous photo editing platform.
            The platform where we have the right to create magic. This is a very
            amazing software for photo editing. With this software, you can do
            whatever you want with your photo. We can create anything that comes
            to our minds. This software can run on a good computer. This pc
            requires at least 8 GB of RAM in a desktop Now we have various
            software from Adobe Creative cloud. Photoshop is one of them.
          <Button href="/HDphotoshop">Readmore</Button>
          </p>
        </Container1>
      </Container>
    </>
  );
};

export default Nothing;
