import React, { useState } from 'react';
import { TextContainer } from './Output.styles';

interface OutputProps {
  text: string;
}

const Output: React.FC<OutputProps> = ({text}) => {
  const [responseText] = useState('');

        return (
      <TextContainer>
       
       {text ? (
        <p> { text } </p>
       ) : (
        <>
        <p>loading......</p>
        <br></br>
        <p>(it can take a moment) </p>
        </>
       )}

      </TextContainer>
    );
}

export default Output;



