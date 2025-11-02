import './page.css'
import Hero from './hero/hero';
import About_and_Education from './about&education/about&education';
import Projects from './projects/projects';
import Skills from './skills/skills';
import Work from './work/work';
import Contact from './contact/contact';
import { fine_font } from './fonts';

export default function Home() {
  return (
    <div className="page">
      <div className='runway'>

        <Hero />
        <About_and_Education />
        <Projects />
        <Skills />
        <Work />
        <Contact />

        <footer className={fine_font.className}>	&copy; Made with 💖 and React in 2025</footer>
      </div>
    </div>
  );
}
