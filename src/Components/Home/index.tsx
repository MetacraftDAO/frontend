import {Contract} from "near-api-js";

import {
    Block,
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
    return (
        <>
                <Para bgImage={"/img/minecraft-banner.jpeg"}
                >
                    <Overlay>

                    </Overlay>
                    <Block>
                        <Heading>
                            <Title> MetaCraft </Title>
                            <h1> Get NFTs and Craft your World</h1>
                        </Heading>
                    </Block>
                </Para>

            <Demo/>
            <Play/>
            <GetStarted/>
        </>
    );
};

export default Home;
