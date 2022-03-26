import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Foodcart from '../Foodcart/Foodcart';
import './Foods.css';
const Foods = () => {
    const [foods, setFoods] = useState([]);


    useEffect(() => {
        fetch('Foodsdata.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    const addToCartHandler = (foods) => {
        const foodItems = foods;

        for (const food in foodItems) {
            console.log(food.length)
        }

    }
    return (
        <div className="container">
            <div className="foods-container">
                <div className='foods'>
                    {
                        foods.map(food => <Food
                            key={food.id}
                            foods={food}
                            addToCartHandler={addToCartHandler}
                        ></Food>)
                    }
                </div>
                <div className="cart-summery">
                    <Foodcart cart={foods}></Foodcart>
                </div>

            </div>
        </div>
    );
};

export default Foods;