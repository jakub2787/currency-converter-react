import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

        *, ::after, ::before {
        box-sizing: inherit;
    }

    #root {
    min-height: 100vh;
    font-family: 'Lato', sans-serif;
    background-image: url("${background}");
    background-size: cover;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;