<script>
    import { page } from '$app/stores';
    import { getContext, onMount } from 'svelte';
    import { browser } from '$app/env';

    import { goto } from '$app/navigation';
    import { each } from 'svelte/internal';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    import LottieButton from 'src/components/landing/LottieButton.svelte';

    onMount(async () => {
        document.getElementById('loader').style.display = 'none';
        }
    );
 
</script>

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
    .section-banner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .section-container{
        display: flex;
        z-index: 1;
        margin: auto;
        margin-top: 160px;
        width: 100%;
        max-width: 1145px;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
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
        display: flex;
        position: relative;
        width: 100%;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 175px;
        padding: 0 20px;
        max-width: 1148px;
    }
    .gettingstarted-onerow:last-child {
        justify-content: center;
    }
    .gettingstarted-onerow.nfts {
        padding: unset;
        max-width: 938px;
    }
    .gettingstarted-onerow.nfts .stakable-nfts:last-child .stakable-nfts-oneitem {
        margin-right: 0;
    }
    .subtitle-paragraph{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 65%;
        z-index: 1;
    }
    .subtitle-gettingstarted-titlepart{
        position: relative;
        width: 100%;
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        margin-top: 60px;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        text-align: left;        
    }
    .for-nfts{
        flex-direction: unset;
    }
    .for-shell{
        flex-direction: unset;
    }
    .subtitle-description-body p {
        margin-bottom: 30px;       
        max-width: 600px; 
    }
    .for-nfts p {
        margin-bottom: 0px;
    }
    .subtitle-videopan1{
        display: flex;
        position: relative;
        height: 327px;
        width: 45%;
        background-image: url('/assets/landing/gettingstarted/video1.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .video-start{
        position: absolute; 
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    .stakable-nfts {
        display: flex;
    }
    .stakable-nfts:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .nfts .stakable-nfts:first-child {
        width: 80%;
    }
    .nfts .stakable-nfts:last-child {
        width: 20%;
        align-items: center;
        flex-direction: column;
    }
    .nfts .stakable-nfts:last-child .stakable-nfts-list{
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
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
    .stakable-nfts-oneitem {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nfts .stakable-nfts-oneitem {
        margin-right: 46px;
    }
    .stakable-nfts-oneitem .stakable-nfts-oneitem-top {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 104px;
        height: 139px;

    }
    .stakable-nfts-oneitem .stakable-nfts-oneitem-top .action-image {
        width: unset;
        height: unset;
    }

    .shellinium .stakable-nfts:first-child {
        width: 460px;
    }
    .shellinium .stakable-nfts:first-child .stakable-nfts-list:nth-child(2) {
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .shellinium .stakable-nfts:first-child .stakable-nfts-list:last-child {
        justify-content: space-around;
    }
    .gettingstarted-onerow.shellinium .subtitle-paragraph {
        width: 100%;
    }

    .nft-image-name {
        font-size: 12px;
    }
    .nft-buy-name {
        font-size: 10px !important;
        white-space: nowrap !important;
    }
    .stakable-nfts-header {
        font-size: 12px !important;
        white-space: nowrap;
    }
    .nft-image-info{
        width: 117px;
        height: auto;
        display: flex;
    }
    .action-image{
        width: 95px;
        height: 136px;
    }
    .diorma{
        width: 77px;
        width: 109px;
    }
    .lore-tablet{
        width: 95px;
        height: 142px;
    }
    .lore-coin{
        width: 101px;
        height: 103px;
    }
    .figure3d{
        width: 104px;
        height: 139px;
    }
    .flashdrives{
        width: 120px;
        height: 122px;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 3vw;
        margin-right: 3vw;
        margin-top: -50px;
    }
    .arrownext-img p{
        font-family: 'Forza';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 28px;
        text-align: center;
        color: #FFFFFF;
    }
    .arrownext-img img{
        margin-top: -25px;
    }
    .good-job-nanotopian{
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: auto;
        margin-left: -70px;
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
        font-size: 23px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);   
        z-index: 2;
        margin-left: 60px;
        margin-top: -22px;
        white-space: nowrap;
    }
    .good-job-description{
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
        bottom: -50px;
        left: -80px;
        width: 400px;
        height: auto;
    }
    .mobile-case-flashdrive{
        display: none;
    }
     @media (max-width: 1024px) {
        .subtitle-description-body{
            justify-content: center;
        }
        .stakable-nfts{
            width: 100%;
        }
        .gettingstarted-onerow{
            margin-bottom: 100px;
        }
        .nfts .stakable-nfts-oneitem{
            margin-right: 23px;
            margin-left: 23px;
        }
        .nfts .stakable-nfts:first-child {
            width: 100%;
        }
        .gettingstarted-onerow {
            flex-direction: column;
        }
        .stakable-nfts-list {
            flex-wrap: wrap;
        }
        .stakable-nfts-oneitem {
            margin-bottom: 20px;
        }
        .subtitle-paragraph {
            width: 100%;
            margin-bottom: 20px;
            order: 2;
        }
        .mobile-case-flashdrive{
            display: block;
        }
        .right-part{
            display : none;
        }
        .animaArmor{
            left: -200px;
        }
        .subtitle-videopan1 {
            width: 100%;
            margin-top: 80px;
        }
        .gettingstarted-onerow.shellinium {
            padding: 0px;
        }
        .subtitle-description-body.shellinium {
            flex-direction: column;
        }
        .shellinium .stakable-nfts-list {
            width: 100%;
            margin: auto;
        }
        .shellinium .stakable-nfts {
            flex-direction: column;
            width: 100%;
            margin: auto;
        }
        .shellinium .stakable-nfts:last-child {
            width: 100%;
            margin: auto;
        }

        .shellinium .action-image{
            width: 72px;
            height: 102px;
        }
        .shellinium .diorma{
            width: 79px;
            width: 109px;
        }
        .shellinium .lore-tablet{
            width: 75px;
            height: 112px;
        }
        .shellinium .lore-coin{
            width: 80px;
            height: 81px;
        }
        .shellinium .figure3d{
            width: 78px;
            height: 105px;
        }
        .shellinium .stakable-nfts:first-child {
            width: 342px;
        }            
        .arrownext-img {
            margin: auto;            
            margin-top: 5vw;
            margin-bottom: 5vw;
        }
        .arrownext-img img{
            transform: rotate(90deg);
        }

        /* .animaArmor {
            display: none;
        } */

        .arrownext-img img{
            margin-top: 0px;
        }

        .related-youtube-channel{
            padding: 0 20px;
        }
        .related-youtube-channel:before{
            position: absolute;
            left: 0%;
            top: 0%;
            width: 100%;
            height: 140%;
        }
        .bottom-mask{
            position: absolute;
            content: "";
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: #080F30;
            /* background-size: cover;
            background-repeat: no-repeat;
            background-position: center; */
        }   

    }

  
    /* GETTING STARTED PART END */
</style> 
<div class="bg-wrapper">
    <section class="landing-section">
        <!-- <div class="bottom-mask">
        </div> -->
        <div class="section-banner">
            <LottiePlayer
                src="/assets/landing/lottie/getting_started.json"
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
                <span class="gettingstarted-titlefont">SETTING UP A WAX WALLET</span>
                <img src="/assets/landing/common/subtitlesel-gettingstarted427.svg" alt=""/>
                <div class="titlepart-bignum">
                    <span>1</span>
                </div>
            </div>
            <div class="gettingstarted-onerow">
                <div class="subtitle-paragraph">
                    <div class="subtitle-description-body" style="margin-top: 60px">
                        <p>Green Rabbit is played on the WAX blockchain and therefore you will need to set up a WAX wallet at <a href="https://wallet.wax.io/" target="_blank" rel="noreferrer" ><span style="color: #36FFC0">wallet.wax.io.</span></a></p>
                        <p>Once you have your wallet set up, go to www.play.greenrabbitgame.io and start your journey.</p>
                        <p>Watch our quick tutorial video to find all the information you need.</p>
                    </div>
                </div>
                <div class="subtitle-videopan1">
                    <img src="/assets/landing/readytorule/seltop.svg" style="position: absolute; top: -10px; left: -10px;" alt=""/>
                    <img src="/assets/landing/readytorule/selbottom.svg" style="position: absolute; bottom: -10px; right: -10px;" alt=""/>
                    <!-- <img class="video-start" src="/assets/landing/readytorule/videostart.png" alt=""/> -->
                    <iframe class="video-start" src="https://www.youtube.com/embed/uyhKEfF0pMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="subtitle-gettingstarted-titlepart" >
                <span class="gettingstarted-titlefont">GETTING YOU FIRST NFTS</span>
                <img src="/assets/landing/common/subtitlesel-gettingstarted427.svg" alt=""/>
                <div class="titlepart-bignum">
                    <span>2</span>
                </div>
            </div>                
            <div class="gettingstarted-onerow">
                <div class="subtitle-paragraph">
                    <div class="subtitle-description-body" data-aos="fade-up" data-aos-duration="3000">
                        <p>To earn Shellinium and play Green Rabbit Game you will need to acquire stakeable NFT’s, as well as a Flash Drive NFT.</p>
                        <p>Vist <a href="https://nfthive.io/market?collection=greenrabbit&order_by=date_desc&search_type=sales&offer_type=sales" target="_blank" rel="noreferrer" ><span style="color: #36FFC0">NFTHive</span></a> to acquire a Flash Drive and Stakeable NFTs from the marketplace.</p>
                        <!-- <p>Once the Stakeable NFTs are inside the Flash Drive you will start genereting Shellinium, the main in-game token that will be used across the whole game with various utilities.</p>
                        <p>You can see how to stake NFTs in detail in the following video.</p> -->
                    </div>
                </div>
                <!-- <div class="subtitle-videopan1" data-aos="fade-up" data-aos-duration="3000"> -->
                    <!-- <img src="/assets/landing/readytorule/seltop.svg" style="position: absolute; top: -10px; left: -10px;" alt=""/>
                    <img src="/assets/landing/readytorule/selbottom.svg" style="position: absolute; bottom: -10px; right: -10px;" alt=""/> -->
                    <!-- <img class="video-start" src="/assets/landing/readytorule/videostart.png" alt=""/> -->
                    <!-- <iframe class="video-start" src="https://www.youtube.com/embed/Zc69e-qmKY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                    <!-- </div> -->
            </div>    
            <div class="subtitle-gettingstarted-titlepart" data-aos="fade-up" data-aos-duration="2000">
                <span class="gettingstarted-titlefont">HOW TO GET NFTS?</span>
                <img src="/assets/landing/common/subtitlesel-gettingstarted157.svg" alt=""/>
            </div>
            <div class="gettingstarted-onerow nfts">
                <!-- <div class="subtitle-paragraph"> -->
                    <div class="subtitle-description-body for-nfts" data-aos="fade-right" data-aos-duration="3000" >
                            <div class="stakable-nfts">
                                <p class="stakable-nfts-header" >Stakeable NFTs</p>
                                <div class="stakable-nfts-list" >
                                    <div class="stakable-nfts-oneitem" >
                                        <div class="stakable-nfts-oneitem-top">
                                            <img class="nft-image-info action-image" src="/assets/landing/gettingstarted/action.png" alt="">
                                        </div>
                                        <div class="stakable-nfts-oneitem-bottom">
                                            <p class="nft-image-name">Action image</p>
                                            <div class="nft-buy-box">
                                                <img class="nft-buy-icon" src="/assets/landing/gettingstarted/buynft.svg" alt="" >
                                                <a target="_blank" href="https://nfthive.io/market?collection=greenrabbit&order_by=date_desc&search_type=sales&offer_type=sales&category=characters&chests=&variant=Action"><p class="nft-buy-name">Buy NFT</p></a>
                                            </div>    
                                        </div>
                                    </div>
                                    <div class="stakable-nfts-oneitem">
                                        <div class="stakable-nfts-oneitem-top">
                                            <img class="nft-image-info diorma" src="/assets/landing/gettingstarted/diorma.png" alt="">
                                        </div>
                                        <div class="stakable-nfts-oneitem-bottom">
                                            <p class="nft-image-name">Diorama</p>
                                            <div class="nft-buy-box">
                                                <img class="nft-buy-icon" src="/assets/landing/gettingstarted/buynft.svg" alt="" >
                                                <a target="_blank" href="https://nfthive.io/market?collection=greenrabbit&order_by=date_desc&search_type=sales&offer_type=sales&category=characters&chests=&variant=Diorama"><p class="nft-buy-name">Buy NFT</p></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stakable-nfts-oneitem">
                                        <div class="stakable-nfts-oneitem-top">
                                            <img class="nft-image-info lore-tablet" src="/assets/landing/gettingstarted/loretablet.png" alt="">
                                        </div>
                                        <div class="stakable-nfts-oneitem-bottom">
                                            <p class="nft-image-name">Lore Token</p>
                                            <div class="nft-buy-box">
                                                <img class="nft-buy-icon" src="/assets/landing/gettingstarted/buynft.svg" alt="" >
                                                <a target="_blank" href="https://nfthive.io/market?collection=greenrabbit&order_by=date_desc&search_type=sales&offer_type=sales&category=totems&chests=&variant=Lore%20Tablet"><p class="nft-buy-name">Buy NFT</p></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stakable-nfts-oneitem">
                                        <div class="stakable-nfts-oneitem-top">
                                            <img class="nft-image-info lore-coin" src="/assets/landing/gettingstarted/coin.png" alt="">
                                        </div>
                                        <div class="stakable-nfts-oneitem-bottom">
                                            <p class="nft-image-name">Lore Coin</p>
                                            <div class="nft-buy-box">
                                                <img class="nft-buy-icon" src="/assets/landing/gettingstarted/buynft.svg" alt="" >
                                                <a target="_blank" href="https://nfthive.io/market?collection=greenrabbit&order_by=date_desc&search_type=sales&offer_type=sales&category=totems&chests=&variant=Coin"><p class="nft-buy-name">Buy NFT</p></a>
                                            </div>    
                                        </div>
                                    </div>                                        
                                    <div class="stakable-nfts-oneitem">
                                        <div class="stakable-nfts-oneitem-top">
                                            <img class="nft-image-info figure3d" src="/assets/landing/gettingstarted/3dfigure.png" alt="">
                                        </div>
                                        <div class="stakable-nfts-oneitem-bottom">
                                            <p class="nft-image-name">3D Figure</p>
                                            <div class="nft-buy-box">
                                                <img class="nft-buy-icon" src="/assets/landing/gettingstarted/buynft.svg" alt="" >
                                                <a target="_blank" href="https://nfthive.io/market?collection=greenrabbit&order_by=date_desc&search_type=sales&offer_type=sales&category=characters&chests=&variant=Figure"><p class="nft-buy-name">Buy NFT</p></a>
                                            </div>
                                        </div>
                                    </div>                                                                         

                                    <div class="stakable-nfts-oneitem mobile-case-flashdrive">
                                        <div class="stakable-nfts-oneitem-top">
                                            <img class="nft-image-info flashdrives" src="/assets/landing/gettingstarted/flashdrive.png" alt="">
                                        </div>
                                        <div class="stakable-nfts-oneitem-bottom">
                                            <p class="nft-image-name">Flash Drive</p>
                                            <div class="nft-buy-box">
                                                <img class="nft-buy-icon" src="/assets/landing/gettingstarted/buynft.svg" alt="" >
                                                <a target="_blank" href="https://nfthive.io/market?collection=greenrabbit&order_by=date_desc&search_type=sales&offer_type=sales&category=flashdrive&chests="><p class="nft-buy-name">Buy NFT</p></a>
                                            </div>
                                        </div>
                                    </div>   
                                </div>                                
                            </div>
                            <div class="stakable-nfts right-part" data-aos="fade-right" data-aos-duration="3000">
                                <p class="stakable-nfts-header">Flash Drive</p>
                                <div class="stakable-nfts-list" style="margin-top: 12px">
                                    <div class="stakable-nfts-oneitem">
                                        <img class="nft-image-info flashdrives" src="/assets/landing/gettingstarted/flashdrive.png"  alt="">
                                        <p class="nft-image-name">Flash Drive</p>
                                        <div class="nft-buy-box">
                                            <img class="nft-buy-icon" src="/assets/landing/gettingstarted/buynft.svg" alt="" >
                                            <a target="_blank" href="https://nfthive.io/market?collection=greenrabbit&order_by=date_desc&search_type=sales&offer_type=sales&category=flashdrive&chests="><p class="nft-buy-name">Buy NFT</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                <!-- </div> -->
            </div>                                
            <div class="subtitle-gettingstarted-titlepart" data-aos="fade-up" data-aos-duration="2000">
                <span class="gettingstarted-titlefont">STAKING NFTS</span>
                <img src="/assets/landing/common/subtitlesel-gettingstarted427.svg" alt=""/>
                <div class="titlepart-bignum">
                    <span>3</span>
                </div>
            </div>
            <div class="gettingstarted-onerow">
                <div class="subtitle-paragraph" data-aos="fade-up" data-aos-duration="3000">
                    <div class="subtitle-description-body">
                        <p>Once you have the required NFT’s in your WAX wallet, load your stakeable NFTs onto a Green Rabbit Flash Drive and you will start generating Shellinium!</p>
                        <p>Learn how to use the Green Rabbit NFT staking system in detail in the following video.</p>
                    </div>
                </div>
                <div class="subtitle-videopan1" data-aos="fade-up" data-aos-duration="3000">
                    <img src="/assets/landing/readytorule/seltop.svg" style="position: absolute; top: -10px; left: -10px;" alt=""/>
                    <img src="/assets/landing/readytorule/selbottom.svg" style="position: absolute; bottom: -10px; right: -10px;" alt=""/>
                    <iframe class="video-start" src="https://www.youtube.com/embed/Zc69e-qmKY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <!-- <img class="video-start" src="/assets/landing/readytorule/videostart.png" alt=""/> -->
                    </div>
            </div>                    
            <div class="subtitle-gettingstarted-titlepart" data-aos="fade-up" data-aos-duration="2000">
                <span class="gettingstarted-titlefont">HOW TO GET SHELLINIUM?</span>
                <img src="/assets/landing/common/subtitlesel-gettingstarted157.svg" alt=""/>
            </div>
            <div class="gettingstarted-onerow shellinium">
                <div class="subtitle-paragraph">
                    <div class="subtitle-description-body shellinium for-shell" data-aos="fade-up" data-aos-duration="3000">
                            <div class="stakable-nfts">
                                <div class="stakable-nfts-oneitem">
                                    <img class="nft-image-info-small diorma" src="/assets/landing/gettingstarted/diorma.png" alt="">
                                    <p class="nft-image-name-small">Diorama</p>
                                </div>
                                <div class="stakable-nfts-list">
                                    <div class="stakable-nfts-oneitem">
                                        <img class="nft-image-info-small action-image" src="/assets/landing/gettingstarted/action.png" alt="">
                                        <p class="nft-image-name-small">Action image</p>
                                    </div>
                                    <p style="text-align: center">
                                        Stakeable<br>
                                        NFTs
                                    </p>
                                    <div class="stakable-nfts-oneitem">
                                        <img class="nft-image-info-small lore-coin" src="/assets/landing/gettingstarted/coin.png" alt="">
                                        <p class="nft-image-name-small">Lore Coin</p>
                                    </div>                                     
                                </div>
                                <div class="stakable-nfts-list">
                                    <div class="stakable-nfts-oneitem">
                                        <img class="nft-image-info-small lore-tablet" src="/assets/landing/gettingstarted/loretablet.png" alt="">
                                        <p class="nft-image-name-small">Lore Tablet</p>
                                    </div>

                                    <div class="stakable-nfts-oneitem">
                                        <img class="nft-image-info-small figure3d" src="/assets/landing/gettingstarted/3dfigure.png" alt="">
                                        <p class="nft-image-name-small">3D Figure</p>
                                    </div>                                                                         
                                </div>                                    
                            </div>
                            <div class="arrownext-img">
                                <p>Stake on</p>
                                <img src="/assets/landing/gettingstarted/arrownext.svg" alt="">
                            </div>                            
                            <div class="stakable-nfts">
                                <div class="stakable-nfts-list" style="margin-top: 13px">
                                    <div class="stakable-nfts-oneitem">
                                        <img class="nft-image-info-small" src="/assets/landing/gettingstarted/flashdrive.png" style="width: 120px; height: auto;" alt="">
                                        <p class="nft-image-name-small">Flash Drive</p>
                                    </div>
                                </div>
                            </div>
                            <div class="arrownext-img">
                                <p>Produce</p>
                                <img class="arrownext-img" src="/assets/landing/gettingstarted/arrownext.svg" alt="">
                            </div>
                            <div class="stakable-nfts">
                                <div class="stakable-nfts-list">
                                    <div class="stakable-nfts-oneitem">
                                        <img class="nft-image-info-small" src="/assets/landing/gettingstarted/shellsex.png" style="width: 167px;" alt="">
                                        <p class="nft-image-name-small" style="margin-left: -5px; ">Shellinium</p>
                                    </div>
                                </div>
                            </div>                                
                    </div>
                </div>
                
            </div>                         
            <div class="gettingstarted-onerow">
                <img class="animaArmor" src="/assets/landing/gettingstarted/goldenrabbit.png" alt="" data-aos="fade-right" data-aos-duration="1000">
                <div class="subtitle-paragraph" data-aos="fade-up" data-aos-duration="2000">
                    <div class="good-job-nanotopian" >
                        <img src="/assets/landing/common/subtitlesel-goodjob2.svg" alt=""/>
                        <img src="/assets/landing/common/subtitlesel-goodjob1.svg" style="top: -12px; left: 19px" alt=""/>
                        <img src="/assets/landing/common/subtitlesel-gettingstarted427.svg" style="top: -3px; left: 100px" alt=""/>
                        <span>Good JOB NANOTOPIAN!</span>
                    </div>
                    <div class="good-job-description" >
                        Now you have your wax wallet, Green Rabbit NFTs and you’re generating Shellinium!<br>
                        <br><br>
                        It’s time to progress to other stages of the game, create create Greenprints,<br>
                        assemble your team of Foragers, craft an Anima Armour and so much more!
                    </div>
                    <div class="good-job-description" >
                        Full Gameplay guide awaits you here

                    </div>  
                    <LottieButton
                        onclick={()=>{
                            window.open("https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay", "_blank");
                        }}
                        buttonStyle="button-style229"
                        name="FULL GAMEPLAY"
                    />
                    <div class="related-youtube-channel">
                        <div class="good-job-description" >
                            Don’t forget to visit the Official Green Rabbit Youtube channel where you can find Tutorials,<br>
                            Lore videos, latest news from Nanotopia and much more!
                        </div> 
                        <LottieButton                        
                            buttonStyle="button-style229"
                            name="YOUTUBE CHANNEL"
                            onclick={()=>{
                                window.open("https://www.youtube.com/c/NanotopiaTv", "_blank");
                            }}
                        />                        
                    </div>
                </div>
                
            </div>    
            <!-- subtitlesel-aboutgreenrabbit.svg -->
        </div>   
    </section>    
</div>

