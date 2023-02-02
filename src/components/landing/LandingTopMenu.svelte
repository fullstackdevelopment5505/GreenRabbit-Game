            <script>
	import { goto } from '$app/navigation';
	import LoginPannel from './LoginPannel.svelte';
	import { onMount, getContext } from 'svelte';
	const { open, close } = getContext('simple-modal');
	import LottieButton from 'src/components/landing/LottieButton.svelte';
	import { fade, slide } from 'svelte/transition';
	import { isBackRequired } from 'src/stores/store.js';

	//https://codepen.io/andrejsharapov/pen/OqvXyb  - excellent hambergar menu
	let innerWidth;
	let MenuType = 1;

	let openMobile = false;

	function toggleOpenMenuMobile() {
		isSocial = false;
		openMobile = !openMobile;
	}

	async function onCancel() {
		close();
	}

	async function onChangeAvatar() {
		close();
	}

	function navigate(link) {
		openMobile = false;
		goto(link);
	}

	let isSocial = false;
	function toggleOpenSocialMobile() {
		openMobile = false;
		isSocial = !isSocial;
	}

	function OpenLoginPannel() {
		setTimeout(async () => {
			open(
				LoginPannel,
				{ onCancel, onSave: onChangeAvatar },
				{
					styleWindow: {
						width: '716px',
						height: '549px',
						border: 'none',
						background: 'none'
					},
					styleContent: {
						padding: 0
					},
					styleCloseButton:
						innerWidth > 480
							? {
									top: '1px',
									right: '36px',
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

<div class="topmenu" class:set-little-background={$isBackRequired}>
	{#if openMobile}
		<div class="mobile-menu" in:slide={{ duration: 200 }} out:slide={{ duration: 200 }}>
			<div class="mobile-menu-item" on:click={() => navigate('/')}>
				<img
					src="/assets/landing/common/rabbiticon.png"
					on:click={() => {
						goto('/');
					}}
					class="rabbiticon-effect"
					alt=""
				/>
				<img
					src="/assets/landing/common/greenrabbittext.svg"
					on:click={() => {
						goto('/');
					}}
					style="margin-left: 6px; cursor: pointer;"
					alt=""
				/>
			</div>
			<div class="mobile-menu-item" on:click={() => navigate('/gettingstarted')}>
				Getting started
			</div>
			<div class="mobile-menu-item" on:click={() => navigate('/metaverse')}>
				Metaverse
			</div>
			<div
				class="mobile-menu-item"
				onclick={() => {
					window.open(
						'https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay',
						'_blank'
					);
				}}
			>
				Greenpaper
			</div>
			<div class="mobile-menu-item" on:click={() => navigate('/lore')}>Lore</div>
			<div class="mobile-menu-item" on:click={() => navigate('/about')}>About</div>
			<div class="mobile-menu-item" on:click={() => navigate('/faq')}>Faq</div>
			<div style="height: 20px" />
			<LottieButton
				onclick={() => {
					window.open('https://play.greenrabbitgame.io/', '_blank');
				}}
			/>
			<div class="mobile-social-buttonlist">
				<div class="social-networks">
					<img
						class="twitter-img icon-img-discord"
						src="/assets/landing/button/topicon1.svg"
						style="width: 29.62px"
						alt=""
						on:click={() => {
							window.open('https://discord.com/invite/5fvKZSDNKt', '_blank');
						}}
					/>
					<!-- <img class="twitter-img icon-img-blabla"
                        src="/assets/landing/button/topicon6.svg"
                        style="width: 42px; margin-top: 8px;" alt=""
                        on:click={()=>{
                                window.open(
                                'https://greenrabbit.medium.com/',  // blabla
                                '_blank'
                            );
                        }}
                    /> -->
					<img
						class="twitter-img icon-img-twitter"
						src="/assets/landing/button/topicon2.svg"
						style="width: 26.55px"
						alt=""
						on:click={() => {
							window.open('https://twitter.com/greenrabbitgame', '_blank');
						}}
					/>
					<img
						class="twitter-img icon-img-tme"
						src="/assets/landing/button/topicon3.svg"
						style="width: 25.79px"
						alt=""
						on:click={() => {
							window.open('https://t.me/greenrabbitgame', '_blank');
						}}
					/>
					<img
						class="twitter-img icon-img-instgram"
						src="/assets/landing/button/topicon4.svg"
						style="width: 22px"
						alt=""
						on:click={() => {
							window.open('https://www.instagram.com/greenrabbitgame/', '_blank');
						}}
					/>
				</div>
			</div>
		</div>
	{/if}

	{#if isSocial}
		<div class="social-mobile-menu" in:slide={{ duration: 200 }} out:slide={{ duration: 200 }}>
			<div
				class="social-mobile-menu-item"
				on:click={() => {
					window.open('https://discord.com/invite/5fvKZSDNKt', '_blank');
				}}
			>
				<img
					class="twitter-img icon-img-discord"
					src="/assets/landing/button/topicon1.svg"
					style="width: 29.62px"
					alt=""
				/>
				<span>Discord</span>
			</div>
			<!-- <div class="social-mobile-menu-item"
                on:click={()=>{
                    window.open(
                    'https://greenrabbit.medium.com/',  // blabla
                    '_blank'
                );
                }}
            >
                <img class="twitter-img icon-img-blabla"
                    src="/assets/landing/button/topicon6.svg"
                    style="width: 42px; margin-top: 8px;" alt=""
                />
                <span>Medium</span>
            </div> -->
			<div
				class="social-mobile-menu-item"
				on:click={() => {
					window.open('https://twitter.com/greenrabbitgame', '_blank');
				}}
			>
				<img
					class="twitter-img icon-img-twitter"
					src="/assets/landing/button/topicon2.svg"
					style="width: 26.55px"
					alt=""
				/>
				<span>Twitter</span>
			</div>
			<div
				class="social-mobile-menu-item"
				on:click={() => {
					window.open('https://t.me/greenrabbitgame', '_blank');
				}}
			>
				<img
					class="twitter-img icon-img-tme"
					src="/assets/landing/button/topicon3.svg"
					style="width: 25.79px"
					alt=""
				/>
				<span>Telegram</span>
			</div>
			<div
				class="social-mobile-menu-item"
				on:click={() => {
					window.open('https://www.instagram.com/greenrabbitgame/', '_blank');
				}}
			>
				<img
					class="twitter-img icon-img-instgram"
					src="/assets/landing/button/topicon4.svg"
					style="width: 22px"
					alt=""
				/>
				<span>Instagram</span>
			</div>
		</div>
	{/if}

	<div class="topmenu-left">
		<div class="item-setting-sp">
			<button
				on:click={toggleOpenMenuMobile}
				class="header__menu"
				class:header__menu--active={openMobile}
				type="button"
			>
				<span />
				<span />
				<span />
			</button>
		</div>
		{#if !openMobile}
			<img
				src="/assets/landing/common/rabbiticon.png"
				on:click={() => {
					goto('/');
				}}
				class="rabbiticon-effect"
				alt=""
			/>
			<img
				src="/assets/landing/common/greenrabbittext.svg"
				on:click={() => {
					goto('/');
				}}
				class="rabbittext-effect"
				alt=""
			/>
		{/if}
	</div>

	<div class="topmenu-right">
		<div class="topmenu-center">
			<div class="menu-contents">
				<p>
					<a
						class="unselectable menu-font"
						on:click={() => {
							goto('/gettingstarted');
						}}
						style="text-decoration:none; color:inherit; white-space: nowrap;"
						>Getting started
					</a>
				</p>
				<p>
					<a
						class="unselectable menu-font"
						on:click={() => {
							goto('/metaverse');
						}}
						style="text-decoration:none; color:inherit; white-space: nowrap;"
						>Metaverse
					</a>
				</p>				
				<p>
					<a
						class="unselectable menu-font"
						target="_blank"
						href="https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/"
						style="text-decoration:none; color:inherit;"
						>Greenpaper
					</a>
				</p>
				<p>
					<a
						class="unselectable menu-font"
						on:click={() => {
							goto('/lore');
						}}
						style="text-decoration:none; color:inherit;"
						>Lore
					</a>
				</p>
				<p>
					<a
						class="unselectable menu-font"
						on:click={() => {
							goto('/about');
						}}
						style="text-decoration:none; color:inherit;"
						>About
					</a>
				</p>
				<p>
					<a
						class="unselectable menu-font"
						on:click={() => {
							goto('/faq');
						}}
						style="text-decoration:none; color:inherit;"
						>Faq
					</a>
				</p>
			</div>

			<!-- <LottieButton onclick={OpenLoginPannel}/> -->
			{#if !openMobile}
				<LottieButton
					onclick={() => {
						window.open('https://play.greenrabbitgame.io/', '_blank');
					}}
				/>
			{/if}
		</div>

		<img
			class="twitter-img icon-img-discord"
			src="/assets/landing/button/topicon1.svg"
			style="width: 29.62px"
			alt=""
			on:click={() => {
				window.open('https://discord.com/invite/5fvKZSDNKt', '_blank');
			}}
		/>
		<!-- <img class="twitter-img icon-img-blabla"
            src="/assets/landing/button/topicon6.svg"
            style="width: 42px; margin-top: 8px;" alt=""
            on:click={()=>{
                    window.open(
                    'https://greenrabbit.medium.com/',  // blabla
                    '_blank'
                );
            }}
       /> -->
		<img
			class="twitter-img icon-img-twitter"
			src="/assets/landing/button/topicon2.svg"
			style="width: 26.55px"
			alt=""
			on:click={() => {
				window.open('https://twitter.com/greenrabbitgame', '_blank');
			}}
		/>
		<img
			class="twitter-img icon-img-tme"
			src="/assets/landing/button/topicon3.svg"
			style="width: 25.79px"
			alt=""
			on:click={() => {
				window.open('https://t.me/greenrabbitgame', '_blank');
			}}
		/>
		<img
			class="twitter-img icon-img-instgram"
			src="/assets/landing/button/topicon4.svg"
			style="width: 22px"
			alt=""
			on:click={() => {
				window.open('https://www.instagram.com/greenrabbitgame/', '_blank');
			}}
		/>
		{#if !openMobile}
			<div class="social-button" on:click={toggleOpenSocialMobile}>
				<span>Social</span>
				<img src="/assets/landing/mobilemenu/social.svg" alt="" />
			</div>
		{/if}
	</div>
	<!-- <div class="landing-sidebar" id="sidebar">
        <aside>
            <div class="sidebar-innerline">
            </div>
            <ul>
              <li class="sidebar-item">
                <span name="aboutthegame" class="sidebar-item-text">About the game</span>
                <a class="indicator" href="#aboutthegame"> </a>
              </li>
              <li class="sidebar-item">
                <span name="overview" class="sidebar-item-text">Gameplay Overview</span>
                <a class="indicator" href="#overview"></a>
              </li>
              <li class="sidebar-item">
                <span name="aboutgreenrabbit" class="sidebar-item-text">About Green Rabbit</span>
                <a class="indicator" href="#aboutgreenrabbit"></a>
              </li>
              <li class="sidebar-item">
                <span name="roadmap" class="sidebar-item-text">Roadmap</span>
                <a class="indicator" href="#roadmap"></a>
              </li>
              <li class="sidebar-item">
                <span name="readynanotopia" class="sidebar-item-text">Rule Nanotopia!</span>
                <a class="indicator" href="#readynanotopia"></a>
              </li>
            </ul>
        </aside>
   </div> -->
</div>

<style>
	.topmenu {
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		width: 100vw;
		z-index: 999;
		padding-left: 20px;
		padding-right: 30px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.set-little-background {
		background-color: rgba(0, 0, 0, 0.2);
	}
	.rabbiticon-effect {
		cursor: pointer;
		/* transition: all 3s; */
	}
	.rabbiticon-effect:hover {
		/* transform: rotate(1080deg); */
	}
	.rabbittext-effect {
		margin-left: 6px;
		cursor: pointer;
		/* transition: transform 0.3s; */
	}
	.rabbittext-effect:hover {
		/* transform: skewY(2deg); */
	}
	.menu-contents {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.menu-contents p {
		font-family: Obvia;
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 18px;
		display: flex;
		align-items: center;
		color: #ffffff;
		margin-right: 40px;
		cursor: pointer;
		border-bottom: 2.88px solid transparent;
	}
	.menu-contents p:hover {
		border-bottom: 2.88px solid #36ffc0;
	}
	.menu-font{
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 18px;
		display: flex;
		align-items: center;
		color: #FFFFFF;
	}
	.mobile-social-buttonlist {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
	}
	.social-networks {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.twitter-img {
		margin-left: 20px;
		cursor: pointer;
		width: 29.62px;
	}
	.topmenu-left {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.topmenu-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.topmenu-right {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.icon-img-blabla:hover {
		content: url('/assets/landing/button/topicon6-focus.svg');
	}

	.icon-img-discord:hover {
		content: url('/assets/landing/button/topicon1-focus.svg');
	}
	.icon-img-twitter:hover {
		content: url('/assets/landing/button/topicon2-focus.svg');
	}
	.icon-img-tme:hover {
		content: url('/assets/landing/button/topicon3-focus.svg');
	}
	.icon-img-instgram:hover {
		content: url('/assets/landing/button/topicon4-focus.svg');
	}
	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.1;
		}
	}
	.social-mobile-menu {
		display: flex;
		position: absolute;
		bottom: 0;
		transform: translateY(100%);
		width: 100%;
		margin-left: -20px;
		flex-direction: column;
		background-color: #0e1743;
		height: calc(100vh - 165px);
		z-index: 9999;
	}
	.mobile-menu {
		display: relative;
		position: absolute;
		bottom: 0;
		transform: translateY(100%);
		width: 100%;
		margin-left: -20px;
		flex-direction: column;
		background-color: #0e1743;
		height: calc(100vh - 165px);
		z-index: 9999;
	}
	/*SIDEBAR STARTED*/
	.landing-sidebar {
		display: relative;
		position: fixed;
		right: 157px;
		bottom: calc(50vh);
		z-index: 1000;
	}
	.sidebar-item {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 200px;
		margin-top: 10px;
	}
	.sidebar-item-button {
		display: flex;
		background: #36ffc0;
		border: 1px solid #36ffc0;
		border-radius: 999px;
		width: 8px;
		height: 8px;
		z-index: 999;
		cursor: pointer;
	}
	.sidebar-item-text {
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 28px;
		text-align: left;
		color: #ffffff;
		margin-right: 15px;
		opacity: 0;
	}
	aside {
		position: fixed;
		top: 48%;
		transform: translate(-50%, -50%);
	}
	aside ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style-type: none;
	}
	aside ul li .indicator {
		cursor: pointer;
		display: block;
		height: 8px;
		width: 8px;
		border-radius: 50%;
		background-color: #4652b6;
		z-index: 999;
	}
	aside ul li .active {
		/* transform: scale(2); */
		transition: transform 200ms ease-in-out;
		background-color: #36ffc0;
	}
	.sidebar-innerline {
		position: absolute;
		display: flex;
		/* border: 1px solid red; */
		background-color: #4652b6;
		top: 27px;
		right: 3.5px;
		width: 1px;
		height: 153px;
	}
	.social-button {
		cursor: pointer;
		display: none;
	}
	.social-button span {
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 18px;
		display: flex;
		align-items: center;
		color: #ffffff;
		margin-right: 6px;
		cursor: pointer;
	}
	.social-button .img {
		cursor: pointer;
	}
	/*SIDEBAR ENDED*/

	.header__menu {
		position: absolute;
		width: 36px;
		height: 29px;
		left: 2px;
		top: 13px;
		background: transparent;
	}

	.header__menu span {
		position: absolute;
		left: 0;
		width: 24px;
		height: 2px;
		background-color: #fff;
		border-radius: 3px;
		transition: 0.5s;
		opacity: 1;
	}

	.header__menu span:first-child {
		top: 0;
		width: 26px;
	}

	.header__menu span:nth-child(2) {
		top: 8px;
		width: 26px;
	}

	.header__menu span:last-child {
		top: 16px;
		width: 26px;
	}

	.header__menu--active span:first-child {
		transform: rotate(45deg);
		top: 10px;
	}

	.header__menu--active span:nth-child(2) {
		opacity: 0;
	}

	.header__menu--active span:last-child {
		width: 26px;
		transform: rotate(-45deg);
		top: 10px;
	}

	.item-setting-sp {
		position: relative;
		display: none;
		cursor: pointer;
		height: 44px;
	}
	.social-mobile-menu-item {
		color: white;
		min-height: 60px;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		display: flex;
		padding: 4px;
		text-transform: uppercase;
		cursor: pointer;
		vertical-align: middle;
		align-items: center;
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
	}
	.social-mobile-menu-item span {
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		display: flex;
		align-items: center;
		color: #ffffff;
		margin-left: 31px;
	}
	.mobile-menu-item {
		color: white;
		min-height: 70px;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		display: flex;
		align-items: center;
		justify-content: center;
		display: flex;
		padding: 4px;
		text-transform: uppercase;
		cursor: pointer;
		border-bottom: 1px solid #204ece;
		vertical-align: middle;
		align-items: center;
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
	}

	.mobile-menu-item:hover {
		background: #707070;
	}

	.show-social-button {
		display: flex;
	}

	@media (max-width: 1250px) {
		.topmenu {
			background-color: #0e1743;
		}
		.twitter-img {
			display: none;
		}
		.mobile-social-buttonlist .twitter-img {
			display: flex;
		}
		.social-button {
			display: flex;
			cursor: pointer;
		}
		.social-mobile-menu-item img {
			display: flex;
		}
		.icon-img-instgram {
			margin-left: 22px;
		}
	}

	@media (max-width: 1024px) {
		.menu-contents {
			display: none;
		}
		.item-setting-sp {
			display: flex;
		}
		.rabbiticon-effect {
			margin-left: 50px;
		}
	}
	@media (max-width: 550px) {
		.rabbittext-effect {
			display: none;
		}
		.item-setting-sp {
			display: flex;
		}
		.rabbiticon-effect {
			margin-left: 50px;
		}
	}

	/* @media (max-width: 1200px) {
        .topmenu-left img:nth-child(2) {
            display: none;
        }
    }
    @media (max-width: 1024px) {
        .topmenu-right{
            display: none;
        }
    }

    @media (max-width: 824px) {
        .topmenu-left img:nth-child(1) {
            display: none;
        }
    } */
</style>
