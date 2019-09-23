import React from "react";
import "./Sign-In.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
const SignIn = () => {
  return (
    <div className="container">
    <div>
    <h1 className="header">SIGN-IN</h1>
    </div>
    <div className="inputcontainer">
      <div className="inputfield">
        <InputField className="input">
           Insert username
        </InputField>
        </div>
        <div className="inputfield">
          <InputField  className="input">
           Insert password
        </InputField>
      </div>
      </div>
      <div className="buttons">
      <Link to="./main-menu">
        <Button className="smallgreen"> SIGN-IN</Button>
      </Link>

      <Link to="./">
        <Button className="smallgreen"> MAIN PAGE </Button>
      </Link>
</div>
    </div>
  );
};

export default SignIn;
