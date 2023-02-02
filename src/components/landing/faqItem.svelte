<script>
	import { slide } from "svelte/transition";
	export let entry;
	let isOpen = false;
	const toggle = () => isOpen = !isOpen
</script>
<style>
	button {
        border: none; 
        background: none;
        cursor: pointer;
        margin: 0; 
        margin-right: 25px;
    }
    button img {
        min-width: 12px;
         min-height: 7.2px;
    }
    .subtitle-onequestion{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 58px;
        background: #0E1743;
        border: 1px solid #24316F;
        box-sizing: border-box;
        cursor: pointer;
    }
    .subtitle-onequestion:hover{
        background: #162053;
        border: 1px solid #24316F;
    }
    .subtitle-answer{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        background: #0E1743;
        border: 1px solid #24316F;
        padding: 15px 25px 15px 15px;
    }    
    .faq-question-font{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: #FFFFFF;
        margin-left: 15px;
        text-align: left;
        cursor: pointer;
    }
    .faq-answer-font{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 28px;
        color: #FFFFFF;
        margin-left: 15px;
        cursor: pointer;
        justify-content: flex-start;
        text-align: left;
    }
    img { 
        transition: transform 0.2s ease-in;
	}
	
    @media (max-width: 768px) {
        button {
            margin-right: 10px;
        }
        .faq-question-font {
            margin-left: 10px;
        }
        .subtitle-answer {
            padding: 10px;
        }
        .faq-answer-font {
            margin-left: 0;
        }
    }


    [aria-expanded=true] img {
         transform: rotate(0.5turn); 
    }
</style>
    <div class="subtitle-onequestion" on:click={toggle}>
        <div class="faq-question-font">
            {entry.question} 
        </div>
        <button on:click={toggle} aria-expanded={isOpen}>
            <img src='/assets/landing/faq/arrowexpand.svg' alt="" style="width:  12px; height: 7.2px"/>
        </button>
    </div>


    {#if isOpen}
    <div class="subtitle-answer" transition:slide={{ duration: 300 }}>
        <div class="faq-answer-font">
            {@html entry.answer  }
        </div>
    </div>
    <!-- <ul transition:slide={{ duration: 300 }}>
        <li>{entry.answer}</li>
    </answer-font -->
    {/if}
