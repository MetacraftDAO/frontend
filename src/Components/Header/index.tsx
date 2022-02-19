import {Row} from "antd";
import {Link} from "react-router-dom";
import {
    NavLink,
    HeaderSection,
    Span, NavContainer, NavLeft, NavRight,
} from "./styles";
import Login from "../Login/Login";

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
                    {/* <NavLink>
                        <Link to="/verify">
                            <Span>PLAY NOW</Span>
                        </Link>
                    </NavLink> */}
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
