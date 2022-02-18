import styled from "styled-components";

export const FooterSection = styled("footer")`
  background: black;
  width: 100%;
  padding: 1rem 4rem;
  height: 50px;
  margin-bottom: 0;
`;

export const Img = styled.img`
  margin: 0;
  width: 30px;
  padding: 0 10px 0 10px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`
export const Link = styled.a`
  padding: 0;
  text-decoration: none;
`

export const Socials = styled.div`
  display: flex;
  float: right;
`