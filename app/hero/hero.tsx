import './hero.css'
import { fine_font, heavy_font } from '../fonts'

export default function Hero() {

    return (
        <div className="hero">
            <div className='hero-txt'>
                <p className={heavy_font.className} id='hey'>Hey! I am <span>Artium</span></p>
                <p className={fine_font.className}>Software Developer | CS Graduate</p>
                <p className={fine_font.className}>Passionate about code for 15+ years</p>
            </div>
            <div id='wave-emj'>👋</div>
        </div>
    )
}