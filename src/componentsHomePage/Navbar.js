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
                        GŁÓWNA
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
                        O NAS
                    </Link>
                    <Link className="nav-text"
                          to="contact"
                          spy={true}
                          smooth={true}
                          duration={500}>
                        KONTAKT
                    </Link>
                    <LinkRouter className="nav-text" to="planningApp"
                                style={{textDecoration: "none", color: "#E58A20", marginRight: "3vw"}}>
                        ZAPLANUJ POSIŁKI!
                    </LinkRouter>
                </div>
            </div>
        </div>
    )
}

export default Navbar