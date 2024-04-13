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
        messages: [
          {
            role: "user",
            content: "what makes the sun shine?",
          },
        ],
      });
      setResponseText(response.message.content);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>tell me why</h1>
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
