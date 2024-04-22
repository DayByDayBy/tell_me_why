import React, { useState } from "react";

const RecursivePromptMachine: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleResponse = () => {

    setPrompt(prevPrompt => prevPrompt ? `${prevPrompt}\n\nUser response: ${response}` : `User response: ${response}`);
  };

  // maybe? not sure about resets
  const handleReset = () => {
    setPrompt("");
    setResponse("");
  };

  return (
    <div>
      <p>{prompt}</p>
      <textarea
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        placeholder="Enter your response..."
      />
      <button onClick={handleResponse}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default RecursivePromptMachine;
