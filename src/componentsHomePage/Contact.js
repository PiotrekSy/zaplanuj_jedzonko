import React from "react";
import ContactMedia from "./ContactMedia";
import ContactFooter from "./ContactFooter";

const Contact = () => {
    return (
        <div className="contact">
            <ContactMedia className="contactMedia"/>
            <ContactFooter className="contactFooter"/>
        </div>
    )
}

export default Contact;
