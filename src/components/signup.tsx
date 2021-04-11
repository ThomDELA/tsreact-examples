import React, { useState } from "react";

import SignFormm from "./signForm/signform";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    const apiAdress: string = "http://localhost:3000/api/auth/signup";
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
            if (result.error.message) {
              setError(result.error.message);
            }
          }
          if (result.message) {
            setError(result.message);
          }
        },
        (error) => {
          console.log("Error : " + error.error);
        }
      );
  }

  return (
    <>
      <SignFormm
        title="Sign up"
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        setError={setError}
      />
    </>
  );
}
