import React, { useState } from 'react';
import './Foodcart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const Foodcart = ({ food, singleItem }) => {
    // const [cart, setCart] = useState
    // console.log(food)
    const { name, picture, _id } = food;


    return (
        <div className='food-cart' id='remove-cart'>
            <div id="cart-list" className='cart-list'>
                <img src={picture} alt="All img"></img>
                <h3>{name}</h3>
                <button onClick={() => singleItem(_id)}><FontAwesomeIcon className='f-icon' icon={faTrashCan} /></button>
            </div>
        </div>
    );
};

export default Foodcart;