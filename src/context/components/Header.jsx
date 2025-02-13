import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'Blog', path: '/blog' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' }
];

export default function Header() {
  const { isDark, setIsDark } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${isDark ? 'dark' : ''}`}
    >
      <div className="logo">
        <span className="gradient-text">DevMaster</span>
      </div>
      <div className="nav-links">
        {navItems.map((item) => (
          <motion.a
            key={item.path}
            href={item.path}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        ))}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="theme-toggle"
        >
          {isDark ? '🌞' : '🌙'}
        </button>
      </div>
    </motion.nav>
  );
}
