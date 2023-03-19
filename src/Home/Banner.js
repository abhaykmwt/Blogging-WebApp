import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";
import { color } from "@mui/system";
import React, { Component } from "react";
import "./Benner.css";

const Image = styled(Box)`
  background: url(https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600)
    center/50% 100% repeat-x #000;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;
const Heading = styled(Typography)`
  font-size: 55px;
  color: white;
  line-height: 1;
`;

const Subheading = styled(Typography)`
  font-size: 20px;
  color: white;
  padding-top: 20px;
`;

function Banner() {
  return (
    <Image className="img">
      <Heading>Welcom To Our Tech Blogs</Heading>
      <Subheading>
        On this site, you can read tech and coding-related blogs out{" "}
      </Subheading>
    </Image>
  );
}

export default Banner;
