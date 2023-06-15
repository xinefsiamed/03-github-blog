import { createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
        background-color: ${(props) => props.theme["base-background"]};
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem
    }
`
