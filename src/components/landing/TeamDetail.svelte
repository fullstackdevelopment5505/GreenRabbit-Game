<script>
	import { onMount } from 'svelte';
	import { TESTNET} from 'src/utils/config';
	import { goto } from '$app/navigation';
	import LottieButton from 'src/components/landing/LottieButton.svelte';
	import {teamItem} from 'src/components/landing/rawData/TeamMembers.svelte';

	export let onCancel = ()=>{};
	export let nIndex = -1;
	let innerWidth;
	$: {
		nIndex = nIndex;
	}
	function onBefore(){
		if (nIndex >= 1)
			nIndex--;
	}
	function onNext(){
		if (nIndex < 17)
			nIndex++;	
	}
</script>

<svelte:window bind:innerWidth />
<div class="wrapper">
	<div class="content-wrapper">
		<div class="content">
			<div class="title">
				{#if nIndex != -1}
					<img class="photo-img" src="{teamItem[nIndex].pic}" alt=""/>
				{/if}
				<div class="role-and-name">
					<div class="target-name">
						{@html teamItem[nIndex].name}
					</div>
					<div class="target-role">
						{@html teamItem[nIndex].role}
					</div>
					<p class="target-extra">{teamItem[nIndex].extra}</p>
				</div>
			</div>
			<div class="description">
				<p>{teamItem[nIndex].career}</p>
			</div>
			<div class="button-list">
				<LottieButton 
					onclick={onBefore}
					name="BEFORE"
					buttonStyle="arrow-before"
				/>
				<LottieButton 
					onclick={onNext}
					name="NEXT"
					buttonStyle="arrow-next"
				/>
			</div>
		</div>
	</div>
	<div class="bottom-wrapper">
		<div class="cta-btnbox">
			{#if innerWidth > 768}
				
			{:else if innerWidth > 480}
			
			{:else}
				
			{/if}
		</div>
	</div>
</div>

<style>
	.wrapper {
		background: #101634;
		border: 2px solid #5265C6;
		max-width: 709px;
		height: 364px;
	}
	.button-list{
		display: flex;
		flex-direction: row;
		position: absolute;
		bottom: 26px;
		left: 190px;
	}
	.title{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.content-wrapper,
	.bottom-wrapper {
		/* padding: 26px 30px 26px 40px; */
	}
	.content {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.title{
		display: flex;
		flex-direction: row;
	}
	.photo-img{
		width: 130px;
		height: 136px;
		margin-left: 45px;
		margin-top: 64px;
	}
	.role-and-name{
		display: flex;
		flex-direction: column;
		font-family: 'Airstrike';		
		font-style: normal;
		font-weight: 400;
		font-size: 26px;
		line-height: 23px;
		display: flex;
		color: #FFFFFF;
		margin-left: 30px;
    	margin-top: -45px;
	}
	.target-role	{
		font-family: 'Forza';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 26px;
		color: #FFFFFF;
	}
	.target-extra{
		font-family: 'Forza';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 26px;
		color: #FFFFFF;
	}
	.description {
		margin-left: 208px;
		margin-top: -67px;
		max-width: 448px;
	}
	.description p{
		font-family: 'Forza';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: #FFFFFF;
	}
	.cta-btnbox {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	@media (max-width: 768px){
		.wrapper{
			width: 384px;
			height: 458px;
		}
		.content{
			padding-left: 10px;
			padding-right: 20px;
		}
		.photo-img{
			margin-bottom: 30px;
			margin-top: 39px;
			margin-left: 23px;
			width: 117px;
			height: 128px;
		}
		.description {
			margin-left: 32px;
			margin-top: -18px;
			max-width: 387px;
		}
		.role-and-name{
			margin-top: 0px;
		}
		.target-role{
			margin-top: 15px;
		}
		.target-extra{
			white-space: nowrap;
			font-size: 15px;;
		}
		.target-role{
			white-space: nowrap;
		}
		.button-list{
			left: 122px;
		}
		.role-and-name{
			margin-left: 26px;
		}
	}

	
	
</style>
