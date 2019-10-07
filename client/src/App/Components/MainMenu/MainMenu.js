import React from "react";
import "./MainMenu.css";
import Container from "../Container/Container.js";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const MainMenu = () => {
  return (
    <div>
      <div className="main">
        <Link to="./" style={{ textDecoration: "none" }}>
          <Container className="greenContFlex">
            <div>
              <img src="../../../../assets/groceries1.png" alt="" />
            </div>
            <div>add a meal</div>
          </Container>
        </Link>

        <Link to="./" style={{ textDecoration: "none" }}>
          <Container className="brownContFlex">
            <div>
              <img src="../../../../assets/medical-history.png" alt="" />
            </div>
            <div>symptoms</div>
          </Container>
        </Link>

        <Link to="/mood" style={{ textDecoration: "none" }}>
          <Container className="brownContFlex">
            <div>
              <img src="../../../../assets/happy3.png" alt="" />
            </div>
            <div>mood</div>
          </Container>
        </Link>

        <Link to="/select-symptom" style={{ textDecoration: "none" }}>
          <Container className="greenContFlex">
            <div>
              <img src="../../../../assets/analysis.png" alt="" />
            </div>
            <div>track & visualize</div>
          </Container>
        </Link>
      </div>

      <Link to="./">
        <Button className="smallgreen">back</Button>
      </Link>
    </div>
  );
};

export default MainMenu;
