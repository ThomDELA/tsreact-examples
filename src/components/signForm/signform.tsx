import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

interface signFormProps {
  title?: string | "Sign form";
  handleSubmit: any;
  email: any;
  setEmail: any;
  password: any;
  setPassword: any;
  error?: any;
  setError?: any;
}

export default function signForm({
  title = "Sign form",
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  error,
  setError,
}: signFormProps) {
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className="LoginContainer">
      <Form onSubmit={handleSubmit} className="LoginFormBox">
        <div> {title} </div>
        <Form.Group  controlId="email">
          <div className="signFormInput">
            <Form.Label> Email  </Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              placeholder="foo@mail.com"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder=". . ."
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          className={
            "Login " + (validateForm() ? "btn-enabled" : "btn-disabled")
          }
          disabled={!validateForm()}
        >
          Submit
        </Button>
        {error ? (
          <div>
            <br></br> {error}{" "}
          </div>
        ) : (
          <div>
            <br></br>{" "}
          </div>
        )}
      </Form>
    </div>
  );
}
