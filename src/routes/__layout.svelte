<!-- <script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script> -->
<script>
	export let key;
	import NotSimpleModal from 'src/components/modals/NotSimpleModal.svelte';
	import { UALJs } from 'ual-plainjs-renderer';
	import { Anchor } from 'ual-anchor';
	import { Wax } from '@eosdacio/ual-wax';
	import LandingTopMenu from 'src/components/landing/LandingTopMenu.svelte';
	import LandingFooter from 'src/components/landing/LandingFooter.svelte';
	import { page } from '$app/stores';
	import {
		WAX_CHAIN_ID,
		WAX_BASE_ENDPOINT_HOST,
		TESTNET,
	} from '../utils/config';
	import { onMount } from 'svelte';

	import {
		activeUser,
		loadingString,
		dataLoaded,
		loadingPercent,
		isDataLoading,
		inventoryOpen,

	} from '../stores/store.js';

	import { browser } from '$app/env';
	import SimpleModal from 'src/components/SimpleModal.svelte';
	let ual;

	const myCallback = (arrayOfUsers) => {
		$activeUser = arrayOfUsers[0];

		$dataLoaded = false;
		$loadingPercent = 0;
		document.body.style.overflow = 'hidden';
		document.getElementById('loader').classList.remove('hideloader');
		refresh(true, 0);
	};

	// $: {
	// 	if (browser) {
	// 		// document.getElementById('progress-bar').style.width = `${$loadingPercent}%`;
	// 		if ($loadingString == 'done') {
	// 			if (TESTNET) console.log('loading stats', loadingStats);
	// 			loadingStats = [];
	// 			document.body.style.overflow = 'auto';
	// 			document.body.style.overflowX = 'hidden';
	// 			// document.getElementById('loader').classList.add('hideloader');
	// 		}
	// 	}
	// }

	let loadingStats = [];

	async function loadData(callback) {
		console.log("loadData");
		$loadingString = 'done';
		$dataLoaded = true;
		callback(true);
		setTimeout(() => {
			$isDataLoading = false;
		}, 300);
	}

	async function init() {
	}

	onMount(() => {
		console.log("onMount");
		// $dataLoaded = true;
		$loadingString = 'done';

		// if (!$dataLoaded) {
		// 	console.log("onMount1");
		// 	// document.getElementById('storage-bar').style.display = `flex`;
		// 	const myChain = {
		// 		chainId: WAX_CHAIN_ID,
		// 		name: 'WAX',
		// 		rpcEndpoints: [
		// 			{
		// 				protocol: 'https',
		// 				host: WAX_BASE_ENDPOINT_HOST,
		// 				port: 443
		// 			}
		// 		]
		// 	};

		// 	console.log("onMount2");
		// 	const myAppName = 'GreenRabbit Game';

		// 	const anchor = new Anchor([myChain], { appName: myAppName });
		// 	const wax = new Wax([myChain]);
		// 	console.log("onMount3");
		// 	const style = `
		// 			#ual-button {
		// 				display:none
		// 				`;
		// 	const myAppRoot = {
		// 		containerElement: document.getElementById('my-ual-app'),
		// 		buttonStyleOverride: style
		// 	};
		// 	let auths = [wax, anchor];
		// 	if (TESTNET) {
		// 		auths = [anchor];
		// 	}

		// 	console.log("onMount4");
		// 	ual = new UALJs(myCallback, [myChain], myAppName, auths, myAppRoot);
				
		// 	console.log("onMount5");
		// 	ual.init();
		// }
	});

	function refresh(loader = true, timeout = 2000, callback = () => {}) {
		
			// if ($activeUser.accountName) {
				$loadingString = '';

				if (browser && loader) {
					document.body.style.overflow = 'hidden';

					document.getElementById('loader').classList.remove('hideloader');
				}
				console.log($activeUser.accountName);
				loadData(callback);
			// } else {
			// 	console.log("can not fetch name");
			// 	if ($activeUser.initialLoad) {
			// 		if (browser && loader) {
			// 			document.body.style.overflow = 'auto';
			// 			document.body.style.overflowX = 'hidden';
			// 			document.getElementById('loader').classList.add('hideloader');
			// 		}
			// 		init();
			// 	}
			// }
	
	}

</script>

<!--  -->
<div class="wrapper" 
	class:inMetaverse={$page.url.pathname.includes('metaverse')}
>
	<SimpleModal scrollEffect="true">
		<NotSimpleModal
			on:closed={() => {
				$inventoryOpen = false;
			}}
		>			
				<LandingTopMenu/>
				
					<!-- <div class="gradient-bg" /> -->
					{#if browser}
						<slot />
					{/if}
				
			<div class="push" />
		</NotSimpleModal></SimpleModal
	>
</div>
<LandingFooter/>
<style>
	.wrapper {
		min-height: 100vh;
		margin-bottom: -66px;
		
	}
	.inMetaverse {
		background-image: url('/assets/landing/nanotopia/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-blend-mode: soft-light;
		width: 100%;
		height: 100%;
	}
	.push {
		height: 66px;
	}
	@media (max-width: 1024px) {
		.wrapper {
			min-height: 100vh;

			margin-bottom: -165px;
		}
		.push {
			height: 165px;
		}
	}
</style>
