import React from "react";
import ContactMedia from "./ContactMedia";
import ContactFooter from "./ContactFooter";

const Contact = () => {
    return (
        <div className="contact">
            <ContactMedia className="contactMediaWrapper"/>
            <ContactFooter className="contactFooterWrapper"/>
        </div>
    )
}

export default Contact;
