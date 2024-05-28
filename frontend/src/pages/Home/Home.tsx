import React, { useState, useEffect } from "react";
import ollama from "ollama/browser";
import WhyButton from "../../components/WhyButtons/WhyButton";
import MultiWhyButton from "../../components/WhyButtons/MultiWhyButton";
import Output from "../../components/Output/Output";
import Contact from "../../components/Contact/Contact";
import { TitleBox } from "./Home.styles";

const Home: React.FC = () => {
  const [responseText, setResponseText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await ollama.chat({
        model: "llama3:70b",
        stream: false,
        options: {
          temperature: 0.95,
        },
        messages: [
          {
            role: "user",
            content:
              "describe a cool concept that most lay-people do not know, in 100 words or less",
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
        <TitleBox>tell me {!responseText ? "something" : "more"}</TitleBox>
        <h2> a needless machine </h2>
        <Output text={responseText} />

        {/* <WhyButton
          setResponseText={setResponseText}
          latestResponse={responseText}
        /> */}
        <MultiWhyButton
          setResponseText={setResponseText}
          latestResponse={responseText}
        />
        
        {/* <MoreButton
          setResponseText={setResponseText}
          latestResponse={responseText}
        /> */}
      </div>

      <Contact />
    </>
  );
};

export default Home;
