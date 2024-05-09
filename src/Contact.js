import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h3 className="section-title">
                <FontAwesomeIcon icon={faEnvelope} />
                Let's Connect
            </h3>

        </section>
    )
}

export default Contact;