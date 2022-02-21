import {Row} from "antd";
import {Link} from "react-router-dom";
import Login from "../login/Login";
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
