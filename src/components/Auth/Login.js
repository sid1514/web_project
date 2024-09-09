import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import { Message } from "semantic-ui-react";
import {
  Button,
  Header,
  Form,
  Divider,
  Segment,
  Icon,
} from "semantic-ui-react";
import "./Login.css";
import { useDispatch } from "react-redux";

import { GoogleLogin } from "@react-oauth/google";
import { login } from "./LoginSlice";

const Login = () => {
  let [flag, Setflag] = useState(true);
  let [username, Setname] = useState();
  let [userpass, Setpass] = useState();
  let [phoneNumber, setPnumber] = useState();
  let [userEmail, setEmail] = useState();
  let nav = useNavigate();
  const [msg, Setmsg] = useState(false);
  let [f, Setf] = useState(true);

  const dispatch = useDispatch();

  const handleFlag = () => {
    Setflag(!flag);
  };

  // const [user, setUser] = useState(null);
  const handleSuccess = (response) => {
    console.log(response);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  const handleSignUp = async () => {
    try {
      await axios.post(`https://turbotraderapi.onrender.com/signUp`, {
        username,
        userpass,
        phoneNumber,
        userEmail,
      });
      Setflag(!flag);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    if (username !== "" && userpass !== "") {
      await axios
        .post(`https://turbotraderapi.onrender.com/signIn`, {
          username,
          userpass,
        })
        .then((res) => {
          console.log(res);
          dispatch(login(res.data));

          if (res.data !== null) {
            const token = res.data.token;

            console.log(token);
            Setf(!f);
            if (username === "admin") {
              nav("/CollectionCar");
            } else {
              nav("/");
              alert("You can book a car now");
            }
          } else {
            alert("enter correct username and password ");
            Setmsg(true);
          }
        })
        .catch((e) => {
          console.error(e);
          Setmsg(true);
        });
    }
  };

  return (
    <>
      <div className="Login-container">
        {flag ? (
          <div className="log">
            {msg ? (
              <Message color="red">Incorrect Username or Password</Message>
            ) : null}
            <Header as="h1" icon textAlign="center">
              <Icon
                name="car"
                iconPosition="right"
                size="massive"
                color="blue"
              />
              <Header.Content></Header.Content>
            </Header>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
                onChange={(e) => Setname(e.target.value)}
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                placeholder="password"
                type="password"
                onChange={(e) => Setpass(e.target.value)}
              />
              <Button
                color="green"
                fluid
                content="Login"
                onClick={handleSignIn}
              />
              <Divider horizontal>Or</Divider>
              <Button
                color="orange"
                fluid
                content="SignUp"
                onClick={handleFlag}
              />
              <br></br>
              <GoogleLogin
                clientId="412495318560-oio09u8g8gs1rg2r5a0nesk1bd88gblh.apps.googleusercontent.com"
                onSuccess={handleSuccess}
                onError={handleError}
                cookiePolicy={"single_host_origin"}
                scope="https://www.googleapis.com/auth/userinfo.profile"
              />
            </Form>
          </div>
        ) : (
          <div className="log">
            <Segment>
              <Header as="h1" icon textAlign="center">
                <Icon
                  name="users"
                  iconPosition="right"
                  size="massive"
                  color="blue"
                />
                <Header.Content>SignUp</Header.Content>
              </Header>
              <Form>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  placeholder="Username"
                  onChange={(e) => Setname(e.target.value)}
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                  onChange={(e) => Setpass(e.target.value)}
                />
                <Form.Input
                  lable="phone number"
                  placeholder="enter a phone number"
                  onChange={(e) => setPnumber(e.target.value)}
                />
                <Form.Input
                  lable="Email"
                  placeholder="enter a Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  color="purple"
                  fluid
                  content="SignUp"
                  onClick={handleSignUp}
                />
                <GoogleLogin
                  clientId="412495318560-oio09u8g8gs1rg2r5a0nesk1bd88gblh.apps.googleusercontent.com"
                  onSuccess={handleSuccess}
                  onError={handleError}
                  cookiePolicy={"single_host_origin"}
                  scope="https://www.googleapis.com/auth/userinfo.profile"
                />
              </Form>
            </Segment>
          </div>
        )}
        <span
          style={{
            color: "white",
            width: "50%",
            fontSize: "40px",
            marginTop: "24rem",
          }}
        >
          <p>
            {" "}
            <b>Login</b> to proceed and book your test drive
          </p>
        </span>
      </div>
    </>
  );
};
export default Login;
