import React, { useState, useEffect } from "react";
import ollama from "ollama/browser";
import { Button } from "./WhyButton.styles";

console.log(ollama);

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
      model: "mistral",
      // context: [latestResponse],
      messages: [
        {
          role: "user",
          content: latestResponse + ' is interesting, tell me more. stay under 100 words.',
        },
      ],
    });

    setResponseText(response.message.content);
    setCount(count + 1);
  };

  return (
    <Button onClick={handleClick}>
      {count != 0 ? "go on" : "tell me more"}
    </Button>
  );
};

export default WhyButton;
