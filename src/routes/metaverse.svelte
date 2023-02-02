<script>
    import { getContext, onMount } from 'svelte';

    import { goto } from '$app/navigation';
    import { each } from 'svelte/internal';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    import {teamItem} from 'src/components/landing/rawData/TeamMembers.svelte';
    import TeamDetail from 'src/components/landing/TeamDetail.svelte';
    import LottieButton from 'src/components/landing/LottieButton.svelte';

    const { open, close } = getContext('simple-modal');

    let innerWidth;
    onMount(async () => {
        document.getElementById('loader').style.display = 'none';
        }
    );

    async function onCancel() {
		close();
	}

    function OpenTeamDetail(nIndex){
        setTimeout(async () => {
            open(
                TeamDetail,
                { onCancel, nIndex},
                {
                    styleWindow: {
                        width: '709px',
                        height: '364px',
                        border: 'none',
                        background: 'none'
                    },
                    styleContent: {
                        padding: 0
                    },
                    styleCloseButton:
                        innerWidth > 480
                            ? {
                                top: '20px',
                                right: '28px',
                                width: '24px',
                                height: '24px'
                                }
                            : {
                                top: '38px',
                                right: '24px',
                                width: '24px',
                                height: '24px'
                                }
                }
            );
        });           
    }
</script>
<svelte:window bind:innerWidth />

<div class="bg-wrapper">
    <section class="landing-section">
        <!-- <div class="bottom-mask">
        </div> -->
        <div class="section-banner">
            <!-- <lottie-player src="/assets/landing/lottie/About_.json"  background="transparent"  speed="1"  style=" margin-top: 80px;"   autoplay></lottie-player> -->

            <LottiePlayer
                src="/assets/landing/lottie/enter_nanotopia.json"
                style=" margin-top: 80px;"
                speed="1"
                autoplay="{true}"
                loop="{false}"
                controls="{false}"
                renderer="svg"
                background="transparent"
                height="{80}"
                width="{1500}"
            />
        </div>
        <div class="nano-content">
            <p class="nano-text2">Join the Metaverse, hang out with the Green Rabbit community, own digital properties and race in exciting Ultra Anima Races! Soon you will be able to use Anima Armors to battle in the War for Nanotopia!</p>
            <div class="step-line">
                <div class="progress-bar"></div>
                <div class="one-step">
                    <img src='/assets/landing/nanotopia/num1.png' alt=""/>
                    <p class="step-text1">Step</p>
                    <p class="step-text2">Create a Portal Account which will be used to login to the 3D Metaverse. During the registration process you will be able to link your WAX Wallet and have your NFTs inside the Metaverse.</p>
                    <LottieButton                        
                        buttonStyle="button-style229"
                        name="CREATE PORTAL ACCOUNT"
                        onclick={()=>{
                             window.open("https://portal.greenrabbitgame.io/", "_blank");
                        }}
                    />       
                </div>
                <div class="one-step">
                    <img src='/assets/landing/nanotopia/num2.png' alt=""/>
                    <p class="step-text1">Step</p>
                    <p class="step-text2">Download the Game Launcher and login with your Portal Account</p>
                </div>
                <div class="one-step">
                    <img src='/assets/landing/nanotopia/num3.png' alt=""/>
                    <p class="step-text1">Step</p>
                    <p class="step-text2">Enjoy the Metaverse! Meet other Nanotopians, explore, race and have fun! We will regulary update the Metaverse to bring you more exciting content!</p>
                </div>
            </div>
        </div>
    </section>    
</div>

<style>
    .bg-wrapper{      
        display: flex;       
        flex-direction: column;
    }
    section {
        padding: 1rem;
        text-align: center;
        position: relative;
    }
	.nano-content{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 120px;
	}
	.nano-text2{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		margin-top: 25px;
		max-width: 1189px;
	}
	.step-line{
		display: flex;
		justify-content: space-between;
		margin-top: 105px;
		position: relative;
	}
	.progress-bar{
		position: absolute;
		border: 3px solid #FFFFFF;
		left: 188px;
		top: 25px;
		width: calc(67%);
	}
	.one-step{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding-left: 10px;
		padding-right: 10px;
	}
	.one-step img{
		width: 50px;
		height: 50px;
		margin-bottom: 5px;
		z-index: 1;
	}
	.one-step .step-text1{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		margin-bottom: 18px;
		margin-top: 10px;
	}
	.one-step .step-text2{
		max-width: 335px;
		font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		margin-bottom: 36px;
	}
	@media (max-width: 1229px){
		.progress-bar{
			position: absolute;
			border: 3px solid #FFFFFF;
			left: 188px;
			top: 25px;
			width: calc(67%);
		}
	}
	@media (max-width: 1012px){
		.progress-bar{
			position: absolute;
			border: 3px solid #FFFFFF;
			left: 144px;
			top: 25px;
			width: calc(67%);
		}
	}
	@media (max-width: 708px){
		.progress-bar{
			position: absolute;
			border: 3px solid #FFFFFF;
			left: 111px;
			top: 25px;
			width: calc(67%);
		}
	}
    .landing-section { 
        position: relative;
        width: 100%;
        display: flex;
        /* background-image: url(/assets/landing/bg-mask.png);
        background-attachment: fixed;
        background-size: cover;
        background-position-x: center;
        background-repeat: no-repeat; */
        flex-direction: column;
        overflow: hidden;
    }
    .section-banner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;        
    }
    @media (max-width: 550px) {
        .progress-bar{
            display: none;
        }
        .step-line{
            flex-direction: column;
        }
        .one-step{
            margin-top: 40px;
        }
    }
</style> 
