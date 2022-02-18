import {Contract} from "near-api-js";
import DisplayNft from "../Nft/nft";
import {Parallax} from "react-parallax";
import {
    Heading,
    Overlay,
    Title
} from "./styles";
import Demo from "../Demo";
import Play from "../Play";
import GetStarted from "../GetStarted";


// const response = await getLastTransactionStatus();
interface Props {
    contract: Contract,
}

const images = {
    width: "100%"
};

const Home = ({contract}: Props) => {
    const image1 = "https://gmedia.playstation.com/is/image/SIEPDC/minecraft-hero-banner-desktop-01-ps4-en-07jul21?$native$"
    return (
        <>
            <Parallax bgImage={image1}
                      style={images}
            >
                <Overlay>

                </Overlay>
                <div style={{height: "70vh"}}>
                    <Heading>
                        <Title> Nearcraft </Title>
                        <h1> Get NFTs and Craft your World</h1>
                    </Heading>
                </div>
            </Parallax>


            <Demo/>
            <Play/>
            <GetStarted/>
        </>
    );
};

export default Home;
