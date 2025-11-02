import './work.css'
import { fine_font, mid_font } from '../fonts'
import { CiCalendar } from "react-icons/ci";
import { HiOutlineMapPin } from "react-icons/hi2";
import { GoBriefcase } from "react-icons/go";
import { PiBuildingApartmentThin } from "react-icons/pi";

export default function Work() {

    return (
        <div className='work'>
            <h1 className={mid_font.className}>Experince</h1>
            <div className='work-inner'>
                <div className='job'>
                    <div className='job-top'><GoBriefcase /></div>
                    <div className='workplace'><PiBuildingApartmentThin /></div>
                    <div className='date-place'><CiCalendar /><HiOutlineMapPin /></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='job-top'><GoBriefcase /></div>
                    <div className='workplace'><PiBuildingApartmentThin /></div>
                    <div className='date-place'><CiCalendar /><HiOutlineMapPin /></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='job-top'><GoBriefcase /></div>
                    <div className='workplace'><PiBuildingApartmentThin /></div>
                    <div className='date-place'><CiCalendar /><HiOutlineMapPin /></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='job-top'><GoBriefcase /></div>
                    <div className='workplace'><PiBuildingApartmentThin /></div>
                    <div className='date-place'><CiCalendar /><HiOutlineMapPin /></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}