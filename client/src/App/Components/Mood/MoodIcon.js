import "./MoodIcon.css";
import React, { useState, useEffect } from "react";

const MoodIcon = props => {
  const func = () =>
    setMood(
      <div
        class="selected"
        onClick={() => {
          props.setState(0);
        }}
      >
        {props.image}
      </div>
    );
  const func2 = () =>
    setMood(
      <div
        onClick={() => {
          props.setState(props.number);
        }}
      >
        {props.image}
      </div>
    );

  const [mood, setMood] = React.useState(
    <div
      onClick={() => {
        props.setState(props.number);
      }}
    >
      {props.image}
    </div>
  );

  useEffect(() => {
    if (props.state === 0 || props.state != props.number) func2();
    else if (props.state === props.number) func();
  }, [props.state]);

  return (
    <div>
      {mood}
      <p>{props.state}</p>
    </div>
  );
};

export default MoodIcon;
