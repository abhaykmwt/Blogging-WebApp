import React from 'react';
import styled from '@emotion/styled';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
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
function Instadiactivate() {
    const navigate = useNavigate();
  return (
    <div>
        <Container>
        <Container1>
          <h3
            onClick={() => {
              navigate("/DeInstaAcc");
            }}
          >
            {" "}
            How to deactivate the Instagram account
          </h3>
          <p>
            In today's time, there are so many amazing social media platforms
            available on the internet. But the crack of Instagram is on the next
            level. Instagram has the largest active user base all over the
            world. The best part is that we can use it for free. But nothing is
            free in this world. We will understand it in the next part of this
            article. Instagram is a famous platform. Instagram allows its users
            to edit photos and short videos through mobile and upload them
                      online. What is Instagram Instagram is a very famous platform. It is
                      <Button href="/DeInstaAcc">Readmore</Button>
          </p>
        </Container1>
      </Container>
     
    </div>
  );
}

export default Instadiactivate;
