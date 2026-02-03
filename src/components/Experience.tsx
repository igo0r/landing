import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    role: 'Software Engineer in Test',
    company: 'Cyberhaven',
    period: 'Jan 2025 - Present',
    description: 'Building and maintaining test automation frameworks for enterprise security solutions.',
    responsibilities: [],
  },
  {
    role: 'Lead Test Automation Engineer',
    company: 'Cyberhaven',
    period: 'Mar 2019 - Jan 2025',
    description: 'Led the QA team and established testing practices across the organization.',
    responsibilities: [
      'Built and scaled test automation framework from ground up with 2000+ tests',
      'Led and mentored a team of QA engineers',
      'Established CI/CD pipelines with Jenkins and Docker',
      'Drove quality initiatives and testing strategies across product teams',
    ],
  },
  {
    role: 'Senior Test Automation Engineer',
    company: 'LoveCrafts',
    period: 'Jan 2018 - Mar 2019',
    description: 'Developed automated testing solutions for e-commerce platform.',
    responsibilities: [
      'Created comprehensive API and UI test suites',
      'Implemented test automation best practices',
    ],
  },
  {
    role: 'QA Engineer / Test Automation Engineer',
    company: 'Various Companies',
    period: '2013 - 2018',
    description: 'Built foundation in software testing and automation across multiple industries.',
    responsibilities: [
      'Progressed from manual testing to full automation expertise',
      'Worked with diverse technology stacks and testing frameworks',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-content">
        <h2 className="experience-heading">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-header">
                <FaBriefcase className="experience-icon" />
                <div className="experience-card-title">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              {exp.responsibilities.length > 0 && (
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
