import React from "react";
import {Link} from 'react-scroll'
import {Link as LinkRouter} from "react-router-dom";

const MobileNavbar = () => {

    return (
        <div className="navigation">
            <div className="navButtons">
                <div className='navMenuItems'>
                    <Link className="nav-text"
                          to="/"
                          spy={true}
                          smooth={true}
                          duration={500}>
                        PULPIT
                    </Link>
                    <Link className="nav-text"
                          to="przepisy"
                          spy={true}
                          smooth={true}
                          duration={500}>
                        PRZEPISY
                    </Link>
                    <Link className="nav-text"
                          to="plany"
                          spy={true}
                          smooth={true}
                          duration={500}>
                        PLANY
                    </Link>
                    <LinkRouter className="nav-text" to="/"
                                style={{textDecoration: "none", color: "#E58A20", marginRight: "3vw"}}>
                        WRÓĆ NA GŁÓWNĄ
                    </LinkRouter>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar