import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import {
  heroData,
  aboutData,
  skillsData,
  projectsData,
  contactData,
} from './data/portfolio';

function App() {
  return (
    <ThemeProvider>
      <Navbar />

      <main>
        <HeroSection data={heroData} />
        <AboutSection data={aboutData} />
        <SkillsSection data={skillsData} />
        <ProjectsSection projects={projectsData} />
        <ContactSection data={contactData} />
      </main>

      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default App;
