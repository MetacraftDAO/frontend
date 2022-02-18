import styled from "styled-components";

export const Image = styled.img`
  display: block;
  width: 175px;
  height: 175px;
  //border: 3px solid white;
  margin: 0 auto 1.5rem;

`

export const Collection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const NFT = styled.div`
  //border: 2px solid #282c34;
  width: 175px;
  height: 300px;
  margin: 1rem;
`

const Link = styled.a`
  display: block;
  padding: 0.3rem;
  color: #282c34;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid #15843C;
  border-radius: 20px;
  margin: 1rem 0;
`

export const SelectSkin = styled(Link)`
`

export const Stake = styled(Link)`
`