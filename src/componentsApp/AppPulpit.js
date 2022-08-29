import React from "react";
import AppPulpitMain from "./AppPulpitMain";
import AppAddingRecipe from "./AppAddingRecipe"
import AppAddingPlan from "./AppAddingPlan"
import AppPulpitSavedPlans from "./AppPulpitSavedPlans"

import {AppPulpitContext} from "../context/AppPulpitContext";
import {useState} from "react";


const AppPulpit = () => {

    const [view, setView] = useState("main");

    return (
        <AppPulpitContext.Provider value={{view, setView}}>
            <div className="pulpit">
                {view === "main" &&
                    <>
                        <AppPulpitMain/>
                        <AppPulpitSavedPlans/>
                    </>
                }
                {view === "addRecipe" && <AppAddingRecipe/>}
                {view === "addPlan" && <AppAddingPlan/>}
            </div>
        </AppPulpitContext.Provider>
    )
}

export default AppPulpit