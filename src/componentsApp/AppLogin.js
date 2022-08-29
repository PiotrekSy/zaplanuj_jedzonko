import React, {useState, useEffect} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import "firebase/auth";
import db, {auth} from "../firebase";
import {collection, onSnapshot} from "firebase/firestore";

const AppLogin = () => {

    useEffect(() => {
        onSnapshot(collection(db, "users"), (snapshot) => {
            snapshot.docs.map(doc => doc.data());
        });
    }, [])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("");

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    const emailCheck = () => {
        if (!isValidEmail(email)) {
            setEmailError('Podany email jest nieprawidłowy');
        } else {
            setEmailError("");
        }
    }
    const passwordLengthCheck = () => {
        if (password.length <= 5) {
            setPasswordError('Hasło ma mieć przynajmniej 6 znaków');
        } else {
            setPasswordError("");
        }
    }

    //funckcja logowania:
    const login = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Zalogowano z powodzeniem, Witam w aplikacji! ;)")
        } catch {
            console.log("Failed to log in!")
        }
    }

    return (
        <div className="registrationForm">
            <div className="regForm">
                <div className="regTitle">Zaloguj się</div>
                <form className="greyArea" onSubmit={login}>
                    <label className="regLabel" htmlFor="email">Email:</label>
                    <input className="regInput" type="email"
                           id="email"
                           onChange={e => {
                               setEmail(e.target.value);
                               emailCheck();
                           }}>
                    </input>

                    {emailError !== "" && <div className="errorMessage">{emailError}</div>}
                    <label className="regLabel" htmlFor="password">Hasło:</label>
                    <input className="regInput" type="password"
                           id="password"
                           onChange={e => {
                               setPassword(e.target.value)
                               passwordLengthCheck();
                           }}>
                    </input>
                    {passwordError !== "" && <div className="errorMessage">{passwordError}</div>}
                    <div className="regButtons">
                        <div className="regButton">
                            <button className="regButtonRange"
                                    type="submit">
                                <div className="regButtonText">Zaloguj</div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
// poprzedni reg button
// <div className="regButton">
//     <button className="regButtonRange"
//             type="button"
//             onClick={(e) => {
//                 e.preventDefault()
//                 console.log("Wracam do rejestracji!!")
//             }}>
//         <Link to='/Register'
//               className="regLoginLink">
//             <p className="regButtonText">Załóż konto</p>
//         </Link>
//     </button>
// </div>

export default AppLogin