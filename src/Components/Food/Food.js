import React from 'react';
import './Food.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Food = (props) => {
    // console.log(props)
    const { picture, name, price } = props.foods;
    return (
        <div className='single-food'>
            <div className="food-img">
                <img src={picture} alt="All img"></img>
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
            </div>
            <button onClick={() => props.addToCartHandler(props.foods)} className='add-to-cart-btn'>
                <p className='add-to-cart'>Add TO Cart</p>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Food;