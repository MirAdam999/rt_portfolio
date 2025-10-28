import './page.css'
import Hero from './hero/hero';
import About_and_Education from './about&education/about&education';

export default function Home() {
  return (
    <div className="page">
      <div className='runway'>

        <Hero />
        <About_and_Education />

      </div>
    </div>
  );
}
