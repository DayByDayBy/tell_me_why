import React, { useState } from "react";
import { ollama } from "ollama/browser";

const WhyButton = ({ setResponseText }) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = async () => {
    const response = await ollama.chat({
      model: 'llama2',
      messages: [{ role: 'user', content: 'Why is the sky blue?' }],
});

    setResponseText(response.message.content);
    setPressed(!pressed);

};


  return <button onClick={ handleClick }>
          {pressed ? "but why, tho?" : "why?"}
    </button>;
};

export default WhyButton;