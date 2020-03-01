//global.js
import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";

export const GlobalStyles = createGlobalStyle`
    html,
    body{
      margin: 0;
      padding: 0;
    }
    
    *, *::after, *::before {
      box-sizing: border-box;
    }
    
    body{
      color: ${({theme}) => theme.fontColor};
      font-family: 'Hind',sans-serif ;
      text-rendering: optimizeLegibility;
      font-size: 1rem;
      font-weight: ${({theme}) => theme.fontWeight};
      line-height: ${({theme}) => theme.lineHeight}
    }
    
    
    
`;