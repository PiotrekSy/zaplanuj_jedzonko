import React from "react";
import {useContext} from "react";
import {AppPulpitContext} from "../context/AppPulpitContext";

const AppPulpitMain = () => {

    const {setView} = useContext(AppPulpitContext)

    const addRecipe = (e) => {
        e.preventDefault()
        setView("addRecipe")
    }

    const addPlan = (e) => {
        e.preventDefault()
        setView("addPlan")
    }

    return (
        <>
            <div className="buttonWrapper">
                <div className="addButton" onClick={addRecipe}>
                    <div className="buttonIcon">
                        <div>+</div>
                    </div>
                    <div className="buttonText">DODAJ PRZEPIS</div>
                </div>
                <div className="addButton" onClick={addPlan}>
                    <div className="buttonIcon">
                        <div>+</div>
                    </div>
                    <div className="buttonText">DODAJ PLAN</div>
                </div>
            </div>
            <div className="planDisplay"></div>
        </>
    )
}

export default AppPulpitMain;