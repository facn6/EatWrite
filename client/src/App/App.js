import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About/About.js";
import Mood from "./Components/Mood/Mood.js";

import FoodSensitivities from "./Components/Food-Sensitivities/Food-Sensitivities.js";
import SignIn from "./Components/Sign-In/Sign-In.js";

const App = () => {
  const [state, setState] = React.useState(0);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/mood"
          setState={setState}
          state={state}
          component={Mood}
        />

        <Route path="/food-sensitivities" component={FoodSensitivities} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
};
export default App;
