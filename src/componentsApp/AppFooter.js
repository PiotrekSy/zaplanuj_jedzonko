import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";


const AppContent = () => {

    const {user} = useContext(UserContext)

    return (
        <div className="footerText">
            {user === null ?
                <div>Zaloguj w celu uzyskania dostępu do zawartości aplikacji!</div> :
                <div>Witaj, {user.email}</div>}
        </div>

    )
}

export default AppContent