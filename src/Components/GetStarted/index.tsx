import {

    Action,
    ActionBox,
    ActionButton,
    ActionDescription,
    Section,
    SectionTitle,
    SubSection,
} from "./styles";

import Container from "../Container";

const GetStarted = () => {
    return (
        <Section>
            <Container>
                <SectionTitle>
                   Get Started
                </SectionTitle>

                <SubSection>
                    <Action>
                        Get Started
                    </Action>
                    <ActionBox>
                    <ActionDescription>
                        Mint your NFT today to gain access to a P2E Minecraft world and start generating $BLOCK while playing.
                    </ActionDescription>
                    <ActionButton>Mint NOW</ActionButton>
                    </ActionBox>
                </SubSection>

                <SubSection>
                    <Action>
                        Unlock New Possibilities
                    </Action>
                    <ActionBox>
                    <ActionDescription>
                        Stake to access unique mechanics such as renting, Plot claiming, and $BLOCK generation.

                    </ActionDescription>
                    <ActionButton>Stake NOW</ActionButton>
                    </ActionBox>
                </SubSection>

                <SubSection>
                    <Action>
                        Play & Earn
                    </Action>
                    <ActionBox>
                    <ActionDescription>
                        $BLOCK tokens are ERC20 tokens that are generated with in-game activity in Minecraft and staked NFTs. $BLOCK can be used for for purchasing plots and other in-game items. More to come...
                    </ActionDescription>
                    <ActionButton>Claim $BLOCK NOW</ActionButton>
                    </ActionBox>
                </SubSection>

                <SubSection>
                    <Action>
                        Trade & Rent
                    </Action>
                    <ActionBox>
                    <ActionDescription>
                        Trade your NFTs on marketplace or start by renting one. Sure you will be overloaded with amazingggg stuff.

                    </ActionDescription>
                    <ActionButton>NEAR Marketplace</ActionButton>
                    </ActionBox>
                </SubSection>

                <SubSection>
                    <Action>
                        Even More
                    </Action>
                    <ActionBox>
                        <ActionDescription>
                            We creates a virtual space where Minecraft playing and blockchain can converge beautifully. Check out for more.
                        </ActionDescription>
                        <ActionButton>Learn More</ActionButton>
                    </ActionBox>
               </SubSection>


            </Container>
        </Section>
    );
};

export default GetStarted;
