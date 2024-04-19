import React, { useState, useEffect } from "react";
import ollama from "ollama/browser";
import WhyButton from "../../components/WhyButton/WhyButton";
import Output from "../../components/Output/Output";
import Contact from "../../components/Contact/Contact";
import { TitleBox } from "./Home.styles";
import DropDown from "../../components/DropDown/DropDown";

const Home: React.FC = () => {
  const [responseText, setResponseText] = useState('');


  useEffect(() => {
    async function fetchData() {
      const response = await ollama.chat({
        model: "mistral",
        stream: false,
        options:{
          temperature: 0.7,
        },
        messages: [
          {
            role: "user",
            content: "describe a cool concept that most lay-people do not know, in 100 words or less",
          },
        ],
      });
      setResponseText(response.message.content);
    }
    fetchData();
  }, []);

  return (
    <>
    <div>
    

      <TitleBox>tell me {! responseText ? 'something' : 'more'}</TitleBox>
      <h2> a needless machine </h2>
      <Output text={responseText} />
      <WhyButton
        setResponseText={setResponseText}
        latestResponse={responseText}
      />

    </div>

    <Contact />

  
    </>
  );
};

export default Home;
