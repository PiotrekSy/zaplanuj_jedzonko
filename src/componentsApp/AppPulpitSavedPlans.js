import React, {useContext} from "react";
// import {useEffect, useState} from "react";
// import {collection, onSnapshot} from "firebase/firestore";
// import db from "../firebase";
import {UserContext} from "../context/UserContext"

const AppPulpitSavedPlans = () => {


    const {user} = useContext(UserContext)


    return (
        <div className="planDisplay">asdasd
            <div> {user.email}</div>
            {/*<div> {currentUser.email}</div>*/}
        </div>
    )
}

export default AppPulpitSavedPlans;