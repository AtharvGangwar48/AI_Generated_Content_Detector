import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Trial.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

function Trial() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleCheck = async () => {
    if (!text.trim()) return;
  
    setIsLoading(true);
    setResult('');
    setVisible(false);
  
    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
  
      const data = await response.json();
  
      const message = data.label === 'AI-Generated'
        ? `🤖 This content appears to be AI-generated. (Confidence: ${data.confidence}%)`
        : `🧠 This content appears to be human-written. (Confidence: ${data.confidence}%)`;
  
      setResult(message);
    } catch (error) {
      setResult('❌ Error analyzing content. Please try again later.');
    } finally {
      setIsLoading(false);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }
  };


  const handleClear = () => {
    setText('');
    setResult('');
    setVisible(false);
  };

  return (
    <motion.div 
      className="page-transition"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <section className="trial">
        <div className="container">
          <motion.div className="app-container" variants={fadeIn}>
            <h1>AI Content Checker</h1>
            <p className="description">
              Paste your text below to check if it is AI-generated or human-written.
            </p>
            <textarea
              className="text-input"
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="toolbar">
              <span className="char-count">{text.length} characters</span>
              <button className="clear-button" onClick={handleClear} disabled={!text}>Clear</button>
            </div>
            <button 
              className="check-button" 
              onClick={handleCheck} 
              disabled={!text || isLoading}
            >
              {isLoading ? 'Analyzing...' : 'Check Content'}
            </button>
            <motion.div 
              className={`result ${result.includes('AI') ? 'ai' : result.includes('human') ? 'human' : ''}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: visible ? 1 : 0, 
                y: visible ? 0 : -10 
              }}
              transition={{ duration: 0.3 }}
            >
              {result}
            </motion.div>

            <div className="tool-info">
              <h2>How to use this tool</h2>
              <ol>
                <li>Paste text you want to analyze in the text area above</li>
                <li>Click the "Check Content" button</li>
                <li>The tool will analyze the text and provide a result</li>
                <li>Results show whether the content appears to be AI-generated or human-written</li>
              </ol>
              
              <h2>About the technology</h2>
              <p>
                Our AI detection tool uses advanced natural language processing to identify patterns 
                characteristic of AI-generated text. The algorithm analyzes various linguistic markers 
                including vocabulary, syntax, semantic coherence, and stylistic consistency.
              </p>
              <p>
                While highly accurate, this technology is still evolving. Results should be considered 
                as guidance rather than definitive proof of content origin.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Trial;