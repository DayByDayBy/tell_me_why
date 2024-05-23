import React, { useState } from "react";
import ollama from "ollama/browser";
import { Button, PromptCount } from "./WhyButton.styles";

// console.log(ollama);

interface WhyButtonProps {
  setResponseText: (responseText: string) => void;
  latestResponse: string;
}

const WhyButton: React.FC<WhyButtonProps> = ({
  setResponseText,
  latestResponse,
}) => {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    const response = await ollama.chat({
      model: "llama3",
      // context: [latestResponse],
      options:{
        temperature: 0.5,
      },      messages: [
        {
          role: "user",
          content:
          `you said 
          "${latestResponse}"; 
          in less than 100 words, tell me more about that last thing you mentioned.`

        },
      ],
    });

    setResponseText(response.message.content);
    setCount(count + 1);
  };

  return (
    <>
    <Button onClick={handleClick}>
      {count != 0 ? "go on" : "tell me more"}
    </Button>
     <PromptCount>{count}</PromptCount>
    </>
  );
};

export default WhyButton;
