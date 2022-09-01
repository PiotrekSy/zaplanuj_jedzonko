import React, {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import db from "../firebase";
import {RecipeContext} from "../context/RecipeContext";

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
//-----------------------------------------
    const [visibility, setVisibility] = useState(false);
    const showRecipeSidebar = () => setVisibility(!visibility);

    const [reciepe, setReciepe] = useState()

    return (
        <RecipeContext.Provider value = {{reciepe,setReciepe}}>
            <div className="przepisy">
                <div>
                    <select value={mealType}
                            className="selectInput"
                            onChange={changeFilter}>
                        <option value="">-Wybierz typ posiłku-</option>
                        <option value="śniadanie">Śniadanie</option>
                        <option value="przekąska">Przekąska</option>
                        <option value="obiad">Obiad</option>
                        <option value="podwieczorek">Podwieczorek</option>
                        <option value="kolacja">Kolacja</option>
                    </select>
                </div>
                <div className="recipeContainer">
                    {recipes.map((element, index) => element.mealType === mealType ?
                        <>
                            <li key={index}>{element.name}</li>
                            <button className="przepis" onClick={showRecipeSidebar}>
                            </button>
                        </> : null)}
                </div>

            </div>
        </RecipeContext.Provider>

    )
}

export default AppPrzepisy