import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


export const StyledMenuLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.primaryDark};
  padding: 12px;
  &:hover {
    color: ${({ theme }) => theme.primaryDark};
    background: ${({ theme }) => theme.primaryDark};
  }
  &:focus {
    text-decoration: none;
  }
  &.link-active {
    color: ${({ theme }) => theme.primaryDark};
  }
`;
