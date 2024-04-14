import React, { useState, useEffect } from "react";
import ollama from "ollama/browser";
import WhyButton from "../../components/WhyButton/WhyButton";
import Output from "../../components/Output/Output";

const Home: React.FC = () => {
  const [responseText, setResponseText] = useState('');


  useEffect(() => {
    async function fetchData() {
      const response = await ollama.chat({
        model: "mistral",
        stream: false,
        max_tokens: 20,
        options:{
          temperature: 0.667,
        },
        messages: [
          {
            role: "user",
            content: "describe a concept most lay-people do not know, in 100 words or less",
          },
        ],
      });
      setResponseText(response.message.content);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>tell me {! responseText ? 'something' : 'why'}</h1>
      <h2> a needless machine </h2>
      <Output text={responseText} />
      <WhyButton
        setResponseText={setResponseText}
        latestResponse={responseText}
      />
    </div>
  );
};

export default Home;
