import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About/About.js";
import Mood from "./Components/Mood/Mood.js";

import MainMenu from "./Components/MainMenu/MainMenu.js";
import SelectSymptom from "./Components/SelectSymptom/SelectSymptom.js";

import FoodSensitivities from "./Components/Food-Sensitivities/Food-Sensitivities.js";
import SignIn from "./Components/Sign-In/Sign-In.js";
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mood" component={Mood} />

        <Route path="/food-sensitivities" component={FoodSensitivities} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/select-symptom" component={SelectSymptom} />
        <Route path="/main-menu" component={MainMenu} />
      </Switch>
    </div>
  );
};
export default App;
