<script>
	import '@splidejs/splide/dist/css/splide.min.css';
	import { Splide } from '@splidejs/svelte-splide';

	import { onMount, createEventDispatcher } from 'svelte';

	export let perPage;
	export let breakpoints;

	export let loop = true;
	export let autoplay = 0;
	export let duration = 200;
	export let easing = 'ease-out';
	export let startIndex = 0;
	export let draggable = true;
	export let multipleDrag = true;
	export let dots = false;
	export let controls = true;
	export let threshold = 20;
	export let rtl = false;
	export let currentIndex = startIndex;
	export let showCarousel = true;
	export let pagination = false;
	export let arrows = false;
	export let showCollapse = (data)=>{};

	let slider;

	const dispatch = createEventDispatcher();

	onMount(() => {
		slider.splide.on('moved', handleChange);

		go(currentIndex);

		return () => {};
	});

	export function left() {
		slider.splide.go('<');
	}

	export function right() {
		slider.splide.go('>');
	}

	export function go(index) {
		slider.splide.go(index);
	}

	function handleChange(newIndex, prevIndex, destIndex) {
		if (currentIndex != newIndex){
			showCollapse(newIndex);
		}
		currentIndex = newIndex;	
		dispatch('change', {
			currentSlide: newIndex,
			slideCount: slider.splide.length
		});
	}
</script>

<Splide
	bind:this={slider}
	options={{
		pagination,
		arrows,
		dots,
		perPage,
		gap: 10,
		breakpoints
	}}
>
	<slot />
</Splide>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		min-width: 40px;
		height: 40px;
		top: 50%;
		z-index: 50;
		margin-top: -20px;
		border: none;
		background-color: transparent;
	}

	button:focus {
		outline: none;
	}

	.left {
		left: 3vw;
	}

	.right {
		right: 3vw;
	}
</style>
