import React from "react";
import AppPulpitButtons from "./AppPulpitButtons";
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
                        <AppPulpitButtons/>
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