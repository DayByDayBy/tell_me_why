import React from "react";
import ollama from "ollama/browser";

interface MoreButtonProps {
  setResponseText: (responseText: string) => void;
  latestResponse: string;
}

const MoreButton: React.FC<MoreButtonProps> = ({
  setResponseText,
  latestResponse,
}) => {
  const handleClick = async () => {
    const response = await ollama.embeddings({
      model: "nomic-embed-text",
      prompt: latestResponse,
    });

    console.log("Embedding generated:", response);

    setResponseText(JSON.stringify(response));
  };

  return (
    <button onClick={handleClick}>
      MoreButton
    </button>
  );
};

export default MoreButton;
