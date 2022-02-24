import {

    Section,
    SectionDescription,
    SectionTitle,
    Video,
} from "./styles";

import Container from "../Container";

const Demo = () => {
    return (
        <Section>
            <Container>

                <SectionTitle>
                    When Minecraft meets Blockchain
                </SectionTitle>

                <SectionDescription>
                    We created a virtual space where Minecraft and blockchain converge beautifully.
                    <br/>
                    Play, Earn and Own plots of land and NFTs in Minecraft the Metaverse.
                </SectionDescription>

                <SectionDescription>
                    Server Number: 18.219.218.172
                </SectionDescription>


                <Video src="https://www.youtube.com/embed/TFalq1tBes0"
                       title="YouTube video player" frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen/>
            </Container>

        </Section>
    );
};

export default Demo;
