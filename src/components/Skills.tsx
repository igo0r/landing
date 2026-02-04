import { FaRobot, FaUsers, FaCogs, FaChalkboardTeacher } from 'react-icons/fa';
import './Skills.css';

const skillCards = [
  {
    icon: FaRobot,
    title: 'Test Automation',
    description: 'Building comprehensive test suites with 2000+ API and UI tests using modern frameworks like WebdriverIO, Playwright, and Selenium.',
  },
  {
    icon: FaUsers,
    title: 'QA Leadership',
    description: 'Leading and scaling QA teams, establishing testing strategies, and driving quality initiatives across organizations.',
  },
  {
    icon: FaCogs,
    title: 'CI/CD Integration',
    description: 'Integrating automated tests into CI/CD pipelines with Jenkins, Docker, and cloud infrastructure for continuous quality.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Mentoring',
    description: 'Coaching and developing QA engineers, conducting knowledge sharing sessions, and building testing communities.',
  },
];

const topSkills = [
  'JavaScript',
  'TypeScript',
  'QA Automation',
  'Jenkins',
  'Project Management',
];

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-content">
        <h2 className="skills-heading">What I Do</h2>
        <div className="skills-grid">
          {skillCards.map((card) => (
            <div key={card.title} className="skill-card">
              <card.icon className="skill-card-icon" />
              <h3 className="skill-card-title">{card.title}</h3>
              <p className="skill-card-description">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="top-skills">
          <h3 className="top-skills-heading">Top Skills</h3>
          <div className="top-skills-list">
            {topSkills.map((skill) => (
              <span key={skill} className="top-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
