# an ollama-based LLM botherer


made using vite/react, and [ollama's javascript library](https://ollama.com/blog/python-javascript-libraries)


to run it, you'll need to download and run the [ollama application](https://ollama.com/download).

(go grab it even if you aren't running this, it also lets you run and test models from the command line, and is great fun to play with)



_______________________________________________________________________________________________



` pnpm install ollama `


```
import ollama from 'ollama'

const response = await ollama.chat({
  model: 'model name goes here',
  messages: [{ role: 'user', content: 'prompt goes here' }],
})
```



i am currently running the code found here locally as a sort of 'fun fact' interface, an alternative to the command line ollama models i have installed that i can have open as a tab. i've been throwing different model names in, occasionally changing the initial prompt, etc, an generally seeing how to make it do interesting things





