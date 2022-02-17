import React from 'react';
import { StyledProductContainer } from '../../atoms';
import { StyledButton } from '../../atoms';
import { useLocalStorage } from '../../../hooks/hooks'
import { ShoppingCartLink } from '../../molecules'
import {countItems} from '../../../utils/utils'

//import { useGetProducts } from '../../../hooks/Hooks'


const items = require('../../../assets/products/products.json');

export const ProductList = ({ ...props }) => {

    const [cart, setCart] = useLocalStorage("cart", () => {
        if (JSON.parse(localStorage.getItem("cart")) && JSON.parse(localStorage.getItem("cart")).length) {
            return localStorage.getItem("cart")
        } else {
            return JSON.stringify([])
        }
    });

    const addToCart = (id) => {
        let newCart = JSON.parse(cart);
        const itemToPush = {
            id: id,
            qty: 1
        };
        if (newCart && newCart.length) {
            for (let i = 0; i < newCart.length; i++) {
                if (newCart[i].id === id) {
                    newCart[i].qty += 1
                    setCart(JSON.stringify(newCart));
                    return
                }
            }
            newCart.push(itemToPush)
        } else {
            newCart = [itemToPush]
        }
        setCart(JSON.stringify(newCart))
    }
    return (
        <div>
            <ShoppingCartLink to="/cart">
                {countItems(JSON.parse(cart))}
            </ShoppingCartLink>
            {items.map(({ description, price, title, image, id }) => (
                <StyledProductContainer key={id}>
                   { /*<img src={image} alt={title} /> */}
                    <div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <StyledButton onClick={(e) => addToCart(id)}>{price}</StyledButton>
                    </div>
                </StyledProductContainer >
            ))}
        </div>
    )
}
