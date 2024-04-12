import React, { useState } from 'react';
import { TextContainer } from './Output.styles';

interface ResponseText {
  text: string;
}


const Output: React.FC<ResponseText> = () => {
  const [responseText, setResponseText] = useState('');

        return (
      <TextContainer>
       
       {responseText ? (
        <p>{responseText}</p>
       ) : (
        <p>text goes here, here goes text: tell you what, maybe even some stuff worth reading eventually, after some fiddling and tweaking</p>
       )}

      </TextContainer>
    );
}

export default Output;
