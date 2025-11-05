import './skills.css'
import { fine_font, mid_font } from '../fonts'
import { AiOutlineCode } from "react-icons/ai";
import { PiCodesandboxLogoLight } from "react-icons/pi";

export default function Skills() {

    return (
        <div className='skills'>
            <h1 className={mid_font.className}>Skills</h1>
            <div className='skills-sections-wrapper'>
                <div className='skills-section-l'>
                    <h2 className={`${mid_font.className} skill-head`}><AiOutlineCode color='#25B3FA' /> Languages</h2>
                    <div className='skills-list'>
                        <div className={`${fine_font.className} skill`} id='language'>Java</div>
                        <div className={`${fine_font.className} skill`} id='language'>C#</div>
                        <div className={`${fine_font.className} skill`} id='language'>C++</div>
                        <div className={`${fine_font.className} skill`} id='language'>C</div>
                        <div className={`${fine_font.className} skill`} id='language'>Python</div>
                        <div className={`${fine_font.className} skill`} id='language'>JavaScript</div>
                        <div className={`${fine_font.className} skill`} id='language'>HTML</div>
                        <div className={`${fine_font.className} skill`} id='language'>CSS</div>
                        <div className={`${fine_font.className} skill`} id='language'>SQL</div>
                    </div>
                </div>
                <div className='skills-section-r'>
                    <h2 className={`${mid_font.className} skill-head`}><PiCodesandboxLogoLight color='#FF98FDE6' /> Software Development</h2>
                    <div className='skills-list'>
                        <div className={`${fine_font.className} skill`} id='software'>Linux</div>
                        <div className={`${fine_font.className} skill`} id='software'>.NET</div>
                        <div className={`${fine_font.className} skill`} id='software'>Flask</div>
                        <div className={`${fine_font.className} skill`} id='software'>React</div>
                        <div className={`${fine_font.className} skill`} id='software'>Git</div>
                        <div className={`${fine_font.className} skill`} id='software'>Docker</div>
                        <div className={`${fine_font.className} skill`} id='software'>Android Studio</div>
                        <div className={`${fine_font.className} skill`} id='software'>MongoDB</div>
                        <div className={`${fine_font.className} skill`} id='software'>RabbitMQ</div>
                        <div className={`${fine_font.className} skill`} id='software'>Firebase</div>
                        <div className={`${fine_font.className} skill`} id='software'>MySQL</div>
                        <div className={`${fine_font.className} skill`} id='software'>SQLite</div>
                    </div>
                </div>
            </div>
        </div>
    )
}