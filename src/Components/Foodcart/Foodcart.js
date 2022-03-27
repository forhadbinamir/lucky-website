import React, { useState } from 'react';
import './Foodcart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const Foodcart = ({ food, setCart }) => {
    // const [cart, setCart] = useState
    console.log(food)
    const { name, picture, _id } = food;

    // const removeCartlist = (id) => {
    //     const foodId = _id;
    //     console.log(foodId)
    //     props.food.find(pd => pd !== _id);
    //     foodId.remove(id)
    //     console.log(id)
    // }
    const singleItem = () => {
        let id = _id;
        const singleList = food.filter(pd => pd !== id)
        console.log(singleList)
        setCart.remove([singleList])
    }

    return (
        <div className='food-cart' id='remove-cart'>
            <div id="cart-list" className='cart-list'>
                <img src={picture} alt="All img"></img>
                <h3>{name}</h3>
                <button onClick={singleItem}><FontAwesomeIcon className='f-icon' icon={faTrashCan} /></button>
            </div>
        </div>
    );
};

export default Foodcart;