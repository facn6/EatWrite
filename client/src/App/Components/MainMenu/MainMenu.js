import React from "react";
import "./MainMenu.css";
import Container from "../Container/Container.js";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const MainMenu = () => {
  return (
    <div className="main">
      <Link to="./" style={{ textDecoration: "none" }}>
        <Container className="greenContFlex">
          <div>
            <img src="../../../../assets/groceries.png" alt="" />
          </div>
          <div>add a meal</div>
        </Container>
      </Link>

      <Link to="./" style={{ textDecoration: "none" }}>
        <Container className="brownContFlex">
          <div>
            <img src="../../../../assets/thermometer.png" alt="" />
          </div>
          <div>symptoms</div>
        </Container>
      </Link>

      <Link to="./" style={{ textDecoration: "none" }}>
        <Container className="brownContFlex">
          <div>
            <img src="../../../../assets/smiling.png" alt="" />
          </div>
          <div>mood</div>
        </Container>
      </Link>

      <Link to="./" style={{ textDecoration: "none" }}>
        <Container className="greenContFlex">
          <div>
            <img src="../../../../assets/analytics.png" alt="" />
          </div>
          <div>add a meal</div>
        </Container>
      </Link>

      <Link to="./">
        <Button className="smallgreen">back</Button>
      </Link>
    </div>
  );
};

export default MainMenu;
