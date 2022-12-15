import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
    const prompt = 
    `
    crie um texto curto sobre mim. Em primeira pessoa. em estilo Profissional. Para colocar em um currículo.
    vaga: ${req.body.userInputJob} 
    ${req.body.userInput}
    texto:
    `;
  // Run first prompt
  console.log(`API: ${prompt}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${prompt}`,
    temperature: 0.7,
    max_tokens: 250,
  });
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};
console.log('fuiiiiiii');
export default generateAction;