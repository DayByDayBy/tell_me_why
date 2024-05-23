

// just some boilerplate/holding to remind me to work on a groq-based add-on, feel free to ignore 





// import { GroqClient } from '@groq/client';
// import { LLaMA } from '@llama/model';

// const groqClient = new GroqClient({
//   apiKey: 'YOUR_API_KEY',
//   projectId: 'YOUR_PROJECT_ID',
// });

// const llamaModel = new LLaMA();

// const generateText = async (prompt: string) => {
//   const query = `SELECT * FROM llamas WHERE prompt = "${prompt}"`;
//   const result = await groqClient.query(query);
//   const text = result.data[0].text;
//   return text;
// };

// const App = () => {
//   const [prompt, setPrompt] = useState('');
//   const [text, setText] = useState('');

//   const handleGenerateText = async () => {
//     const text = await generateText(prompt);
//     setText(text);
//   };

//   return (
//     <div>
//       <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
//       <button onClick={handleGenerateText}>Generate Text</button>
//       <p>{text}</p>
//     </div>
//   );
// };