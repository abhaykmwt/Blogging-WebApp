import styled from "@emotion/styled";
import React from "react";
import Navbar from "../Home/Navbar";
import { Box } from "@mui/system";
import Add from "@mui/icons-material/AddCircle";
import {
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@mui/material";
import Nothing from "./Nothing";

import SendIcon from "@mui/icons-material/Send";

import { useNavigate } from "react-router-dom";

const Container = styled(Box)`
  margin: 50px 100px;
`;

const Image = styled("img")`
  width: 100%;
  object-fit: cover;
  height: 50vh;
`;
const Styledformcontrol = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  textalign: "center";
  flex-direction: row;
`;
const Inputtextfiels = styled(InputBase)`
  flex: 1;
`;
const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 30px;
  fontsize: 18px;
  border: none;
  &:focus-visible {
    outline: none;
  }
`;
function Createpost(props) {
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const [title, setTitle] = React.useState("");
  const [discreption, setdisacription] = React.useState("");
  const navigate = useNavigate();

  const PublicPost =  async() => {
    navigate("/", { state: { title: title, discreption: discreption } });
 
    const res = await fetch(
      "https://aktechblogging-default-rtdb.firebaseio.com/Aktechblogging.json",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          discreption,
          title,
        }),
      }
    );

  };
  
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changediscription = (e) => {
    setdisacription(e.target.value);
  };
  return (
    <>
      <Navbar />
      <Container>
        <Image src={url} alt="banner" />

        <Styledformcontrol>
          <label htmlFor="fileInput">
            <Add fontSize="large" color="action" style={{ marginTop: "5px" }} />
          </label>
          <input type={"file"} id="fileInput" style={{ display: "none" }} />

          <Inputtextfiels
            placeholder="Title....."
            onChange={changeTitle}
            style={{
              border: "none",
              fontSize: "25px",
              width: "100%",
              marginLeft: "1%",
            }}
          />

          <Button variant="contained" onClick={PublicPost} to={"/"}>
            <SendIcon style={{ paddingRight: "8px" }} />
            Publish
          </Button>
        </Styledformcontrol>
        <StyledTextareaAutosize
          minRows={8}
          placeholder="Write your post....."
          onChange={changediscription}
        />
      </Container>
    </>
  );
}

export default Createpost;
