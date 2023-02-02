<script>
    import { page } from '$app/stores';
    import { getContext, onMount } from 'svelte';

    import { goto } from '$app/navigation';
    import { each } from 'svelte/internal';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    import {teamItem} from 'src/components/landing/rawData/TeamMembers.svelte';
    import TeamDetail from 'src/components/landing/TeamDetail.svelte';
    const { open, close } = getContext('simple-modal');

    let innerWidth;
    onMount(async () => {
        animateIt();
        document.getElementById('loader').style.display = 'none';
        }
    );

    async function onCancel() {
		close();
	}

    function OpenTeamDetail(nIndex){
        setTimeout(async () => {
            open(
                TeamDetail,
                { onCancel, nIndex},
                {
                    styleWindow: {
                        width: '709px',
                        height: '364px',
                        border: 'none',
                        background: 'none'
                    },
                    styleContent: {
                        padding: 0
                    },
                    styleCloseButton:
                        innerWidth > 480
                            ? {
                                top: '20px',
                                right: '28px',
                                width: '24px',
                                height: '24px'
                                }
                            : {
                                top: '38px',
                                right: '24px',
                                width: '24px',
                                height: '24px'
                                }
                }
            );
        });           
    }

    function animateIt(){
        let overview = document.getElementsByClassName('section-banner-font');
        let overview_bg2 = document.getElementsByClassName('landing-section-banner2');
        let overview_bg3 = document.getElementsByClassName('landing-section-banner3');
        let overview_bg4 = document.getElementsByClassName('landing-section-banner4');
        let overview_str = document.getElementsByClassName('landing-section-banner5');
        return;
        

        overview.style.animation = 'unset';
        overview_str.style.transform = 'unset';
        overview_str.style.transition = 'unset';
        overview_str.style.left = 'unset';

        overview_bg2.style.transform = 'unset';
        overview_bg2.style.transition = 'unset';
        overview_bg3.style.transform = 'unset';
        overview_bg3.style.transition = 'unset';
        overview_bg4.style.transform = 'unset';
        overview_bg4.style.transition = 'unset';
        overview_bg2.style.animation = 'unset';
        overview_bg3.style.animation = 'unset';
        overview_bg4.style.animation = 'unset';
        overview.getBoundingClientRect();
        overview_str.getBoundingClientRect();
        overview_bg2.getBoundingClientRect();
        overview_bg3.getBoundingClientRect();
        overview_bg4.getBoundingClientRect();
        overview.style.animation = 'fadein 3s ease infinite ';
        /* left: calc(50%); 
        transform: translateX(-50%);*/
        
        overview_str.setAttribute("style", "display: none");
        overview_str.setAttribute("style", "transition: transform 1700ms;  transform: translateX(calc(50vw - 50%)); ");
        overview_bg2.setAttribute("style", "transition: transform 1500ms; transform: translateX(50vw)");
        overview_bg3.setAttribute("style", "transition: transform 900ms; transition-delay: 300ms; transform: translateX(50vw)");
        overview_bg4.setAttribute("style", "transition: transform 1200ms; transform: translateX(50vw)");
        setTimeout(() => {
            overview.style.animation = "none";
        }, 3000);
    }
</script>
<svelte:window bind:innerWidth />

<div class="bg-wrapper">
    <section class="landing-section">
        <!-- <div class="bottom-mask">
        </div> -->
        <div class="section-banner">
            <!-- <lottie-player src="/assets/landing/lottie/About_.json"  background="transparent"  speed="1"  style=" margin-top: 80px;"   autoplay></lottie-player> -->

            <LottiePlayer
                src="/assets/landing/lottie/About_.json"
                style=" margin-top: 80px;"
                speed="1"
                autoplay="{true}"
                loop="{false}"
                controls="{false}"
                renderer="svg"
                background="transparent"
                height="{80}"
                width="{1500}"
            />
        </div>
        <div class="section-container">
            <div class="subtitle-gettingstarted-titlepart">
                <span class="gettingstarted-titlefont">ABOUT GREEN RABBIT</span>
                <img src="/assets/landing/common/subtitlesel-about245.svg" alt=""/>
                <div class="gettingstarted-onerow">
                    <div class="subtitle-paragraph">
                        <div class="subtitle-about-body">
                            Founded in 2021, Green Rabbit is a world wide metaverse creative team focused on NFT game design and development. A diverse group with combined skills in NFT creation, cryptocurrency, as well as game and art design. Green Rabbit is set to become the premiere team in the NFT gaming space.
                        </div>
                    </div>
                </div>
            </div>
            <div class="subtitle-gettingstarted-titlepart">
                <span class="gettingstarted-titlefont">OUR STORY</span>
                <img src="/assets/landing/common/subtitlesel-about245.svg" alt=""/>
                <div class="gettingstarted-onerow">
                    <div class="subtitle-paragraph">
                        <div class="subtitle-about-body">
                            Green Rabbit was founded in April of 2021, when a group of like-minded individuals met on a social media platform for a popular blockchain game. Their shared love for gaming, art, and NFTs led to many creative conversations. Not soon after they began planning what would eventually be the foundation for Green Rabbit. This group of brilliant minds were just ordinary people from around the globe, but in the metaverse, they were nothing short of superstars. Each member brought their own unique set of skills to the table, from 3D artistry and video production, to web development and crypto expertise.
                        </div>
                    </div>
                </div>        
            </div>                                    
            <div class="subtitle-gettingstarted-titlepart"  data-aos="fade-up" data-aos-duration="2000">               
                <span class="gettingstarted-titlefont">OUR MISSION</span>
                <img src="/assets/landing/common/subtitlesel-about245.svg" alt=""/>
                <div class="gettingstarted-onerow">
                    <div class="subtitle-paragraph">
                        <div class="subtitle-about-body">
                            To provide the NFT community with an exciting and rewarding gaming experience, built with integrity and ethics, and delivered with the industry's collectors in mind.
                        </div>
                    </div>
                </div>      
            </div>                                    
            <div class="subtitle-gettingstarted-titlepart"  data-aos="fade-up" data-aos-duration="2000">
                <span class="gettingstarted-titlefont">PARTNERS</span>
                <img src="/assets/landing/common/subtitlesel-about245.svg" alt=""/>
                <div class="gettingstarted-onerow">
                    <div class="subtitle-paragraph">
                        <div class="partnership-sites">
                            <div class="wap-img">
                                <a href="https://on.wax.io/wax-io/" target="_blank"><img src="/assets/landing/about/wax.png" alt=""/></a>
                            </div>
                            <div class="nfthive-img">
                                <a href="https://nfthive.io/market?collection=greenrabbit&order_by=date_desc&search_type=sales&offer_type=sales&category=characters&chests" target="_blank"><img src="/assets/landing/about/nfthive.png" alt=""/></a>
                            </div>
                            <div class="defibox-img">
                                <a href="https://defibox.io/" target="_blank"><img src="/assets/landing/about/defibox.png" alt=""/></a>
                            </div>
                            <div class="wombat-img">
                                <a href="https://getwombat.io/" target="_blank"><img src="/assets/landing/toppage/wombat.png" alt=""/></a>
                            </div>
                            <!-- <img src="/assets/landing/about/wax.png" style="width: 135px; height: auto; cursor: pointer" alt=""/>
                            <img src="/assets/landing/about/nfthive.png" style="width: 226px; height: auto; cursor: pointer; margin-left: 94px;" alt=""/>
                            <img src="/assets/landing/about/defibox.png" style="width: 227px; height: auto; cursor: pointer; margin-left: 68px;" alt=""/> -->
                        </div>
                    </div>
                </div>    
            </div>                                    

            <div class="subtitle-gettingstarted-titlepart team-member"  data-aos="fade-up" data-aos-duration="2000">
                <span class="gettingstarted-titlefont">TEAM</span>
                <img src="/assets/landing/common/subtitlesel-about245.svg" alt=""/>
                <div class="gettingstarted-onerow">
                    <div class="team-container">
                        {#each  teamItem as eachitem, i}
                            <div class="team-individual-info"
                                 on:click={()=>{OpenTeamDetail(i);}}
                            >
                                <img src="{eachitem.pic}" alt=""/>
                                <span class="team-individual-text-bgfont">{@html eachitem.name}</span>
                                <span class="team-individual-text-smallfont">{@html eachitem.role}</span>
                            </div>
                        {/each}
                    </div>
                </div>             
            </div>                                    
        </div>   
    </section>    
</div>

<style>
    .bg-wrapper{      
        display: flex;       
        flex-direction: column;        
        width: 100%;
        display: inline;
    }
    section {
        padding: 1rem;
        text-align: center;
        position: relative;
    }
    .landing-header{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100vw;
        z-index:999;
        margin-top: 10px;
    }
    .landing-footer{
        position: relative; 
        height: 132px;
        width: 100%;
        display: flex;
        justify-content:space-around;
        background-color: #0E1425;
        background-size: cover;
        background-position-x: center;    
        align-items: center;
        margin: -8px;
        z-index: 999;
    }
    .landing-footer-leftpart{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .landing-footer-rightpart{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }    
    .url-iconlist{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
    }
    .footer-font1{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        width: 100%;
    }
    .footer-font2{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
    .landing-section { 
        position: relative;
        width: 100%;
        display: flex;
        background-image: url(/assets/landing/bg-mask.png);
        background-attachment: fixed;
        background-size: cover;
        background-position-x: center;
        background-repeat: no-repeat;
        flex-direction: column;
        overflow: hidden;
    }
    /* .landing-section::before {    
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background: #0E1743;
        opacity: 0.9;
    } */
    .section-banner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;        
    }
    .landing-section-banner1{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0px;
        width: 100%;
    }
    .landing-section-banner2{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* left: calc(50%); */
        left: -50px;
        top: 0px;
        width: 100%;
        transition: transform 1500ms; 
        transform: translateX(50vw)
        /* transform: translateX(-50%);    */
    
    }
    .landing-section-banner3{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* left: calc(50%); */
        left: -50px;
        top: 0px;
        width: 100%;
        transition: transform 900ms; 
        transition-delay: 300ms;
        transform: translateX(50vw);
        /* transform: translateX(-50%);         */
    }
    .landing-section-banner4{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* left: calc(50%); */
        left: -50px;
        top: 0px;
        width: 100%;
        transition: transform 1200ms; 
        transform: translateX(50vw);
        /* transform: translateX(-50%);         */
    }        
    .landing-section-banner5{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        transition: transform 1700ms; 
        transform: translateX(calc(50vw - 50%)); 
        /* left: calc(50%); 
        transform: translateX(-50%);        */
    }
    .banner-detail-adjust1{
        top: 85px;
        z-index: 999;
    }
    .banner-detail-adjust2{
        top: 148px;
        max-width: 379px;
        margin-left: -143px;
    }
    .banner-detail-adjust3{
        top: 190px;
        max-width: 379px;
        margin-left: -115px;
    }
    .banner-detail-adjust4{
        top: 175px;
        max-width: 559px;
        margin-left: -176px;
    }
    .banner-detail-adjust5{
        top: 150px;
    }

    .landing-section-banner{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        left: calc(50%);
        top: 0px;
        width: 100%;
        transform: translateX(-50%);        
    }
    .banner-detail-adjust1{
        top: 85px;
        z-index: 999;
    }
    .banner-detail-adjust2{
        top: 148px;
        max-width: 379px;
        margin-left: -143px;
    }
    .banner-detail-adjust3{
        top: 190px;
        max-width: 379px;
        margin-left: -115px;
    }
    .banner-detail-adjust4{
        top: 175px;
        max-width: 559px;
        margin-left: -176px;
    }
    .banner-detail-adjust5{
        top: 150px;
    }
    .section-banner-font {
        color: white;
        font-family: Airstrikeout;
        font-style: normal;
        font-weight: normal;
        font-size: 80px;
        line-height: 105px;
        display: flex;
        align-items: center;
        opacity: 0.1;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        justify-content: center;
        width: 100%;
        animation: fadein 3s ease infinite;
    }

    .section-title-font {
        position: relative;
        color: white;
        font-family: Airstrike;
        font-style: normal;
        font-weight: normal;
        font-size: 45px;
        line-height: 39px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.03em;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        justify-content: center;
    }
    .section-container{
        z-index: 1;
        margin-top: 105px;
        padding-left: 20vw;
        overflow: hidden;
    }
    .aboutgame-content-text{
        z-index: 2;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        display: flex;
        align-items: center;
        text-align: left;
        color: #FFFFFF;        
    }
    
    .aboutgame-content-image{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }    
    .shell-info{
        position: absolute;
        top: 460px;
        left: 40px;
    }
    .shell-info img{
        width: 220px;
    }
    .nftcard-info{
        position: absolute;
        bottom: 10px;
        right: 340px;
    }
    .nftcard-info img{
        width: 220px;
    }
    .synthetic-info{
        position: absolute;
        top: 280px;
        left: 20px;
    }
    .synthetic-info img{
        width: 161px;
    }
    .material-info{
        position: absolute;
        top: 390px;
        right: 80px;
        flex-wrap: wrap;
        width: 180px;
        display: flex;
        align-items: flex-start;
    }
    .material-info img{
        width: 52px;
        margin-top: 15px;
    }
    .completed-info{
        position: absolute;
        top: 40px;
        right: 10px;
    }
    .completed-info img{
        width: 220px;
    }
    .aboutgame-right-image{
        display: flex;
        align-items: flex-start;
        z-index: 1;
    }
    .aboutgame-right-image img{
        width: 52px;
        margin-top: 15px;
    }
    /* GETTING STARTED PART START */
    .titlepart-bignum{
        position: absolute;
        left: 5px;
        bottom: -48px;
    }
    .titlepart-bignum span{
        font-family: Airstrikeout;
        font-style:normal;
        font-weight:normal;
        font-size: 150px;
        line-height: 131px;
        display: flex;
        align-items: center;
        color: white;
        opacity: 0.7;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);            
    }
    .gettingstarted-onerow{
        margin-bottom: 100px;
    }
    .subtitle-gettingstarted-titlepart{
        position: relative;
        height: auto;
        width: 50vw;
    }        
    .subtitle-gettingstarted-titlepart.team-member {
        width: 70vw;
    }
    .gettingstarted-titlefont{
        position: relative;
        font-family: Airstrike;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);   
        z-index: 2;
    }
    .subtitle-gettingstarted-titlepart img{
        position: absolute;
        top: 12px;
        left: 0px;
    }
    .subtitle-description-body{
        margin-top: 50px;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        text-align: left;
        display: flex;
    }
    .subtitle-videopan1{
        display: flex;
        position: relative;
        height: 327px;
        width: 443px;
        margin-left: 100px;
        background-image: url('/assets/landing/gettingstarted/video1.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .subtitle-videopan2{
        display: flex;
        position: relative;
        height: 327px;
        width: 443px;
        margin-left: 100px;
        background-image: url('/assets/landing/gettingstarted/video2.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .video-start{
        position: absolute; 
        width: 34px; 
        bottom: calc(50%);  
        transform: translate(50%, 50%); 
        right: calc(50%);
        cursor: pointer;
    }
    .stakable-nfts{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .stakable-nfts-header{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        text-align: center;
        color: #FFFFFF;
        width: 100%;
    }
    .stakable-nfts-list{
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .stakable-nfts-oneitem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 23px;
    }
    .nft-image-info{
        width: 117px;
        height: auto;
        display: flex;
    }
    .nft-image-name{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: #FFFFFF;
        margin: auto;
        margin-top: 11px;
    }
    .nft-buy-box{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }        
    .nft-buy-icon{
        width: 16px;
        height: auto;
    }
    .nft-buy-name{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        text-transform: capitalize;
        color: #36FFC0;
        margin-left: 7px;
    }
    .nft-image-info-small{
        width: 48px;
        height: auto;
        display: flex;
    }
    .nft-image-name-small{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 28px;
        text-align: center;
        color: #FFFFFF;
        margin-left: 7px;
    }
    .arrownext-img{
    }
    .good-job-nanotopian{
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: auto;
    }
    .good-job-nanotopian img{
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .good-job-nanotopian span{
        font-family: Airstrike;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);   
        z-index: 2;
        margin-left: 60px;
        margin-top: -22px;
    }
    .good-job-description{
        margin-top: 50px;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        text-align: center;
        display: flex;
    }

    .button-style229{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        background-image: url('/assets/landing/button/button229.svg');
        background-repeat: no-repeat;
        width: 229px;
        height: 44px;
        cursor: pointer;
        min-width: 162px;
        margin-top: 20px;
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
    }
    .related-youtube-channel{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 120px;
    }
    .related-youtube-channel:before{
        content: "";
        position: absolute;
        left: -10%;
        top: -10%;
        background: radial-gradient(61.93% 50% at 50% 50%, #0E1743 0%, #3350D9 100%);
        opacity: 0.1;
        width: 120%;
        height: 140%;
        transform: matrix(1, 0, 0, -1, 0, 0);
    }   
    .animaArmor{
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 431px;
        height: auto;
    }
    .bottom-mask{
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 825px;
        background: #080F30;
    }
    /* GETTING STARTED PART END */
    /* ABOUT STARTED */
    .subtitle-about-body{
        margin-top: 50px;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        text-align: left;
        display: flex;
    }
    .partner-last-name{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 32px;
        color: #FFFFFF;
    }
    .partnership-sites{
        margin-top: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;            
    }
    .partnership-sites img {
        position: relative;
    }
    .partnership-sites .wap-img {
        width: 135px;
        margin-right: 6.5vw;
        cursor: pointer;
    }
    .partnership-sites .nfthive-img {
        width: 225px;
        margin-right: 4.6vw;
        cursor: pointer;
    }
    .partnership-sites .defibox-img {
        width: 226px;
        margin-right: 4.6vw;
        cursor: pointer;
    }
    .partnership-sites .wombat-img{
        width: 130px;
        cursor: pointer;
    }
    .team-container{
        position: relative;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    .team-individual-info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 188px;
        margin-top: 30px;
        margin-right: 12px;
        cursor: pointer;
    }
    .team-individual-info img{
        position: relative;
        width: 140px;
        height: auto;
        cursor: pointer;
    }
    .team-individual-text-bgfont{
        font-family: Airstrike;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;  
        margin-top: 31px;
        text-transform: uppercase;        
    }
    .team-individual-text-smallfont{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        color: #FFFFFF;
        margin-top: 6px;;
    }
    @media (max-width: 768px) {
        .banner-detail-adjust4 {
            margin-left: unset;
            left: 0;
            transform: unset;
        }
        .section-container {
            padding: 0;
        }
        .team-container {
            justify-content: space-around;
        }
        .subtitle-gettingstarted-titlepart {
            width: 100%;
        }
        .subtitle-gettingstarted-titlepart.team-member {
            width: 100%;
        }
        .section-container {
            width: 100%;
        }
    }

    @media (max-width: 400px) {
        .banner-detail-adjust2 {
            margin-left: -150px;
        }
        .banner-detail-adjust3 {
            margin-left: -180px;
        }
        .team-container {
            justify-content: space-around;
        }
        .team-individual-info {
            width: 49%;
            margin-left: 0;
            margin-right: 0;
        }
    }
/* ABOUT ENDED */
</style> 
