import {Row} from "antd";
import {Link} from "react-router-dom";
import Login from "../Login/Login";
import {
    NavLink,
    HeaderSection,
    Span, NavContainer, NavLeft, NavRight,
} from "./styles";

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
