import styled from "styled-components";

export const Title = styled.h1`
  padding-top: 3rem;
  color: darkslategrey;
  font-size: 1.5rem;
  font-weight: bolder;
  font-family: "pressstart", sans-serif;
`

export const SubTitle = styled.h5`
  color: darkgreen;
  font-family: "pressstart", sans-serif;
  line-height: 1.4;

`
export const SectionTitle = styled.h4`
  font-family: "pressstart", sans-serif;

`
export const SectionDescription = styled.p`
  font-size: 1.8rem;
`


export const Section = styled.div`
  border: 10px solid #0d364b;
  background-color: #cfc;
  padding: 1rem 3rem;
  margin-bottom: 2rem;
  box-shadow: 3px 3px 0 0 #161616;
`


export const WalletSection = styled(Section)`
  background-color: #cfc;
`

export const MintSection = styled(Section)`
  background-color: #ccf3ff;
`