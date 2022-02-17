import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const StyledShoppingCartLink = styled(NavLink)`
    position: fixed;
    top: 5%;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    width: 2rem;
    height: 2rem;
    border: none;
    cursor: pointer;
    height:50px;
    width:50px;
    z-index: 10;
    color: ${({ theme }) => theme.primaryDark};
    border: 3px solid ${({ theme }) => theme.primaryDark};
    background: ${({ theme }) => theme.primaryBackground};
    font-size:2em;
    border-radius:100%;
    &:focus {
        outline: none;
    }
`
