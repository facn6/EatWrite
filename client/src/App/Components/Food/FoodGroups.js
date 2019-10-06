import React from "react";
import "./Food.css";
import FoodIcon from "./FoodIcon.js";
import Button from "../Button/Button";

const FoodGroups = () => {
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
      <h1>Choose or Add Food Items</h1>
      <div className="wrapper">
        <div>
          <FoodIcon
            state={state}
            setState={setState}
            number="Thrilled"
            image=<img src="../../../../assets/egg.png" />
          />
          <FoodIcon
            state={state}
            setState={setState}
            number="Concerned"
            image=<img src="../../../../assets/coffee.png" />
          />
          <FoodIcon
            state={state}
            setState={setState}
            number="Sad"
            image=<img src="../../../../assets/serving-dish.png" />
          />
        </div>
        <div>
          <FoodIcon
            state={state}
            setState={setState}
            number="Happy"
            image=<img src="../../../../assets/cheese.png" />
          />
          <FoodIcon
            state={state}
            setState={setState}
            number="Confused"
            image=<img src="../../../../assets/croissant.png" />
          />
          <FoodIcon
            state={state}
            setState={setState}
            number="Angry"
            image=<img src="../../../../assets/serving-dish.png" />
          />
        </div>
        <div>
          <FoodIcon
            state={state}
            setState={setState}
            number="Peaceful"
            image=<img src="../../../../assets/bread.png" />
          />
          <FoodIcon
            state={state}
            setState={setState}
            number="Stressed"
            image=<img src="../../../../assets/tea.png" />
          />
          <FoodIcon
            state={state}
            setState={setState}
            number="Stressed"
            image=<img src="../../../../assets/serving-dish.png" />
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

export default FoodGroups;
