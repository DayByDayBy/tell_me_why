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
      model: "llama2",
      // context: [latestResponse],
      messages: [
        {
          role: "user",
          content: "i undertand that " + latestResponse + ", but why?",
        },
      ],
    });

    setResponseText(response.message.content);
    setCount(count + 1);
  };

  return (
    <Button onClick={handleClick}>
      {count != 0 ? "ok, but why?" : "why?"}
    </Button>
  );
};

export default WhyButton;
