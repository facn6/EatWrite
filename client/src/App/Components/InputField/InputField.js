import React from "react";
import "./InputField.css";

const InputField = props => {
  return (
    <div>
      <input
        id="input"
        type={props.type}
        className={props.className}
        placeholder={props.children}
        onInput={e => props.setInput(e.target.value)}
      ></input>
    </div>
  );
};

export default InputField;
