import styled from "styled-components";

export const Section = styled.div`
  background-color: black;
  background-image: url("./img/minecraft_world.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 100%;
  height: 300px;
  text-align: center;
  padding: 4rem;
`
export const SectionTitle = styled.div`
  color: #15843C;
  font-size: 1.8rem;
  font-family: "pressstart", sans-serif;
  font-weight: bold;
  padding: 2rem 0;
`

export const SectionDescription = styled.div`
  color: white;
  font-size: 1.7rem;
  font-weight: bold;
`

export const PlayNow = styled.a`
  display: block;
  margin: 3rem auto 1rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  background-color: #15843C;
  width: 150px;
  border-radius: 75px;
  padding: 0.7rem;
`