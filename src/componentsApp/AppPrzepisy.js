import React, {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import db from "../firebase";

const AppPrzepisy = () => {

    const [recipes, setRecipes] = useState([])
    const [mealType, setMealType] = useState("");

    useEffect(() =>
        onSnapshot(collection(db, "recipes"), (snapshot) => {
            setRecipes(snapshot.docs.map(doc => doc.data()))
        }), [])

    const changeFilter = (e) => {
        setMealType(e.target.value)
    }

    return (
        <div className="przepisy">
            <div>
                <select value={mealType}
                        className="selectInput"
                        onChange={changeFilter}>
                    <option value="">-Wybierz typ posiłku-</option>
                    <option value="śniadanie">Śniadanie</option>
                    <option value="lunch">Lunch</option>
                    <option value="obiad">Obiad</option>
                    <option value="podwieczorek">Podwieczorek</option>
                    <option value="kolacja">Kolacja</option>
                </select>
            </div>
            <div className="recipeContainer">
                {recipes.map((element, index) => element.mealType === mealType ?
                    <li key={index}>{element.name}</li> : null)}
            </div>
        </div>
    )
}

export default AppPrzepisy