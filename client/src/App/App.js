import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import List from "./Components/List";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
      </Switch>
    </div>
  );
};
export default App;
