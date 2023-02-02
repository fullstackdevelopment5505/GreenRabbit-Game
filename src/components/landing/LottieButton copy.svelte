<script>
	import { slide } from "svelte/transition";
    export let width;
    export let height;
    export let name = "PLAY";
    export let onclick;
    export let buttonStyle = "menubutton-play";
</script>

<div class="{buttonStyle}" on:click={onclick}>
    <p class="unselectable">{name}</p>
</div>
<style>
    .menubutton-play{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        background-image: url('/assets/landing/button/buttonbg1.svg');
        background-repeat: no-repeat;
        width: 162px;
        height: 46px;
        cursor: pointer;
        min-width: 162px;
        transition: transform 250ms ease-out;
    }
    .menubutton-play p{
        font-family: "Forza A", "Forza B";
        font-style: italic;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .menubutton-play::before{
        content: url('/assets/landing/button/buttonbg2.svg');
        position: absolute;
        left: 9px;
        top: 10px;        
        transition: transform 250ms ease-out;
    }
    .menubutton-play:hover::before{
        transform: translateX(-25px);
    }
    .menubutton-play:hover{
        transform: translateX(10px);
    }
    .button-style229{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        background-image: url('/assets/landing/button/button229.svg');
        background-repeat: no-repeat;
        width: 231px;
        height: 44px;
        cursor: pointer;
        min-width: 162px;
        margin-top: 20px;
        transition: transform 250ms ease-in;
    }
    .button-style229 p{
        font-family: "Forza A", "Forza B";
        font-style: italic;
        font-weight: normal;
        font-size: 18px;   
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .button-style229:before{
        content: url('/assets/landing/button/button229-1.svg');
        position: absolute;
        left: 9px;
        top: 10px;
        transition: transform 250ms ease-in;
    }
    .button-style229:hover::before{
        transform: translateX(-25px);
    }
    .button-style229:hover{
        transform: translateX(10px);
    }
    .button-style249{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        background-image: url('/assets/landing/button/button249.svg');
        background-repeat: no-repeat;
        width: 252px;
        height: 54px;
        cursor: pointer;
        min-width: 162px;
        margin-top: 20px;
        z-index: 1;
        transition: transform 250ms ease-in;
    }
    .button-style249 p{
        font-family: "Forza A", "Forza B";
        font-style: italic;
        font-weight: normal;
        font-size: 18px;   
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }
    .button-style249:before{
        content: url('/assets/landing/button/button249-1.svg');
        position: absolute;
        left: 9px;
        top: 10px;
        cursor: pointer;
        transition: transform 250ms ease-in;
    }
    .button-style249:hover::before{
        transform: translateX(-25px);
    }
    .button-style249:hover{
        transform: translateX(10px);
    }
</style>

