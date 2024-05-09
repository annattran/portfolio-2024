import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    return (
        <aside>
            <div>
                <h1>Anna Tran</h1>
                <h2>Front-End Developer</h2>
                <ul className="socials">
                    <li>
                        <a href="mailto:annatran93@gmail.com" className="primary-button">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="http://www.linkedin.com/in/annattran">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="http://www.github.com/annattran">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <label htmlFor="">
                        <a target="_blank" href="http://www.twitter.com/itsannatran">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </label>
                </ul>
                <ul className="navigation">
                    <li>About Me</li>
                    <li>My Resume</li>
                    <li>My Toolbox</li>
                    <li>Featured Projects</li>
                    <li>Let's Connect</li>
                </ul>
            </div>
            <footer>
                <small>&copy; 2024. Inspired by <a target="_blank" href="https://brittanychiang.com/">Brittany Chiang</a>. Coded in <span>Visual Studio Code</span> by yours truly, built with <span>React</span> and deployed with <span>Netlify</span>.</small>
            </footer>
        </aside>
    )
}

export default Sidebar;