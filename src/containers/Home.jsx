import { motion } from 'framer-motion';
import TechStack from '../components/TechStack';

const techList = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="home-container"
    >
      <div className="hero-section">
        <h1>
          <span className="wave">👋</span> Hi, I'm 
          <span className="gradient-text"> CodeMaster</span>
        </h1>
        <p className="subtitle">Full Stack Developer & Open Source Contributor</p>
        <TechStack items={techList} />
      </div>
      
      <motion.div 
        className="terminal"
        animate={{ boxShadow: '0 0 15px rgba(100, 255, 100, 0.3)' }}
      >
        <div className="terminal-header">
          <div className="buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
        </div>
        <pre className="terminal-content">
          {`$ npm init @codemaster

  ✔ Project name: awesome-project
  ✔ Framework: React + TypeScript
  ✔ Deploy target: AWS Lambda

🚀 Initializing project...
✅ Success! Start coding!`}
        </pre>
      </motion.div>
    </motion.div>
  );
}
