import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About/About.js";
import FoodSensitivities from "./Components/Food-Sensitivities/Food-Sensitivities.js";
import SignIn from "./Components/Sign-In/Sign-In.js";
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/food-sensitivities" component={FoodSensitivities} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
};
export default App;
