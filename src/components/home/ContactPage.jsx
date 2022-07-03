import React, { useState } from "react";
import "../../style/dist/contact.min.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState("");
    const [verified, setVerified] = useState(false);

    const [sentCounter, setSentCounter] = useState(0);

    const sendEmail = (e) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setTimeout(() => {
                setStatus("");
            }, 2500);

            setStatus("You have to fill out all fields.");
            return;
        }

        if (!verified) return setStatus("You have to pass the ReCAPTCHA.");

        if (sentCounter > 0) return setStatus("You cannot send more more than 1 mail at once.");

        setStatus("Sending...");

        emailjs.sendForm("service_1nf15ha", "template_jpg9cbb", e.target, "DpNsu2ce7T4UzYt7Y").then(
            (result) => {
                setTimeout(() => {
                    setStatus("");
                }, 2500);

                setStatus("Message sent.");
                setSentCounter(1);
            },
            (error) => {
                setTimeout(() => {
                    setStatus("");
                }, 2500);

                setStatus("Error.");
                console.log(error);
            }
        );
    };

    function onChangeRecaptcha(value) {
        if (value.length > 0) {
            setVerified(true);
        }
    }

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <h2 className="contact-me">Contact me</h2>

                <p className="contact-info">
                    Feel free to contact me about any question, freelance or job opportunities!
                </p>

                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="row twos">
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                autoComplete="off"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Subject"
                                name="message"
                                autoComplete="off"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input">
                            <textarea rows="4" placeholder="Message"></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <ReCAPTCHA
                            sitekey="6LeLEr8gAAAAAOaVmphZlPiyvsaYbcyJDcxTtV9E"
                            onChange={onChangeRecaptcha}
                        />
                        ,
                    </div>

                    <div className="row">
                        <button type="submit">Submit</button>
                    </div>

                    <div className="status">{status}</div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
