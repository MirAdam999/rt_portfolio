import './projects.css'
import { fine_font, mid_font } from '../fonts'
import { VscGithubAlt } from "react-icons/vsc";
import Link from 'next/link';

export default function Projects() {

    return (
        <div className='projects'>
            <h1 className={mid_font.className}>Featured Projects</h1>
            <div className='projects-inner'>
                <div className='project' id='proj-1'>
                    <div className='proj-top'>
                        <h2 className={`${mid_font.className} project-header`} id='proj-1-head'>
                            Smishing Buster
                        </h2>
                        <Link href="https://github.com/artiomAdam/SmishingBuster" target="_blank" rel="noopener noreferrer"><button><VscGithubAlt /></button></Link>
                    </div>
                    <p className={`${fine_font.className} project-txt`} id='proj-1-txt'>
                        An Android app that analyzes incoming SMS messages in real time
                        and computes phishing-risk scores through a hybrid system of ML-based classification
                        and mathematical heuristics.
                    </p>
                    <p className={`${fine_font.className} project-txt`} id='proj-1-txt'>
                        Integrated Flask backend with TensorFlow models and RabbitMQ queueing for
                        scalable SMS analysis and real-time result delivery.
                    </p>
                    <div className='proj-skills'>
                        <div className={`${fine_font.className} skill`}>Python</div>
                        <div className={`${fine_font.className} skill`}>Java</div>
                        <div className={`${fine_font.className} skill`}>Tensorflow</div>
                        <div className={`${fine_font.className} skill`}>Flask</div>
                        <div className={`${fine_font.className} skill`}>RabbitMQ</div>
                        <div className={`${fine_font.className} skill`}>Android Studio</div>
                        <div className={`${fine_font.className} skill`}>Firebase</div>
                        <div className={`${fine_font.className} skill`}>NLP</div>
                        <div className={`${fine_font.className} skill`}>MLP</div>
                        <div className={`${fine_font.className} skill`}>Neural Networks</div>
                        <div className={`${fine_font.className} skill`}>RESTful API</div>
                    </div>
                </div>

                <div className='project' id='proj-2'>
                    <div className='proj-top'>
                        <h2 className={`${mid_font.className} project-header`} id='proj-2-head'>
                            Sarcastobot
                        </h2>
                        <Link href="https://github.com/artiomAdam/gpt-Discord-Sarcastobot" target="_blank" rel="noopener noreferrer"><button><VscGithubAlt /></button></Link>
                    </div>
                    <p className={`${fine_font.className} project-txt`} id='proj-2-txt'>
                        A pet project that I ran in the early days of GPT3.5, a Discord bot with a personality
                        that would chat simultaniously to all of the chat-room and remember things about each chatter.
                    </p>
                    <p className={`${fine_font.className} project-txt`} id='proj-2-txt'>
                        Utilized the OpenAI API, integrated local data storage and multiple agents to create the experience
                        of a multiplayer chat-session with agent memory per individual chatter.
                    </p>
                    <div className='proj-skills'>
                        <div className={`${fine_font.className} skill`}>Java</div>
                        <div className={`${fine_font.className} skill`}>API Integration</div>
                    </div>
                </div>

                <div className='project' id='proj-3'>
                    <div className='proj-top'>
                        <h2 className={`${mid_font.className} project-header`} id='proj-3-head'>Project</h2>
                        <Link href="https://github.com/artiomAdam" target="_blank" rel="noopener noreferrer"><button><VscGithubAlt /></button></Link>
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