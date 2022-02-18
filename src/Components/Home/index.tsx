import Mint from "../Mint";
import {Contract} from "near-api-js";
import DisplayNft from "../Nft/nft";


// const response = await getLastTransactionStatus();
interface Props {
    contract: Contract,
    response: any
}

const Home = ({contract, response}:Props) => {
    return (
        <>
            <h1>Welcome Home!</h1>
            <Mint contract={contract} response={response}></Mint>
            <DisplayNft contract={contract}></DisplayNft>
        </>
    );
};

export default Home;
