import React, {useState} from "react";
import {Link} from 'react-scroll'
import {Link as LinkRouter} from "react-router-dom";

const MobileNavbar = () => {

    const [visibility, setVisibility] = useState(false);

    const showSidebar = () => setVisibility(!visibility);

    return (<div className="mobileNavigation">
            {/*buttons to open and close mobile menu*/}
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
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <label className="mobileMenuCloseButton" htmlFor="menu__toggle" onClick={showSidebar}>
                        <div className="mobileMenuCloseIcon">
                            <div className="crossBarOne"></div>
                            <div className="crossBarTwo"></div>
                        </div>
                    </label>

                    {/*links*/}

                    <li className="nav-text">
                        <Link className="nav-text" to="carousel"
                              spy={true}
                              smooth={true}
                              duration={500}
                              onClick={showSidebar}>
                            <p className="nav-text">GŁÓWNA</p>
                        </Link>
                    </li>

                    <li className="nav-text">
                        <Link className="nav-text"
                              to="benefits"
                              spy={true}
                              smooth={true}
                              duration={500}
                              onClick={showSidebar}>
                            <p className="nav-text">DLACZEGO WARTO?</p>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link className="nav-text"
                              to="about"
                              spy={true}
                              smooth={true}
                              duration={500}
                              onClick={showSidebar}>
                            <p className="nav-text">O NAS</p>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link className="nav-text"
                              to="contact"
                              spy={true}
                              smooth={true}
                              duration={500}
                              onClick={showSidebar}>
                            <p className="nav-text">KONTAKT</p>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <LinkRouter className="nav-text" to="planningApp" style={{color: "white"}}>
                            <p className="nav-text">ZAPLANUJ POSIŁKI!</p>
                        </LinkRouter>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default MobileNavbar