# an ollama-based LLM botherer


made using vite/react, and [ollama's javascript library](https://ollama.com/blog/python-javascript-libraries)



` pnpm install ollama `


```
import ollama from 'ollama'

const response = await ollama.chat({
  model: 'model name goes here',
  messages: [{ role: 'user', content: 'prompt goes here' }],
})
```


currently running locally as a 'fun fact' interface, an alternative to the command line ollama models i have installed 

