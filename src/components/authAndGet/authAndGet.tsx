import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import SignFormm from "../signForm/signform";

export default function AuthAndGet() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [localToken, setToken] = useState("");
  const [localUserID, setUserID] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    const apiAdress: string = "http://localhost:3000/api/auth/login";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };

    fetch(apiAdress, requestOptions)
      .then((res) => {
        console.log(res.status);
        if (res.status !== 200) {
          console.log("error");
        }
        console.log(res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("result : ");
          console.log(result);
          if (result.error) {
            if (typeof result.error.message === "string") {
              setError(result.error.message);
            } else {
              setError("Error without message.");
            }
          } else {
            setError("");
          }
          if (result.token) {
            setToken(result.token);
          }
          if (result.userId) {
            setUserID(result.userId);
          }
        },
        (error) => {
          console.log("Error : " + error.error);
        }
      );
  }

  const authHeader = function () {
    return "Bearer " + localToken;
  };

  const getStuff = () => {
    const apiAdress: string = "http://localhost:3000/api/stuff";
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: authHeader(),
        userId: localUserID,
      },
    };

    fetch(apiAdress, requestOptions)
      .then((res) => {
        console.log(res.status);
        if (res.status !== 200) {
          console.log("error");
        }
        console.log(res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("result : ");
          console.log(result);
          if (result.error) {
            if (typeof result.error.message === "string") {
              setError(result.error.message);
            } else {
              setError("Error without message.");
            }
          }
        },
        (error) => {
          console.log("Error : " + error);
        }
      );
  };

  return (
    <div className="LoginContainer">
      <div>
        <SignFormm
          title="Login"
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
          setError={setError}
        />
      </div>

      <Button onClick={getStuff}> Get stuff</Button>
    </div>
  );
}
