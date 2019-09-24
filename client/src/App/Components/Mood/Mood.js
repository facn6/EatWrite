import React from "react";
import "./Mood.css";
import MoodIcon from "./MoodIcon.js";
import Button from "../Button/Button";

const Mood = () => {
  const [state, setState] = React.useState(0);
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
        mood: state,
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
            state={state}
            setState={setState}
            number="1"
            image=<img src="../../../../assets/tongue.png" />
          />
          <MoodIcon
            state={state}
            setState={setState}
            number="2"
            image=<img src="../../../../assets/arrogant.png" />
          />
          <MoodIcon
            state={state}
            setState={setState}
            number="3"
            image=<img src="../../../../assets/sad.png" />
          />
        </div>
        <div>
          <MoodIcon
            state={state}
            setState={setState}
            number="4"
            image=<img src="../../../../assets/happy.png" />
          />
          <MoodIcon
            state={state}
            setState={setState}
            number="5"
            image=<img src="../../../../assets/confused.png" />
          />
          <MoodIcon
            state={state}
            setState={setState}
            number="6"
            image=<img src="../../../../assets/angry.png" />
          />
        </div>
        <div>
          <MoodIcon
            state={state}
            setState={setState}
            number="7"
            image=<img src="../../../../assets/peaceful.png" />
          />
          <MoodIcon
            state={state}
            setState={setState}
            number="8"
            image=<img src="../../../../assets/stressed.png" />
          />
        </div>
      </div>
      <Button function={GetData} className="green">
        {" "}
        submit{" "}
      </Button>
    </div>
  );
};

export default Mood;
