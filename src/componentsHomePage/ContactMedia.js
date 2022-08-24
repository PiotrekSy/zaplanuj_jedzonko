import React from "react";

const ContactMedia = () => {
    return (<div className="contactMediaWrapper">
        <div className="contactInformation">
            <p>Dostęp do aplikacji zawierającej plany żywieniowe jest możliwy wyłącznie po zarejestrowaniu, <p
                style={{color: "#c78a2f", textShadow: "black 0.5px 0.5px 1px"}}>do
                którego zachęcam w celu poznania pełnej funkcjonalności aplikacji!</p></p>
            <br/>
            <p>Strona używa firebase jako bazy danych do przechowywania danych formularzy oraz autentykacji.<p
                style={{color: "#c78a2f", textShadow: "black 0.5px 0.5px 1px"}}>Proszę nie używać prawdziwych haseł
                podczas logowania!</p></p>
            <br/>
            <p>Strona została stworzona do prezentacji umiejętności użytkownika GitHub <p
                style={{color: "#c78a2f", textShadow: "black 0.5px 0.5px 1px"}}>PiotrekSy.</p></p>
            <br/>
            <p>Zachęcam do kontaktu poprzez <a href="https://www.linkedin.com/in/piotr-syjud-230451243/"
                                               target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><p
                style={{color: "#c78a2f", textShadow: "black 0.5px 0.5px 1px"}}>LinkedIn:</p></a>
            </p>
        </div>
        <div className="contactTitle">Skontaktuj się ze mną:</div>
        <div className="contactIcons">
            <a href="https://www.facebook.com/piotr.syjud.1" target="_blank" rel="noreferrer">
                <div className="contactIcon icon1"/>
            </a>
            <a href="https://www.linkedin.com/in/piotr-syjud-230451243/" target="_blank" rel="noreferrer">
                <div className="contactIcon icon2"/>
            </a>
            <a href="https://github.com/PiotrekSy" target="_blank" rel="noreferrer">
                <div className="contactIcon icon3"/>
            </a>
        </div>
    </div>)
}

export default ContactMedia;