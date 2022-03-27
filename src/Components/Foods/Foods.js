import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Foodcart from '../Foodcart/Foodcart';
import './Foods.css';
const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('Foodsdata.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    const addToCartHandler = (foods) => {
        // console.log(foods);
        const newCart = [...cart, foods];
        setCart(newCart);

    }
    const chooseAgain = () => {
        setCart([])
    }
    const chooseOne = () => {
        const mathRandom = cart.length;
        const diceFood = Math.random() * mathRandom
        const rounded = Math.round(diceFood)
        console.log(rounded)
        const chooseOne = cart.filter(pd => pd !== rounded);
        setCart([chooseOne])
    }


    return (
        <div className="container">
            <div className="foods-container">
                <div className='foods'>
                    {
                        foods.map(food => <Food
                            key={food._id}
                            foods={food}
                            addToCartHandler={addToCartHandler}
                        ></Food>)
                    }
                </div>
                <div className="cart-summery">
                    <h2>Food List: {cart.length}</h2>
                    <div id="cart-summery">
                        {
                            cart.map(food => <Foodcart
                                food={food}
                                key={food._id}
                                setCart={setCart}
                            ></Foodcart>)
                        }
                    </div>
                    <div className='btn-cart'>
                        <button onClick={chooseOne}>Choose One</button>
                        <button onClick={chooseAgain}>Choose Again</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Foods;