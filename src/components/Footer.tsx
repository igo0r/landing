import { FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ihor-lantushenko-sdet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@QARoutine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="social-link"
          >
            <FaYoutube />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub />
          </a>
        </div>
        <p className="copyright">&copy; 2025 Ihor Lantushenko</p>
      </div>
    </footer>
  );
};

export default Footer;
