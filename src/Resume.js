import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import resume from './assets/anna-tran-resume.pdf';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <h3 className="section-title">
                <FontAwesomeIcon icon={faBriefcase} />
                My Resume
            </h3>
            <ul>
                <li>
                    <p className="duration">Nov 2023 — Apr 2024</p>
                    <p className="title">Front-End Developer at <a target="_blank" rel="noreferrer" href="https://www.webistry.com/">Webistry</a></p>
                </li>
                <li>
                    <p className="duration">Oct 2022 — Sep 2023</p>
                    <p className="title">Solutions Architect at <a target="_blank" rel="noreferrer" href="https://safelinegroup.ca/">Safeline Group</a></p>
                </li>
                <li>
                    <p className="duration">Aug 2021 — Sep 2022</p>
                    <p className="title">Technology Specialist at <a target="_blank" rel="noreferrer" href="https://www.optrust.com/Home/default.asp">OPTrust</a></p>
                </li>
                <li>
                    <p className="duration">Mar 2020 — Aug 2021</p>
                    <p className="title">Front-End Developer at <a target="_blank" rel="noreferrer" href="https://www.beapartof.com/">Be A Part Of</a></p>
                </li>
                <li>
                    <p className="duration">Jan 2019 — Feb 2020</p>
                    <p className="title">Pursued web development at <a target="_blank" rel="noreferrer" href="https://junocollege.com/">Juno College of Technology</a></p>
                </li>
                <li>
                    <p className="duration">Nov 2016 — Jan 2019</p>
                    <p className="title">Saved up money to pursue web development</p>
                </li>
                <li>
                    <p className="duration">Sep — Oct 2016</p>
                    <p className="title">Traveled for 2 months</p>
                </li>
                <li>
                    <p className="duration">Jun 2016</p>
                    <p className="title">Participated in a coding workshop</p>
                </li>
                <li>
                    <p className="duration">2011 — 2015</p>
                    <p className="title">Graduated from Hospitality and Tourism Management at <a target="_blank" rel="noreferrer" href="https://www.torontomu.ca/">Toronto Metropolitan University</a></p>
                </li>
            </ul>
            <a target="_blank" rel="noreferrer" href={resume}>View Full Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </section>
    )
}

export default Resume;