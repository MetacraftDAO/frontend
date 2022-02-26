import styled, {createGlobalStyle} from "styled-components";

// Global styles
export const Styles = createGlobalStyle`
  @font-face {
    font-family: "minecraftchmc";
    src: url("fonts/minecraftchmc.ttf") format("truetype");
    font-style: normal;
  }

  @font-face {
    font-family: "pressstart";
    src: url("fonts/PressStart2P-Regular.ttf") format("truetype");
    font-style: normal;
  }

  @font-face {
    font-family: "minecraftia";
    src: url("fonts/Minecraftia-Regular.ttf") format("truetype");
    font-style: normal;
  }
  
  body,
  html,
  /* a, */
  /* p, */
  span {
    font-family: 'minecraftchmc', sans-serif;
  }
  
  a{
    text-decoration: none;
  }

  body {
    //margin-bottom:50px;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  font-family: 'minecraftia',sans-serif;
  background-color: #0d4b25;
  color: #fff;
  font-size: 1.1rem;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
  display: inline-block;
  border: none;
  padding-top: 13px;
`