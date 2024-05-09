import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const About = () => {
    return(
        <section id="about" className="about">
            <h3 className="section-title">
                <FontAwesomeIcon icon={faUser} />
                About Me
            </h3>
            <p>I started coding back when there was Neopets. Ever since I was little, I loved taking on new challenges and learning by getting my feet wet.</p>
            <p>When I don't have my Jimmy Neutron hat on, you can find me</p>
            <ul>
                <li>walking down every aisle in the grocery store 👩‍🍳,</li>
                <li>reading on travel destinations 🌎,</li>
                <li>or aww-ing at cats and dogs 😍.</li>
            </ul>
            <p>For more on my developer journey, read my blog post <a target="_blank" href="https://medium.com/@annattran/reunited-with-code-1960b82a94be">here</a>.</p>
        </section>
    )
}

export default About;