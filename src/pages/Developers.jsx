import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/Developers.css';

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

const developers = [
  {
    name: "Alex Johnson",
    role: "Machine Learning Lead",
    bio: "Alex specializes in natural language processing and led the development of the core detection algorithm. With 8 years of experience in machine learning, Alex has published numerous papers on language models and AI detection techniques.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:alex@example.com"
    }
  },
  {
    name: "Sam Rivera",
    role: "Frontend Developer",
    bio: "Sam created the user interface and experience for the AI Content Checker. With expertise in React and modern web technologies, Sam ensured the application is intuitive, accessible, and responsive across all devices.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:sam@example.com"
    }
  },
  {
    name: "Taylor Chen",
    role: "Backend Engineer",
    bio: "Taylor developed the API and server architecture for the AI Content Checker. Their work ensures the application can handle high traffic volumes while maintaining fast response times and data security.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:taylor@example.com"
    }
  },
  {
    name: "Jordan Smith",
    role: "Research Scientist",
    bio: "Jordan conducted the linguistic research that forms the foundation of our detection system. With a PhD in Computational Linguistics, Jordan's expertise in language patterns and AI text generation was crucial to the project.",
    image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:jordan@example.com"
    }
  }
];

const Developers = () => {
  return (
    <motion.div 
      className="page-transition"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <section className="developers">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeIn}
          >
            <h1>Meet Our Team</h1>
            <p>The talented individuals behind the AI Content Checker project</p>
          </motion.div>

          <motion.div 
            className="team-grid"
            variants={staggerContainer}
          >
            {developers.map((developer, index) => (
              <motion.div 
                key={index} 
                className="team-member"
                variants={fadeIn}
                whileHover={{ y: -8 }}
              >
                <div className="member-image">
                  <img src={developer.image} alt={developer.name} />
                </div>
                <div className="member-content">
                  <h2>{developer.name}</h2>
                  <h3>{developer.role}</h3>
                  <p>{developer.bio}</p>
                  <div className="member-social">
                    <a href={developer.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub />
                    </a>
                    <a href={developer.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FiLinkedin />
                    </a>
                    <a href={developer.social.email} aria-label="Email">
                      <FiMail />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="team-approach"
            variants={fadeIn}
          >
            <h2>Our Approach</h2>
            <p>
              Our team combines expertise in machine learning, linguistic analysis, and software development to create 
              a reliable tool for detecting AI-generated content. We've worked collaboratively to ensure the AI Content 
              Checker is accurate, user-friendly, and accessible to everyone.
            </p>
            <p>
              Through continuous research and refinement of our algorithms, we strive to stay ahead of advancements in 
              AI text generation, ensuring our detection capabilities remain state-of-the-art.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Developers;