import React from "react";

import {useContext} from "react";
import {AppPulpitContext} from "../context/AppPulpitContext";

const AppAddingPlan = () => {


    const {setView} = useContext(AppPulpitContext)

    const backToMain = (e) => {
        e.preventDefault()
        setView("main")
    }

    return (
        <div className="addPlanForm">
            <div>WORK IN PROGRESS...</div>
            <div className="recipeButtons">
                <button type="button" onClick={backToMain}>WRÓĆ</button>
            </div>
        </div>
    )
}

export default AppAddingPlan;