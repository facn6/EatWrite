import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import List from "./Components/List";
import About from "./Components/About/About.js";
import Mood from "./Components/Mood/Mood.js";

const App = () => {
  const [state, setState] = React.useState(0);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/about" component={About} />
        <Route
          path="/mood"
          setState={setState}
          state={state}
          component={Mood}
        />
      </Switch>
    </div>
  );
};
export default App;
