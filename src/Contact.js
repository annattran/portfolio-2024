import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mnqerngl");
    if (state.succeeded) {
        return (
            <section id="contact" className="contact">
                <h3 className="section-title">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Let's Connect
                </h3>
                <p>Message sent! If you don't hear back from me, feel free to reach out at <a href="mailto:annatran93@gmail.com">annatran93@gmail.com</a></p>
            </section>
        );
    }
    return (
        <section id="contact" className="contact">
            <h3 className="section-title">
                <FontAwesomeIcon icon={faEnvelope} />
                Let's Connect
            </h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    type="name"
                    name="name"
                    required
                />
                <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                />
                <label htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Contact;