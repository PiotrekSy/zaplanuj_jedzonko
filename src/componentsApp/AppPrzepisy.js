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
    const [ingredientsArray, setIngredientsArray] = useState([]);

    const showRecipe = (e) => {
        e.preventDefault();
        setRecipeName(e.target.parentElement.firstElementChild.innerText);
        setRecipeDescription(e.target.parentElement.querySelector("#secondChild").innerText);
        let array = e.target.parentElement.querySelector("#thirdChild").getElementsByTagName("li");
        let myArray = [];
        for (let i = 0; i < array.length; i++) {
            myArray.push(array[i].innerText)
        }
        setIngredientsArray(myArray)
        setShowRecipePanel(!showRecipePanel);

    }

    return (
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
                    <div className="recipeItem" key={index}>
                        <div id="firstChild">{element.name.toUpperCase()}</div>
                        <div id="secondChild" style={{display: "none"}}>{element.description}</div>
                        <div id="thirdChild" style={{display: "none"}}>
                            <ul>{element.ingredients.map((element, index) => <li key={index}>{element}</li>)}</ul>
                        </div>
                        <button type = "button" onClick={showRecipe}>
                            <div className="lupka" unselectable="true"/>
                        </button>
                    </div> : null)}
            </div>
            {showRecipePanel &&
                <div className="recipePanel">
                    <div>{recipeName.toUpperCase()}</div>
                    <div>Składniki:</div>
                    <div>{ingredientsArray.map((element, index) => <div key={index}>{index + 1}. {element}</div>)}</div>
                    <div>Sposób przygotowania:</div>
                    <div>{recipeDescription}</div>
                    <button type="button" onClick={() => setShowRecipePanel(!showRecipePanel)}>EXIT</button>
                </div>}
        </div>
    )
}

export default AppPrzepisy