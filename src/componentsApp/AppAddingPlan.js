import React from "react";
// import {useContext} from "react";
// import {AppPulpitContext} from "../context/AppPulpitContext";
// import {useState} from "react";
// import {addDoc, collection} from "firebase/firestore";
// import db from "../firebase";
// import {UserContext} from "../context/UserContext";

const AppAddingPlan = () => {


    // const {setView} = useContext(AppPulpitContext);
    // const {user} = useContext(UserContext);
    //
    // const backToMain = (e) => {
    //     e.preventDefault()
    //     setView("main")
    // }
    //
    // const [error, setError] = useState("")
    // const [errorMessage, setErrorMessage] = useState(false)

    //dodawanie składnika do przepisu:
    // const addPlan = (e) => {
    //     if (newPlan !== {}) {
    //         e.preventDefault();
    //         setNewPlan("");
    //     }
    // }

    //dodawanie przepisu do firebase:
    // const sendPlan = async (e) => {
    //     e.preventDefault();
    //     if (user) {
    //         const planRef = await db.collection("users").add(user.email);
    //         console.log(`wysłano plan :)`)
    //         // reset
    //     } else {
    //         setErrorMessage(false)
    //         setError("Coś poszło nie tak...")
    //         console.log("Coś poszło nie tak...")
    //     }
    // }

    return (
        <>
            <form className="addPlanForm">
                {/*<div className="recipeError" style={{color: errorMessage ? "green" : "red"}}>{error}</div>*/}
                <div className="recipeButtons">
                    {/*<button type="button" onClick={backToMain}>WRÓĆ</button>*/}
                    {/*<button type="submit" onClick={sendPlan}>DODAJ PRZEPIS</button>*/}
                </div>
            </form>
        </>
    )
}

export default AppAddingPlan;