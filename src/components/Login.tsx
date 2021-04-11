import React, { useState } from "react";

import SignFormm from "./signForm/signform"


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
          }
        },
        (error) => {
          console.log("Error : " + error.error);
        }
      );
  }

  return (
    <div className="LoginContainer">
      <div>
          <SignFormm title="Login" handleSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} setError={setError}/> 
      </div>
    </div>
  );
}
