import React, {useContext, useState} from "react";
import AppContent from "./AppContent"
import AppLogin from "./AppLogin";
import AppRegister from "./AppRegister";
import {UserContext} from "../context/UserContext";

const AppAuth = () => {

    const [wantToRegister, setWantToRegister] = useState(false)
    const [wantToLogin, setWantToLogin] = useState(true)
    const {user} = useContext(UserContext);

    const moveToLogin = (e) => {
        e.preventDefault()
        setWantToLogin(true)
        setWantToRegister(false)
    }

    const moveToRegister = (e) => {
        e.preventDefault()
        setWantToRegister(true)
        setWantToLogin(false)
    }

    return (
        <div className="appMain" style={{display: "flex", flexDirection: "column"}}>

            {/*sekcje*/}
            {user === null && wantToLogin ? <AppLogin/> : null}
            {user === null && wantToRegister ? <AppRegister title="AppRegister"/> : null}

            {/*buttony*/}
            {wantToRegister && user === null && <div className="loginChangeButton">
                <div className="loginChangeText">Mam konto, chcę się zalogować!</div>
                <button type="button" onClick={moveToLogin}>Zaloguj!</button>
            </div>}
            {wantToLogin && user === null && <div className="loginChangeButton">
                <div className="loginChangeText">Nie mam konta, chcę się zarejestrować!</div>
                <button type="button" onClick={moveToRegister}>Załóż konto!</button>
            </div>}

            {/*właściwe dane aplikacji po loginie*/}
            {user !== null && <AppContent/>}

        </div>
    )
}

export default AppAuth