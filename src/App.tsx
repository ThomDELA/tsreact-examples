import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./assets/logo.svg";

// Styles
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import Glassboard from "./components/GlassBoard/GlassBoard";

import {
  TicTacToeGame,
  Login,
  SignUp,
  Home,
  FetchExample,
  PostExample,
  AuthAndGet,
  Qpuc,
  RPI,
  TrailingCursor,
} from "./components/index";

interface logoProps {
  className?: string;
}

function MyLogo({ className: classname = "" }: logoProps) {
  return <img src={logo} className={"App-logo " + classname} alt="logo" />;
}

export default function App() {
  const pages = {
    TicTacToeGame,
    Login,
    SignUp,
    FetchExample,
    PostExample,
    AuthAndGet,
    Qpuc,
    RPI,
    Home,
  };

  return (
    <>
      <div id="AppContainer" className="thisApp">
        <Router>
          <Navbar role="banner" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand as={NavLink} exact activeClassName="" to="/">
              <MyLogo />
            </Navbar.Brand>
            <Nav defaultActiveKey="/" variant="pills">
              {Object.values(pages).map((comp: any, idx) => {
                return (
                  <NavLink
                    key={idx}
                    className="nav-link"
                    exact
                    activeClassName="active"
                    to={comp.name}
                  >
                    {comp.name}
                  </NavLink>
                );
              })}

              <MyLogo className="mooving-logo" />
            </Nav>
          </Navbar>

          <Switch>
            {Object.values(pages).map((comp, idx) => {
              return <Route key={idx} path={"/" + comp.name} component={comp} />;
            })}
            <Route path="/" component={Home} />
          </Switch>

          <div> </div>
        </Router>
      </div>
      <TrailingCursor containerId="AppContainer" />
    </>
  );
}
