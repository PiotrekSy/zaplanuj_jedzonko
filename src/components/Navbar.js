import React from "react";
import {Link as LinkRouter} from "react-router-dom"
import {NavData} from "./NavData";

const Navbar = () => {

    return (
        <div className="navigation">
            <div className="navButtons">
                <ul className='localNavMenuItems'>
                    {NavData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <LinkRouter to={item.path} className="localNavMenuItem">
                                    <div className="localNavMenuItemText">{item.title}</div>
                                </LinkRouter>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar