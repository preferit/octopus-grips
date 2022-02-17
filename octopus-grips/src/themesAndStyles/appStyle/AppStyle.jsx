import { createGlobalStyle } from 'styled-components';
import img from '../../assets/images/octopus.png'

export const AppStyle = createGlobalStyle`

    html, body {
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        align-items: center;
        background-image: url(${img});
        color: #EFFFFA;
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        /*height: 100vh;*/
        justify-content: flex-start;
        flex-direction:column;
        text-rendering: optimizeLegibility;
        color: ${({ theme }) => theme.primaryLight};
        /* Full height */
        min-height: 100%;
        /* Center and scale the image nicely :) */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1, h2, h3 {
        color: ${({ theme }) => theme.primaryDark};
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        background: yellow;
    }

    img {
        border-radius: 5px;
        height: auto;
        width: 10rem;
    }
    div {
        text-align: center;
    }

    small {
        display: block;
    }

    a {
        color: ${({ theme }) => theme.primaryHover};
        text-decoration: none;
    }
    p {
        color: ${({ theme }) => theme.primaryDark};
        background: yellow;
        text-align: center;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        color: ${({ theme }) => theme.primaryDark};
        background: yellow;
        text-align: center;
        margin: 1em;
        padding: 0.25em 1em;
        border: 3px solid ${({ theme }) => theme.primaryDark};
        background: ${({ theme }) => theme.primaryBackground};
    }
    input {
        color: ${({ theme }) => theme.primaryDark};
        background: ${({ theme }) => theme.primaryHover};;
        text-align: center;
        border: solid;
        &:focus {
            color: ${({ theme }) => theme.primaryHover};
            background:  ${({ theme }) => theme.primaryDark};
        }
    }
`
