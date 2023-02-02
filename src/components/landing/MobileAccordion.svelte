<script>
	import { slide } from "svelte/transition";
    import { getContext, onMount } from 'svelte';
	export let i;
	export let show;
	export let showCollapse = (data)=>{};
	export let item;
    export let mobile = false;

    const baseOffset = ['0px', '-40px', '-50px', '-40px', '-40px', '-40px'];
    $: {
        if (mobile)
            show =i;
    }

    onMount(async () => {
            
        }
    );


</script>

<div class="collapse__header"   on:click={showCollapse(i)}
    class:header-selected={show === i}
    data-aos="fade-up" data-aos-duration="1000"
>
    <p class="overview-item-font"
        
    >
        {item.title}
    </p>
        <group>
            <span class="overview-item-bg-effect3" >{item.key}</span>
            <span class="overview-item-bg-line" ></span>
            <img class="overview-item-bg-img"  src="/assets/landing/common/subtitlesel-overview594.svg" alt="">
            <span class="overview-item-bg-effect1"></span>
            <span class="overview-item-bg-effect2"></span>
        </group>
        <!-- {#if i == 2}
        <div class="overview-item-comingsoon">
            <span>COMING SOON</span>
        </div>
        {/if} -->
</div>
	<div class="collapse__body" data-aos="fade-up" data-aos-duration="1000">
        <div class="overview-item-contentfont">
           {@html item.text}
        </div>
	</div>

<style>
    .collapse__header{
        display: flex;
        height: 85px;
        position: relative;
        cursor: pointer;
        padding-left: 10px;
        padding-right: 10px;
        color: white;
    }
    .collapse__header:hover{
        background:  #16215A;
    }
    .header-selected:hover{
        background:  unset;
    }
    .collapse__body{
        float: left;
        padding-top: 20px;
    }
    .overview-item-font{
        font-family: Airstrike;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        text-align: left;
        color: #EFEFEF;
        text-transform: uppercase;
        cursor: pointer;
        z-index: 999;        
        padding-left: 10px;
        padding-right: 10px;
        min-width: 320px;
    }
    .overview-item-selected{
        opacity: 0.6;
    }
    .overview-item-contentfont{
        padding-left: 40px;
        display: flex;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        text-align: left;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        display: flex;
        justify-content: flex-start;
        align-items: center;
   }
   .overview-item-bg-effect1{
        position: absolute;
        background: linear-gradient(270deg, #192664 1.18%, rgba(25, 38, 100, 0) 100%);
        opacity: 0.7;
        width: 110%;
        height: 78px;
        top: -12px;
        left: -77px;
   }
    .overview-item-bg-effect2{
        position: absolute;
        width: 110%;
        height: 40px;
        left: -55px;
        top: 41px;
        background: linear-gradient(270deg, #1E2E7B 1.18%, rgba(25, 38, 100, 0) 100%);
        opacity: 0.9;
    }
    .overview-item-bg-effect3{
        position: absolute;
        font-family: Airstrikeout;
        font-style: normal;
        font-weight: normal;
        font-size: 150px;
        line-height: 131px;
        opacity: 0.4;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        top: -35px;
        left: -41px;
    }    
    .overview-item-bg-line{
        position: absolute;
        width: 110%;
        height: 0px;
        left: -69px;
        top: 65px;
        border: 1px solid #FFFFFF;
    }
    .overview-item-bg-img{
        position: absolute;
        width: 594px;
        height: auto;
        top: 66px;
        left: -143px;
    }
    .overview-item-comingsoon{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 9px;
        top: 66px;
        width: 98px;
        height: 32px;
        background: #27A991;
        border-radius: 2px;
    }
    .overview-item-comingsoon span{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #FFFFFF;
    }

    @media (max-width: 1024px) {
        .overview-item-contentfont{
            padding-left: unset;
        }
        .collapse__header {
            width: 100%;
        }
        .overview-item-font {
            font-family: Airstrike;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 1;
            display: flex;
            align-items: center;
            letter-spacing: 0.02em;
            text-align: left;
            color: #EFEFEF;
            text-transform: uppercase;
            cursor: pointer;
            z-index: 999;
            padding-left: 10vw;
            padding-right: 10px;
            min-width: unset;
            margin-left: 36px;
        }
        .overview-item-bg-effect3 {
            position: absolute;
            font-family: Airstrikeout;
            font-style: normal;
            font-weight: normal;
            font-size: 120px;
            line-height: 1.5;
            opacity: 0.4;
            text-shadow: 0px 2px 4px rgb(0 0 0 / 50%);
            top: -60px;
            left: 5vw;
        }
        .overview-item-bg-line {
            position: absolute;
            width: 100%;
            height: 0px;
            left: 0;
            top: 65px;
            border: 1px solid #FFFFFF;
        }
        .overview-item-bg-img {
            position: absolute;
            width: 100%;
            height: auto;
            top: 66px;
            left: 0;
        }
        .overview-item-bg-effect1 {
            position: absolute;
            background: linear-gradient(270deg, #192664 1.18%, rgba(25, 38, 100, 0) 100%);
            opacity: 0.7;
            width: 100%;
            height: 78px;
            top: -12px;
            left: 0;
        }
        .overview-item-bg-effect2 {
            position: absolute;
            width: 100%;
            height: 40px;
            left: 0;
            top: 41px;
            background: linear-gradient(270deg, #1E2E7B 1.18%, rgba(25, 38, 100, 0) 100%);
            opacity: 0.9;
        }
        .collapse__body {
            float: left;
            padding-top: 20px;
            width: 90%;
        }




    }
</style>