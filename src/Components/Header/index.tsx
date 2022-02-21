import {Row} from "antd";
import {Link} from "react-router-dom";
import {
    NavLink,
    HeaderSection,
    Span, NavContainer, NavLeft, NavRight,
} from "./styles";
import Login from "../Login/Login";
import Login2 from "../Login/Login2";

const Header = () => {

    const MenuItem = () => {
        return (
            <NavContainer>
                <NavLeft>
                    <NavLink>
                        <Link to="/">
                            <Span>HOME</Span>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/nft">
                            <Span>NFT & GAME</Span>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/map">
                            <Span>MAP</Span>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/whitepaper">
                            <Span>WHITEPAPER</Span> 
                        </Link>
                    </NavLink>
                </NavLeft>
                <NavRight>
                    <NavLink>
                        <Login/>
                    </NavLink>
                    <NavLink>
                        <Login2/>
                    </NavLink>
                </NavRight>
            </NavContainer>
        );
    };

    return (
        <HeaderSection>
            <Row justify="space-between">
                <MenuItem/>
            </Row>
        </HeaderSection>
    );
};

export default Header;
