import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <div className="education-content">
        <h2 className="education-heading">Education</h2>
        <div className="education-card">
          <div className="education-card-header">
            <FaGraduationCap className="education-icon" />
            <div className="education-card-title">
              <h3 className="education-university">Sumy State University</h3>
              <span className="education-degree">Bachelor's degree, Computer Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
