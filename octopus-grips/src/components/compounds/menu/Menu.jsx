import React from 'react';
import { bool, func } from 'prop-types';
import { StyledMenu } from '../../atoms';
import { StyledButton } from '../../atoms'
import { MenuLink } from '../../molecules';

const items = require('../../../assets/navigation/navPages.json');

export const Menu = ({ open, setOpen, ...props }) => {
    const isHidden = open ? true : false;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            {items.map(({ path, icon, title }) => (
                <StyledButton key={path} onClick={() => setOpen(false)}>
                    <MenuLink key={path} to={path} icon={icon}>
                        {title}
                    </MenuLink>
                </StyledButton>
            ))
            }
        </StyledMenu >
    )
}

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
}

