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
    setCount(count + 1);

};

  return <button onClick={ handleClick }>
          {(count!=0) ? "ok, but why?" : "why?"}
    </button>;
};

export default WhyButton;