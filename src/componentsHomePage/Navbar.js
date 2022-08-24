import React from "react";
import {Link as LinkRouter} from "react-router-dom"
import {Link} from "react-scroll";


const Navbar = () => {

    return (
        <div className="navigation">
            <div className="navButtons">
                <div className='navMenuItems'>
                    <Link className="nav-text"
                          to="carousel"
                          spy={true}
                          smooth={true}
                          duration={500}>
                        HOME
                    </Link>
                    <Link className="nav-text"
                          to="benefits"
                          spy={true}
                          smooth={true}
                          duration={500}>
                        DLACZEGO WARTO?
                    </Link>
                    <Link className="nav-text"
                          to="about"
                          spy={true}
                          smooth={true}
                          duration={500}>
                        O MNIE
                    </Link>
                    <Link className="nav-text"
                          to="contact"
                          spy={true}
                          smooth={true}
                          duration={500}>
                        KONTAKT
                    </Link>
                    <LinkRouter className="nav-text" to="planningApp">
                        ZAPLANUJ POSIŁKI!
                    </LinkRouter>
                </div>
            </div>
        </div>
    )
}

export default Navbar