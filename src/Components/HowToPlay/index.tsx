import { Parser } from 'html-to-react';
import { Paper } from './styles';

const rawHTML =`
<h1 id="how-to-play">How to play</h1>
<h2 id="step-1">Step 1</h2>
<p>Mint a blockhead NFT in <a href="https://metacraft.netlify.app/nft">https://metacraft.netlify.app/nft</a></p>
<h2 id="step-2">Step 2</h2>
<p>Stake your blockhead NFT</p>

<p align="center"> <img style="max-width: 40%;" src="https://lh3.googleusercontent.com/JmsD5LSQ5uZkeSLLuN2vNLixWoe98sFYURltr2T-i35YVkbiHYhCfdDUozvn2UP3kHh1HZ158jrlj2ACE9Dos7rZfo0cXSv4bFl2m_ZPdq9wqNQ7znHX4Uoa73FXexkRTRcPMNjymFc=w1920-h1080" /> </p>


<h2 id="step-3">Step 3</h2>
<p>Connect metacraft server at <code>18.219.218.172</code></p>
<h2 id="step-4">Step 4</h2>
<p>After entering the world, you will be locked in the lobby. Type <code>/verify</code> command, there will be a link popout.</p>

<p align="center"> <img style="max-width: 60%;" src="https://lh3.googleusercontent.com/6Y9JG1-ZHktqvZc9r3OKM97R7IZ71ieg-Y_JUNn9omzESSz-6MdieIEp3qftXpD71L8zqE9H7R4sqLm-ZUx8Ak0vC8gpHauaKIz-UueF9zMAxw8SZ11ox2mjmkUwn_m0n4Qm44GICns=w1920-h1080" /> </p>


<h2 id="step-5">Step 5</h2>
<p>Click the verify link, you will be redirected to the metacraft website verify page, click <strong>Verify account</strong> button to verify.</p>
<p align="center"><img style="max-width: 60%;" src="https://lh3.googleusercontent.com/tCgsKy2Oo6x_v4eJi2xO2UNBDeAgjXhrkx8CGqyHa3SATxizp2tkSdKyi4dPW60gxQwxRaVaGcL_aWzj12pWMY7pWlzOGwQzFumB2a_R6a-UKSObYUN_MkZrxNzuRfh7ur4S_8-Q50Y=w1920-h1080" /></p>

<p align="center"> <img style="max-width: 120%;" src="https://lh3.googleusercontent.com/eI68tRoKquHGpeU_qHalEo8e1WmVyOrQribz2wrDvqDdro4bP7X95aZauXsvvpel14sT6-xoidRdKUIOm_Kkh92dzaweUt8xl3_3Er5SqAw6BSOQ-XHeqMDVNtFAwsGSNS7QFJFBOjk=w600-h315-p-k" /> </p>


<h2 id="step-6">Step</h2>
<p>Use one of the 2 ways below to enter the game.</p>
<ul>
<li>Return to the game and type <code>/login</code> command.</li>
<li>Exit the game and re-login to enjoy the game</li>
</ul>
`

const HowToPlay = () => {
  return (
    <Paper>{Parser().parse(rawHTML)}</Paper>
  )
}

export default HowToPlay