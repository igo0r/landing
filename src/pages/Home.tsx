import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import YouTube from '../components/YouTube';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <YouTube />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
