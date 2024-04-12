import React, { useState, useEffect } from "react";
import ollama from 'ollama/browser';

console.log(ollama);

interface WhyButtonProps{
  setResponseText: (responseText: string) => void;
  latestResponse: string;
}

const WhyButton: React.FC<WhyButtonProps>= ({ setResponseText, latestResponse }) => {
  const [count, setCount] = useState(0);
  const [prompt, setPrompt] = useState('Tell me a crazy fact, something that i might not know.');

  useEffect(() => {
    setResponseText(latestResponse);
  }, [ latestResponse, setResponseText ]);

   
  const handleClick = async () => {
    const response = await ollama.chat({
      model: 'llama2',
      messages: [{ role: 'user', content: prompt }],
});

    setResponseText(response.message.content);
    setPrompt('okay, so i understand that' + response.message.content + ' But why?')
    setCount(count + 1);

};

  return <button onClick={ handleClick }>
          {(count!=0) ? "ok, but why?" : "why?"}
    </button>;
};

export default WhyButton;