import './contact.css'
import { fine_font, mid_font } from '../fonts'
import { VscGithubAlt } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

export default function Contact() {

    return (
        <div className='contact'>
            <h1 className={mid_font.className}>Let's Connect</h1>
            <div className='conn-wrap'>
                <div className='conn-l'>
                    <div className={`${fine_font.className} conn`}><CiMail size={35} color='white' />artiomgeneralov@gmail.com</div>
                    <div className={`${fine_font.className} conn`}><FiPhone size={30} color='white' />+1 (431) 556-4370</div>
                    <div className={`${fine_font.className} conn`}><HiOutlineMapPin size={35} color='white' />Winnipeg, MB, Canada</div>
                </div>
                <div className='conn-r'>
                    <div className={`${fine_font.className} conn`}><VscGithubAlt size={35} color='white' />GitHub</div>
                    <div className={`${fine_font.className} conn`}><IoLogoLinkedin size={35} color='white' />LinkedIn</div>
                    <div className={`${fine_font.className} conn`}><IoDocumentTextOutline size={35} color='white' />Download Resume</div>
                </div>
            </div>
        </div>
    )
}