import React, { useState } from "react";
import ollama from "ollama/browser";

const PromptExpansionApp: React.FC = () => {
  const initialPrompt = "Hardcoded initial prompt";
  const [prompt, setPrompt] = useState(initialPrompt);
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    const responseEmbedding = await ollama.embeddings({
      model: "nomic-embed-text",
      prompt: response,
    });
    const additionalText = "additional text selected based on embedding";

    const expandedPrompt = `${prompt} ${additionalText}`;

    setPrompt(expandedPrompt);
  };

  return (
    <div>
      <div>
        <p>Prompt:</p>
        <p>{prompt}</p>
      </div>
      <div>
        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>Add to Prompt</button>
      </div>
    </div>
  );
};

export default PromptExpansionApp;
