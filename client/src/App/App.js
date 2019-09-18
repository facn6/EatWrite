import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/header/header";



const App = () => {
  return (
    <Router>
      <Route component={Header} />
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/inspiration" exact component={InspirationPage} />
      <Route path="/regform" exact component={Regform} />
      <Route path="/about" exact component={About} />
      <Route path="/profile" exact component={Profile} />

    </Router>
  );
};

export default App;
