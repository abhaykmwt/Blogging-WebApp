import React from "react";
import { useState } from "react";
import { Box, Button, TextField, styled, Typography } from "@mui/material";
import { display, textAlign } from "@mui/system";

const Component = styled(Box)`
  width: 380px;
  margin: auto;
  height: 70vh;
  align-items: center;
  margin-top: 30px;

  box-shadow: 3px 5px 5px 5px rgb(0 0 0/0.6);
`;

const Image = styled("img")({
  width: 80,
  height: 100,
  paddingTop: 40,

  display: "flex",
  margin: "auto",
});

const Reper = styled(Box)`
  paddding: 25px 35px;
  display: flex;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 10px;
  }
  & > p {
    margin-top: 10px;
  }
  & > email {
  }
`;

const Loginbtn = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: "white";
  height: 40px;
  border-radius: 2px;
`;
const Signupbtn = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874fo;
  height: 40px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;
const Text = styled(Typography)`
  color: #878787;
`;
const obj = {
  username: "",
  email: "",
  message: "",
};

function Login() {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  const [data, setdata] = useState({ email: "", message: "" });

  const [account, setaccount] = useState("Login");
  const [changdata, setchangdata] = useState("");
  const handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (event) => {
    const { email, message } = data;
    const res = await fetch(
      "https://aktechblogging-default-rtdb.firebaseio.com/Aktechblogging.json",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      }
    );

    let ldata = [];
    for (let i = 0; i <= data.email.length; i++) {
      ldata.push(data[i]);
    }
    let count = 0;
    for (let i = 1; i <= data.message.length; i++) {
      count++;
    }

    if (data.email === "" && data.message === "" && data.message === "") {
      setchangdata("Invailid Email");
    } else if (!ldata.includes("@") && count < 8) {
      setchangdata("Invailid Email");
    } else if (res) {
      alert("data stored succesfully");
    } else {
      alert("plese fill the data");
    }
  };

  const handlecreateaccount = () => {
    account === "Signup" ? setaccount("Login") : setaccount("Signup");
  };

  return (
    <>
      <h1
        style={{
          alignItems: "center",
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        Contact us
      </h1>
      <Component method="POST">
        <Box>
          <Image src={imageURL} alt="login" />

          <Reper>
            <TextField
              onChange={handlechange}
              variant="standard"
              label="Email"
              name="email"
              value={data.email}
              autoComplete="on"
              type="Email"
              style={{
                marginTop: "30px",
              }}
            />
            <p id="em" style={{ color: "red", fontSize: "12px" }}>
              {changdata}
            </p>
            <TextField
              onChange={handlechange}
              variant="standard"
              label="message"
              name="message"
              value={data.message}
              type="message"
              id="filled-message-input"
            />
            <p id="em" style={{ color: "red", fontSize: "12px" }}>
              {changdata}
            </p>
            <Loginbtn variant="contained" onClick={handlesubmit}>
              Send
            </Loginbtn>
          </Reper>
        </Box>
      </Component>
    </>
  );
}

export default Login;
