import React, {useContext, useState} from "react";
import {Link as LinkRouter} from "react-router-dom";
import {auth} from "../firebase";
import {signOut} from "firebase/auth";
import {SiteContext} from "../context/SiteContext";
import {UserContext} from "../context/UserContext"

const AppMobileNavbar = () => {

    const {setUser} = useContext(UserContext);
    const [visibility, setVisibility] = useState(false);
    const showSidebar = () => setVisibility(!visibility);
    const {setSite} = useContext(SiteContext)

//funckcja wylogowania:
    const logout = async () => {
        await signOut(auth)
        setUser(null)
    }

    return (
        <div className="appMobileNavigation">
            <div id="menu__toggle" style={{display: visibility ? "none" : "flex"}} className="menu__btn">
                <label className="menu__btn" htmlFor="menu__toggle" onClick={showSidebar}>
                    <div className="mobileMenuIcon">
                        <div className="topBar"></div>
                        <div className="middleBar"></div>
                        <div className="bottomBar"></div>
                    </div>
                </label>
            </div>
            <nav className={visibility ? 'nav-menu active' : 'nav-menu'}>
                <div className='nav-menu-items' onClick={showSidebar}>
                    <label className="mobileMenuCloseButton" htmlFor="menu__toggle" onClick={showSidebar}>
                        <div className="mobileMenuCloseIcon">
                            <div className="crossBarOne"></div>
                            <div className="crossBarTwo"></div>
                        </div>
                    </label>
                    {/*links*/}
                    <div className="appMobileNavigation">
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
                </div>
            </nav>
        </div>

    )
}

export default AppMobileNavbar