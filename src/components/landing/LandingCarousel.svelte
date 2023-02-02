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

	let slider;
	let imgCntPerPage = 6;
	let totalImgCnt = 18;
	let innerWidth;

	$: {
		if (innerWidth <= 550){
			imgCntPerPage = 2;
		}else if (innerWidth <= 650){
			imgCntPerPage = 3;
		}else if (innerWidth <= 1000){
			imgCntPerPage = 4;
		}else if (innerWidth <= 1200){
			imgCntPerPage = 5;
		}else{
			imgCntPerPage = 6;
		}
	}

	const dispatch = createEventDispatcher();
	onMount(() => {
		slider.splide.on('moved', handleChange);

		go(currentIndex);

		return () => {};
	});

	export function left() {
		//slider.splide.go('<');
		slider.splide.go(currentIndex - imgCntPerPage+1);
	}

	export function right() {
		// slider.splide.go('>');
		slider.splide.go(currentIndex + imgCntPerPage-1);
	}

	export function go(index) {
		slider.splide.go(index);
	}

	function handleChange(newIndex, prevIndex, destIndex) {
		currentIndex = newIndex;
		// alert("total image count" + totalImgCnt + "," + "currentIndex " + currentIndex + ","  + "imagepercount" +imgCntPerPage);

		dispatch('change', {
			currentSlide: newIndex,
			slideCount: slider.splide.length
		});
	}
</script>

<svelte:window bind:innerWidth />

<Splide
	bind:this={slider}
	options={{
		pagination,
		arrows,
		dots,
		perPage,
		gap: 10,
		breakpoints: {
			550: {
				perPage: 2
			},
			650: {
				perPage: 3
			},
			1000: {
				perPage: 4
			},
			1200: {
				perPage: 5
			},
			1440: {
				perPage: 6
			}
		}
	}}
>
	<!-- Left Arrow Control -->
	<div class="" slot="before-track">
		<div class="left nav-left-btn flex center unselectable" 
			style="opacity: {currentIndex > 0 ? '1' : '0.4'}" 
			on:click={left}
		>
			<img src="/assets/landing/aboutgreenrabbit/slideleft.png" alt="" />
			<slot name="left-control" />
		</div>
	</div>

	<!-- Right Arrow Control -->
	<div class="" slot="after-track">
		<div class="right nav-right-btn flex center unselectable"
			style="opacity: {(currentIndex < (totalImgCnt - imgCntPerPage))  ? '1' : '0.4'}" 
		 	on:click={right}
		>
			<img src="/assets/landing/aboutgreenrabbit/slideright.png" alt="" />
			<slot name="right-control" />
		</div>
		<!-- {#if (currentIndex < (totalImgCnt - imgCntPerPage))}
			<div class="mask-image-end">
				<img src="/assets/landing/aboutgreenrabbit/mask.png" alt=""/> 
			</div> 
		 {/if} -->
	</div>
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
		left: -20px;
		top: 80px;
	}
	.right {
		right: -20px;
		top: 80px;
	}
	.mask-image-end{
		display: relative;
		width: 100%;
    }    
	.mask-image-end  img{
		position: absolute;
		top: 0px;
		right: -20px;
		width: 430px;
		height: 396px;
    }
	.nav-left-btn{
		width: 95px;
		height: auto;
		cursor: pointer;
		z-index: 5;
		position: absolute;
		opacity: 1;
	}
	.nav-right-btn{
		width: 95px;
		height: auto;
		cursor: pointer;
		z-index: 5;
		position: absolute;
		opacity: 1;
	}
	

	@media (max-width: 550px) {
		.left{
			top: 14vh;
		
		}
		.right{
			top: 14vh;
		}
		.mask-image-end{
			display: none;
		}
	}
</style>
