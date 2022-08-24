import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import React from "react";
import {Link} from 'react-scroll'

const Header = () => {
    return (
        <div className="header">
            <Link className="logo"
                  to="carousel"
                  spy={true}
                  smooth={true}
                  duration={500}>
                <div className="zaplanuj">Zaplanuj</div>
                <div className="space"></div>
                <div className="jedzonko"> Jedzonko</div>
            </Link>
            <Navbar className="navigation"/>
            <MobileNavbar/>
        </div>
    )
}

export default Header