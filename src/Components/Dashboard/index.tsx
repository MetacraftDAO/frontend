import Mint from "../Mint";
import {Contract} from "near-api-js";
import {DisplayNft} from "../Nft/nft";
import BuildToken from "../BuildToken";

import {
    SectionDescription,
    SectionTitle,
    Section,
    Bg,
    Hr
} from "./styles"
import Container from "../Container";


interface Props {
    contract: Contract,
    response: any
}

const printNftMintMsg = (response: any) => {
    if (response && response.status != null && response.method === 'nft_mint') {
        let prefix = response.status ? "Mint succeeded!" : "";
        return prefix + " " + (response ? response.msg : "");
    }
    return "";
}

const Dashboard = ({contract, response}: Props) => {
    return (
        <>
            <Bg>
                <Container>
                    <SectionTitle>
                        When Minecraft meets Blockchain
                    </SectionTitle>
                    <SectionDescription>
                        Mint & Stake you BlockHead now to enjoy the MetaCraft Metaverse!
                    </SectionDescription>
                    <b>{printNftMintMsg(response)}</b>
                    <Mint contract={contract} response={response}/>
                </Container>
            </Bg>

            <Section>
                <Container>
                    <SectionTitle>Your BlockHeads</SectionTitle>
                    <SectionDescription>
                        Stake your BlockHeads and Join MetaCraft server at 18.219.218.172 to earn $BUILDs! 
                        
                        Once $BUILD is claimed, you'll be able to use these utility
                        tokens for upcoming features, and other future projects.
                    </SectionDescription>
                    <DisplayNft contract={contract}/>

                    <Hr/>
                    <SectionTitle>Your Unclaimed $BUILD</SectionTitle>
                    <SectionDescription>
                        Show $BUILD you have earned!
                    </SectionDescription>
                    <BuildToken/>
                </Container>
            </Section>
        </>
    )
        ;
};

export default Dashboard;
