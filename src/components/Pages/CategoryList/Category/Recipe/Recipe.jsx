import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getMealByID } from "../../../../../api";

import Preloader from "../../../../Preloader/Preloader";

const Recipe = () => {
    const [recipe, setRecipe] = useState({});

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getMealByID(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>
                </div>
            )}

            <table className="centered">
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(recipe).map((key) => {
                        if (key.includes("Ingredient") && recipe[key]) {
                            return (
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>
                                        {recipe[`strMeasure${key.slice(13)}`]}
                                    </td>
                                </tr>
                            );
                        }

                        return null;
                    })}
                </tbody>
            </table>

            <button className="btn" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </>
    );
};

export default Recipe;
