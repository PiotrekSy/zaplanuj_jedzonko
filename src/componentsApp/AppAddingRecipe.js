import React, {useState} from "react";
import {useContext} from "react";
import {AppPulpitContext} from "../context/AppPulpitContext";
import {addDoc, collection} from "firebase/firestore";
import db from "../firebase";

const AppAddingRecipe = () => {

    const {setView} = useContext(AppPulpitContext)

    const backToMain = (e) => {
        e.preventDefault()
        setView("main")
    }

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [recipeName, setRecipeName] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")
    const [mealType, setMealType] = useState("")
    const [errorMessage, setErrorMessage] = useState(false)

    const recipeRef = collection(db, "recipes");

    //dodawanie składnika do przepisu:
    const addIngredient = (e) => {
        e.preventDefault();
        setIngredients([...ingredients, newIngredient])
        setNewIngredient("")
    }
    //dodawanie przepisu do firebase:
    const sendRecipe = async (e) => {
        e.preventDefault();
        if (description !== "" && recipeName !== "" && ingredients.length > 1 && mealType !== "") {
            await addDoc(recipeRef, {name: recipeName, description, ingredients, mealType});
            console.log(`wysłano przepis :)`)
            setRecipeName("")
            setDescription("")
            setIngredients([])
            setError("Przepis wysłany :)")
            setMealType("")
            setErrorMessage(true)
        } else {
            setErrorMessage(false)
            setError("Coś poszło nie tak...")
            console.log("Coś poszło nie tak...")
        }
    }

    return (
        <>
            <form className="addRecipeForm">

                <div className="recipeName">
                    <div>Nazwa przepisu:</div>
                    <input type="text" value={recipeName} onChange={(e) =>
                        setRecipeName(e.target.value)}/>
                </div>

                <div className="recipeIngredientsItems" style={{marginTop: "3vh"}}>
                    <div className="recipeMealTypeItems">
                        <div>Typ posiłku:</div>
                        <select value={mealType}
                                className="selectInput"
                                onChange={(e) =>
                                    setMealType(e.target.value)}>
                            <option value="">-Wybierz typ posiłku-</option>
                            <option value="śniadanie">Śniadanie</option>
                            <option value="przekąska">Przekąska</option>
                            <option value="obiad">Obiad</option>
                            <option value="podwieczorek">Podwieczorek</option>
                            <option value="kolacja">Kolacja</option>
                        </select>
                    </div>
                </div>

                <div className="recipeIngredients">
                    <div className="recipeIngredientsItems">
                        <div>Dodaj składnik:</div>
                        <div>
                            <input type="textarea" value={newIngredient}
                                   onChange={(e) =>
                                       setNewIngredient(e.target.value)}/>
                            <button type="button" onClick={addIngredient}>+</button>
                        </div>
                    </div>

                    <div className="recipeIngredientsList">

                        <div>{ingredients.map((element) => element + ", ")}</div>
                    </div>
                </div>


                <div className="recipeDescription">
                    <div>Wpisz przepis:</div>
                    <textarea value={description}
                              onChange={(e) =>
                                  setDescription(e.target.value)}>
                        </textarea>
                </div>

                <div className="recipeError" style={{color: errorMessage ? "green" : "red"}}>{error}</div>

                <div className="recipeButtons">
                    <button type="button" onClick={backToMain}>WRÓĆ</button>
                    <button type="submit" onClick={sendRecipe}>DODAJ PRZEPIS</button>
                </div>

            </form>
        </>
    )
}

export default AppAddingRecipe;