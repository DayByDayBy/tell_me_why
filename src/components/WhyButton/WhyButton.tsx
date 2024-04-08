import React, { MouseEvent, useState } from "react";

const WhyButton = () => {
  const [pressed, setPressed] = useState(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setPressed(!pressed);
    console.log(event.clientX, event.clientY);
  };
  return <button onClick={handleClick}>
          {pressed ? "but why, tho?" : "why?"}
    </button>;
};

export default WhyButton;
