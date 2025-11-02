import './projects.css'
import { fine_font, mid_font } from '../fonts'
import { VscGithubAlt } from "react-icons/vsc";

export default function Projects() {

    return (
        <div className='projects'>
            <h1 className={mid_font.className}>Featured Projects</h1>
            <div className='projects-inner'>
                <div className='project' id='proj-1'>
                    <div className='proj-top'>
                        <h2 className={`${mid_font.className} project-header`} id='proj-1-head'>Project</h2>
                        <button><VscGithubAlt /></button>
                    </div>
                    <p className={`${fine_font.className} project-txt`} id='proj-1-txt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='proj-skills'>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                    </div>
                </div>

                <div className='project' id='proj-2'>
                    <div className='proj-top'>
                        <h2 className={`${mid_font.className} project-header`} id='proj-2-head'>Project</h2>
                        <button><VscGithubAlt /></button>
                    </div>
                    <p className={`${fine_font.className} project-txt`} id='proj-2-txt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='proj-skills'>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                    </div>
                </div>

                <div className='project' id='proj-3'>
                    <div className='proj-top'>
                        <h2 className={`${mid_font.className} project-header`} id='proj-3-head'>Project</h2>
                        <button><VscGithubAlt /></button>
                    </div>
                    <p className={`${fine_font.className} project-txt`} id='proj-3-txt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='proj-skills'>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                        <div className={`${fine_font.className} skill`}>Skill</div>
                    </div>
                </div>
            </div>
        </div>
    )
}