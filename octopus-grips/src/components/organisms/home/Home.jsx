import React from 'react';
import { useLocalStorage } from '../../../hooks/hooks'
import { ShoppingCartLink } from '../../molecules'
import {StyledContainer} from '../../atoms'
import {countItems} from '../../../utils/utils'
export const Home = () => {
    const [cart] = useLocalStorage("cart", localStorage.getItem("cart"));
    return (
        <StyledContainer>
            <ShoppingCartLink to="/cart">
                {countItems(JSON.parse(cart))}
            </ShoppingCartLink>
            <h1>Octopus grips</h1>
            <p>Super grippy</p>
        </StyledContainer>
    )
}