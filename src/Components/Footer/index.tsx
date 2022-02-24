import Container from "../Container";
import {
    FooterSection, Img, Link, Socials,
} from "./styles";


const Footer = () => {

    return (
        <FooterSection>
            <Container>
                <Socials>
                    <Link target="_blank" rel="noopener noreferrer" href={"https://twitter.com/MetacraftDAO"} >
                        <Img src="/img/twitter.png" alt="twitter"/>
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href={"https://youtu.be/-yTRfY-PJBU"}>
                        <Img  src="/img/youtube.png" alt="youtube"/>
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href={"https://t.me/MetacraftDAO"}>
                        <Img  src="/img/telegram.png" alt="youtube"/>
                    </Link>
                </Socials>
            </Container>

        </FooterSection>

    );
};

export default Footer;
