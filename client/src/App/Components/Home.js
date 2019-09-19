import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button/Button";

const Home = () => {
  return (
    <div className="App">
      <h1>Project Home</h1>
      <Link to="./about">
        <Button className="green"> about the app </Button>
      </Link>
      <Link to="./list">
        <Button className="green"> food sensitivities </Button>
      </Link>
      <Link to="./list">
        <Button className="brown"> sign-in </Button>
      </Link>
      <Link to="./list">
        <Button className="brown"> sign-up </Button>
      </Link>
    </div>
  );
};

export default Home;
