import React from "react";

const ContactMedia = () => {
    return (<div className="contactMediaWrapper">
        <div className="contactInformation" style={{width: "90vw"}}>
            <div style={{textShadow: "black 0.5px 0.5px 1px", textAlign: "center"}}>Dostęp do aplikacji zawierającej
                plany żywieniowe jest możliwy wyłącznie po zarejestrowaniu, <div
                    style={{color: "#c78a2f", textShadow: "black 0.5px 0.5px 1px", textAlign: "center"}}>do
                    którego zachęcam w celu poznania pełnej funkcjonalności aplikacji!</div></div>
            <br/>
            <div style={{textShadow: "black 0.5px 0.5px 1px", textAlign: "center"}}>Strona używa firebase jako bazy
                danych do przechowywania danych formularzy oraz autentykacji.
                <div
                    style={{color: "#c78a2f", textShadow: "black 0.5px 0.5px 1px", textAlign: "center"}}>Proszę nie
                    używać prawdziwych haseł
                    podczas logowania!
                </div>
            </div>
            <br/>
            <div style={{textShadow: "black 0.5px 0.5px 1px", textAlign: "center"}}>Strona została stworzona do
                prezentacji umiejętności użytkownika GitHub <div
                    style={{
                        color: "#c78a2f",
                        textShadow: "black 0.5px 0.5px 1px",
                        textAlign: "center"
                    }}>PiotrekSy.</div>
            </div>
            <br/>
            <div style={{textShadow: "black 0.5px 0.5px 1px", textAlign: "center"}}>Zachęcam do kontaktu poprzez <a
                href="https://www.linkedin.com/in/piotr-syjud-230451243/"
                target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                <div
                    style={{color: "#c78a2f", textShadow: "black 0.5px 0.5px 1px", textAlign: "center"}}>LinkedIn:
                </div>
            </a>
            </div>
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