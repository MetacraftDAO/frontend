import {Contract} from "near-api-js";

import {
    Heading,
    Overlay,
    Para,
    Title
} from "./styles";
import Demo from "../Demo";
import Play from "../Play";
import GetStarted from "../GetStarted";

interface Props {
    contract: Contract,
}

const Home = ({contract}: Props) => {
    const image1 = "https://gmedia.playstation.com/is/image/SIEPDC/minecraft-hero-banner-desktop-01-ps4-en-07jul21?$native$"
    return (
        <>
                <Para bgImage={image1}
                >
                    <Overlay>

                    </Overlay>
                    <div style={{height: "70vh"}}>
                        <Heading>
                            <Title> Nearcraft </Title>
                            <h1> Get NFTs and Craft your World</h1>
                        </Heading>
                    </div>
                </Para>

            <Demo/>
            <Play/>
            <GetStarted/>
        </>
    );
};

export default Home;
