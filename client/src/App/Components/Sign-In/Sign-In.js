import React ,{ useState } from "react";
import "./Sign-In.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
const SignIn = () => {
    const [input, setInput] = React.useState("");
    const [pass, setPass] = React.useState("");

    const UserData = () => {
      console.log("hhh");
    return fetch("/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify("Ayah")
    }) // fetch ends
      .then(function(response) {
        console.log("ayah",response);
        return response.json();
      })
      .then(function(parsed) {
        console.log("Data from the DB:", parsed);
        var results = parsed.rows;
        console.log("Rows from the DB:", results);
});
};

  return (
    <div className="container">
    <div>
    <h1 className="header">SIGN-IN</h1>
    </div>
    <div className="inputcontainer">
      <div className="inputfield">
        <InputField setInput={setInput} input={input}  className="input">
           Insert username
        </InputField>
        </div>
        <div className="inputfield">
          <InputField setInput={setPass} input={pass}  className="input">
           Insert password
        </InputField>
      </div>
      </div>
      <div className="buttons">
      <Link to="./main-menu">
        <Button function={UserData} input={input} className="smallgreen"> SIGN-IN</Button>
      </Link>

      <Link to="./">
        <Button className="smallgreen"> MAIN PAGE </Button>
      </Link>
</div>
    </div>
  );
};

export default SignIn;
