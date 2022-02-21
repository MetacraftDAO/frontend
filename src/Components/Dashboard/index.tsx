import Mint from "../Mint";
import {Contract} from "near-api-js";
import DisplayNft from "../Nft/nft";
import BuildToken from "../BuildToken";

import {
    MintSection,
    SectionDescription,
    SectionTitle,
    WalletSection,
    Section,
    Bg
} from "./styles"
import Container from "../Container";


interface Props {
    contract: Contract,
    response: any
}

const printNftMintMsg = (response: any) => {
    if (response && response.status != null && response.method === 'nft_mint') {
        let prefix = response.status ? "Mint succeeded!" : "";
        return prefix + " " + (response? response.msg : "");
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
                        Mint you BlockHead now to dive into the NearCraft Metaverse!
                    </SectionDescription>
                    <b>{printNftMintMsg(response)}</b>
                    <Mint contract={contract} response={response}/>
                </Container>
            </Bg>
            <Section>
                <Container>
                        <SectionTitle>Your Unstaked BlockHeads</SectionTitle>
                        <SectionDescription>
                            Stake your BlockHeads to earn $BLOCKs and use them as skins in NearCraft! Once staked, they
                            will
                            remain staked for 3 days minimum, with no maximum duration. Once $BLOCK is claimed, you'll
                            be able
                            to use these utility
                            tokens for upcoming features, and other future projects.
                        </SectionDescription>
                        <DisplayNft contract={contract}/>

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
