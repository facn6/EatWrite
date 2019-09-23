import React from "react";
import "./MoodImage.css";

const MoodImage = props => {
  return (
    <div>
      <img class="avatar-img" src={props.url} />
    </div>
  );
};

export default AvatarImage;
