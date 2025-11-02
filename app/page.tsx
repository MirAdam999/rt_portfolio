import './page.css'
import Hero from './hero/hero';
import About_and_Education from './about&education/about&education';
import Projects from './projects/projects';
import Work from './work/work';

export default function Home() {
  return (
    <div className="page">
      <div className='runway'>

        <Hero />
        <About_and_Education />
        <Projects />
        <Work />

      </div>
    </div>
  );
}
