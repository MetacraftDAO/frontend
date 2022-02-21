import styled from "styled-components";
import {Parallax} from "react-parallax";

export const Heading = styled.div`
  width: 50%;
  padding: 20px;
  color: white;
  top: 50%;
  position: relative;
  transform: translate(0%, -50%);
  text-align: center;
  margin-bottom: 5rem;
`

export const Title = styled.div`
  font-family: "pressstart", sans-serif;
  font-size: 2.5rem;
`

export const Overlay = styled.div`
  background-image: linear-gradient(to right, #000000, #4b4a4a);
  height: 100%;
  width: 50%;
  position: absolute;
  opacity: 0.7;
  left: -4rem;
`

export const Para = styled(Parallax)`
  padding: 0 4rem;
  width: 100%;

`