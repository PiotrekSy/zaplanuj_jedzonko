import {Link as LinkRouter} from "react-router-dom";
import React from "react";
import {useState} from "react";
import {NavData} from "./NavData"

const MobileNavbar = () => {

    const [visibility, setVisibility] = useState(false);

    const showSidebar = () => setVisibility(!visibility);

    return (
        <div className="mobileNavigation">
            <div id="menu__toggle" style={{display: visibility ? "none" : "flex"}} className="menu__btn">
                <label className="menu__btn" htmlFor="menu__toggle" onClick={showSidebar}>
                    <div style={{border: "1px solid blue", height: '100%', width: '100%'}}></div>
                    <span></span>
                </label>
            </div>

            <nav className={visibility ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    {NavData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <LinkRouter to={item.path}>
                                    <p>{item.title}</p>
                                </LinkRouter>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>

    )
}

export default MobileNavbar