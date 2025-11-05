import './a&e.css'
import { fine_font, mid_font } from '../fonts'

export default function About_and_Education() {

    return (
        <div className='about-education-wrapper'>
            <div className='about'>
                <p className={mid_font.className} id='about-header'>About Me</p>
                <p className={fine_font.className} id='about-txt'>
                    It all began in my teenage years with the discovery of Visual Basic - and from there, the spark never faded.
                    After several years working in healthcare, I decided to return to my true passion: programming.
                    I’m a lifelong learner who thrives in agile environments and enjoys exploring both modern technologies and the classics.
                    Feel free to check out some of my work below 👇
                </p>
            </div>
            <div className='education'>
                <div className='education-inner'>
                    <p className={mid_font.className} id='education-header'>Education</p>
                    <p className={mid_font.className} id='bcs'>BSc. 🎓<br />
                        Computer Science</p>
                    <p className={fine_font.className} id='sapir'>Sapir Academic College</p>
                    <p className={fine_font.className} id='sderot'>Sderot, Israel</p>
                    <p className={fine_font.className} id='years'>2021-2024</p>
                </div>
            </div>
        </div>
    )
}