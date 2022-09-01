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
    //dodawanie składnika do przepisu:
    const addIngredient = (e) => {
        e.preventDefault();
        setIngredients([...ingredients, newIngredient])
        setNewIngredient("")
    }
    const [recipeName, setRecipeName] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")
    const phoneRef = collection(db, "recipes");

    const sendRecipe = async (e) => {
        e.preventDefault();
        if (description !== "" && recipeName !== "" && ingredients.length > 1) {
            await addDoc(phoneRef, {name: recipeName, description, ingredients});
            console.log(`wysłano przepis:)`)
            setRecipeName("")
            setDescription("")
            setIngredients([])
            setError("Przepis wysłany :)")
        } else {
            setError("nie wysyłam, coś jest nie teges!")
            console.log("nie wysyłam, coś jest nie teges!")
        }
    }

    return (
        <>
            <form className="addRecipeForm">
                <div className="recipeName">
                    <div>Nazwa przepisu:</div>
                    <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)}></input>
                </div>

                <div className="recipeIngredients">
                    <div className="recipeIngredientsItems">
                        <div>Dodaj składnik:</div>
                        <div><input type="textarea" value={newIngredient}
                                    onChange={(e) => setNewIngredient(e.target.value)}/>
                            <button type="button" onClick={addIngredient}>+</button>
                        </div>
                    </div>
                    <div className="ingredientsLabel">Twoje składniki:</div>
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
                <div className="recipeError">{error}</div>
                <div className="recipeButtons">
                    <button type="button" onClick={backToMain}>WRÓĆ</button>
                    <button type="submit" onClick={sendRecipe}>DODAJ PRZEPIS</button>
                </div>
            </form>
        </>
    )
}

export default AppAddingRecipe;