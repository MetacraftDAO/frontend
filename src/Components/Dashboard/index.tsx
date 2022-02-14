import Mint from "../Mint";
import {Contract} from "near-api-js";
import DisplayNft from "../wallet/nft";

import {MintSection, SectionDescription, SectionTitle, SubTitle, Title, WalletSection} from "./styles"
import Container from "../Container";

interface Props {
    contract: Contract
}

const Dashboard = ({contract}: Props) => {
    return (
        <Container>
            <Title>MetaCraft Dashboard</Title>
            <SubTitle> Conect to MetaCraft to start generating $BLOCK.
                You need to have at least one staked BlockHead to verify</SubTitle>

            <MintSection>
                <SectionTitle>Mint a BlockHead</SectionTitle>
                <SectionDescription>
                    If you don't own a BlockHead, You can mint one for FREE by pressing the "Mint" button.
                </SectionDescription>
                <Mint contract={contract}/>
            </MintSection>

            <WalletSection>
                <SectionTitle>Your Unstaked BlockHeads</SectionTitle>
                <SectionDescription>
                    Click to select a BlockHead. Stake your BlockHead to use them in Metacraft or to rent them out. You
                    can also download the skin to use it on your Minecraft character.
                </SectionDescription>
                <DisplayNft contract={contract}/>
            </WalletSection>

        </Container>
    );
};

export default Dashboard;
