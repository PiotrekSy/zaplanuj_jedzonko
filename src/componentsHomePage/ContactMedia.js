import React from "react";

const ContactMedia = () => {
    return (
        <div className="contactMediaWrapper">
            <div className="contactInformation">
                <p>Strona używa firebase jako bazy danych do przechowywania danych formularzy oraz autentykacji.</p>
                <p>Dostęp do aplikacji zawierającej plany żywieniowe jest możliwy wyłącznie po zarejestrowaniu, do
                    którego
                    zachęcam!</p>
                <p>Strona została stworzona do celów prezentacji umiejętności przez użytkownika PiotrekSy</p>
            </div>
            <div className="contactTitle">Kontakt:</div>
            <div className="contactIcons">
                <div className="contactIcon icon1">Ikona GitHub</div>
                <div className="contactIcon icon2">Ikona LinkedIn</div>
                <div className="contactIcon icon3">Ikona Facebooka</div>
            </div>
        </div>
    )
}

export default ContactMedia;