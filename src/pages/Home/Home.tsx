import React, {useState} from 'react';
import WhyButton from '../../components/WhyButton/WhyButton';
import Output from '../../components/Output/Output';


const Home = () =>{
    const [responseText, setResponseText] = useState('');

    return (
        <div>
            <Output responseText = {responseText}/>
            <WhyButton setResponseText = {setResponseText}/>
        </div>
    )
}


export default Home;