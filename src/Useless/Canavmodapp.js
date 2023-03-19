import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
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
function Canavmodapp() {
    const navigate = useNavigate();
  return (
    <div>
          <Container>
        <Container1>
          <h3
            onClick={() => {
              navigate("/CanvaMod");
            }}
          >
            {" "}
            How to download canva mod apk on windows 10
          </h3>
          <p>
            Canva is a very great platform for creating designers and many
            things can a is a graphic design platform, used to create social
            media graphics, presentations, posters, documents, and other visual
            content. How to download canva mod apk on windows 10. In this
            article I am teaching about how to download canva mod apk on windows
            10.read this article carefully How to download canva mod apk on
        windows 10.<Button href="/CanvaMod">Readmore</Button>
          </p>
        </Container1>
      </Container>
    
    </div>
  );
}

export default Canavmodapp;
