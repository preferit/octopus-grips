import React from 'react';
import { useLocalStorage } from '../../../hooks/hooks'
import { ShoppingCartLink } from '../../molecules'
import { countItems } from '../../../utils/utils'
import { StyledContainer } from '../../atoms/styledContainer/StyledContainer';
import { StyledP } from '../../atoms/styledP/StyledP';

export const Contact = () => {
    const [cart] = useLocalStorage("cart", localStorage.getItem("cart"));
    return (
        <StyledContainer>
            <ShoppingCartLink to="/cart">
                {countItems(JSON.parse(cart))}
            </ShoppingCartLink>
            <p>To make an inquiry or if you have any questions regarding our products <br/>please send it to</p>

            <StyledP>info@octopus-grips.com</StyledP>

        </StyledContainer>
    );
} 