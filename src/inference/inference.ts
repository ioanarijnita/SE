import { Answers } from "../App";
import restaurants from "../database/db.json";

export type RestaurantType = {
    id: number;
    name: string;
    vegan: boolean;
    vegetarian: boolean;
    meatType: string[];
    specific: string;
    averageMealPrice: number;
    neighbourhood: string;
    delivery: boolean;
    rating: number;
    outsideSeating: boolean;
    streetName: string
}

export function calculateBestOption(answers: Answers): RestaurantType | null {
    const result = restaurants
        .filter(restaurant => restaurant.vegan === answers.vegan)
        .filter(restaurant => answers.vegetarian !== undefined ? restaurant.vegetarian === answers.vegetarian : true)
        .filter(restaurant => answers.meatType !== undefined ? restaurant.meatType.some(meat => answers.meatType?.includes(meat)) : true)
        .filter(restaurant => answers.specific !== undefined ? restaurant.specific === answers.specific : true)
        .filter(restaurant => answers?.averageMealPrice! === 50 ? restaurant.averageMealPrice < answers.averageMealPrice! :
            answers.averageMealPrice! === 100 ? (restaurant.averageMealPrice >= 50 && restaurant.averageMealPrice <= 100) :
                answers.averageMealPrice! === 150 ? (restaurant.averageMealPrice >= 100 && restaurant.averageMealPrice <= 150) :
                    restaurant.averageMealPrice > 150
        )
        .filter(restaurant => answers.neighbourhood !== undefined ? restaurant.neighbourhood === answers.neighbourhood : true)
        .filter(restaurant => restaurant.delivery === answers.delivery)
        .filter(restaurant => restaurant.rating === answers.rating)
        .filter(restaurant => restaurant.outsideSeating === answers.outsideSeating)
    return result.length ? result[0] : null;
}
