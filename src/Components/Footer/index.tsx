import Container from "../Container";
import {
    FooterSection, Img, Link, Socials,
} from "./styles";


const Footer = () => {

    return (
        <FooterSection>
            <Container>
                <Socials>
                    <Link target="_blank" rel="noopener noreferrer" href={"https://twitter.com/Amoebafriends"} >
                        <Img src="/img/twitter.png" alt="twitter"/>
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href={"https://discord.gg/amoebafriends"}>
                        <Img  src="/img/discord.png" alt="discord"/>
                    </Link>
                </Socials>
            </Container>

        </FooterSection>

    );
};

export default Footer;
