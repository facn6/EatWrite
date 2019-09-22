import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import List from "./Components/List";
import About from "./Components/About/About.js";
import FoodSensitivities from "./Components/Food-Sensitivities/Food-Sensitivities.js";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/about" component={About} />
        <Route path="/food-sensitivities" component={FoodSensitivities} />
      </Switch>
    </div>
  );
};
export default App;
