import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <section id="about" className="about">
            <h3 className="section-title">
                <FontAwesomeIcon icon={faUser} />
                About Me
            </h3>
            <p>I began coding during the Neopets era. From a young age, I've been passionate about creating projects that are both visually appealing and fully functional. Over the years, this passion has grown as I've evolved into a developer who excels at transforming complex designs into responsive, user-friendly websites and applications. Driven by a desire to blend aesthetics with usability, I am dedicated to delivering high-quality, efficient, and beautiful digital products.</p>
            <p>For more on my developer journey, read my blog post <a target="_blank" rel="noreferrer" href="https://medium.com/@annattran/reunited-with-code-1960b82a94be">here</a>.</p>
            <p>Outside of coding, you'll find me:</p>
            <ul>
                <li>staying active (🏸🏂🏻🏋🏻‍♀️🧘🏻‍♀️🏊🏻‍♀️🚴🏻‍♀️ to name a few)</li>
                <li>cooking or baking 👩🏻‍🍳</li>
                <li>watching TV shows and movies 🍿</li>
            </ul>
        </section>
    )
}

export default About;