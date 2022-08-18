import React from "react";
import {Link as LinkRouter} from "react-router-dom"
import {Link} from "react-scroll";


const Navbar = () => {

    return (
        <div className="navigation">
            <div className="navButtons">
                <ul className='localNavMenuItems'>
                    <li className="nav-text">
                        <LinkRouter className="nav-text" to="/">
                            <p className="nav-text">HOME</p>
                        </LinkRouter>
                    </li>
                    <li className="nav-text">
                        <Link className="nav-text"
                              to="isItWorth"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p className="nav-text">DLACZEGO WARTO?</p>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link className="nav-text"
                              to="about"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p className="nav-text">O MNIE</p>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link className="nav-text"
                              to="contact"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p className="nav-text">KONTAKT</p>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <LinkRouter className="nav-text" to="planningApp">
                            <p className="nav-text">ZAPLANUJ POSIŁKI!</p>
                        </LinkRouter>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar