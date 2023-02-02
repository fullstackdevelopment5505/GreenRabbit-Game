import { env } from './variables';

let IS_TESTNET =  env.testnet || true;

// Handle setting env to Testnet when developing
if (import.meta.env.VITE_IS_TESTNET) {
	IS_TESTNET = import.meta.env.VITE_IS_TESTNET == 'true';
}

var var_MAINNET_FALLBACK_WAX_NODES = [
	'https://api.wax.alohaeos.com',
	'https://wax.eu.eosamsterdam.net',
	'https://wax.blacklusion.io',
	'https://wax.blokcrafters.io',
	'https://wax.cryptolions.io',
	// 'https://wax.csx.io',
	'https://wax.dapplica.io',
	// 'https://wax.eosdublin.io',
	// 'https://wax.eoseoul.io',
	'https://api.wax.eosdetroit.io',
	'https://wax.eosphere.io',
	'https://api.wax.greeneosio.com',
	'https://waxapi.ledgerwise.io',
	'https://api.wax.liquidstudios.io',
	'https://wax.eosn.io',
	'https://wax.pink.gg',
	'https://api.waxsweden.org'
];

var var_MAINNET_WAX_NODES = ['https://waxnode.greenrabbitgame.io'];

var var_TESTNET_WAX_NODES = [
	'https://api.waxtest.alohaeos.com',
	'https://testnet.waxsweden.org',
	'https://testnet.wax.pink.gg',
	'https://waxtest.eosn.io',
	'https://wax-testnet.eosphere.io'
];

var var_WAX_NODES = var_MAINNET_WAX_NODES;
var var_FALLBACK_WAX_NODES = var_MAINNET_FALLBACK_WAX_NODES;

var var_MAINNET_GR_ATOMIC_NODES = ['https://atomic.greenrabbitgame.io/atomicassets'];

var var_MAINNET_ATOMIC_NODES = [
	'https://wax-aa.eu.eosamsterdam.net/atomicassets',
	'https://aa.wax.blacklusion.io/atomicassets',
	'https://wax.blokcrafters.io/atomicassets',
	'https://api.wax-aa.bountyblok.io/atomicassets',
	'https://api-wax-aa.eosarabia.net/atomicassets',
	'https://aa-api-wax.eosauthority.com/atomicassets',
	'https://wax-atomic-api.eosphere.io/atomicassets',
	'https://wax.api.atomicassets.io/atomicassets',
	'https://api.wax.liquidstudios.io/atomicassets',
	'https://api.atomic.greeneosio.com/atomicassets'
];

var var_TESTNET_ATOMIC_NODES = ['https://test.wax.api.atomicassets.io/atomicassets'];

var var_ATOMIC_NODES = var_MAINNET_GR_ATOMIC_NODES;
var var_FALLBACK_ATOMIC_NODES = var_MAINNET_ATOMIC_NODES;

// var var_WAX_BASE_ENDPOINT_HOST = 'api.wax.alohaeos.com';
// var var_WAX_BASE_ENDPOINT_HOST = 'api.waxsweden.org';
// var var_WAX_BASE_ENDPOINT_HOST = 'wax.eosn.io';
var var_WAX_BASE_ENDPOINT_HOST = 'waxnode.greenrabbitgame.io';

var var_WAX_CHAIN_ID = '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4';

var var_STAKING_CONTRACT = 'staking.gr';
var var_PROMO_CONTRACT = 'driveless.gr';
var var_REDEEM_CONTRACT = 'redeem.gr';
var var_TOKEN_CONTRACT = 'token.gr';
var var_STORE_CONTRACT = 'store.gr';
var var_MATS_CONTRACT = 'missions.gr';
var var_COLLECTION_NAME = 'greenrabbit,nvenomsnftzs';
var var_UNBOXING_CONTRACT = 'greenrabpack';
var var_CRAFTING_CONTRACT = 'crafting.gr';
var var_USER_PROFILE_CODE = 'accounts.gr';
var var_GR_COLLECTION_NAME = 'greenrabbit';
var var_GR_AVATAR_SCHEMA = 'avatars';
var var_GR_WALLPAPER_SCHEMA = 'wallpapers';

if (IS_TESTNET) {
	var_WAX_CHAIN_ID = 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12';
	var_WAX_BASE_ENDPOINT_HOST = 'api.waxtest.alohaeos.com';
	var_WAX_NODES = var_TESTNET_WAX_NODES;
	var_FALLBACK_WAX_NODES = [];
	var_ATOMIC_NODES = var_TESTNET_ATOMIC_NODES;
	var_FALLBACK_ATOMIC_NODES = [];
	var_MATS_CONTRACT = 'matforaging1';
	var_STAKING_CONTRACT = 'dothestaking';
	var_PROMO_CONTRACT = 'stakenodrive';
	var_REDEEM_CONTRACT = 'chestopening';
	var_TOKEN_CONTRACT = 'dothetokenss';
	var_STORE_CONTRACT = 'testnetstore';
	var_COLLECTION_NAME = 'greenrabbitx';
	var_UNBOXING_CONTRACT = 'drzammsypack';
	var_CRAFTING_CONTRACT = 'grprcrafting';
	var_USER_PROFILE_CODE = 'useraccounts';
	var_GR_COLLECTION_NAME = 'greenrabbitx';
	var_GR_AVATAR_SCHEMA = 'avatar';
	var_GR_WALLPAPER_SCHEMA = 'wallpaper';
}

export const WAX_CHAIN_ID = var_WAX_CHAIN_ID;
export const WAX_NODES = var_WAX_NODES;
export const FALLBACK_WAX_NODES = var_FALLBACK_WAX_NODES;
export const ATOMIC_NODES = var_ATOMIC_NODES;
export const FALLBACK_ATOMIC_NODES = var_FALLBACK_ATOMIC_NODES;
export const WAX_BASE_ENDPOINT_HOST = var_WAX_BASE_ENDPOINT_HOST;

export const STAKING_CONTRACT = var_STAKING_CONTRACT;
export const PROMO_CONTRACT = var_PROMO_CONTRACT;
export const REDEEM_CONTRACT = var_REDEEM_CONTRACT;
export const TOKEN_CONTRACT = var_TOKEN_CONTRACT;
export const STORE_CONTRACT = var_STORE_CONTRACT;
export const UNBOXING_CONTRACT = var_UNBOXING_CONTRACT;
export const CRAFTING_CONTRACT = var_CRAFTING_CONTRACT;
export const MATS_CONTRACT = var_MATS_CONTRACT;
export const COLLECTION_NAME = var_COLLECTION_NAME;
export const USER_PROFILE_CODE = var_USER_PROFILE_CODE;
export const GR_COLLECTION_NAME = var_GR_COLLECTION_NAME;
export const GR_AVATAR_SCHEMA = var_GR_AVATAR_SCHEMA;
export const GR_WALLPAPER_SCHEMA = var_GR_WALLPAPER_SCHEMA;
export const TESTNET = IS_TESTNET;
export const IPFS_URL_ONE = 'https://gateway.pinata.cloud/ipfs/';
export const IPFS_URL_TWO = 'https://ipfs.io/ipfs/';
// export const ATOMIC_ASSET_URL = 'https://wax.atomichub.io/explorer/asset/';
export const ATOMIC_ASSET_URL = 'https://nfthive.io/asset/';
export const REFRESH_INTERVAL_SECONDS = 60;
export const REFRESH_BALANCE_SECONDS = 120;
export const TRANSACTION_TIMEOUT_MS = 2000;

export const var_YOUTUBE_BASE_HOST = ['https://www.googleapis.com'];
export const var_YOUTUBE_BASE_ENDPOINT = '/youtube/v3/playlistItems';
export const var_YOUTUBE_WATCH_BASE_ENDPOINT = 'https://www.youtube.com/watch?v=';
export const var_YOUTUBE_EMBED_ENDPOINT = 'https://www.youtube.com/embed/';
export const GP_YOUTUBE_CHANNEL_ID = 'UCg6hkqE8Vsq2ZJ-2kw1Jigg';
export const GP_YOUTUBE_LORE_PLAYLIST_ID = 'PLuRZ84NvSGZIkSm2BLs41vOpclmZWSsjf';
export const GP_YOUTUBE_TUTORIAL_PLAYLIST_ID = 'PLuRZ84NvSGZI6HBCqqAfIyFCoUZjeNfRV';

export const GP_YOUTUBE_API_KEY = 'AIzaSyB9WSc35alYRVIGCaj1akRL4VOJ3XVmf0s';
