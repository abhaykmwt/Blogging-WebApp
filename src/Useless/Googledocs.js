import React from 'react';
import { Button } from "@mui/material";
import styled from '@emotion/styled';
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
function Googledocs() {
    const navigate = useNavigate();
  return (
    <div>
       <Container>
        <Container1>
          <h3
            onClick={() => {
              navigate("/DGoogleDoc");
            }}
          >
            {" "}
            How to download file in google docs on windows10
          </h3>
          <p>
            Google docs is a great platform for writers and docs you do not have
            to pay any cost to run google docs. In this article;e I am talking
            about how to download files in google docs on windows10. Read this
            article carefully, don't skip any word in this article, let's start
            it.In October 2012, Google renamed the Drive products and Google
            Documents became Google Docs. At the same time, Chrome browser apps
                      were released. We all thanks Google to provide this application.
                      <Button href="/DGoogleDoc">Readmore</Button>
          </p>
        </Container1>
      </Container>
    </div>
  );
}

export default Googledocs;
