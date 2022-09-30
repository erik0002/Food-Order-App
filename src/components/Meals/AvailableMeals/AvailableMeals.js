import Card from '../../UI/Card/Card';
import classes from './AvailableMeals.module.css';
import MealItem from "../MealItem/MealItem";
import {useEffect, useState } from "react";


const AvailableMeals = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://vue-http-demo-a3d10-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    meal: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                });
            }
            setMeals(loadedMeals)
        };

        fetchMeals();
    }, []);

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            meal={meal}
        />
    ));

    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
}

export default AvailableMeals;
