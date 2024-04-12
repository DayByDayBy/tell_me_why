import React, { MouseEvent, useState } from "react";
import { Ollama } from "ollama";

const WhyButton = ({ setResponseText }) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = async () => {
    const response = await Ollama.chat({
      model: 'llama2',
      messages: [{ role: 'user', content: 'Why is the sky blue?' }],
});

    setResponseText(response.message.content);

};

    (event: MouseEvent<HTMLButtonElement>) => {
    setPressed(!pressed);
    console.log(event.clientX, event.clientY);
  };
  return <button onClick={handleClick}>
          {pressed ? "but why, tho?" : "why?"}
    </button>;
};

export default WhyButton;