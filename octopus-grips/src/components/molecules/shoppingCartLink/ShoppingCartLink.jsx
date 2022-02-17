import React from 'react';
import { StyledShoppingCartLink } from '../../atoms';



export const ShoppingCartLink = ({ to, icon, active, children }) => {
 
  return (
    <StyledShoppingCartLink exact={true} to={to} activeClassName="link-active">
      {children}
    </StyledShoppingCartLink>
  );
};
