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
  useEffect(() => {
    Object.values(pages).map((el) => {
      console.log(el.name);
    });
  });
  // console.log(Object(pages).entries);
  // Object(pages)
  //   .keys()
  //   .map((el: any) => console.log(el));
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
              {/* <NavLink className="nav-link" exact activeClassName="active" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" exact activeClassName="active" to="morpion">
                Morpion
              </NavLink>
              <NavLink className="nav-link" exact activeClassName="active" to="qpuc">
                QPUC
              </NavLink>
              <NavLink className="nav-link" exact activeClassName="active" to="login">
                Login
              </NavLink>
              <NavLink className="nav-link" exact activeClassName="active" to="authAndGet">
                auth Get
              </NavLink>
              <NavLink className="nav-link" exact activeClassName="active" to="signup">
                Sign up
              </NavLink>
              <NavLink className="nav-link" exact activeClassName="active" to="fetch">
                Fetch
              </NavLink>
              <NavLink className="nav-link" exact activeClassName="active" to="raspberryPage">
                RPi
              </NavLink>
              <NavLink className="nav-link" to="post">
                Post
              </NavLink> */}

              <MyLogo className="mooving-logo" />
            </Nav>
          </Navbar>

          <Switch>
            {Object.values(pages).map((comp) => {
              return <Route path={"/" + comp.name} component={comp} />;
            })}
            {/* <Route path="/morpion" component={TicTacToeGame} />
            <Route path="/qpuc" component={Qpuc} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/authAndGet" component={AuthAndGet} />
            <Route path="/FetchExample" component={FetchExample} />
            <Route path="/post" component={PostExample} />
            <Route path="/raspberryPage" component={RPI} />
            <Route exact path="/" component={Home} /> */}
          </Switch>

          <div> </div>
        </Router>
      </div>
      <TrailingCursor containerId="AppContainer" />
    </>
  );
}
