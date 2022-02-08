import {createGlobalStyle} from "styled-components";

// Global styles
export const Styles = createGlobalStyle`
  @font-face {
    font-family: "minecraftchmc";
    src: url("fonts/minecraftchmc.ttf") format("truetype");
    font-style: normal;
  }
  
  body,
  html,
  a,
  p,
  span {
    font-family: 'minecraftchmc', sans-serif;
  }
  
  a{
    text-decoration: none;
  }

  body {
    margin-bottom:50px;
  }

`;