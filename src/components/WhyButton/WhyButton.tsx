import React, { useState, useEffect } from "react";
import ollama from "ollama/browser";

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

  useEffect(() => {
    async function fetchData() {
      const response = await ollama.chat({
        model: "llama2",
        stream: false,
        messages: [
          {
            role: "user",
            content: "Tell me a weird fact, something that i might not know.",
          },
        ],
      });
      setResponseText(response.message.content);
    }
    fetchData();
  }, [latestResponse, setResponseText]);

  const handleClick = async () => {
    const response = await ollama.chat({
      model: "llama2",
      messages: [
        {
          role: "user",
          content: "okay, so i understand that" + latestResponse + " But why?",
        },
      ],
    });

    setResponseText(response.message.content);
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      {count != 0 ? "ok, but why?" : "why?"}
    </button>
  );
};

export default WhyButton;
