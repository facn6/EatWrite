import React from "react";
import "./About.css";
import Container from "../Container/Container.js";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const About = () => {
  return (
    <div className="about">
      <div>
        <Container className="greenCont">
          <p>Your food choices affect you in more ways than you may realise.</p>
          <p>
            EatWrite helps you to better understand the link between the food
            you eat and the way you feel.
          </p>
          <p>Improve your physical and mental health with three short steps:</p>
        </Container>
      </div>

      <div className="wrapper">
        <div className="column">
          <div>
            <img src="../../../../assets/plate.png" alt="" />{" "}
          </div>

          <div>
            <img src="../../../../assets/happyface.png" alt="" />{" "}
          </div>

          <div>
            <img src="../../../../assets/connection.png" alt="" />{" "}
          </div>
        </div>

        <div className="column">
          <div>1. Record your daily food intake...</div>
          <div>2. ...log your physical and mental state...</div>
          <div> 3. ...see how they relate!</div>
        </div>
      </div>

      <Link to="./">
        <Button className="green"> back </Button>
      </Link>
    </div>
  );
};

export default About;
