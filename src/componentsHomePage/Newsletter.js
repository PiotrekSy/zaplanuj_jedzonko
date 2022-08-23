import React, {useState} from "react";
import db from "../firebase";
import {addDoc, collection} from "firebase/firestore";


const Newsletter = () => {

    const [email, setEmail] = useState("")

    const emailRef = collection(db, "emailsToSendNewsletter");

    const sendNewsletterEmail = async (e) => {
        e.preventDefault();
        if (email !== "") {
            await addDoc(emailRef, {email});
        }
        setEmail("")
    }

    return (
        <div className="newsletter">
            <div className="newsletterText">Jeżeli chcesz być na bieżąco z naszymi nowościami i promocjami, prześlij
                nam swój email, na który będziemy mogli regularnie Cię o nich informować!
            </div>
            <div className="newsletterInputWrapper">
                <form className="newsletterInputForm" onSubmit={sendNewsletterEmail}>
                    <input className="newsletterInput"
                           placeholder="Twój e-mail"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <button type="submit" className="newsletterButton">GET NEWSLETTER!</button>
                </form>
            </div>
        </div>)
}

export default Newsletter;