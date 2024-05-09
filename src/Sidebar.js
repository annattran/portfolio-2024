import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    const scrollToSection = (e) => {
        e.preventDefault();
        let sectionName = e.target.href.split("#")[1];
        let section = document.getElementById(sectionName);
        section.scrollIntoView({ behavior: "smooth" })

        let activeElement = document.querySelector('li.active');
        activeElement.classList.remove('active');

        e.target.parentElement.classList.add('active')
    }
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
                    <li className="active" onClick={scrollToSection}><a href="#about">About Me</a></li>
                    <li><a href="#resume" onClick={scrollToSection}>My Resume</a></li>
                    <li><a href="#skills" onClick={scrollToSection}>My Toolbox</a></li>
                    <li><a href="#portfolio" onClick={scrollToSection}>Featured Projects</a></li>
                    <li><a href="#contact" onClick={scrollToSection}>Let's Connect</a></li>
                </ul>
            </div>
            <footer>
                <small>&copy; 2024. Inspired by <a target="_blank" href="https://brittanychiang.com/">Brittany Chiang</a>. Coded in <span>Visual Studio Code</span> by yours truly, built with <span>React</span> and deployed with <span>Netlify</span>.</small>
            </footer>
        </aside>
    )
}

export default Sidebar;