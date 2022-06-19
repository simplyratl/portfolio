import React from "react";
import "../../style/dist/contact.min.css";

const ContactPage = () => {
    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <h2 className="contact-me">Contact me</h2>

                <p className="contact-info">
                    Feel free to contact me about any question, freelance or job opportunities!
                </p>

                <form className="contact-form">
                    <div className="row twos">
                        <div className="input">
                            <input type="text" placeholder="Name" autoComplete="off" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Email" autoComplete="off" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input">
                            <input type="text" placeholder="Subject" autoComplete="off" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input">
                            <textarea rows="4" placeholder="Message"></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <button type="button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
