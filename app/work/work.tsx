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
                        <div className={`${fine_font.className} feature`} id='sapir-feature'>Algoritms, LLM</div>
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
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='job-top'>
                        <GoBriefcase size={23} color="#FF4FD8" />
                        <h2 className={`${mid_font.className} job-title`}>Software Engineer</h2>
                        <div className={`${fine_font.className} feature`} id='freelance-feature'>Solo Development</div>
                    </div>
                    <div className='workplace' >
                        <HiOutlineBuildingOffice2 size={23} color="#D1E2F5" />
                        <p className={`${mid_font.className} work-name`} id='freelance'>Freelance</p>
                    </div>
                    <div className='date-place'>
                        <CiCalendar size={23} />
                        <p className={`${fine_font.className} date`}>2024</p>
                        <HiOutlineMapPin size={23} />
                        <p className={`${fine_font.className} place`}>Israel</p>
                    </div>
                    <ul className={`${fine_font.className} bulletpoints`}>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='job-top'>
                        <GoBriefcase size={23} color="#25B3FA" />
                        <h2 className={`${mid_font.className} job-title`}>Paramedic</h2>
                        <div className={`${fine_font.className} feature`} id='terem-feature'>Teamwork</div>
                    </div>
                    <div className='workplace' >
                        <HiOutlineBuildingOffice2 size={23} color="#D1E2F5" />
                        <p className={`${mid_font.className} work-name`} id='terem'>Terem Urgent Care</p>
                    </div>
                    <div className='date-place'>
                        <CiCalendar size={23} />
                        <p className={`${fine_font.className} date`}>2020 - 2024</p>
                        <HiOutlineMapPin size={23} />
                        <p className={`${fine_font.className} place`}>Sderot, Israel</p>
                    </div>
                    <ul className={`${fine_font.className} bulletpoints`}>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='job-top'>
                        <GoBriefcase size={23} color="#25FA8C" />
                        <h2 className={`${mid_font.className} job-title`}>Paramedic</h2>
                        <div className={`${fine_font.className} feature`} id='mda-feature'>Team Leadership</div>
                    </div>
                    <div className='workplace' >
                        <HiOutlineBuildingOffice2 size={23} color="#D1E2F5" />
                        <p className={`${mid_font.className} work-name`} id='mda'>Magen David Adom</p>
                    </div>
                    <div className='date-place'>
                        <CiCalendar size={23} />
                        <p className={`${fine_font.className} date`}>2017 - 2020</p>
                        <HiOutlineMapPin size={23} />
                        <p className={`${fine_font.className} place`}>Bat Yam, Israel</p>
                    </div>
                    <ul className={`${fine_font.className} bulletpoints`}>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}