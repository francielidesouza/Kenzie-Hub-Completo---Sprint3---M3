import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --font-family: 'Inter', sans-serif;

        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --white: #ffffff;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;

        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

        

        --font-size-18: 1.125rem; /*18px*/
        --font-size-16: 1rem; /*16px*/
        --font-size-14: 0.875rem; /*14px*/
        --font-size-13:0.8125rem; /*13px*/
        --font-size-12: 0.75rem; /*12px*/
        --font-size-10: 0.625rem; /*10px*/

        --radius-4: 4px;
        --radius-3: 3.21px; 


        
        body {
            font-family: var(--font-family);
            background-color: var(--grey-4);
        }

        fieldset, input, button {
            border: none;
        }

        button {
            cursor: pointer;
        }
        

        *{
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            list-style: none;
            text-decoration: none;
        }
    }
`;
