<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { activeUser } from '../stores/store.js';
	import TopLandingPage from 'src/components/landing/toppage.svelte';
	import LandingTopMenu from 'src/components/landing/LandingTopMenu.svelte';

	let isLoading = true;
	onMount(async () => {
		console.log("none");
		
	}
    );
</script>

<TopLandingPage bind:isLoading = {isLoading}/>

