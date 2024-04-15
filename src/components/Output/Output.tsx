import React from "react";
import { TextContainer, LoadingP, ResponseP } from "./Output.styles";

interface OutputProps {
  text: string;
}

const Output: React.FC<OutputProps> = ({ text }) => {
  return (
    <TextContainer>
      
      {text ? (
        <ResponseP className="fade-in"> {text} </ResponseP>
      ) : (
        <>
          <LoadingP className="fadeOut" >loading..... </LoadingP>
          <LoadingP className="fadeOut" >(it can take a moment or two) </LoadingP>
        </>
      )}
    </TextContainer>
  );
};

export default Output;
