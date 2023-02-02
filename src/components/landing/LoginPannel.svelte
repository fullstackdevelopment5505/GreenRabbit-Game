<script>
	import { onMount } from 'svelte';
	import { TESTNET} from 'src/utils/config';
	import { goto } from '$app/navigation';
	import LottieButton from 'src/components/landing/LottieButton.svelte';

	export let onCancel = ()=>{};
	let innerWidth;
	
</script>

<svelte:window bind:innerWidth />
<div class="wrapper">
	<div class="content-wrapper">
		<!-- <div class="top">
			<img src='/assets/landing/login/loginbg-effect.svg' alt=""
				class='topbg-img'
			/>
			<img src='/assets/landing/login/rabbiticon.svg' alt=""
				class='topimg1'
			/>
			<img src='/assets/landing/common/greenrabbittext.svg' alt=""
				class='topimg2'/>
		</div> -->
		<div class="content">
			<div class="title">
				<h2 class="top-label">Green Rabbit is played on WAX Blockchain.<br>
					Before playing the game you will need to stake WAX Token.
				</h2>
				<h2 class="learn-howto"
					on:click={()=>{
						goto('/gettingstarted');
						onCancel();
					}}
				>
					Learn how to stake WAX Token
				</h2>
				<h2 class="login-using">Login using</h2>
				<div class="wax-wallet-btn" 
					class:gray-button={TESTNET}
					on:click={()=>{
						if (!TESTNET){
							document.getElementsByClassName('ual-auth-button')[0].click();
						}
					}}
				>
					<LottieButton 
                        name="WAX"
                        buttonStyle="button-style229"
                    />
					<!-- <img  class="wax-wallet" src='/assets/landing/login/wax-banner.png' alt=""/>
					<h2 class="wax-wallet-str unselectable">WAX Cloud Wallet</h2> -->
				</div>
				<div class="anchor-wallet-btn"
					on:click={()=>{
						if (TESTNET){
							document.getElementsByClassName('ual-auth-button')[0].click();
						}else{
							document.getElementsByClassName('ual-auth-button')[1].click();
						}
					}}
				>
					<LottieButton 
						name="ANCHOR"
						buttonStyle="button-style229"
					/>
					<!-- <img class="anchor-wallet" src='/assets/landing/login/anchor-banner.png' alt=""/>
					<h2 class="anchor-wallet-str unselectable">Anchor</h2> -->
				</div>
		    </div>
		</div>
	</div>
	<div class="bottom-wrapper">
		<div class="cta-btnbox">
			{#if innerWidth > 768}
				
			{:else if innerWidth > 480}
			
			{:else}
				
			{/if}
		</div>
	</div>
</div>

<style>
	.wrapper {
		background-image: url(/assets/landing/login/loginbg.png);
		background-repeat: no-repeat;
		background-position: top center;
		background-size: cover;
		width: 716px;
		height: 548.63px;
	}
	.top{
		display: flex;
		position: relative;
	}

	.top-label{
		margin-top: 77px;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 22px;
		display: flex;
		align-items: center;
		text-align: center;
		color: #FFFFFF;
		justify-content: center;
		align-items: center;
	}
	.gray-button{
		opacity: 0.3;
	}
	.learn-howto{
		margin-top: 19px;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 19px;
		display: flex;
		align-items: center;
		text-align: center;
		color: #36FFC0;
		cursor: pointer;
	}
	
	.login-using{
		margin-top: 80px;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 24px;
		display: flex;
		align-items: center;
		text-align: center;
		color: #FFFFFF;
	}
	.wax-wallet-btn{
		position: relative;
		margin-top: 22px;
		/* width: 268px;
		height: 55px;	
		background: url('/assets/landing/login/button1.png');
		background-size: cover;
		background-repeat: no-repeat; */
		cursor: pointer;
	}
	.wax-wallet{
		position: absolute;
		left: 22px;
		top: 18px;
		width: 45px;
		height: 15px;
	}
	.wax-wallet-str{
		position: absolute;
		right: 41px;
		top: 15px;
		font-family: "Forza A", "Forza B";
		font-style: italic;
		font-weight: normal;
		font-size: 16px;
		line-height: 19px;
		display: flex;
		align-items: center;
		text-align: center;
		color: #FFFFFF;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.anchor-wallet-btn{
		position: relative;
		margin-top:17px;
		/* width: 268px;
		height: 55px;
		background: url('/assets/landing/login/button2.png');
		background-size: cover;
		background-repeat: no-repeat; */
		cursor: pointer;
	}
	.anchor-wallet{
		position: absolute;
		left: 22px;
		top: 7px;
		width: 31px;
		height: 31px;
	}
	.anchor-wallet-str{
		position: absolute;
		right: 86px;
		top: 13px;
		font-family: "Forza A", "Forza B";
		font-style: italic;
		font-weight: normal;
		font-size: 16px;
		line-height: 19px;
		display: flex;
		align-items: center;
		color: #FFFFFF;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.title{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.topbg-img{
		position: absolute;
		content: "";
		left: 104px;
		top: 0px;
		width: 427px;
		height: auto;
	}
	.topimg1{
		position: absolute;
		width: 84.25px;
		height: 51.52px;
		left: 98px;
    	top: -15px;
	}
	.topimg2{
		position: absolute;
		width: 328px;
		z-index: 33;
		top: -8px;
    	left: 179px
	}
	.content-wrapper,
	.bottom-wrapper {
		padding: 26px 30px 26px 40px;
	}

	.cd {
		margin-top: 60px;
	}
	.cd label,
	p {
		font-size: 18px;
	}
	.current-name-label {
		margin-top: 5px;
	}

	.username-input-container {
		position: relative;
		width: 100%;
	}

	.username-error {
		position: absolute;
		font-size: 15px;
		color: red;
		margin-top: 5px;
	}

	.cd input {
		width: 100%;
		font-size: 16px;
		margin-top: 22px;
		padding: 12px 15px;
		background: #000000;
		border: 1px solid var(--primary-teal);
		color: white;
	}
	.content {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	h2 {
		font-family: Lato;
		font-size: 28px;
		font-weight: 700;
		line-height: 34px;
		color: #fff;
	}
	.token-notice {
		margin-top: 28px;
	}
	.token-item {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 22px;
	}
	.token-item img {
		width: auto;
		height: 40px;
	}
	.token-item-text {
		font-size: 18px;
		font-weight: 700;
		margin-left: 10px;
	}
	.cta-btnbox {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	/* @media (max-width: 768px) {
		.bottom-wrapper {
			padding: 26px 30px 26px 40px;
			border-top: 2px solid var(--primary-teal);
		}
	} */
	@media (max-width: 480px) {
		.content-wrapper {
			padding: 26px 20px 26px 20px;
		}
		.bottom-wrapper {
			padding: 20px;
			border-top: 2px solid var(--primary-teal);
		}
		h2 {
			font-size: 18px;
		}
		.cd label,
		p {
			font-size: 16px;
		}
		.current-name-label {
			margin-top: 10px;
		}
		.cd input {
			padding: 10px 15px;
		}
		.cd {
			margin-top: 24px;
			margin-bottom: 24px;
		}
		.token-notice {
			text-align: center;
		}
	}
	@media (max-width: 380px) {
		.content-wrapper {
			padding: 26px 10px 26px 10px;
		}
		.bottom-wrapper {
			padding: 10px;
		}
	}
</style>
