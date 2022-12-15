import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const Home = () => {

  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) =>{
    setUserInput(event.target.value);
  };

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
          <textarea 
            placeholder="Experiência profissional, educação, competências linguísticas e digitais, habilidades e projetos pessoais" 
            className="prompt-box" 
            value={userInput}
            onChange={onUserChangedText}
          />;
          <div className="prompt-buttons">
            <a className="generate-button" onClick={null}>
              <div className="generate">
                <p>Generate</p>
              </div>
            </a>
          </div>
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
