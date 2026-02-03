import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <div className="about-text">
          <p>
            I'm a seasoned QA professional with over a decade of experience in software testing
            and test automation. My passion lies in building robust test frameworks that ensure
            product quality while enabling teams to ship faster and more confidently.
          </p>
          <p>
            As a QA leader, I've had the privilege of building and mentoring high-performing
            testing teams. I've developed and maintained comprehensive test suites with over
            2000+ API and UI tests, driving quality initiatives that make a real impact on
            product reliability.
          </p>
          <p>
            My technical expertise spans <span className="about-highlight">WebdriverIO</span>, {' '}
            <span className="about-highlight">JavaScript</span>, {' '}
            <span className="about-highlight">Selenium4</span>, {' '}
            <span className="about-highlight">Jenkins CI</span>, and {' '}
            <span className="about-highlight">Docker</span>. I'm constantly exploring new tools
            and methodologies to improve testing efficiency and coverage.
          </p>
          <blockquote className="about-motto">
            "Always keep learning"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
