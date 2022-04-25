import  styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const GlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
        word-break: break-word;
        
        display: flex;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;

        background-color: #FAFAFA;
    }
`;

export {
    StyledLink,
    GlobalStyle
}