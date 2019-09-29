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
      <Link to="./food-sensitivities">
        <Button className="green"> food sensitivities </Button>
      </Link>
      <Link to="./sign-in">
        <Button className="brown"> sign-in </Button>
      </Link>
      <Link to="./sign-up">
        <Button className="brown"> sign-up </Button>
      </Link>
      <Link to="./chart">
        <Button className="brown"> chart </Button>
      </Link>
      <Link to="./select-symptom">
        <Button className="brown"> symptom </Button>
      </Link>
    </div>
  );
};

export default Home;
