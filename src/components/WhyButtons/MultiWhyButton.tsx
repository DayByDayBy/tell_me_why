import React, { useState } from "react";
import ollama from "ollama/browser";
import fs from 'fs';


interface WhyButtonProps {
  setResponseText: (responseText: string) => void;
  latestResponse: string;
}
const MultiWhyButton: React.FC<WhyButtonProps> = ({
  setResponseText,
  latestResponse,
}) => {
  const [repeatMultiplier, setRepeatMultiplier] = useState(1); // Default repeat multiplier is 1
  const repeatOptions = [1, 10, 100, 1000]; // Available repeat options

  const handleMultiplierChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    setRepeatMultiplier(value);
  };

  const handleButtonClick = async () => {
    const repeatCount = repeatMultiplier * 1;
    const cachedResponses: string[] = [];
    const formattedDateTime = new Date().toISOString().replace(/:/g, '');

    let currentResponse = latestResponse;
    for (let i = 0; i < repeatCount; i++) {
      try {
        const response = await ollama.chat({
          model: "llama3",
          // context: [currentResponse],
          options: {
            temperature: 0.5,
          },
          messages: [
            {
              role: "user",
              content: `you said "${currentResponse}" in less than 100 words, tell me more about that last thing you mentioned.`,
            },
          ],
        });

        currentResponse = response.message.content;
        setResponseText(currentResponse);
        cachedResponses.push(currentResponse);
        
      } catch (error) {
        console.error("An error occurred while fetching response:", error);
        break;
      }
    }

    console.log(cachedResponses);
    const filePath = `output_${formattedDateTime}.txt`; // Define the path to the output file

    fs.writeFile(filePath, cachedResponses.join('\n'), (err) => {
        if (err) {
          console.error('An error occurred while writing to file:', err);
        } else {
          console.log('Output written to file successfully!');
        }
      });
    };


  return (
    <div>
      <button onClick={handleButtonClick}>Why?</button>
      <select value={repeatMultiplier} onChange={handleMultiplierChange}>
        {repeatOptions.map((option) => (
          <option key={option} value={option}>{`${option}x`}</option>
        ))}
      </select>
    </div>
  );
};

export default MultiWhyButton;
