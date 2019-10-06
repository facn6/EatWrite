import "./MoodIcon.css";
import React, { useState, useEffect } from "react";

const MoodIcon = props => {
  const selectMood = () => setSelected("selected");
  const unSelectMood = () => setSelected("");

  const [selected, setSelected] = React.useState("");
  console.log("Selected", selected);
  console.log("Mood", props.mood);

  useEffect(() => {
    if (props.mood != props.moodChosen) unSelectMood();
    else if (props.mood === props.moodChosen) selectMood();
  }, [props.mood]);

  return (
    <div>
      <div
        className={selected}
        onClick={() => {
          {
            selected ? unSelectMood() : selectMood();
            selected ? props.setMood("") : props.setMood(props.moodChosen);
          }
        }}
      >
        {props.image}
        <div>{props.moodChosen}</div>
      </div>
    </div>
  );
};

export default MoodIcon;
