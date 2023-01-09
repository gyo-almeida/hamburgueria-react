import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --color-primery: #FF4500;
        --color-primery-50: #EF8C4C;
        --color-secondary: #27AE60;

        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        --white: #FFFFFF;
    }

    body{
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }

    ul{
        list-style: none;
    }
`;
