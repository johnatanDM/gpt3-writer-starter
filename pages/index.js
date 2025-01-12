import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const Home = () => {

  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  const [userInputJob, setUserInputJob] = useState('');
  const onUserChangedJob = (event) => {
    setUserInputJob(event.target.value);
  };

/*   const [userInputXP, setUserInputXP] = useState('');
  const onUserChangedXP = (event) => {
    setUserInputXP(event.target.value);
  };

  const [userInputEducation, setUserInputEducation] = useState('');
  const onUserChangedEducation = (event) => {
    setUserInputEducation(event.target.value);
  };

  const [userInputLanguages, setUserInputLanguages] = useState('');
  const onUserChangedLanguages = (event) => {
    setUserInputLanguages(event.target.value);
  };

  const [userInputDigitalHabilities, setUserInputDigitalHabilities] = useState('');
  const onUserChangedDigitalHabilities = (event) => {
    setUserInputDigitalHabilities(event.target.value);
  }; */

  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput, userInputJob }),
    });
  
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)
  
    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Melhore seu currículo com Inteligência Artificial</h1>
          </div>
          <div className="header-subtitle">
            <h2>Automatize a criação da seção 'Sobre Mim' do seu currículo, adicionando informações sobre experiência profissional, educação, competências linguísticas e digitais, habilidades e projetos pessoais.</h2>
          </div>
        </div>
        <div className="prompt-container">
          <input
            placeholder='Escreva a vaga para a qual está aplicando'
            className='prompt'
            value={userInputJob}
            onChange={onUserChangedJob}
          />;
          {/* <input
            placeholder='Escreva a vaga para a qual está aplicando'
            className='prompt-box'
            value={userInputJob}
            onChange={onUserChangedJob}
          />;
          <input
            placeholder='Escreva a vaga para a qual está aplicando'
            className='prompt-box'
            value={userInputJob}
            onChange={onUserChangedJob}
          />;
          <input
            placeholder='Escreva a vaga para a qual está aplicando'
            className='prompt-box'
            value={userInputJob}
            onChange={onUserChangedJob}
          />;
          <input
            placeholder='Escreva a vaga para a qual está aplicando'
            className='prompt-box'
            value={userInputJob}
            onChange={onUserChangedJob}
          />; */}
          <textarea 
            placeholder="Experiência profissional, educação, competências linguísticas e digitais, habilidades e projetos pessoais" 
            className="prompt-box" 
            value={userInput}
            onChange={onUserChangedText}
          />;
          <div className="prompt-buttons">
            <a 
              className={isGenerating ? 'generate-button loadding' : 'generate-button'}
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
              </div>
            </a>
          </div>
          { apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
