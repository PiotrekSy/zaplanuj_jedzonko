import React from "react";

const ContactMedia = () => {
    return (
        <div className="contactMediaWrapper">
            <div className="contactInformation">
                <p>Strona używa firebase jako bazy danych do przechowywania danych formularzy oraz autentykacji.</p>
                <br/>
                <p>Dostęp do aplikacji zawierającej plany żywieniowe jest możliwy wyłącznie po zarejestrowaniu, <p
                    style={{color: "#c78a2f"}}>do
                    którego zachęcam by przekonać się o działaniu aplikacji!</p></p>
                <br/>
                <p>Strona została stworzona do prezentacji umiejętności użytkownika GitHub <p
                    style={{color: "#c78a2f"}}>PiotrekSy.</p></p>
                <br/>
                <p>Zachęcam do kontaktu poprzez <p
                    style={{color: "#c78a2f"}}>LinkedIn:</p></p>
            </div>
            <div className="contactTitle">Skontaktuj się ze mną:</div>
            <div className="contactIcons">
                <a href="https://www.facebook.com/piotr.syjud.1" target="_blank">
                    <div className="contactIcon icon1"/>
                </a>
                <a href="https://www.linkedin.com/in/piotr-syjud-230451243/" target="_blank">
                    <div className="contactIcon icon2"/>
                </a>
                <a href="https://github.com/PiotrekSy" target="_blank">
                    <div className="contactIcon icon3"/>
                </a>
            </div>
        </div>
    )
}

export default ContactMedia;