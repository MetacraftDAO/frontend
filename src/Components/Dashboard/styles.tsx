import styled from "styled-components";

export const Title = styled.h1`
  padding-top: 3rem;
  color: darkslategrey;
  font-size: 1.5rem;
  font-weight: bolder;
  font-family: "pressstart", sans-serif;
`

export const SectionTitle = styled.div`
  color: black;
  font-size: 1.8rem;
  font-family: "pressstart", sans-serif;
  font-weight: bold;
  padding: 2rem 0 1rem;
  
`
export const SectionDescription = styled.p`
  color: black;
  font-size: 1.8rem;
  text-align: center;
`

export const Section = styled.div`
  background-color: #cfc;
  padding: 1rem 4rem;
  margin-bottom: 2rem;
  box-shadow: 3px 3px 0 0 #161616;
  width: 100%;
  text-align: center;
`

export const WalletSection = styled(Section)`
  background-color: #cfc;
`

export const MintSection = styled(Section)`
  background-color: #ccf3ff;
`

export const Bg = styled(Section)`
  background-image: url("/img/grass.png");
  background-position: center 90%;
  margin: 0;
  border: 0;
  //background-position: center bottom;
`

export const Hr = styled.hr`
  background-color:darkgreen;
  padding: 2px;
  left: 50%;
  border-style: none;
  margin: 0 -4rem;
`