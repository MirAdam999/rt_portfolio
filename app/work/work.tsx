import './work.css'
import { fine_font, mid_font } from '../fonts'
import { CiCalendar } from "react-icons/ci";
import { HiOutlineMapPin } from "react-icons/hi2";
import { GoBriefcase } from "react-icons/go";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function Work() {

    return (
        <div className='work'>
            <h1 className={mid_font.className}>Experince</h1>
            <div className='work-inner'>
                <div className='job'>
                    <div className='job-top'>
                        <GoBriefcase size={23} color="#FF9F25" />
                        <h2 className={`${mid_font.className} job-title`}>Teaching Assistant</h2>
                    </div>
                    <div className='workplace' >
                        <HiOutlineBuildingOffice2 size={23} color="#D1E2F5" />
                        <p className={`${mid_font.className} work-name`} id='sap'>Sapir Academic College, Computer Science Department</p>
                    </div>
                    <div className='date-place'>
                        <CiCalendar size={23} />
                        <p className={`${fine_font.className} date`}>2024 - 2025</p>
                        <HiOutlineMapPin size={23} />
                        <p className={`${fine_font.className} place`}>Sderot, Israel</p>
                    </div>
                    <ul className={`${fine_font.className} bulletpoints`}>
                        <li> Worked hand in hand with the academic faculty to provide proper guidance to CS students. </li>
                        <li> Provided tutoring to groups of 15 students along with one-on-one tutoring per student request. </li>
                        <li> Graded and provided elaborate feedback to students on theoretical and practical assignments. </li>
                        <li> Prepared presentations and lesson plans for group tutoring. </li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='job-top'>
                        <GoBriefcase size={23} color="#FF4FD8" />
                        <h2 className={`${mid_font.className} job-title`}>Software Developer</h2>
                    </div>
                    <div className='workplace' >
                        <HiOutlineBuildingOffice2 size={23} color="#D1E2F5" />
                        <p className={`${mid_font.className} work-name`} id='freelance'>LevelFive</p>
                    </div>
                    <div className='date-place'>
                        <CiCalendar size={23} />
                        <p className={`${fine_font.className} date`}>2024</p>
                        <HiOutlineMapPin size={23} />
                        <p className={`${fine_font.className} place`}>Israel</p>
                    </div>
                    <ul className={`${fine_font.className} bulletpoints`}>
                        <li> Developed a complete .NET application from the ground up based on client requirements. </li>
                        <li> Collaborated closely with the client using an Agile development approach. </li>
                        <li> Oversaw software testing and system integration following project completion. </li>
                        <li> Provided ongoing post-release support and maintenance, including bug fixes. </li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='job-top'>
                        <GoBriefcase size={23} color="#25B3FA" />
                        <h2 className={`${mid_font.className} job-title`}>Paramedic</h2>
                    </div>
                    <div className='workplace' >
                        <HiOutlineBuildingOffice2 size={23} color="#D1E2F5" />
                        <p className={`${mid_font.className} work-name`} id='terem'>Terem Urgent Care | Magen David Adom</p>
                    </div>
                    <div className='date-place'>
                        <CiCalendar size={23} />
                        <p className={`${fine_font.className} date`}>2017 - 2024</p>
                        <HiOutlineMapPin size={23} />
                        <p className={`${fine_font.className} place`}>Sderot, Israel | Bat Yam, Israel </p>
                    </div>
                    <ul className={`${fine_font.className} bulletpoints`}>
                        <li> Delivered emergency pre-hospital medical care and life support as a licensed paramedic in both ambulance and clinical settings. </li>
                        <li> Assessed, stabilized, and transported patients while maintaining composure and precision in high-pressure, time-critical situations. </li>
                        <li> Collaborated effectively with multidisciplinary teams, including physicians, nurses, and first responders, to ensure seamless continuity of care. </li>
                        <li> Operated advanced medical and monitoring equipment, adhering to strict clinical and safety protocols. </li>
                        <li> Demonstrated leadership, rapid decision-making, and clear communication in complex, unpredictable emergencies.</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}