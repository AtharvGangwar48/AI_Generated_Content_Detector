import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub } from 'react-icons/fi';
import '../styles/Suggestion.css';

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

const Suggestion = () => {
  return (
    <motion.div 
      className="page-transition"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <section className="suggestion">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeIn}
          >
            <h1>Your Feedback Matters</h1>
            <p>Help us improve our AI Content Checker with your suggestions</p>
          </motion.div>

          <div className="suggestion-layout">
            <motion.div 
              className="contact-info"
              variants={staggerContainer}
            >
              <motion.div className="contact-card" variants={fadeIn}>
                <div className="contact-icon">
                  <FiMail />
                </div>
                <h3>Email</h3>
                <p>atharvgangwar8@gmail.com</p>
                <p>negi67291@gmail.com</p>
              </motion.div>

              <motion.div className="contact-card" variants={fadeIn}>
                <div className="contact-icon">
                  <FiGithub />
                </div>
                <h3>Github Repository (API)</h3>
                <a href='https://github.com/AtharvGangwar48/AI_Content_Detector_Backend'>See Repository</a>
              </motion.div>

              <motion.div className="contact-card" variants={fadeIn}>
                <div className="contact-icon">
                  <FiGithub />
                </div>
                <h3>Github Repository (Frontend)</h3>
                <a href='https://github.com/AtharvGangwar48/AI_Generated_Content_Detector'>See Repository</a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="suggestion-form"
              variants={fadeIn}
            >
              <h2>Suggestion Form</h2>
              <p>We've created a Google Form to collect your feedback and suggestions. Please click the button below to access the form and share your thoughts.</p>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScx_2EA1Fk_eqGGR-Q3bUKJevSD7UfA8eFP3S-wTNBJqRE-UA/viewform?usp=dialog" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="google-form-btn"
              >
                <FiSend />
                <span>Open Google Form</span>
              </a>

              <div className="form-info">
                <h3>What kind of feedback are we looking for?</h3>
                <ul>
                  <li>Bug reports and technical issues</li>
                  <li>Feature suggestions for the detection algorithm</li>
                  <li>User interface improvements</li>
                  <li>Documentation or explanation enhancements</li>
                  <li>Feedback on detection accuracy</li>
                  <li>Any other ideas to make our tool better</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="join-community"
            variants={fadeIn}
          >
            <h2>Explore Our Project</h2>
            <p>We would greatly appreciate your suggestions and feedback on our project, as they are invaluable to us. Please check out the google form.</p>
            <div className="community-links">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScx_2EA1Fk_eqGGR-Q3bUKJevSD7UfA8eFP3S-wTNBJqRE-UA/viewform?usp=dialog" className="btn btn-primary">Suggestion & Feedback</a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Suggestion;
