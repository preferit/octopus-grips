import React from 'react';
import { StyledProductContainer } from '../../atoms';
import { StyledButton } from '../../atoms';
import { useLocalStorage } from '../../../hooks/hooks'
import { ShoppingCartLink } from '../../molecules'
import {countItems} from '../../../utils/utils'
import { useForm } from "react-hook-form";
import { StyledInputSubmit } from '../../atoms';


const items = require('../../../assets/products/products.json');
let total = 0
const getCart = (cart) => {
    total = 0
    let itemsInCart = []
    if (cart && cart.length) {
        for (let i = 0; i < cart.length; i++) {
            for (let j = 0; j < items.length; j++) {
                if (items[j].id === cart[i].id) {
                    items[j].qty = cart[i].qty
                    itemsInCart.push(items[j])
                    total += items[j].price * items[j].qty
                }
            }
        }
    }
    return itemsInCart
}

export const ShoppingCart = ({ ...props }) => {
    const [cart, setCart] = useLocalStorage("cart", localStorage.getItem("cart"));
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => console.log(total);
    const removeItem = (id) => {
        let stored = JSON.parse(cart);
        if (stored && stored.length) {
            for (let i = 0; i < stored.length; i++) {
                if (stored[i].id === id) {
                    stored[i].qty--
                    if (stored[i].qty < 1) {
                        stored.splice(i, 1)
                    }
                    break;
                }

            }
            setCart(JSON.stringify(stored));
        }
    }
    return (
        <div>
            <ShoppingCartLink to="/cart">
                {countItems(JSON.parse(cart))}
            </ShoppingCartLink>
            {getCart(JSON.parse(cart)).map(({ description, price, title, image, id, qty }) => (
                <StyledProductContainer key={id}>
                    {/*<img src={image} alt={title} />*/}
                    <div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <p>qty: {qty}</p>
                        <p>total: {price * qty} krakens</p>
                        <StyledButton onClick={(e) => removeItem(id)}>Remove one</StyledButton>
                    </div>
                </StyledProductContainer >
            ))}
            <h3>Total: {total} krakens</h3>
                 {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                 <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="fname">First name:</label>
                <input name="fname" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label htmlFor="lname">Last name:</label>
                <input name="lname" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label htmlFor="social-security">Social security number:</label>
                 <input name="social-security" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label htmlFor="address">Address:</label>
                 <input name="address" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label htmlFor="zip">Zip:</label>
                 <input name="zip" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label htmlFor="city">City:</label>
                 <input name="city" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label htmlFor="country">Country:</label>
                 <input name="country" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <StyledInputSubmit value="Buy it!"></StyledInputSubmit> 
            </form>
        </div>
    )
}