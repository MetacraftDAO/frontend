import Mint from "../Mint";
import {Contract} from "near-api-js";
import DisplayNft from "../wallet/nft";

interface Props {
    contract: Contract
}

const Home = ({contract}:Props) => {
    return (
        <>
            <h1>Welcome Home!</h1>
            <Mint contract={contract}></Mint>
            <DisplayNft contract={contract}></DisplayNft>
        </>
    );
};

export default Home;
