import React from "react";
import AppPulpit from "./AppPulpit.js"
import AppPrzepisy from "./AppPrzepisy.js"
import AppPlany from "./AppPlany.js"

const AppContent = () => {
    return (
        <div className="content">
            <AppPulpit id="pulpit" path='/pulpit' className="pulpit"/>
            <AppPrzepisy id="pulpit" path='/przepisy' className="pulpit"/>
            <AppPlany id="pulpit" path='/plany' className="pulpit"/>
        </div>
    )
}

export default AppContent