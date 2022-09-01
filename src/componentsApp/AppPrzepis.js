import React from "react";

const AppPrzepis = () => {

    return (
        <div className="appMobileNavigation">
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


                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppPrzepis