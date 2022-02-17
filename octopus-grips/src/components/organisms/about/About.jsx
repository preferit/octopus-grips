import React from 'react';

import { useLocalStorage } from '../../../hooks/hooks'
import { ShoppingCartLink } from '../../molecules'
import { countItems } from '../../../utils/utils'
import { StyledContainer } from '../../atoms/styledContainer/StyledContainer';

export const About = () => {
    const [cart] = useLocalStorage("cart", localStorage.getItem("cart"));
    return (
        <StyledContainer>
            <ShoppingCartLink to="/cart">
                {countItems(JSON.parse(cart))}
            </ShoppingCartLink>
            <h2>Natural rubber at its finest</h2>
            <p>Hand made grips in natural rubber good for your hands and for the environment</p>
            <p>Designed with grippyness in mind</p>
        </StyledContainer>
    )
}