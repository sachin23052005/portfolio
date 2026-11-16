import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";
import {
  profile,
  heroStats,
  about,
  skillGroups,
  projects,
  leetcode,
  achievements,
  education,
  learning,
} from "./data/portfolio";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Navbar name={profile.name} theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero profile={profile} stats={heroStats} />
        <About about={about} />
        <Skills groups={skillGroups} />
        <Projects projects={projects} />
        <Achievements
          leetcode={leetcode}
          achievements={achievements}
          leetcodeUrl={profile.links.leetcode}
        />
        <Education education={education} />
        <Learning learning={learning} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
