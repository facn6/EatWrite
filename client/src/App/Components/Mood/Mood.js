import React from "react";
import "./Mood.css";
import MoodIcon from "./MoodIcon.js";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Mood = props => {
  const [mood, setMood] = React.useState("");
  const [input, setInput] = React.useState("");
  const [inputTime, setInputTime] = React.useState("");

  const GetData = () => {
    return fetch("/logmood", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mood: mood,
        date: input,
        time: inputTime
      })
    })
      .then(response => console.log("Response"))
      .then(responseText => {})
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="mood">
      <div className="input">
        <div>
          <input
            type="date"
            value={input}
            onInput={e => setInput(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="time"
            value={inputTime}
            onInput={e => setInputTime(e.target.value)}
          ></input>
        </div>
      </div>
      <h1>Today I feel... </h1>
      <div className="wrapper">
        <div>
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Thrilled"
            image=<img src="../../../../assets/tongue.png" />
          />
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Concerned"
            image=<img src="../../../../assets/arrogant.png" />
          />
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Sad"
            image=<img src="../../../../assets/sad.png" />
          />
        </div>
        <div>
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Happy"
            image=<img src="../../../../assets/happy.png" />
          />
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Confused"
            image=<img src="../../../../assets/confused.png" />
          />
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Angry"
            image=<img src="../../../../assets/angry.png" />
          />
        </div>
        <div>
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Peaceful"
            image=<img src="../../../../assets/peaceful.png" />
          />
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Stressed"
            image=<img src="../../../../assets/stressed.png" />
          />
        </div>
      </div>
      <Link to="./main-menu">
        <Button function={GetData} className="green">
          {" "}
          submit{" "}
        </Button>
      </Link>
    </div>
  );
};

export default Mood;
