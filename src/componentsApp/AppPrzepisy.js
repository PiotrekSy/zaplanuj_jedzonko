import React, {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import db from "../firebase";


const AppPrzepisy = () => {

    //zasysanie przepisów
    const [recipes, setRecipes] = useState([])

    useEffect(() => onSnapshot(collection(db, "recipes"), (snapshot) => {
        setRecipes(snapshot.docs.map(doc => doc.data()))
    }), [])

    //filtr
    const [mealType, setMealType] = useState("");
    const changeFilter = (e) => {
        setMealType(e.target.value)
    }
//-----------------------------------------
//wyświetlanie przepisów:

    const [showRecipePanel, setShowRecipePanel] = useState(false)
    const [recipeName, setRecipeName] = useState("")
    const [recipeDescription, setRecipeDescription] = useState("")
    const [recipeIngredients, setRecipeIngredients] = useState([])

    let ingredientArray = [];

    const showRecipe = (e) => {
        e.preventDefault();
        setRecipeName(e.target.parentElement.firstElementChild.innerText);
        setRecipeDescription(e.target.parentElement.querySelector("#secondChild").innerText);
        console.log(ingredientArray)
        setRecipeIngredients(ingredientArray.map((element, index) => <p key={index}>{element}</p>
        ));
        setShowRecipePanel(!showRecipePanel);
    }

    return (

        <div className="przepisy">
            <button type="button" onClick={() => console.log(ingredientArray)}>asdasdasdas</button>
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
                    <div className="recipeItem" key={index}>
                        <div id="firstChild">{element.name}</div>
                        <div id="secondChild" style={{display: "none"}}>{element.description}</div>
                        <div id="thirdChild"
                             style={{display: "none"}}>{ingredientArray.push(...element.ingredients)}</div>
                        <button onClick={showRecipe}>lup</button>
                    </div> : null)}
            </div>
            {showRecipePanel &&
                <div className="recipePanel">
                    <div>{recipeName}</div>
                    <div>Składniki:</div>
                    <div>{recipeIngredients}</div>
                    <div>Sposób przygotowania:</div>
                    <div>{recipeDescription}</div>
                    <button type="button" onClick={() => setShowRecipePanel(!showRecipePanel)}>EXIT</button>
                </div>}
        </div>
    )
}

export default AppPrzepisy