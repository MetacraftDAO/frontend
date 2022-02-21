import {

    PlayNow,
    Section,
    SectionDescription,
    SectionTitle,
} from "./styles";

import Container from "../Container";

const Play = () => {
    const nft = "/nft"
    return (
        <Section>
            <Container>

                <SectionTitle>
                    Here We Go
                </SectionTitle>

                <SectionDescription>
                    Check out how to get started and have more fun...
                </SectionDescription>

                <PlayNow href={nft}>Play Now</PlayNow>
            </Container>

        </Section>
    );
};

export default Play;
