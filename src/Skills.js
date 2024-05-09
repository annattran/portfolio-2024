import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubesStacked } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faSass, faJs, faReact, faPhp, faWordpress, faGithub } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
        <section className="skills">
            <h3 className="section-title">
                <FontAwesomeIcon icon={faCubesStacked} />
                My Toolbox
            </h3>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faHtml5} />
                    <p>HTML5</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCss3Alt} />
                    <p>CSS3</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faSass} />
                    <p>SASS</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faJs} />
                    <p>JavaScript</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faReact} />
                    <p>React</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhp} />
                    <p>PHP</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faWordpress} />
                    <p>WordPress</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                    <p>GitHub</p>
                </li>
            </ul>
        </section>
    )
}

export default Skills;