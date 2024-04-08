import React, { MouseEvent } from "react";

const handleClick = (event: MouseEvent<HTMLButtonElement>) => {


  console.log(event.clientX, event.clientY);


};

const WhyButton = () => {
  return (
    <button onClick={handleClick}>
      why, tho
    </button>
  );
};

export default WhyButton