import React from 'react';
import './Foodcart.css';
const Foodcart = ({ cart }) => {
    console.log(cart)
    return (
        <div className='foodcart'>
            <h2>Food List</h2>
            {/* <button>Choose favorite items</button> */}
        </div>
    );
};

export default Foodcart;