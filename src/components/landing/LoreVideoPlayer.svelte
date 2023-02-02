<script>
    import {onMount } from 'svelte';
	// These values are bound to properties of the video
	export let time = 0;
	let duration;
	export let paused = true;
    export let posterUrl;
    export let videoUrl;
	export let audioUrl;
    export let title;
	export let videoOrAudio = "video";

	let videoAudioController;
	let showControls = true;
	let showControlsTimeout;
	$: {
		if (videoOrAudio){
			time = 0;
			paused = true;
		} 
	}
	
	// Used to track time of last mouse down event
	let lastMouseDown;
    let videoPlayer;

	let current;
	function stopOthers() {
		if (current && current !== videoAudioController) current.pause();
		current = videoAudioController;
		console.log("aa");
	}

    onMount(async () => {
        videoPlayer = document.getElementsByClassName('video-player');
        paused = true;
        time = 0;
       }
    ); 

	function handleMove(e) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => showControls = false, 2500);
		showControls = true;

		if (!duration) return; // video not loaded yet
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return; // mouse not down

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
		const { left, right } = this.getBoundingClientRect();
		time = duration * (clientX - left) / (right - left);
	}

	// we can't rely on the built-in click event, because it fires
	// after a drag — we have to listen for clicks ourselves
	function handleMousedown(e) {
		lastMouseDown = new Date();
	}

	function handleMouseup(e) {
		if (new Date() - lastMouseDown < 300) {
			if (paused) e.target.play();
			else e.target.pause();
		}
	}

    function handleMouseupProgressbar(e){
        if (!duration) return; // video not loaded yet
		if (e.type !== 'mouseup' && !(e.buttons & 1)) return; // mouse not down
		const clientX = e.type === 'touchup' ? e.touches[0].clientX : e.clientX;
		const { left, right } = this.getBoundingClientRect();
		time = duration * (clientX - left) / (right - left);
    }

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}
</script>

<div style="width: 100%;"> 
	{#if videoOrAudio == "video"}
		<iframe  class="video-player" id="myVideo" name="myVideo" src="{videoUrl}?list=PLuRZ84NvSGZIkSm2BLs41vOpclmZWSsjf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		<!-- <video
			bind:this={videoAudioController}
			on:play={stopOthers}
			class="video-player"
			poster={posterUrl}
			src={videoUrl}
			on:mousemove={handleMove}
			on:touchmove|preventDefault={handleMove}
			on:mousedown={handleMousedown}
			on:mouseup={handleMouseup}
			bind:currentTime={time}
			bind:duration
			bind:paused>
				<track kind="captions"/>
		</video> -->
	{:else}
		<audio
			bind:this={videoAudioController}
			on:play={stopOthers}
			class="video-player"
			src={audioUrl}
			on:mousemove={handleMove}
			on:touchmove|preventDefault={handleMove}
			on:mousedown={handleMousedown}
			on:mouseup={handleMouseup}
			bind:currentTime={time}
			bind:duration
			bind:paused>
				<track kind="captions"/>
		</audio>
	{/if}

	<!-- <div class="controls" style="opacity: {duration && showControls ? 1 : 0}"> -->
    <div class="controls" style="opacity: 1">
		<div class="info">
			<img style="max-width: 14.3px; min-width: 14.3px; margin-left: 32px; margin-right: 35px; cursor: pointer" alt=""
				src="{paused ? '/assets/landing/lore/play.svg' : '/assets/landing/lore/paused.svg'}" 
				on:click={()=>{paused = !paused}}
			>
            <div style="display: flex; flex-direction: column; width: 100%; ">
                <span style="margin-left: 10px;">{title}</span>
                <progress class="pg-style" value="{(time / duration) || 0}"	on:mouseup={handleMouseupProgressbar}/>
                <span class="time">{format(time)}</span>
                <!-- <span>click anywhere to {paused ? 'play' : 'pause'} / drag to seek</span> -->
                <!-- <span class="time">{format(duration)}</span> -->
            </div>
		</div>
	</div>

	{#if videoOrAudio == "video"}
		<img src="/assets/landing/readytorule/seltop.svg" style="position: absolute; top: -10px; left: -10px;" alt=""/>
		<img src="/assets/landing/readytorule/selbottom.svg" style="position: absolute; right: -10px; bottom: -38px" alt=""/>
		{#if paused}
		<img class="video-start" 
			src="/assets/landing/readytorule/videostart.png" alt=""
			on:click={()=>{paused = !paused;}}
		/>
		{/if}
	{/if}
</div>

<style>
	div {
		position: relative;
		width: 100%;
	}
	.controls {
		position: absolute;
		bottom : -150px;
		/* width: 100%; */
		width: 100;
		transition: opacity 1s;
	}
    .pg-style{
        cursor: pointer;
    }
	.video-player{
		/* min-width: 750px; */
		width: 100%;
		height: 100%;
	}
	.info {
		display: flex;
		width: 100%;
		justify-content: flex-start;
        background: #060D2F;
        border: 1px solid #2F2E2E;
        box-sizing: border-box;
        border-radius: 2px;
        height: 74px;
        text-align: left;
	}
	span {
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 32px;
        color: #FFFFFF;
    }
	.time {
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 32px;
        color: #FFFFFF;
		width: 3em;
	}
	.time:last-child { text-align: right }

	progress {
		display: block;
		width: 95%;
		height: 10px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		/* background-color: rgba(0,0,0,0.2); */
        background-color:  #9D9D9D;
        height: 4px;
	}

	progress::-webkit-progress-value {
		/* background-color: rgba(255,255,255,0.6); */
        background-color: #36FFC0;
	}

	video {
		width: 100%;
	}

    .video-start{
        position: absolute; 
        width: 34px; 
        bottom: calc(50%);  
        transform: translate(50%, 50%); 
        right: calc(50%);
        cursor: pointer;
        transition: opacity 1s;
    }
</style>
