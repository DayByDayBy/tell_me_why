import React, { useState } from "react";
import WhyButton from "../../components/WhyButton/WhyButton";
import Output from "../../components/Output/Output";

const Home: React.FC = () => {
  const [responseText, setResponseText] = useState('');

  return (
    <div>
      <Output text={responseText} />
      <WhyButton
        setResponseText={setResponseText}
        latestResponse={responseText}
      />
    </div>
  );
};

export default Home;
