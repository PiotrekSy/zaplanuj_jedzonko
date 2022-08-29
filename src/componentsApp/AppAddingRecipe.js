import React from "react";
import {useContext} from "react";
import {AppPulpitContext} from "../context/AppPulpitContext";

const AppAddingRecipe = () => {

    const {setView} = useContext(AppPulpitContext)

    const backToMain = (e) => {
        e.preventDefault()
        setView("main")
    }

    return (
        <>
            <div>
                <div>DODAWANIE PRZEPISU</div>
                <button onClick={backToMain}>Wróć do pulpitu</button>
            </div>
        </>
    )
}

export default AppAddingRecipe;