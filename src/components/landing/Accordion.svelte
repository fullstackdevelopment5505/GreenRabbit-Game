<script>
	import { slide } from "svelte/transition";
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
</script>

<div class="collapse__header" on:click={showCollapse(i)} data-aos="fade-up" data-aos-duration="1000"
    class:header-selected={show === i}    
>
    <p class="overview-item-font"
        class:overview-item-selected = {show != i}
    >
        {item.title}
        {#if i == show-1}
            <span class="overview-item-topline" ></span>
        {:else if i !== show}
            <span class="overview-item-topline" ></span>
        {/if}
        {#if i == 5 && i !== show}
            <span class="overview-item-bottomline" ></span>
        {/if}
        
    </p>
    {#if show === i}
        <group>
            <!-- <span class="overview-item-bg-effect3" style="margin-left : {baseOffset[i]}">{item.key}</span>
            <span class="overview-item-bg-line" style="margin-left : {baseOffset[i]}" ></span>
            <img class="overview-item-bg-img"  style="margin-left : {baseOffset[i]}" src="/assets/landing/common/subtitlesel-overview594.svg" alt="">
            <span class="overview-item-bg-effect1" style="margin-left : {baseOffset[i]}"></span>
            <span class="overview-item-bg-effect2" style="margin-left : {baseOffset[i]}"></span> -->
            <span class="overview-item-bg-effect3" >{item.key}</span>
            <span class="overview-item-bg-line" ></span>
            <img class="overview-item-bg-img"  src="/assets/landing/common/subtitlesel-overview594.svg" alt="">
            <span class="overview-item-bg-effect1"></span>
            <span class="overview-item-bg-effect2"></span>
        </group>
        {#if i == 5}
        <div class="overview-item-comingsoon">
            <span>COMING SOON</span>
        </div>
        {/if}
    {/if}
</div>
{#if show === i}
	<div class="collapse__body"   transition:slide  data-aos="fade-up" data-aos-duration="1000"
    >
        <div class="overview-item-contentfont" > 
           {@html item.text }
        </div>
	</div>
{/if}

<style>
    .collapse__header{
        display: flex;
        height: 80px;
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
        padding-bottom: 10px;
    }
    .overview-item-font{
        font-family: Airstrike;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
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
        position: relative;
    }
    .overview-item-selected{
        font-size: 28px;
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
    .overview-item-bottomline{
        position: absolute;
        width: 110%;
        height: 100%;
        left: 0px;
        top: 0px;
        border-bottom: 1px solid #243174;
    }
    .overview-item-topline{
        position: absolute;
        width: 110%;
        height: 100%;
        left: 0px;
        top: 0px;
        border-top: 1px solid #243174;
    }
    .overview-item-bg-line{
        position: absolute;
        width: 110%;
        height: 0px;
        left: -69px;
        top: 65px;
        border: 1px solid #FFFFFF;
        transition: all 0.5s linear;
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
        right: -43px;
        top: 28px;
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

    }
</style>