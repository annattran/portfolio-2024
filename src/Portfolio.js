import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import dineAndDash from './assets/dineAndDash.png';
import marioMatchMania from './assets/marioMatchMania.png';
import pandaSanctuary from './assets/pandaSanctuary.png';
import payrollTimesheet from './assets/payrollTimesheet.png';
import weddingGuestbook from './assets/weddingGuestbook.png';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h3 className="section-title">
                <FontAwesomeIcon icon={faCode} />
                Featured Projects
            </h3>
            <ul className="projects">
                <li>
                    <img src={weddingGuestbook} alt="" />
                    <div className="description">
                        <h4>Wedding Guestbook</h4>
                        <p>A React app that allows newly weds to collect videos from their friends and families.</p>
                        <ul className="skills">
                            <li>React</li>
                            <li>Firebase</li>
                            <li>CSS3</li>
                        </ul>
                        <div className="button-container">
                            <a target="_blank" href="https://annattran.github.io/weddingGuestbook/">View Project</a>
                            <a target="_blank" href="https://github.com/annattran/weddingGuestbook">View Code</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={marioMatchMania} alt="" />
                    <div className="description">
                        <h4>Mario Match Mania</h4>
                        <p>A JavaScript mini-game where you must pair all cards to win!</p>
                        <ul className="skills">
                            <li>HTML5</li>
                            <li>SCSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className="button-container">
                            <a target="_blank" href="https://annattran.github.io/marioMatchMania/">View Project</a>
                            <a target="_blank" href="https://github.com/annattran/marioMatchMania">View Code</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={payrollTimesheet} alt="" />
                    <div className="description">
                        <h4>Weekly Timesheet</h4>
                        <p>A web app that calculates total hours and gross earnings for hourly employees.</p>
                        <ul className="skills">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>jQuery</li>
                        </ul>
                        <div className="button-container">
                            <a target="_blank" href="https://annattran.github.io/payrollTimesheet/">View Project</a>
                            <a target="_blank" href="https://github.com/annattran/payrollTimesheet">View Code</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={pandaSanctuary} alt="" />
                    <div className="description">
                        <h4>Panda Sanctuary</h4>
                        <p>A single page PSD conversion focusing on responsive design.</p>
                        <ul className="skills">
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                        <div className="button-container">
                            <a target="_blank" href="https://annattran.github.io/pandaSanctuary/">View Project</a>
                            <a target="_blank" href="https://github.com/annattran/pandaSanctuary">View Code</a>
                            <a href="">Mobile Design</a>
                            <a href="">Desktop Design</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={dineAndDash} alt="" />
                    <div className="description">
                        <h4>Dine and Dash</h4>
                        <p>A humorous React project developed with a team of four. In addition to helping you find a restaurant, this app will locate the closest bike station for a swift escape!</p>
                        <ul className="skills">
                            <li>React</li>
                            <li>Yelp API</li>
                            <li>CityBikes API</li>
                            <li>SCSS</li>
                        </ul>
                        <div className="button-container">
                            <a target="_blank" href="https://dineanddashjuno.github.io/projectSix/">View Project</a>
                            <a target="_blank" href="https://github.com/dineAndDashJuno/projectSix">View Code</a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;