import {

    PlayNow,
    Section,
    SectionDescription,
    SectionTitle,
} from "./styles";

import Container from "../Container";

const Play = () => {
    return (
        <Section>
            <Container>

                <SectionTitle>
                    Here We Go
                </SectionTitle>

                <SectionDescription>
                    Check out how to get started and have more fun...
                </SectionDescription>

                <PlayNow>Play Now</PlayNow>
            </Container>

        </Section>
    );
};

export default Play;
