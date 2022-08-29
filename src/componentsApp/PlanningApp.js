import React from "react";
import AppHeader from "./AppHeader";
import AppAuth from "./AppAuth";
import AppFooter from "./AppFooter";
import {UserContext} from "../context/UserContext";
import {SiteContext} from "../context/SiteContext";
import {useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const PlanningApp = () => {

    const [user, setUser] = useState(null)
    const [site, setSite] = useState("pulpit")


    useEffect(() => {
        const auth = getAuth();
        return onAuthStateChanged(auth, (user) => user ? setUser(user) : null)
    })

    return (<div className="planningApp">
            <UserContext.Provider value={{user, setUser}}>
                <SiteContext.Provider value={{site, setSite}}>
                    <AppHeader/>
                    <AppAuth/>
                    <AppFooter/>
                </SiteContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default PlanningApp