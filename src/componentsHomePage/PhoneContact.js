import React, {useState} from "react";
import db from "../firebase";
import {addDoc, collection} from "firebase/firestore";


const PhoneContact = () => {

    const [phone, setPhone] = useState("")
    const [hour, setHour] = useState("")

    const phoneRef = collection(db, "phonesToCallWithHour");

    const sendNewsletterEmail = async (e) => {
        e.preventDefault();
        if (phone !== "" && hour !== "") {
            await addDoc(phoneRef, {phone, callMeAfter: hour});
            console.log(`wysłano numer ${phone} z prośbą o kontakt po godzinie ${hour}`)
            setPhone("")
            setHour("")
        } else {
            console.log("nie wysyłam!")
        }
    }

    return (
        <div className="benefitsContactWrapper">
            <div className="benefitsContactText">Chcesz dowiedzieć się więcej od naszego konsultanta? Zostaw swój
                numer
                a na
                pewno oddzwonimy!
            </div>
            <div className="benefitsContactItem">
                <form className="benefitsContactInputWrapper" onSubmit={sendNewsletterEmail}>
                    <div className="benefitsLabels">
                        <div className="benefitsContactLabel">Proszę o kontakt na numer:
                            <input className="benefitInput"
                                   placeholder="Twój 9-cyfrowy numer telefonu"
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div className="phoneValidation"></div>
                        <div className="benefitsContactLabel"> Najlepiej po godzinie:
                            <input className="benefitInput"
                                   placeholder="Godzina po której życzysz sobie kontaktu"
                                   value={hour}
                                   onChange={(e) => setHour(e.target.value)}/>
                        </div>
                        <div className="hourValidation"></div>
                    </div>
                    <button type="submit" className="benefitsContactSubmitButton">Zadzwońcie do
                        mnie{hour !== "" ? ` po ${hour}` : `!`}</button>
                </form>
            </div>
        </div>)
}

export default PhoneContact;