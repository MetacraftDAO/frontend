import styled from "styled-components";
import {DownOutlined} from "@ant-design/icons";
import DropdownButton from "antd/lib/dropdown/dropdown-button";

export const HeaderSection = styled("header")`
  padding: 1rem 4rem;
  background: #000000;
  width: 100%;  
  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const Nav = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const NavLink = styled(Nav)`
  font-size: 1.2rem;
  color: #ffffff;
  transition: color 0.2s ease-in;
  margin: 0.5rem 1rem;

`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
  font-size: 2rem;
  font-weight: bolder;

  &:hover,
  &:active,
  &:focus {
    color: #ffffff;
    text-underline-position: under;
    text-decoration: #ffffff solid underline;
    text-decoration-thickness: 0.2rem;
  }
`;

export const NavContainer = styled("div")`
  width: 100%;
  display: flex;
`

export const NavRight = styled.div`
  float: right;
  width: 100%;
`
export const NavLeft = styled.div`
  float: left;
  width: 100%;
`
export const WalletButton = styled(DropdownButton)`
  height: 40px;
  background-color: black;
  color: whitesmoke;
  font-size: 2rem;
  font-family: "pressstart", sans-serif;
  border: none;
  font-weight: bold;
`

export const Arrow = styled(DownOutlined)`
  vertical-align: center;
`