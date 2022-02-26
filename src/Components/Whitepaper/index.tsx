import { Parser } from 'html-to-react';
import { Paper } from './styles';

const rawHTML = `
<h2 id="inspiration">Inspiration</h2>
<p>In traditional games, games are played for pure pleasure with no real-world reward structure for the end users playing the games. We saw players passionate for the new Play-2-Earn blockchain games and the financial incentives. While most blockchain games focus on Play-2-Earn, we want to focus on the fun of playing and offer real-world rewards as part of in-game achievements. This creates more stable in&amp;out-game economic systems and thus a more sustainable game.</p>
<p>With this background, we started <strong>MetaCraft</strong> to create a truly decentralized, multi-chain, community-driven virtual space where players can play, build, own, trade, and profit through skilled gameplay and contribution to the ecosystem. MetaCraft is built on the backbone of the all-time most popular game Minecraft. Utilizing its proven success, strong community and open source ecosystems, we can expand quickly and to the decentralized gaming metaverse of MetaCraft.</p>
<p>This project is inspired by Minecraft and on-chain GameFi projects such as NFT worlds, Genesis critterz, sandbox, and many others. Our team has significant experience working in different tech companies based in the Bay Area and New York. We have also collectively spent over 10,000 hours in Minecraft since its launch in 2009.</p>
<h2 id="what-it-does">What it does</h2>
<p>We have the following sections:</p>
<ol>
<li><strong>Project Introduction</strong></li>
<li><strong>NFT</strong></li>
<li><strong>Staking</strong></li>
<li><strong>$BUILD Tokens</strong></li>
<li><strong>How to play in Metacraft</strong></li>
</ol>
<h2 id="-1-project-introduction-"><strong>1. Project Introduction</strong></h2>
<p><strong>Fully on-chain NFTs enabling P&amp;E on Minecraft</strong>
The MetaCraft NFT Project is a multi-chain game on the Near/ Aurora/ Ethereum blockchain to enable Play-and-Earn on Minecraft. You can stake your Blockhead to generate in-game currency $BUILD and use $BUILDs to purchase Blockhead NFTs / Plots / various in-game props to enhance the playing experience. Features of ownership include:</p>
<ul>
<li>Fully on-chain NFTs that live on the Near/ Aurora Blockchain forever.</li>
<li>Stake Blockhead to access an exclusive Minecraft world.</li>
<li>Generate $BUILD tokens by playing Minecraft.</li>
<li>Use $BUILDs to claim Plots of land in Minecraft as NFTs.</li>
</ul>
<h2 id="2-nft">2. NFT</h2>
<h3 id="2-1-blockhead-nft">2.1 Blockhead NFT</h3>
<p>BlockHead NFTs are generated on-chain, which each one uniquely randomized created when the NFT is minted. This means that instead of relying on third-party servers like IPFS, users’ NFTs are stored directly on the Near blockchain. This guarantees that users’ <em>Blockhead</em> will never disappear as long as the Near network is up.</p>
<p align="center" width="100%">
<img src="https://lh3.googleusercontent.com/96Eq8fJ_uLgF8NJxu7p_gEuyvXXzyOkDvjzLCnefsjoabk-BNN3VD3NvqPFhrfqey9yNpXQ6T-gId1i_TrRDq6xLjN4vHLst-v8UeToqq-n73Qc1xPtIsxMj4OFVr3eBX6HgjoIApvg=w2400" /> 
</p>

<p>Each BlockHead NFT is a 64 x 64 pixel art, which also works as a Minecraft skin.</p>
<h3 id="2-2-plot-map">2.2 plot map</h3>
<p>The Minecraft server world consists of 12 x 18 plots, where each plot is 512 x 512 blocks. The map includes various biomes.</p>
<p align="center">
<img src="https://lh3.googleusercontent.com/TsN56mp-t6lbOMS6OeoD1TTUWC5aCJpO7qvYYWl8ecDpqPnx7aA04vOhvrxPjMR4Rf38ungh9Sx4lvg7QOkj1LaY-zNGXLJurWaZJKA-hAsCg6wCnC1z-seJTDHyQb_axC5CVhpsdpo=w600-h315-p-k" /> 
</p>

<h2 id="-3-staking-"><strong>3. Staking</strong></h2>
<h3 id="-3-1-mechanics-to-unlock-"><strong>3.1 Mechanics to unlock</strong></h3>
<p>Blockhead NFTs provide various utilities and mechanics through staking. Users can access Blockhead after connecting his/her wallet to interact with these mechanics. The main mechanisms that staking unlocks are:</p>
<ul>
<li>Access to the Blockhead Minecraft world.</li>
<li>Generating $BUILDs using in-game playtime.</li>
<li>Renting out unused staked Blockhead to other players for a share of their $BUILDs generation.</li>
</ul>
<p>These mechanisms are only accessible when Blockheads are staked. Users will lose access to them if they unstake their Blockhead.</p>
<h2 id="-4-build-tokens-"><strong>4. $BUILD Tokens</strong></h2>
<h3 id="-4-1-build-token-generation-"><strong>4.1 $BUILD token generation</strong></h3>
<p>$BUILD tokens that are generated with in-game activity in Minecraft and staked Blockhead. To achieve this, we had to build a custom oracle to compute $BUILDs generated based on playtime and bridge onto the Near blockchain without incurring high gas fees for the player. $BUILDs generation is influenced by two factors: play time and build factor.</p>
<h3 id="-4-2-build-claiming-"><strong>4.2 $BUILD claiming</strong></h3>
<p>$BUILD tokens are claimed on our $BUILD claiming dashboard. Under the hood, a query is sent to the oracle to get the amount of $BUILDs claimable along with a signature. This information is then used to claim $BUILDs from the contract.</p>
<h2 id="-5-how-to-play-in-metacraft-"><strong>5 How to play in Metacraft</strong></h2>
<h3 id="-5-1-joining-the-world-"><strong>5.1 Joining the world</strong></h3>
<p>Instructions for joining the MetaCraft Minecraft Server are in the <a href="https://metacraft.netlify.app/">https://metacraft.netlify.app/</a>. Upon joining the server, players are asked to type /verify in the chat and open the in-game link. The link will ask the player to connect to Near wallet/ Metamask, after which their account will be connected.</p>
<p align="center"><img src="https://lh3.googleusercontent.com/z8vFDQJbRoRQEoQWD-CNlnFaYFiQltpqcygLjXdd5vCYZl92wR0lEqKMIffbcyaQpphwcb4SIlBJJuaKjP2N7MG2_C0J9qlMYDl4JI7Ce8-fsQ2PdBb7cICw5cWqEHMP4qeTfsxpSqM=w2400" alt="onboarding flowchart" style="max-width: 90%;" ></p>
<p>Anyone can access the server, but <strong>only players with at least one staked (and verified) Blockhead can access the main world</strong> to start generating $BUILD with in-game time. All players are required to have a legitimate version of <strong><a href="https://www.minecraft.net/en-us/store/minecraft-java-edition">Minecraft 1.18 Java Edition</a></strong> to play.</p>
<h3 id="-5-2-minecraft-server-gameplay-"><strong>5.2 Minecraft Server Gameplay</strong></h3>
<p>The Minecraft server is a survival mode server on Java Edition 1.18.</p>
<p>Upon joining, players are placed in a cool glass lobby before they verify their wallets and staked Blockhead with the /verify command. When players are verified, they are instantly teleported to the main survival world.</p>
<h2 id="how-we-built-it">How we built it</h2>
<h3 id="frontend-">Frontend:</h3>
<ul>
<li>ReactJS, NearAPI for wallet and contract integrations</li>
<li>Metamask RPC API “eth_requestAccounts” for connecting to metamask and running on ETH/Aurora testnet.</li>
</ul>
<h3 id="smart-contract-">Smart contract:</h3>
<p>We deployed 2 near rust smart contracts.</p>
<ul>
<li>BlockHead NFT contract (NEP-178 standard): this contract stores metadata about the blockhead on-chain. The nft must be staked to enable players to play on our server.</li>
<li>BUILD FT contract (NEP-141 standard): tokens player earned during gameplay. The $BUILDs are generated proportional to the accumulated playtime for a player.</li>
</ul>
<h3 id="database-">Database:</h3>
<p>We built Back4app relational databases to store user verification status and accumulated playtime.</p>
<h3 id="minecraft-mod-">Minecraft mod:</h3>
<p>We built a Minecraft server mod using Forge to support the login lobby, communication with the database, and user verification logic. The login lobby is a custom Minecraft structure made of custom indestructible glass blocks, to enforce that the user must connect to a NEAR account in order to play. The mod sends HTTP requests to the database to query the user’s verification/stake status. If the user is verified, the mod teleports the user out of the lobby so that they can start playing. The Minecraft server is hosted on a AWS EC2 machine.</p>
<h2 id="challenges-we-ran-into">Challenges we ran into</h2>
<h3 id="frontend-">Frontend:</h3>
<p>The challenges with frontend was using Near-api to integrate with blockchain. We spent a lot of time figuring out what api methods we should use to retrieve data from the blockchain.</p>
<h3 id="smart-contract-">Smart contract:</h3>
<ul>
<li>Rust has a quite steep learning curve, learning the language and being able to fully understand the near example contracts are challenging.</li>
<li>Near blockchain has some fundamental differences compared to Ethereum. For example, there are no distinction between contract and external owned accounts. Also the account storage deposit concept. One challenge we faced is that we mint tokens to a user account and check there is a balance for this user in the contract. However, the balance is not showing in the user’s near wallet. Later we found out that we need to initiate a user storage deposit in the contract in order to show the balance. (discussion regarding this <a href="https://github.com/near/near-wallet/issues/1864">issue</a>)</li>
</ul>
<h3 id="minecraft-mod-">Minecraft mod:</h3>
<p>The most challenging part of our mod was ensuring the custom login lobby structure is generated during world generation and making its location known to the login logic. Custom structure is one of the hardest topics in Minecraft modding, requiring advanced APIs like ChunkGenerator (for associating the structure configuration with world generation) and techniques like Access Transformers (for changing Minecraft’s private methods at the bytecode level). The custom indestructible glass blocks also posed issues on lighting, since we want sunlight to pass nicely through the lobby walls.</p>
<p>On top of that, Minecraft modding changes significantly for each new Minecraft version, and there aren’t many great tutorials for the latest version. The Forge modding API has very little documentation. Often, the functionality of an API can only be inferred from its name.</p>
<h3 id="database-">Database:</h3>
<p>Hiding the master key in the gaming server would be the challenging part since we don’t want to expose our secret keys in the code.</p>
<h2 id="accomplishments-that-we-re-proud-of">Accomplishments that we&#39;re proud of</h2>
<p>We accomplished a complicated system integrating frontend, Minecraft server mod, database, and near contract end to end. This gives players a smooth onboarding experience and enables players to play&amp;earn in Minecraft!.</p>
<h2 id="what-we-learned">What we learned</h2>
<ul>
<li>Writing and deploying nft and ft smart contracts on NEAR</li>
<li>NEAR javascript sdk interaction with wallet and contracts</li>
<li>Setting up and customizing Minecraft server mod</li>
<li>Minecraft command line control and communication with the near wallet</li>
<li>End-to-end development of an on-chain game</li>
<li>Tokennomics / finance models from other great crypto games</li>
<li>Setting up database and integrating frontend and game server with the database</li>
</ul>
<h2 id="what-s-next-for-metacraft">What&#39;s next for MetaCraft</h2>
<p>Knowing the importance of a stable economic system for the game, we have spent a great amount of time on designing the in&amp;out game economy and project roadmap.</p>
<p align="center"><img style="max-width: 90%;" src="https://lh3.googleusercontent.com/eEVrTixELbSKghlU8I2wBUthF-LirnB8iUouReU4EWNrYzkipfM7h8FMLVPQF9LUZHtZsvunJZJD538EKljtceF3ob6UbCop1rbFPWVtts12R9B48gdZS1ldh7pmlnFOVGUjCL4ibgU=w2400" alt="roadmap"></p>
<p>Key milestones include:</p>
<ul>
<li>Implementing renting feature allowing user to rent out their BlockHead NFTs, Plots and other NFTs will significantly lower entry fees for new players, add a passive revenue stream to existing players and thus increase active usage of in-game items</li>
<li>Tokenomics designed to develop deflationary in-game currency that provides utilities for gamers.</li>
<li>DAO to allow users to vote on in-game development and directions of the project.</li>
<li>Partnership with existing minecraft servers / communities (e.g. <a href="https://blockeley.com/">Blockeley</a>)</li>
<li>Built out cross-chain compatibility allow Minecraft assets from other chains to be used within our ecosystem</li>
</ul>
<p>Follow us on Twitter: <a href="https://twitter.com/MetacraftDAO">https://twitter.com/MetacraftDAO</a> <br>
Follow us on Youtube: <a href="https://youtu.be/-yTRfY-PJBU">https://youtu.be/-yTRfY-PJBU</a> <br>
Follow us on Telegram: <a href="https://t.me/MetacraftDAO">https://t.me/MetacraftDAO</a> <br>
Check our Website: <a href="https://metacraft.netlify.app/">https://metacraft.netlify.app/</a> </p>
`;

const Whitepaper = () => {
  return (
    <Paper>{Parser().parse(rawHTML)}</Paper>
  )
}

export default Whitepaper