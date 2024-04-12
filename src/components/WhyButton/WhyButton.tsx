import React, { useState } from "react";
import ollama from 'ollama/browser';

console.log(ollama);

interface WhyButtonProps{
  setResponseText: (responseText: string) => void;
}

const WhyButton: React.FC<WhyButtonProps>= ({ setResponseText }) => {
  const [count, setCount] = useState(0);
  
  const handleClick = async () => {
    const response = await ollama.chat({
      model: 'llama2',
      messages: [{ role: 'user', content: 'Why is the sky blue?' }],
});

    setResponseText(response.message.content);
    setCount();

};

  return <button onClick={ handleClick, setCount }>
          {pressed ? "but why, tho?" : "why?"}
    </button>;
};

export default WhyButton;