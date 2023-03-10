import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.backgrounds.lightest};      
        -webkit-font-smoothing: antialiased;
    }

    #root {
        height: 100vh;
    }

    body, input, textarea, button {
        font-family: ${(props) => props.theme.fonts.regular}, sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
        border: none;
    }

    a {
        text-decoration: none;
    }

    strong, h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }

    ::-webkit-scrollbar {
        width: 8px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.05);
    }
    
    ::-webkit-scrollbar-track {
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }
`;
