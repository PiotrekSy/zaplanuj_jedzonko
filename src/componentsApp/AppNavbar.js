import React from "react";
import {Link as LinkRouter} from "react-router-dom";
import {auth} from "../firebase";
import {signOut} from "firebase/auth";
import {SiteContext} from "../context/SiteContext";
import {UserContext} from "../context/UserContext"
import {useContext} from "react";

const MobileNavbar = () => {

    const {setUser} = useContext(UserContext);
    const {setSite} = useContext(SiteContext)

//funckcja wylogowania:
    const logout = async () => {
        await signOut(auth)
        setUser(null)
    }

    return (
        <div className="navigation">
            <div className="navButtons">
                <div className='navMenuItems'>
                    <div className="nav-text" onClick={() => setSite("pulpit")}>PULPIT</div>
                    <div className="nav-text" onClick={() => setSite("przepisy")}>PRZEPISY</div>
                    <div className="nav-text" onClick={() => setSite("plany")}>PLANY</div>
                    <LinkRouter className="nav-text" to="/"
                                style={{
                                    textDecoration: "none", color: "#7f5020", marginRight: "3vw"
                                }}>
                        WRÓĆ NA GŁÓWNĄ
                    </LinkRouter>
                    <div className="nav-text"
                         style={{
                             textDecoration: "none", color: "#cbcbcb", marginRight: "3vw"
                         }}
                         onClick={logout}>
                        WYLOGUJ
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar