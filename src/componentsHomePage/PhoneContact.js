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
        }
        setPhone("")
        setHour("")
    }

    return (<div className="benefitsContactWrapper">
        <div className="benefitsContactItem">
            <div className="benefitsContactText">Chcesz dowiedzieć się więcej od naszego konsultanta? Zostaw swój numer
                a na
                pewno oddzwonimy!
            </div>
            <form className="benefitsContactInputWrapper" onSubmit={sendNewsletterEmail}>
                <label className="benefitsContactLabel">Proszę o kontakt na ten numer telefonu:
                    <input placeholder="Twój 9-cyfrowy numer telefonu"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}/>
                </label>
                <label className="benefitsContactLabel"> Najlepiej po godzinie:
                    <input type="time"
                           value={hour}
                           onChange={(e) => setHour(e.target.value)}/>
                    <button type="submit">Zadzwońcie do mnie!</button>
                </label>
            </form>
        </div>
    </div>)
}

export default PhoneContact;