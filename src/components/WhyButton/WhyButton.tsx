import React, { MouseEvent, useState } from "react";
import { Ollama } from "ollama";

const WhyButton = () => {

  const response = await Ollama.chat({
    model: 'llama2',
    messages: [{ role: 'user', content: 'Why is the sky blue?' }],
  })
  console.log(response.message.content)


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
