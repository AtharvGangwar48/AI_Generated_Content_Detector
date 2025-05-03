import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
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
                <p>feedback@aicontentchecker.com</p>
                <p>support@aicontentchecker.com</p>
              </motion.div>

              <motion.div className="contact-card" variants={fadeIn}>
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri, 9AM-5PM EST</p>
              </motion.div>

              <motion.div className="contact-card" variants={fadeIn}>
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <h3>Location</h3>
                <p>123 Tech Avenue</p>
                <p>San Francisco, CA 94107</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="suggestion-form"
              variants={fadeIn}
            >
              <h2>Suggestion Form</h2>
              <p>We've created a Google Form to collect your feedback and suggestions. Please click the button below to access the form and share your thoughts.</p>
              
              <a 
                href="https://forms.google.com/example-form" 
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
            <h2>Join Our Community</h2>
            <p>Connect with other users and our development team to discuss AI content detection and stay updated on new features.</p>
            <div className="community-links">
              <a href="#" className="btn btn-primary">Join Discord</a>
              <a href="#" className="btn btn-secondary">Follow on Twitter</a>
              <a href="#" className="btn btn-secondary">Subscribe to Newsletter</a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Suggestion;