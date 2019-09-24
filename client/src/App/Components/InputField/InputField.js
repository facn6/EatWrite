import React from "react";
import "./InputField.css";

const InputField = props => {
  return (
    <div>
      <input type={"text"} className={props.className} placeholder={props.children}/>
    </div>
  );
};

export default InputField;
