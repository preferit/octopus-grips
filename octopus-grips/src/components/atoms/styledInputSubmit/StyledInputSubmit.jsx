import styled from 'styled-components';

export const StyledInputSubmit = styled.input.attrs((value, type) => ({ 
    type: (type ? type : 'submit'),
    value: value
  }))`
    background: ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.primaryDark};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    transition: color 0.3s linear;
    border: 3px solid ${({ theme }) => theme.primaryDark};

    &:hover {
        color: ${({ theme }) => theme.primaryHover};
        background: ${({ theme }) => theme.primaryDark};
        border: 3px solid ${({ theme }) => theme.primaryHover};
    }
`;
