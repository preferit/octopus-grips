import styled from 'styled-components';

export const StyledProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 3px solid ${({ theme }) => theme.primaryDark};
    background: ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.primaryDark};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
`
