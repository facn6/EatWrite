import React from "react";
import "./Mood.css";
import MoodIcon from "./MoodIcon.js";

// const Mood = props => {
//   return (
//     <div class="wrapper">
//       <div>
//         <MoodIcon image=<img src="../../../../assets/confused.png" /> />
//         <MoodIcon image=<img src="../../../../assets/arrogant.png" /> />
//         <MoodIcon image=<img src="../../../../assets/sad.png" /> />
//       </div>
//       <MoodIcon image=<img src="../../../../assets/happy.png" /> />
//       <MoodIcon image=<img src="../../../../assets/tongue.png" /> />
//     </div>
//   );
// };

const Form = props => {
  const func = () =>
    setMood(
      <div class={props.class} onClick={func2}>
        {<img src="../../../../assets/sad.png" />}
      </div>
    );
  const func2 = () =>
    setMood(
      <div onClick={func}>{<img src="../../../../assets/sad.png" />}</div>
    );
  const [mood, setMood] = React.useState(
    <div class="">{<img src="../../../../assets/sad.png" />}</div>
  );
  const handleChange = event => setMood(event.target.value);
  return (
    <form>
      <label htmlFor="apple">{mood}</label>
      <input
        type="radio"
        name="fruit" // name groups the inputs
        value={mood}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="fruit"
        value=<img src="../../../../assets/sad.png" />
        onChange={handleChange}
      />
      <input
        type="radio"
        name="fruit"
        value=<img src="../../../../assets/happy.png" />
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
