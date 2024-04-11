// import {useState, useContext, createContext } from 'react';
// import React from 'react';
// import { TextContainer } from './Output.styles';


// const Output: React.FC<ResponseText> = () => {
//     const [pressed, setPressed] = useState(false);
//     return 
//     <TextContainer>
//     {!pressed
//       ? <p>text goes here, here goes text: tell you what, maybe even some stuff worth reading eventually, after some fiddling and tweaking</p>
//       : <p>you can press it if you want, but it's just a ternary with more placeholder text to make it feel like something happened</p>
//     }
//     </TextContainer>
// }

// export default Output;



import React from 'react';
import { TextContainer } from './Output.styles';
// import Ollama from 'ollama';

interface ResponseText {
  text: string;
}


const Output: React.FC<ResponseText> = () => {
        return (
      <TextContainer>
       

          <p>text goes here, here goes text: tell you what, maybe even some stuff worth reading eventually, after some fiddling and tweaking</p>

      </TextContainer>
    );
}

export default Output;
