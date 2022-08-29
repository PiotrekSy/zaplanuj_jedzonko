import React, {useContext} from "react";
import AppPulpit from "./AppPulpit.js";
import AppPrzepisy from "./AppPrzepisy.js";
import AppPlany from "./AppPlany.js";
import {SiteContext} from "../context/SiteContext";
import "firebase/auth";

const AppContent = () => {

    const {site} = useContext(SiteContext);

    return (
        <div className="content">
            {site === "pulpit" && <AppPulpit id="pulpit" path='/pulpit' className="pulpit"/>}
            {site === "przepisy" && <AppPrzepisy id="przepisy" path='/przepisy' className="[przepisy]"/>}
            {site === "plany" && <AppPlany id="plany" path='/plany' className="plany"/>}
        </div>
    )
}

export default AppContent