import { FaYoutube } from 'react-icons/fa';
import './YouTube.css';

const YouTube = () => {
  return (
    <section className="youtube">
      <div className="youtube-content">
        <h2 className="youtube-heading">Videos</h2>
        <div className="youtube-video-container">
          <div className="youtube-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/jWpmVYuzaCU"
              title="QA Routine YouTube Channel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="youtube-channel-link">
          <a
            href="https://www.youtube.com/@QARoutine"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            <FaYoutube className="youtube-link-icon" />
            Visit QA Routine Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
