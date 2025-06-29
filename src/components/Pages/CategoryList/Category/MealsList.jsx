import Meal from "./Meal";

const MealsList = ({ meals }) => {
    return (
        <div className="list">
            {meals.map((meal) => {
                return <Meal key={meal.idMeal} {...meal} />;
            })}
        </div>
    );
};

export default MealsList;
