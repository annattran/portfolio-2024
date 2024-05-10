import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect, useRef } from 'react';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('about');
    const sections = useRef([]);

    const handleScroll = () => {
        const windowOffset = window.pageYOffset || window.scrollY;
        const padding = 90;
        const pageYOffset = windowOffset + padding;
        let newActiveSection = null;

        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id
            }
        })

        setActiveSection(newActiveSection);
    }

    useEffect(() => {
        sections.current = document.querySelectorAll('section');
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);;
        }
    }, []);

    const updateClass = (e) => {
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
                    <li className={activeSection === 'about' ? 'active' : null}><a href="#about" onClick={updateClass}>About Me</a></li>
                    <li className={activeSection === 'resume' ? 'active' : null}><a href="#resume" onClick={updateClass}>My Resume</a></li>
                    <li className={activeSection === 'skills' ? 'active' : null}><a href="#skills" onClick={updateClass}>My Toolbox</a></li>
                    <li className={activeSection === 'portfolio' ? 'active' : null}><a href="#portfolio" onClick={updateClass}>Featured Projects</a></li>
                    <li className={activeSection === 'contact' ? 'active' : null}><a href="#contact" onClick={updateClass}>Let's Connect</a></li>
                </ul>
            </div>
            <footer>
                <small>&copy; 2024. Inspired by <a target="_blank" href="https://brittanychiang.com/">Brittany Chiang</a>. Coded in <span>Visual Studio Code</span> by yours truly, built with <span>React</span> and deployed with <span>Netlify</span>.</small>
            </footer>
        </aside>
    )
}

export default Sidebar;