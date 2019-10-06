import "./MoodIcon.css";
import React, { useState, useEffect } from "react";

const MoodIcon = props => {
  const selectMood = () =>
    setIcon(
      <div
        className="selected"
        onClick={() => {
          props.setMood("");
        }}
      >
        {props.image}
      </div>
    );
  const unSelectMood = () =>
    setIcon(
      <div
        onClick={() => {
          props.setMood(props.moodChosen);
        }}
      >
        {props.image}
      </div>
    );

  const [icon, setIcon] = React.useState(
    <div
      onClick={() => {
        props.setMood(props.moodChosen);
      }}
    >
      {props.image}
    </div>
  );

  useEffect(() => {
    if (props.mood != props.moodChosen) unSelectMood();
    else if (props.mood === props.moodChosen) selectMood();
  }, [props.mood]);

  return (
    <div>
      {icon}
      <p>{props.mood}</p>
    </div>
  );
};

export default MoodIcon;
