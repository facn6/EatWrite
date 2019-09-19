import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button/Button";

const Home = () => {
  return (
    <div className="App">
      <h1>Project Home</h1>
      <Link to="./list">
        <Button className="green"> ABOUT THE APP </Button>
      </Link>
      <Link to="./list">
        <Button className="green"> FOOD SENSITIVITIES </Button>
      </Link>
      <Link to="./list">
        <Button className="brown"> SIGN-IN </Button>
      </Link>
      <Link to="./list">
        <Button className="brown"> SIGN-UP </Button>
      </Link>
    </div>
  );
};

export default Home;
