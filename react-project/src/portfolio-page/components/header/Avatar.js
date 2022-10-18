import React from "react";

// TODO: avatar will contain picture and full name

const Avatar = () => {
  return (
    <div className="avatar-container">
      <span role="presentation" aria-labelledby="bearded man icon">
        🧔
      </span>
      <p className="heading header-text">alexander oweka</p>
    </div>
  );
};

export default Avatar;
