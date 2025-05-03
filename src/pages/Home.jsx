import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShield, FiTrendingUp, FiCode, FiFileText } from 'react-icons/fi';
import '../styles/Home.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <motion.div 
      className="page-transition"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            variants={fadeIn}
          >
            <h1 className="hero-title">Detect AI-Generated Content with Confidence</h1>
            <p className="hero-subtitle">
              Our advanced machine learning algorithm accurately identifies content written by AI, helping you maintain authenticity and integrity in digital communication.
            </p>
            <div className="hero-buttons">
              <Link to="/trial" className="btn btn-primary btn-lg">Try It Now</Link>
              <Link to="/developers" className="btn btn-secondary btn-lg">Meet The Team</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeIn}
          >
            <h2>How It Works</h2>
            <p>Our AI detection technology analyzes text using multiple linguistic markers to determine authenticity</p>
          </motion.div>

          <motion.div 
            className="features-grid"
            variants={staggerContainer}
          >
            <motion.div className="feature-card" variants={fadeIn}>
              <div className="feature-icon">
                <FiTrendingUp />
              </div>
              <h3>Pattern Recognition</h3>
              <p>Our algorithm identifies patterns in text that are characteristic of AI-generated content.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeIn}>
              <div className="feature-icon">
                <FiShield />
              </div>
              <h3>High Accuracy</h3>
              <p>Precision-tuned machine learning models provide reliable results with 95%+ accuracy.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeIn}>
              <div className="feature-icon">
                <FiCode />
              </div>
              <h3>Advanced Algorithms</h3>
              <p>Utilizes cutting-edge NLP techniques to analyze sentence structure and semantic patterns.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeIn}>
              <div className="feature-icon">
                <FiFileText />
              </div>
              <h3>Instant Results</h3>
              <p>Get immediate feedback on whether your content was likely written by AI or a human.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section className="research">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeIn}
          >
            <h2>Our Research</h2>
            <p>Based on extensive linguistic analysis and machine learning techniques</p>
          </motion.div>

          <motion.div 
            className="research-content"
            variants={fadeIn}
          >
            <div className="research-text">
              <h3>Scientific Foundation</h3>
              <p>
                Our AI detection algorithm is based on research in computational linguistics, 
                stylometry, and natural language processing. The system has been trained on a diverse 
                dataset of both human-written and AI-generated content to recognize subtle differences 
                in patterns, word choice, syntax complexity, and semantic coherence.
              </p>
              <p>
                The research paper titled "Linguistic Markers of AI-Generated Text" outlines our approach 
                and methodology, demonstrating how our system achieves high accuracy rates in distinguishing 
                between human and AI authors.
              </p>
              <a href="#" className="btn btn-accent">Read Research Paper</a>
            </div>
            <div className="research-image">
              <img src="https://images.pexels.com/photos/7103238/pexels-photo-7103238.jpeg" alt="AI research visualization" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            variants={fadeIn}
          >
            <h2>Ready to Try It Yourself?</h2>
            <p>Test our AI content detection tool with your own text samples.</p>
            <Link to="/trial" className="btn btn-primary btn-lg">Start Detection</Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;