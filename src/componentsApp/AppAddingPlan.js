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
        <>
            <div>
                <button onClick={backToMain}></button>
            </div>
        </>
    )
}

export default AppAddingPlan;