import React from 'react';
import { StyledMenuLink } from '../../atoms';

export const MenuLink = ({ to, icon, active, children }) => {

  return (
    <StyledMenuLink exact={true} to={to} activeClassName="link-active">
      {children}
    </StyledMenuLink>
  );
};
