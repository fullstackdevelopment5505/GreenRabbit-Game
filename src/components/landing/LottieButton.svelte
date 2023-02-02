<script>
	import { slide } from "svelte/transition";
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    export let width;
    export let height;
    export let name = "PLAY";
    export let onclick;
    export let buttonStyle = "menubutton_play";
    import { browser } from '$app/env';
    
    let lottieButton;

    const rawData = {
        menubutton_play : {
            src : "/assets/landing/lottie/buttons/playbutton.json",
            width: 159, 
            height: 44
        }
    }
    function onEnter(){
        lottieButton.stop();
        lottieButton.play();
    }
    function onLeave(){
        lottieButton.stop();
        lottieButton.play();
    }
</script>

<!-- on:mouseenter={onEnter}
    on:mouseleave={onLeave} -->

<div class="{buttonStyle}" on:click={onclick}
     
>
    {#if browser}
        {#if name == "PLAY"}
            <LottiePlayer
                bind:this={lottieButton}
                src="/assets/landing/lottie/buttons/playbutton.json"
                speed="1"
                loop="{false}"
                controls="{false}"                
                renderer="svg"
                background="transparent"
                height="{44}"
                width="{159}"
                hover
            />
        {:else if name == "WAX"}
            <LottiePlayer
                bind:this={lottieButton}
                src="/assets/landing/lottie/buttons/wax.json"
                speed="1"
                loop="{false}"
                controls="{false}"
                renderer="svg"
                background="transparent"
                height="{55}"
                width="{269}"
                hover
            />             
        {:else if name == "ANCHOR"}
            <LottiePlayer
                bind:this={lottieButton}
                src="/assets/landing/lottie/buttons/anchor.json"
                speed="1"
                loop="{false}"
                controls="{false}"
                renderer="svg"
                background="transparent"
                height="{55}"
                width="{268}"
                hover
           />     
        {:else if name == "BEFORE"}
        <div class="arrow-before unselectable">
            <img src='/assets/landing/button/arrow-before-content.svg' alt="">
        </div>
        {:else if name == "NEXT"}
        <div class="arrow-next unselectable">
            <img src='/assets/landing/button/arrow-next-content.svg' alt="">
        </div>
        {:else if name == "SEE MISSION RESULTS"}
           
        {:else if name == "UPGRADE LAND"}

        {:else if name == "FUSE ANIMA ARMOR"}
        
        {:else if name == "PLAY GREEN RABBIT"}
            <LottiePlayer
            bind:this={lottieButton}
            src="/assets/landing/lottie/buttons/play_gr.json"
            speed="1"
            loop="{false}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{44}"
            width="{231}"
            hover
        /> 
        {:else if name == "SEE QUICK GUIDE"}
        <LottiePlayer
            bind:this={lottieButton}
            src="/assets/landing/lottie/buttons/seequickguide.json"
            speed="1"
            loop="{false}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{44}"
            width="{231}"
            hover
        />       
        {:else if name == "FULL GAMEPLAY"}
        <LottiePlayer
            bind:this={lottieButton}
            src="/assets/landing/lottie/buttons/fullgameplay.json"
            style="margin-top: 32px;"
            speed="1"
            loop="{false}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{54}"
            width="{252}"
            hover
        />       
        {:else if name == "COMPLETE GAMEPLAY"}
        <LottiePlayer
            bind:this={lottieButton}
            src="/assets/landing/lottie/buttons/completegameplay.json"
            speed="1"
            loop="{false}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{44}"
            width="{231}"
            hover
        />        
        {:else if name == "CREATE PORTAL ACCOUNT"}
        <LottiePlayer
            bind:this={lottieButton}
            src="/assets/landing/lottie/buttons/create_portal_account.json"
            speed="1"
            loop="{false}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{44}"
            width="{251}"
            hover
        />                
        {:else if name == "YOUTUBE CHANNEL"}
        <LottiePlayer
            bind:this={lottieButton}
            src="/assets/landing/lottie/buttons/ytchannel.json"
            style="margin-top: 30px;"
            speed="1"
            loop="{false}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{44}"
            width="{231}"
            hover

        />
        {/if}
        
    {/if}
</div>
<style>
    .menubutton_play{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .button-style229{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .button-style249{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 20px;
        z-index: 1;
    }
    .arrow-before{
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		background-image: url('/assets/landing/button/arrow-before.svg');
		background-repeat: no-repeat;
		width: 78px;
		height: 54px;
		cursor: pointer;
		margin-top: 20px;
	}
	/* .arrow-before:before{
		content: url('/assets/landing/button/arrow-before-1.svg');
		position: absolute;
		left: 9px;
		top: 10px;
	} */
    .arrow-next{
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		background-image: url('/assets/landing/button/arrow-next.svg');
		background-repeat: no-repeat;
		width: 78px;
		height: 54px;
		cursor: pointer;
		margin-top: 20px;
	}
    .arrow-next img{
        margin-top: -20px;
    }

    .arrow-before img{
        margin-top: -20px;
    }
	/* .arrow-next:before{
		content: url('/assets/landing/button/arrow-next-1.svg');
		position: absolute;
		left: 9px;
		top: 10px;
	}     */

</style>

