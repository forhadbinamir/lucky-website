import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Foodcart from '../Foodcart/Foodcart';
import './Foods.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [exists, setExists] = useState(false)
    const [limititems, setLimititems] = useState(false)


    useEffect(() => {
        fetch('Foodsdata.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    const addToCartHandler = (foods) => {
        const newCart = [...cart, foods];
        const exists = cart.find(pd => pd._id === foods._id)
        if (newCart.length > 4) {
            openModal()
            setLimititems(true)
            setExists(false)
        }
        else if (exists) {
            openModal()
            setLimititems(false)
            setExists(true)
        }
        else {
            setCart(newCart);
        }


    }
    const chooseAgain = () => {
        setCart([])
    }
    const chooseOne = () => {
        const mathRandom = cart[Math.round(Math.random() * cart.length)]
        const chooseFood = cart.filter(pd => pd._id === mathRandom._id)
        setCart(chooseFood)

        console.log(chooseFood)
    }
    const singleItem = (id) => {
        // console.log(id)
        const singleFood = cart.find(pd => pd._id === id)
        const singleItem = cart.filter(pd => pd._id !== singleFood._id)
        setCart(singleItem)
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="container">
            {/* modal code  */}
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>close</button>
                    {
                        exists ? <h2>Already exists items</h2> : null
                    }
                    {
                        limititems ? <h2>You have allow to only 4 items</h2> : null
                    }
                </Modal>
            </div>
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
                                singleItem={singleItem}
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