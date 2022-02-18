import {Row} from "antd";
import {Link} from "react-router-dom";
import {
    NavLink,
    HeaderSection,
    Span,
} from "./styles";
import Login from "../login/Login";


const Header = () => {

    const MenuItem = () => {
        return (
            <>
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
                    <Login/>
                </NavLink>
            </>
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
