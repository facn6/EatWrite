import React from "react";
import "./Food-Sensitivities.css";
import Container from "../Container/Container.js";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const FoodSensitivities = () => {
  return (
    <div>
    <h1 className="header"> About Food Sensitivity</h1>
      <div>
        <Container className="greenCont">
          <p>What’s the difference between being allergic to a food and being sensitive or intolerant to it?</p>
          <p>
          The difference between a food allergy and sensitivity is the body’s response.
           When you have a food allergy, your immune system causes the reaction.
           If you have a food sensitivity or intolerance, the reaction is triggered by the digestive system.
          </p>
          <p>Symptoms of food intolerance include gas, bloating, diarrhea, constipation, cramping, and nausea.
             Symptoms of food allergy include hives, swelling, itching, anaphylaxis, and dizziness.</p>
        </Container>
      </div>
      <div className="buttons">
      <Link to="./">
        <Button className="darkbrown"> MAIN PAGE </Button>
      </Link>

      <Link to="./sign-up">
        <Button className="darkbrown"> SIGN-UP </Button>
      </Link>
</div>
    </div>
  );
};

export default FoodSensitivities;
