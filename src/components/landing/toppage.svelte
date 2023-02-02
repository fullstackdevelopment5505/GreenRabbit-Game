<script>
	import { goto } from '$app/navigation';
    import { getContext, onMount } from 'svelte';
    import Accordion from './Accordion.svelte';
    import MobileAccordion from './MobileAccordion.svelte';
    import LandingCarousel from '/src/components/landing/LandingCarousel.svelte';
	import { SplideSlide } from '@splidejs/svelte-splide';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    import LottieButton from 'src/components/landing/LottieButton.svelte';
    import OverviewCarousel from 'src/components/landing/OverviewCarousel.svelte';
    import {teamItem} from './rawData/TeamMembers.svelte';
    import TeamDetail from 'src/components/landing/TeamDetail.svelte';
    const { open, close } = getContext('simple-modal');

    import {
		isBackRequired
	} from 'src/stores/store.js';

    export let isLoading = true;
	let innerWidth;
    let innerHeight;
    let lottieInstance = {};
    let lottieright = {};
    // Hint effect     https://blog.hubspot.com/website/css-hover-animation
    let currentSectionName = "";

    const showCollapse = i => {
        i === show ? (show = show) : (show = i);
        showRightLottieImage();
        PlayLottieRightPart();
	};

    async function onCancel() {
		close();
	}

    function OpenTeamDetail(nIndex){
        setTimeout(async () => {
            open(
                TeamDetail,
                { onCancel, nIndex},
                {
                    styleWindow:
                        innerWidth > 768
                        ?
                        {
                            width: '709px',
                            height: '364px',
                            border: 'none',
                            background: 'none'
                        }
                        : {
                            width: '384px',
                            height: '458px',
                            border: 'none',
                            background: 'none'
                        }
                    ,
                    styleContent: {
                        padding: 0
                    },
                    styleCloseButton:
                        innerWidth > 768
                            ? {
                                top: '20px',
                                right: '28px',
                                width: '24px',
                                height: '24px'
                                }
                            : {
                                top: '15px',
                                right: '19px',
                                width: '24px',
                                height: '24px'
                                }
                }
            );
        });           
    }

    function PlayLottieRightPart(){
        if (show == 0){
            lottieright.flashdrives.stop();
            lottieright.flashdrives.play();
        }
    }

    let show = 0;
	const items = [
		{
            key: '1',
			title: 'Stake NFTs to Get Shellinium!',
			text: 'Stake NFTs on a Green Rabbit Flash Drive and claim the Green Rabbit in-game token - Shellinium!'
		},
		{
            key: '2',
			title: 'Forage for materials!',
			text: 'Assemble your team of Foragers, send them on missions and collect valuable materials which will be used for crafting your Anima Armors, upgrades, repairs and more!'
		},
        {
			key: '3',
			title: 'Craft and assemble youR Anima Armour!',
			text: 'Once you have all the materials and resources, it’s time to first craft all the components of the Armor and then to fuse them into your own Anima Armor! Use it to explore the metaverse, race in the “Ultra Anima” races or participate in future Green Rabbit 3D games.'
		},
        {
			key: '4',
			title: 'Race IN UNIQUE 3d RACES!',
			text: 'Participate in unique parkour style 3D races: run through varying landscapes, conquer obstacles, apply the right strategy based on your Anima Armor characteristics and become a legend on Nanotopia!'
		},        
        {
			key: '5',
			title: 'Hang out in the Metaverse!',
			text: 'Enter the Green Rabbit metaverse social hub, Become part of the community, meet new people, discuss game strategies and more. Test your Anima Armor by competing in various mini-games and discovering hidden places inside the metaverse!'
		},        
        {
			key: '6',
			title: 'Own Land and Property in Nanotopia!',
			text: 'Own your own piece of Nanotopia in the 2D web game and collect fees every time a Forager uses your land to collect resources. Upgrade and maintain the land to make it more attractive for foragers and receive a higher yield!  <br><br>Digital property ownership isn\'t exclusive to our 2D game. We will also offer Nanotopians a chance to own a part of the 3D metaverse we are building.<br><br>In the 3D metaverse you will be able to purchase and own exclusive properties, customize them to your liking and showcase your Armors!'
		}
	];
   
    let colCount = 4;
    $: {
        if (innerWidth < 768){
            colCount = 1;
        }else if (innerWidth < 1024){
            colCount = 2;
        }else if (innerWidth < 1280){
            colCount = 3;
        }else{
            colCount = 4;
        }
    }
    const roadmap_data = [{
            num : 1,
            checked: true,
            tick: true,
            title: "Green Rabbit Staking",
            completed: true
        },
        {
            num : 2,
            checked: true,
            tick: true,
            title: "Greenprint Crafting",
            completed: true
        },
        {
            num : 3,
            checked: true,
            tick: true,
            title: "Leaderboards",
            completed: true
        },
        {
            num : 4,
            checked: true,
            tick: true,
            title: "Greenprint Fusion",
            completed: true
        },        
        {
            num : 5,
            checked: true,
            tick: true,
            title: "Greenprint Boosting",
            completed: true
        },        
        {
            num : 6,
            checked: true,
            tick: true,
            title: "Ascendant Orb Fusion",
            completed: true
        },                
        {
            num : 7,
            checked: true,
            tick: true,
            title: "Loza Partner Staking",
            completed: true
        },                
        {
            num : 8,
            checked: true,
            tick: true,
            title: "Materials Foraging",
            completed: true
        },                        
        {
            num : 9,
            checked: true,
            tick: true,
            title: "2D Unity Mini Game",
            completed: true
        },                                
        {
            num : 10,
            checked: true,
            tick: true,
            title: "Dashboard",
            completed: true
        },                   
        {
            num : 11,
            checked: true,
            tick: true,
            title: "Armor Component<br>Crafting",
            completed: true
        },                                            
        {
            num : 12,
            checked: true,
            tick: true,
            title: "Ultra Anima races",
            completed: true
        },                
        {
            num : 13,
            checked: true,
            tick: true,
            title: "Armor Fusion",
            completed: true
        },                       
        {
            num : 14,
            checked: false,
            tick: false,
            title: "3D Apartment<br>Offering",
            completed: false
        },                                                             
        {
            num : 15,
            checked: false,
            tick: false,
            title: "Ultra anima<br>tournaments",
            completed: false
        },                             
        {
            num : 16,
            checked: false,
            tick: false,
            title: "3D Social HUB",
            completed: false
        },                               
        {
            num : 17,
            checked: false,
            tick: false,
            title: "Series 2<br>missions",
            completed: false
        },                               
        {
            num : 18,
            checked: false,
            tick: false,
            title: "Land offering",
            completed: false
        },                                       
    ];
    const resetCurrentActiveIndicator = () => {
        const activeIndicator = document.getElementsByClassName("indicator");
        for (var i = 0; i < activeIndicator.length; i++)
            activeIndicator[i].setAttribute("style", "background-color: #4652B6;");        
    };


    function roadmapAnimate(){
        let roadmapRows = document.getElementsByClassName('roadmap-row');
        let proceedlines = document.getElementsByClassName('roadmap-proceed-line');
        let todolines = document.getElementsByClassName('roadmap-todo-line');
        let proceedoneline = document.getElementsByClassName('roadmap-proceed-oneline');
        let todooneline = document.getElementsByClassName('roadmap-todo-oneline');
        let roadmapContents = document.getElementsByClassName('roadmap-content');
        
        const elementList = [];
        let proceedOffset = 0;
        let todoOffset = 0;

        if (colCount > 1){
            for (let i = 0; i < roadmap_data.length; i++){
                if (i % colCount == 0){
                    elementList.push(roadmapRows[i / colCount]);
                }
                if (roadmap_data[i].checked){
                    elementList.push(proceedlines[proceedOffset]);
                    proceedOffset++;
                }else{
                    elementList.push(todolines[todoOffset]);
                    todoOffset++;
                }
            }
        }else{
            for (let i = 0; i < roadmapContents.length; i++){
                elementList.push(roadmapContents[i]);
            }

            for (let i = 0; i < proceedoneline.length; i++){
                elementList.push(proceedoneline[i]);
            }

            for (let i = 0; i < todooneline.length; i++){
                elementList.push(todooneline[i]);
            }
        }
        
        for (let i = 0; i < elementList.length; i++){
            elementList[i].setAttribute("style", "display: none");
        }
        for (let i = 0; i < elementList.length; i++){
            setTimeout(() => {
                elementList[i].setAttribute("style", "display: flex");
            }, 100 * i);
        }
    }
    
    function showRightLottieImage(){
        let rightLottie = document.getElementsByClassName("overview-content-right-lottie");
        for (let i = 0; i < rightLottie.length; i++){
            rightLottie[i].setAttribute("style", "display: none");
        }
        if (show < rightLottie.length)
            rightLottie[show].setAttribute("style", "display: flex");
        return show;
    }

    let prevPageName = 'badge';

    const onSectionLeavesViewport = (section) => {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                resetCurrentActiveIndicator();

            const element = entry.target;
            currentSectionName = element.id;
            const indicator = document.querySelector(`a[href='#${element.id}']`);
            if (element.id == "badge"){
                prevPageName = "badge";
                $isBackRequired = false;
            }
            if (element.id == "aboutthegame"){
                if (prevPageName == "badge"){
                    $isBackRequired = false;
                }
                else{
                    $isBackRequired = true;
                }

                prevPageName = "aboutthegame";
                lottieInstance.aboutthegame.stop();
                lottieInstance.aboutthegame.play();

                lottieInstance.promoteprocess.stop();
                lottieInstance.promoteprocess.play();
            }else if (element.id == "overview"){
                $isBackRequired = false;
                prevPageName = "overview";
                lottieInstance.overview.stop();
                lottieInstance.overview.play();
                showRightLottieImage();
                PlayLottieRightPart();
            }else if (element.id == "aboutgreenrabbit"){
                $isBackRequired = true;
                prevPageName = "aboutgreenrabbit";
                lottieInstance.aboutgreenrabbit.stop();
                lottieInstance.aboutgreenrabbit.play();
            }else if (element.id == "roadmap"){
                $isBackRequired = true;
                if (prevPageName != "readynanotopia"){
                    roadmapAnimate();
                }

                prevPageName = "roadmap";
                lottieInstance.roadmap.stop();
                lottieInstance.roadmap.play();                
            }else if (element.id == "readynanotopia"){
                $isBackRequired = false;
                prevPageName = "readynanotopia";
                lottieInstance.readynanotopia.stop();
                lottieInstance.readynanotopia.play();
            }
            }
        });
        },
        {
        root: null,
        rootMargin: "0px",
        threshold: 0.001
        }
    );
    observer.observe(section);
    };

    let bFirst = true;
     onMount(async () => {
        const sections = document.querySelectorAll("section");

        console.log("ononon");
        sections.forEach(onSectionLeavesViewport);

        isLoading = true;
        document.getElementById('loader').style.display = 'flex';
        setTimeout(() => {
			isLoading = false;
			document.getElementById('loader').style.display = 'none';
            bFirst  = false;
		}, 1000* 3);

        });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="bg-wrapper" id="luxy">
    <section class="landing-genesis" id="genesis">
        <!-- <img src='/assets/landing/estatePresent.png' alt=""/> -->
    </section>
    <section class="landing-badge" id="badge">        
        <video
            class="video-player"            
            autoplay
            muted
            loop playsinline
            preload="true"
        >
            <source src="/assets/landing/bg_video.webm" type="video/webm">
            <source src="/assets/landing/bg_video.mp4" type="video/mp4">
            <track kind="captions"/>
        </video>
        <div class="jumping-rabbit">
            {#if bFirst}
            <div class="covered-animations"
                class:move-fromrtopright-rabbit-delayed={bFirst}             
            >
                <div class="landing-rabbit" >
                    <img class="slipping-rabbit" src="/assets/landing/toppage/landingrabbit.png" alt="">
                </div>
            </div>
            
            <div class="covered-animations"
                class:move-fromrtopright1-delayed={bFirst}
            >
                    <img class="bluestripepe1" src="/assets/landing/toppage/bluestrippe1.png" alt="">
            </div>
            
            <div class="covered-animations"
                class:move-fromrtopright2-delayed={bFirst}
            >
                <img class="bluestripepe2" src="/assets/landing/toppage/bluestrippe2.png" alt="">
            </div>
            <div class="covered-animations"
                class:move-fromrtopright3-delayed={bFirst}
            >        
                <img class="bluestripepe3" src="/assets/landing/toppage/bluestrippe3.png" alt="">
            </div>
            <div class="covered-animations"
                class:move-fromrtopright4-delayed={bFirst}
            >
                    <img class="greenstrippe1" src="/assets/landing/toppage/greenstrippe1.png" alt="">
            </div>
            <div class="covered-animations"
                class:move-fromrtopright5-delayed={bFirst}
            >        
                <img class="greenstrippe2" src="/assets/landing/toppage/greenstrippe2.png" alt="">
            </div>
            <div class="covered-animations"
                class:move-fromrtopright6-delayed={bFirst}
            >         
                <img class="greenstrippe3" src="/assets/landing/toppage/greenstrippe3.png" alt="">
            </div>
            {:else}
            <div class="covered-animations"
                class:move-fromrtopright-rabbit={prevPageName == "badge" || prevPageName == "aboutthegame"}
                
            >
                <div class="landing-rabbit" >
                    <img class="slipping-rabbit" src="/assets/landing/toppage/landingrabbit.png" alt="">
                </div>
            </div>
            
            <div class="covered-animations"
                class:move-fromrtopright1={prevPageName == "badge" || prevPageName == "aboutthegame"}
            >
                    <img class="bluestripepe1" src="/assets/landing/toppage/bluestrippe1.png" alt="">
            </div>
            
            <div class="covered-animations"
                class:move-fromrtopright2={prevPageName == "badge" || prevPageName == "aboutthegame"}
            >
                <img class="bluestripepe2" src="/assets/landing/toppage/bluestrippe2.png" alt="">
            </div>
            <div class="covered-animations"
                class:move-fromrtopright3={prevPageName == "badge" || prevPageName == "aboutthegame"}
            >        
                <img class="bluestripepe3" src="/assets/landing/toppage/bluestrippe3.png" alt="">
            </div>
            <div class="covered-animations"
                class:move-fromrtopright4={prevPageName == "badge" || prevPageName == "aboutthegame"}
            >
                    <img class="greenstrippe1" src="/assets/landing/toppage/greenstrippe1.png" alt="">
            </div>
            <div class="covered-animations"
                class:move-fromrtopright5={prevPageName == "badge" || prevPageName == "aboutthegame"}
            >        
                <img class="greenstrippe2" src="/assets/landing/toppage/greenstrippe2.png" alt="">
            </div>
            <div class="covered-animations"
                class:move-fromrtopright6={prevPageName == "badge" || prevPageName == "aboutthegame"}
            >         
                <img class="greenstrippe3" src="/assets/landing/toppage/greenstrippe3.png" alt="">
            </div>        
            {/if}
      </div>

        <!-- {/if} -->
        <!-- <iframe class="video-player" src="https://www.youtube.com/embed/mZHJseHd2Rc?rel=0&autoplay=1&mute=1&controls=0&loop=1&playlist=mZHJseHd2Rc" frameborder="0" allow="autoplay" allowfullscreen></iframe> -->
        <div class="badge-texts" >
            <span class="trial-text1" data-aos="fade-right" data-aos-duration="2000" >PLAY, STAKE & EARN</span>
            <span class="trial-text2" data-aos="fade-right" data-aos-duration="2000">MULTI-ACTIVITY METAVERSE!</span>
            <span class="trial-text3" data-aos="fade-right" data-aos-duration="2000">PLAY AND SAVE NANOTOPIA!</span>
        </div>
    </section>
    <section class="landing-section aboutthegame-section" id="aboutthegame">
        <div class="back-hex-mask-diamond"></div>
        <div class="section-banner" style="margin-top: 50px">
            <LottiePlayer
                bind:this={lottieInstance.aboutthegame}
                style="margin-top: {innerWidth > 768 ? '100px' : '80px'}
                    max-width: 1500px;
                "
                src="/assets/landing/lottie/About_the_game.json"
                speed="1"
                autoplay="{true}"
                loop="{false}"
                controls="{false}"
                renderer="svg"
                background="transparent"
                height="{80}"
                width="{innerWidth > 768 ? 1500 : 900}"
             />
        </div>
        <div class="section-container">
            <div class="aboutgame-container">
                <div>
                    <div class="aboutgame-content-text1" data-aos="fade-up" data-aos-duration="3000">
                        <img src="/assets/landing/common/subtitlesel.svg" alt=""/>
                        The world of Nanotopia is home to an advanced, utopian society.  Its citizens are immersed in the beautiful cities and diverse landscapes, through exciting competitions and activities. At the top of this list are the prestigious Ultra Anima Races!  <br>
                        <br>
                        Craft your own Anima Armor and become a legend of Nanotopia!
                    </div>
                    <div class="aboutgame-content-text1 adjust-next-paragraph" data-aos="fade-up" data-aos-duration="3000">
                        <img src="/assets/landing/common/subtitlesel.svg" alt=""/>
                        But wait, using a secret time machine, an evil force arrives from the future. Determined to save themselves by conquering Nanotopia and harnessing the power of its people and resources. <br>
                        <br>
                        Be sure you are ready by building and upgrading your Anima Armor, soon it will be needed for far more than just racing!<br>
                        <br>
                        Nanotopia needs your help! Are you up to the challenge?
                    </div>    
                </div>
                <div class="aboutgame-right-image">
                    <!-- <img src="/assets/landing/aboutgame/synthetic_process.png"  style="width: 730px;" alt=""> -->
                    <LottiePlayer
                       bind:this={lottieInstance.promoteprocess}
                        src="/assets/landing/aboutgame/nftprocess.json"
                        speed="0.7"
                        autoplay="{true}"
                        loop="{false}"
                        controls="{false}"
                        renderer="svg"
                        background="transparent"
                    />
                </div> 
            </div>
        </div>    
    </section>
    <section class="landing-section" id="overview">
        <div class="back-hex-mask"></div>
        <!-- https://codepen.io/cssnagarajan/pen/LVJdWb -->
        <!-- src="/assets/landing/lottie/gameplay_overview.json" -->
        <div class="section-banner">
            <LottiePlayer
                bind:this={lottieInstance.overview}
                src="/assets/landing/lottie/gameplay_overview.json"
                style="margin-top: 80px;max-width: 1500px; margin-left: -40px"
                speed="1"
                autoplay="{true}"
                loop="{false}"
                controls="{false}"
                renderer="svg"
                background="transparent"
                height="{80}"
                width="{innerWidth > 768 ? 1500 : 800}"
            /> 
        </div>
        <div class="section-container adjust-padding-overview">
            <div class="overview-container" >
                <div class="overview-content-left">
                    <div style="display: flex; flex-direction: column; height: 800px">
                        {#each items as item, i}
                            <Accordion {i} {show} {showCollapse} {item}/>
                        {/each}              
                    </div>
                </div>
                <div class="overview-content-right"
                     class:mobile-height={innerWidth < 1024}
                >
                    <div class="overview-content-right-lottie">
                        <LottiePlayer
                            bind:this={lottieright.flashdrives}
                            src="/assets/landing/overview/fdanimation.json"
                            speed="0.8"
                            autoplay="{true}"
                            loop="{false}"
                            controls="{false}"
                            renderer="svg"
                            background="transparent"
                            width="{480}"
                        />
                    </div>
                    {#if show == 0} 
                    {:else if show == 1}
                    <div class="aboutgame-right-missions">
                        <img class="image-forage-bg" src="/assets/landing/overview/forager-missions.png"  alt="">
                        <img class="image-forager" src="/assets/landing/gif/forager.gif" alt="">           
                        <div class="image-foot-shadow"></div>
                    </div> 
                    {:else if show == 2}                   
                    <img src="/assets/landing/gif/greenprintcard.gif" alt="">
                    {:else if show == 3}
                    {:else if show == 4}
                    <div class="aboutgame-right-image1">
                        <!-- <img src="/assets/landing/overview/hangout.png" style="margin-left: 20px" alt=""> -->
                        <video
                            class="video-playing-overview"            
                            autoplay
                            muted
                            loop playsinline
                            preload="true"
                        >
                            <source src="/assets/landing/bg_video.webm" type="video/webm">
                            <source src="/assets/landing/bg_video.mp4" type="video/mp4">
                            <track kind="captions"/>
                        </video>
                    </div>
                    {:else if show == 5}
                    <img src="/assets/landing/gif/landing-transition.gif" alt="">
                    {/if}
                </div>

                <div class="overview-content-left-mobile">
                    <div class="swiper badgeSwiper">
                        <OverviewCarousel perPage={1} dots={true} loop={true} pagination={true} {showCollapse}>
                            {#each items as item, i}
                                <SplideSlide>
                                    <div class="splide-slider">
                                    <MobileAccordion mobile={true} {i} {show} {item} />
                                    </div>
                                </SplideSlide>
                            {/each}    
                        </OverviewCarousel>
                    </div>
                </div>
            </div>
        </div>    
    </section>
    <section class="landing-section" id="aboutgreenrabbit">
        <!-- <img class="aboutgreenrabbit-diamond-bg" src="/assets/landing/aboutgreenrabbit/bg-diamond.png" alt=""> -->        
        <div class="aboutgreenrabbit-bg-mask">
        </div>
        <div class="section-container section-container-adjust-top">
            <div class="section-banner">
                <LottiePlayer
                    bind:this={lottieInstance.aboutgreenrabbit}
                    style="margin-top: -80px"
                    src="/assets/landing/lottie/About_GR.json"
                    speed="1"
                    autoplay="{true}"
                    loop="{false}"
                    controls="{false}"
                    renderer="svg"
                    background="transparent"
                    height="{80}"
                    width="{innerWidth > 768 ? 1500 : 920}"
                /> 
            </div>
            <div class="aboutgreenrabbit-container">
                <div class="top-mask"></div>
                <div class="aboutgreenrabbit-item-row">
                    <div class="subtitle-description" data-aos="fade-right" data-aos-duration="1000">
                        <div class="subtitle-description-titlepart">
                            <span>OUR STORY</span>
                            <img src="/assets/landing/common/subtitlesel-aboutgreenrabbit.svg" alt=""/>
                        </div>
                        <div class="subtitle-description-body">
                            Founded in 2021, Green Rabbit is a worldwide metaverse creative team focused on NFT game design and development. A diverse group with combined skills in NFT creation, cryptocurrency, as well as game and art design. Green Rabbit is set to become the premiere team in the NFT gaming space.
                        </div>
                    </div>
                    <div class="subtitle-description" data-aos="fade-left" data-aos-duration="1000">
                        <div class="subtitle-description-titlepart">
                            <span>OUR MISSION</span>
                            <img src="/assets/landing/common/subtitlesel-aboutgreenrabbit.svg" alt=""/>
                        </div>
                        <div class="subtitle-description-body">
                            To provide the NFT community with an exciting and rewarding gaming experience, built with integrity and ethics, and delivered with the industry's collectors in mind.
                        </div>
                    </div>
                </div>
            </div>            
            <div class="aboutgreenrabbit-team-row" data-aos="fade-up" data-aos-duration="2000">
                <div class="subtitle-imagepart">
                    <div class="subtitle-description-titlepart">
                        <span>TEAM</span>
                        <img src="/assets/landing/common/subtitlesel-aboutgreenrabbit.svg" alt=""/>
                    </div>
                    <div class="subtitle-description-body">
                        <div class="team-imagelist">
                            <div class="swiper badgeSwiper">
                                <LandingCarousel perPage={6} dots={true} loop={true} pagination={false}>
                                    <div slot="right-control" class="nav-right-btn flex center unselectable">
                                        <img src="/assets/landing/aboutgreenrabbit/slideright.png" alt="" />
                                    </div>                                    
                                    {#each  teamItem as eachitem, i}
                                        <SplideSlide>
                                            <div class="team-individual-info"
                                                    on:click={()=>{OpenTeamDetail(i);}}
                                            >
                                                <img src="{eachitem.pic}" alt=""/>
                                                <span class="team-individual-text-bgfont">{@html eachitem.name}</span>
                                                <span class="team-individual-text-smallfont">{@html eachitem.role}</span>
                                            </div>
                                        </SplideSlide>
                                    {/each}
                                </LandingCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- subtitlesel-aboutgreenrabbit.svg -->
        </div>    
    </section>    
    <section class="landing-section roadmap-section" id="roadmap">
        <img  class= "running-rabbit" src="/assets/landing/roadmap/runningRabbit.png" alt="" data-aos="fade-left" data-aos-duration="3000"/>
        <div class="section-banner">
            <LottiePlayer
                bind:this={lottieInstance.roadmap}
                src="/assets/landing/lottie/road_map.json"
                style=" margin-top: 80px;"
                speed="1"
                autoplay="{true}"
                loop="{false}"
                controls="{false}"
                renderer="svg"
                background="transparent"
                height="{80}"
                width="{innerWidth > 768 ? 1500 : 800}"
            />             
        </div>
        <div class="section-container roadmap-section-container">
            <h class="roadmapstep-phase" data-aos="fade-right" data-aos-duration="2000">PHASE 1</h>
            <div class="roadmapstep-container">
                {#each roadmap_data as item, i}
                    {#if i <= roadmap_data.length / colCount && colCount > 1}
                        <div class="roadmap-row"
                             class:roadmap-row-reverse = {i % 2 == 1}
                        >
                            {#each roadmap_data as itemData, j}
                                {#if j >= i * colCount && j < (i + 1) *  colCount}
                                    <div class="roadmap-content">
                                        {#if itemData.tick}
                                            <img src="/assets/landing/roadmap/checked-tick.png" alt=""/>
                                        {:else}
                                            {#if itemData.checked}
                                                <img src="/assets/landing/roadmap/checked.png" alt=""/>
                                            {:else}
                                                <img  class="roadmap-uncheckedimg" src="/assets/landing/roadmap/unchecked.png" alt=""/>
                                            {/if}
                                        {/if}
                                        
                                        <p class="overview-number">{j + 1 }</p>
                                        <div class="step-name-and-status">
                                            <span class="overview-text1">{@html itemData.title}</span>
                                            {#if itemData.completed}
                                                <span class="overview-text2">Completed</span>
                                            {/if}
                                        </div>
                                        {#if itemData.checked}
                                            <div class="roadmap-proceed-line"></div>
                                            <div class="roadmap-proceed-bottompoint"></div>
                                            {#if i % 2 == 1 && j == i* colCount}
                                                <div class="roadmap-proceed-rightline"></div>
                                            {/if}
                                            {#if i % 2 == 0 && j == i * colCount && j != 0}
                                                <div class="roadmap-proceed-leftline"></div>
                                            {/if}
                                        {:else}
                                            <div class="roadmap-todo-line"></div>
                                            <div class="roadmap-todo-bottompoint"></div>
                                            {#if i % 2 == 1 && j == i* colCount}
                                              <div class="roadmap-todo-rightline"></div>
                                            {/if}
                                            {#if i % 2 == 0 && j == i * colCount && j != 0}
                                                <div class="roadmap-todo-leftline"></div>
                                            {/if}

                                            {#if j == roadmap_data.length - 1}
                                                {#if colCount == 4}
                                                    <div class="roadmap-todo-pointpoint" style="right: -35px"></div>
                                                    <div class="roadmap-todo-pointpoint" style="right: -50px"></div>
                                                    <div class="roadmap-todo-pointpoint" style="right: -65px"></div>
                                                    <div class="roadmap-todo-pointpoint" style="right: -80px"></div>
                                                {/if}
                                            {/if}
                                        {/if}
                                    </div>
                                {/if}
                            {/each}
                        </div>
                    {/if}
                    {#if colCount == 1}
                        <div class="roadmap-content roadmap-content-onecol">
                            {#if item.tick}
                                <img src="/assets/landing/roadmap/checked-tick.png" alt=""/>
                            {:else}
                                {#if item.checked}
                                    <img src="/assets/landing/roadmap/checked.png" alt=""/>
                                {:else}
                                    <img  class="roadmap-uncheckedimg" src="/assets/landing/roadmap/unchecked.png" alt=""/>
                                {/if}
                            {/if}
                            
                            <p class="overview-number">{i + 1 }</p>
                            <div class="step-name-and-status">
                                <span class="overview-text1">{@html item.title}</span>
                                {#if item.completed}
                                    <span class="overview-text2">Completed</span>
                                {/if}
                                {#if i > 0 && item.checked}
                                    <div class="roadmap-proceed-oneline"></div>
                                {:else if !item.checked}
                                    <div class="roadmap-todo-oneline"></div>
                                {/if}
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
            <!-- <h class="roadmapstep-phase roadmapstep-phase-grayed">PHASE 2</h> -->
        </div>    
    </section>    
    <section class="landing-section" id="readynanotopia">
        <img class="aboutgreenrabbit-diamond-bg" src="/assets/landing/readytorule/bg-diamond1.png" alt="">
            <div class="section-banner">
                <LottiePlayer
                    bind:this={lottieInstance.readynanotopia}
                    src="/assets/landing/lottie/nanotopia.json"
                    style=" margin-top: 80px;"
                    speed="1"
                    autoplay="{true}"
                    loop="{false}"
                    controls="{false}"
                    renderer="svg"
                    background="transparent"
                    height="{80}"
                    width="{innerWidth > 768 ? 1500 : 800}"
              />                     
            </div>
            <div class="section-container nanotopia-section">
                <div class="readyrule-container">
                    <div class="readyrule-threerabbit">
                        <img class="threerabbig-bg-effect" src="/assets/landing/readytorule/bg-effect.png" alt="" />
                        <img class="threerabbit-image" src="/assets/landing/readytorule/threeimg.png" alt="" >
                    </div>
                    <div class="need-more-info">
                        <div class="start-playing-now" >
                            <span class="section-title-font-readyrule">Start Playing Green Rabbit Now!</span>
                            <div class="play-greenrabbit-button">
                                <LottieButton 
                                    name="PLAY GREEN RABBIT"
                                    buttonStyle="button-style249"
                                    onclick={()=>{
                                        window.open("https://play.greenrabbitgame.io/", "_blank");
                                    }}
                                />
                            </div>
                            <div class="readyrule-before-starting" data-aos="fade-up" data-aos-duration="2000">
                                <p class="readyrule-content-font1">NEED MORE INFO BEFORE STARTING?</p>
                                <img src="/assets/landing/nanotopia/needmore.png"alt="">
                            </div>         
                            <div class="readyrule-quickguide">
                                <div class="readyrule-quickguide-col">
                                    <p class="readyrule-quickguide-font">Master the first steps of the game<br>with our quick guide</p>
                                    <LottieButton 
                                        name="SEE QUICK GUIDE"
                                        buttonStyle="button-style249"
                                        onclick={()=>{goto('/gettingstarted')}}
                                    />
                                </div>
                                <div class="readyrule-quickguide-col">
                                    <p class="readyrule-quickguide-font">Read the complete<br>Green Rabbit Gameplay</p>
                                    <LottieButton 
                                        name="COMPLETE GAMEPLAY"
                                        buttonStyle="button-style249"
                                        onclick={()=>{
                                            window.open("https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay", "_blank");
                                        }}
                                    />
                                </div>
                            </div>  
                        </div>
                        <div class="available-sties" data-aos="fade-up" data-aos-duration="2000">
                            <h class="readyrule-available-font">Available on</h>
                            <div class="partner-sites">
                                <a href="https://on.wax.io/wax-io/" target="_blank"><img src="/assets/landing/toppage/wax.png" alt="" class="party1-site"> </a>
                                <a href="https://nfthive.io/market?collection=greenrabbit&order_by=date_desc&search_type=sales&offer_type=sales&category=characters&chests" target="_blank"> <img src="/assets/landing/toppage/nfthive.png" alt="" class="party2-site"> </a>
                                <a href="https://defibox.io/" target="_blank"><img src="/assets/landing/toppage/defibox.png" alt="" class="party3-site"></a>
                                <a href="https://getwombat.io/" target="_blank"><img src="/assets/landing/toppage/wombat.png" alt="" class="party4-site"></a>
                            </div>
                        </div>
                    </div>
            </div>
            
            </div>
    </section>
</div>    

<style>
    /* partner : https://www.leonicornswap.com/ */
    /* swithcer: https://alvarotrigo.com/blog/create-a-slidebar-bullet-navigation-to-smoothly-snap-to-sections/ */    
    /* https://www.npmjs.com/package/svelte-video-player */
    .bg-wrapper{      
        display: flex;       
        flex-direction: column;        
        width: 100vw;
    }
    section {
        scroll-snap-align: start;
        text-align: center;
        position: relative;
    }
    .covered-animations{
        display: flex;
        position: absolute;
        top: -500px;
        right: -580px;
        width: 1207px;             
    }
    .move-fromrtopright-rabbit {
        animation: translate-move 2.5s 1.2s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    .move-fromrtopright1{
        animation: translate-move 1.2s 1.1s  infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    .move-fromrtopright2{
        animation: translate-move 1.1s 1.1s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    .move-fromrtopright3{
        animation: translate-move 1.2s 1.2s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    } 

    
    .move-fromrtopright4{
        animation: translate-move 1.5s 1.5s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    .move-fromrtopright5{
        animation: translate-move 1.5s 1.4s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    .move-fromrtopright6{
        animation: translate-move 1.5s 1.5s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    /* // for delay */
    .move-fromrtopright-rabbit-delayed {
        animation: translate-move 3s 3.2s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    .move-fromrtopright1-delayed{
        animation: translate-move 1.2s 3.1s  infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    .move-fromrtopright2-delayed{
        animation: translate-move 1.1s 3.1s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    .move-fromrtopright3-delayed{
        animation: translate-move 1.2s 3.2s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    } 

    
    .move-fromrtopright4-delayed{
        animation: translate-move 2s 3.5s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    .move-fromrtopright5-delayed{
        animation: translate-move 2s 3.4s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }
    .move-fromrtopright6-delayed{
        animation: translate-move 2s 3.5s infinite ease-in-out forwards;
        animation-iteration-count: 1;
    }

    @keyframes translate-move{
        0%{
            top: -500px;
            right: -580px;
            width: 10px; 
        }
        100%{
            top: 0px;
            right: 0px;               
            width: 1207px; 
        }
    }
    .landing-rabbit{
        display: relative;
        z-index: 20;
    }
    .slipping-rabbit{
        position: absolute;
        width: 737px;
        top: -113px;
        right: -100px;
        z-index: 20;
    }
    .landing-rabbit img{
        position: absolute;
    }
    .landing-genesis{
        display: flex;
        width: 100%;
        background-image: url(/assets/landing/estatePresent.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 27vw;
    }
    .landing-badge{
        display: flex;
        position: relative;
        justify-content: center;
        background: #0E1743;
        width: auto;
        height: 100vh;
    }
    .video-player{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0px;
        height: 100%;
        max-width: unset;            
    }
    .badge-texts{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 76%;
        z-index: 21;
    }
    .landing-badge span{
        font-family: Airstrike;
        font-size: 3.5vw;
        line-height: 1.5;
        color: #FFFFFF;
        z-index: 1;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 6px 0px #000000;
    }
    .trial-text1{
        margin-left: 40px;
    }
    .trial-text2{
        margin-left: 20px;
    }
    .landing-section { 
        position: relative; 
        width: 100vw;
        display: flex;
        background: #0E1743;
        background-size:cover;
        background-position-x: center;
        flex-direction: column;
        scroll-snap-align: start;
        background-repeat: repeat-y;
    }        
    .roadmap-section{
        margin-bottom: 120px;
    }
    .running-rabbit{
        position: absolute;
        right: 0;
        top: 5vh;
        width: 27vw;
        height: auto;
        z-index: 2;
    }
    .aboutthegame-section{
        padding-bottom: 200px;
    }
    .back-hex-mask-diamond{
        position: absolute;
        content: "";
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-image: url(/assets/landing/bg-mask-diamond.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }            
    .back-hex-mask{
        position: absolute;
        content: "";
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-image: url(/assets/landing/bg-mask.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }   
    .section-banner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 3;
    }
    @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 0.1; }
    }
    @keyframes pulse {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.1;
        }
    }
    .section-container{
        display: flex;
        z-index: 1;
        margin-top: 130px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .aboutgame-container{
        display: flex;
        width: 100vw;
        justify-content: center;
        flex-direction: column;
        padding-left: 10vw;
        padding-right: 10vw;
    }
    .aboutgame-container > div {
        height: 700px;
    }
    .aboutgame-content-text1{
        position: relative;
        max-width: 700px;
        z-index: 3;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: left;
        color: #FFFFFF;        
    }
    .aboutgame-content-text1 img{
        position: absolute;
        left: -17px;
        top: 0px;     
        width: 32.66px;
        height: auto;
    }
    .aboutgame-right-image {
        position: absolute;
        top: 120px;
        right: 10vw;
        z-index: 1;
        height: 860px;
    }
    .aboutgame-right-missions{
        display: flex;
        position: relative;
        z-index: 5;
        cursor: pointer;
        margin-top: 50%;
        margin-left: 10px;
        transform: translateY(-50%);
    }
    .aboutgame-right-image1{
        display: flex;
        position: relative;
        z-index: 5;
        cursor: pointer;
        margin-top: 50%;
        margin-left: 10px;
        transform: translateY(-50%);
    }
    .video-playing-overview{
        width: 470px;
        height: auto;
        z-index: 10;
    }
    .image-forage-bg{
        width: 604px;
        height: auto;
        position: relative;
    }
    .image-forager{
        position: absolute;
        left: 0;
        bottom : 0;
        width: 322px;
        height: auto;            
    }
    .image-foot-shadow{
        z-index: 10;
        position: absolute;
        width: 127px;
        height: 15px;
        bottom: 0;
        left: 97px;
        background: #000000;
        opacity: 0.9;
        filter: blur(17px);
        border-radius: 159px;
    }
    .overview-container{
        display: flex;
        width: 100vw;
        justify-content: center;
        align-items: flex-start;
        padding: 0 10vw;
        margin-top: 60px;
    }
    .adjust-padding-overview{
        padding-bottom: 100px;
    }
    .overview-content-left{
        z-index: 2;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 1.5;
        display: flex;
        align-items: center;
        text-align: left;
        color: #FFFFFF;
        width: 65%;
        max-width: 805px;
    }
    .splide-slider{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
    .overview-content-left-mobile{
        z-index : 2;
        display: none;
    }        
    .mobile-height{
        height: 560px;
    }
    .overview-content-right-lottie{
        display: none;
    }
    .overview-content-right{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 36%;
    }    
    :global(.accordion) {
		width: 100%;
		max-width: 450px;
		margin: 0 auto;
	}
	
	:global(.accordion-item) {
		border-bottom: 1px solid rgb(100, 120, 140);
	}
    .jumping-rabbit{
        /* display: flex; */
        position: absolute;
        right: 0;
        top: 0;
    }
    /* ABOUT GREEN RABBIT START */
    .aboutgreenrabbit-container{
        position: relative;
        display: flex;            
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
        padding: 140px 10vw 250px;
        background-image: url(/assets/landing/aboutgreenrabbit/bg-building.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .top-mask{
        position: absolute;
        left: 0;
        top: -130px;
        width: 1920px;
        height: 130px;
        background-image: url(/assets/landing/aboutgreenrabbit/top-mask.png);
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        opacity: 0.4;
    }
    .aboutgreenrabbit-item-row{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .aboutgreenrabbit-team-row{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        transform: translateY(-40%);
    }
    .subtitle-description{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        width: 45%;
    }
    .subtitle-imagepart{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .subtitle-description-titlepart{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 245px;
        height: auto;
    }
    .aboutgreenrabbit-diamond-bg{
        position: absolute;
        left: 0px;
    }
    .subtitle-description-titlepart span{
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
        z-index: 1;
        position: absolute;
        top: 0px;
    }
    .subtitle-description-titlepart img{
        position: absolute;
        top: 12px;
    }
    .subtitle-description-body{
        margin-top: 60px;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        text-align: left;
        margin-left: 46px;
    }
    .team-imagelist{
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        cursor: pointer;
    }
    .team-individual-info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .team-individual-info img{
        max-width: unset;
        width: 125px;
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
        margin-top: 6px;
        text-align: center;
    }
    .swiper {
        max-width: 80vw;
        padding-bottom: 40px;
        padding-top: 20px;
    }
    .nav-right-btn{
        width: 95px;
        height: auto;
        cursor: pointer;
        z-index: 5;
        position: absolute;
        opacity: 1;
    }

    /* ABOUT GREEN RABBIT END */
    /* ROADMAP START */
    .roadmapstep-container{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding-bottom: 10px;
        margin-top: 20px;
        height: 460px;
    }
    .roadmapstep-phase{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    .roadmap-row{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 40px;
    }
    .roadmap-row-reverse{
        flex-direction: row-reverse;
    }
    .roadmap-content{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        padding-bottom: 8px;
        height: 50px;
        width: 280px;
        /* width: 21.5vw; */
    }
    .roadmap-content-onecol{
        margin-top: 30px; 
        width: unset;
    }
    .roadmap-content img{
        position: absolute;
        width: 50px;
        /* margin-left: -16px; */
        left: -17px;
        bottom: 13px;
    }
    .roadmap-uncheckedimg{
        position: absolute;
        width: 32px !important;
        /* margin-left: -16px; */
        left: -10px !important;
        bottom: 21px !important;
        background: #0E1743;
    }
    .roadmap-todo-line{
        position: absolute;
        left: 0px;
        top: -40px;
        width: 100%;
        height: calc(100% + 40px);
        border-bottom: 2.95px solid #5A5B5B;
    }
    .roadmap-proceed-bottompoint{
        position: absolute;
        left: 0px;
        bottom: -5.4px;
        background: #36FFC0;
        border-bottom: 2.95px solid #36FFC0;
        box-sizing: border-box;
        box-shadow: 0px 0px 11.0299px #36FFC0;
        border-radius: 1.47px;
        width: 10.29px;
        height: 10.29px;
    }
    .roadmap-proceed-line{
        position: absolute;
        left: 0px;
        top: -40px;
        width: 100%;
        height: calc(100% + 40px);
        border-bottom: 2.95px solid #36FFC0;
    }
    .roadmap-todo-pointpoint{
        position: absolute;
        right: -45px;
        bottom: -2.4px;
        background:  #5A5B5B;
        border-bottom: 2.95px solid  #5A5B5B;
        box-sizing: border-box;
        border-radius: 1.47px;
        width: 6.29px;
        height: 6.29px;
    }
    .roadmap-proceed-rightline{
        position: absolute;
        left: 0px;
        top: -40px;
        width: 100%;
        height: calc(100% + 40px);
        border-right: 2.95px solid #36FFC0;
    }
    .roadmap-todo-rightline{
        position: absolute;
        left: 0px;
        top: -40px;
        width: 100%;
        height: calc(100% + 40px);
        border-right: 2.95px solid #5A5B5B;
    }
    .roadmap-proceed-leftline{
        position: absolute;
        left: -40px;
        top: -42px;
        width: 45px;
        height: calc(100% + 42px);
        border-left: 2.95px solid #36FFC0;
        border-top: 2.95px solid #36FFC0;
        border-bottom: 2.95px solid #36FFC0;
        border-radius: 2.95px;
    }
    .roadmap-todo-leftline{
        position: absolute;
        left: -40px;
        top: -42px;
        width: 45px;
        height: calc(100% + 42px);
        border-left: 2.95px solid #5A5B5B;
        border-top: 2.95px solid #5A5B5B;
        border-bottom: 2.95px solid #5A5B5B;
        border-radius: 2.95px;
    }
    .roadmap-todo-bottompoint{
        position: absolute;
        left: 0px;
        bottom: -5.4px;
        background: #5A5A5A;
        border: 2.94132px solid #5A5B5B;
        box-sizing: border-box;
        border-radius: 1.47px;
        width: 10.29px;
        height: 10.29px;
    }   
    .roadmap-proceed-oneline{
        position: absolute;
        left: 6px;
        top: -66px;
        width: 3px;
        height: calc(100% + 42px);
        border-left: 2.95px solid #36FFC0;
        border-radius: 2.95px;
    }
    .roadmap-todo-oneline{
        position: absolute;
        left: 6px;
        top: -66px;
        width: 3px;
        height: calc(100% + 42px);
        border-left: 2.95px solid #5A5B5B;
        border-radius: 2.95px;
    }
    .overview-number{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: 400;
        font-size: 31px;
        line-height: 37px;
        text-align: right;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        margin-left: 44px;
    }
    .overview-text1{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        text-align: left;
    }
    .overview-text2{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.05em;
        color: #35FBBD;
    }
    .step-name-and-status{
        display: flex;
        /* position: absolute;
        left: 10px;
        bottom: 10px; */
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        border-left: 1px solid #59605E;
        padding-left: 8px;
        margin-left: 10px;
        margin-right: 30px;
        padding-bottom: 5px;
    }
    .readyrule-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color: #16215A;
    }
    .nanotopia-section{
        margin-top: 25px;
    }
    .section-title-font-readyrule {
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
    }
    .start-playing-now{
        display: flex;
        flex-direction: column;
        width: 100%;
        /* padding-bottom: 250px; */
        padding-top: 66px;
    }
    .need-more-info{
        position: relative;
        display: flex;            
        flex-direction: column;
        width: 100%;            
        background: url(/assets/landing/readytorule/bottom-bg1.png);
    }
    .play-greenrabbit-button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 31px;
    }
    .readyrule-before-starting{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: 92px;
    }
    .readyrule-before-starting img{
        position: absolute;
        bottom: -30px;
        width: 525px;
        height: auto;
    }
    .readyrule-quickguide{
        margin-top: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .readyrule-threerabbit{
        position: relative;
        margin-top: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .threerabbit-image{
        position: relative;
        width: 30vw;

    }
    .threerabbig-bg-effect{
        position: absolute;
        width: 30vw;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
    }
    .available-sties{
        display: flex;
        flex-direction: column;
        padding-bottom: 66px;
        padding-top: 85px;
        width: 100%;
        z-index: 2;
    }
    .readyrule-quickguide-col{
        display: flex;
        flex-direction: column;
    }
    .readyrule-quickguide-font{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    }
    .readyrule-content-font1{
        font-family: Airstrike;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        position: relative;
        z-index: 1;
    }
    .readyrule-available-font{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        /* transform: matrix(1, 0, 0, -1, 0, 0); */
        margin-top: 20px;
    }
    .partner-sites{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
        margin-top: 49px;
        padding: 0 20px;
        /* transform: matrix(1, 0, 0, -1, 0, 0); */
    }
    .party1-site{
        margin-top: 25px;
        width: 135px;
        height: auto;
        cursor: pointer;
        z-index: 2;
    }
    .party2-site{
        margin-top: 25px;
        margin-left: 82px;
        width: 225px;
        height: auto;
        cursor: pointer;
        z-index: 2;
    }
    .party3-site{
        margin-top: 25px;
        margin-left: 57px;
        width: 227px;
        height: auto;
        cursor: pointer;
        z-index: 2;
    }        
    .party4-site{
        margin-top: 25px;
        margin-left: 57px;
        width: 90px;
        height: auto;
        cursor: pointer;
        z-index: 2;
    }
    /* READY TO RULE NANOTOPIA END */
    /*SIDEBAR STARTED*/
    @-webkit-keyframes move_eye { from { margin-left: -20%; } to { margin-left: 100%; }  }
    @keyframes move_eye { from { margin-left: -20%; } to { margin-left: 100%; }  }
    /* SPECIAL EFFECTS ENDED */
    /* https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/     swing */
    .adjust-next-paragraph{
        margin-top: 80px;
    }    
    .section-container-adjust-top{
        margin-top: 0px;
    }

    .bluestripepe1{
        position: absolute;
        top: 27px;
        right: -101px;
        width: 652px;
        z-index: 1;
    }
    .bluestripepe2{
        position: absolute;
        top: -127px;
        right: -395px;
        width: 977px;
        /* -webkit-animation: 6s move_eye; */
    }
    @-webkit-keyframes move_eye { from { width: 412px; } to { width: 977px;}  }
    @keyframes move_eye { from { width: 0px; } to { width: 977px; }  }
    .bluestripepe3{
        position: absolute;
        top: 37px;
        right: -231px;
        width: 700px;
    }
    .greenstrippe1{
        position: absolute;
        top: 175px;
        right: -192px;
        width: 531px;
        z-index: 1;
    }
    .greenstrippe2{
        position: absolute;
        top: 9px;
        right: -492px;
        width: 850px;            
    }
    .greenstrippe3{
        position: absolute;
        top: 220px;
        right: -252px;
        width: 512px;
    }

    @media (max-width: 1280px) {
        /* .roadmap-content{
            width: 21.5vw;
        }
        .step-name-and-status{
            align-items: center;
        } */
        .roadmapstep-container{
            height: 590px;
        }
        .landing-genesis{
            height: 37vw;
        }
    }
    
    @media (max-width: 1024px) {
        .aboutgame-container {
            width: 100%;
            flex-direction: column-reverse;
            padding-left: 40px;
            padding-right: 40px;
        }
        .aboutgame-container > div {
            height: unset;
        }
        .aboutgame-right-image {
            position: relative;
            right: unset;
            width: 100%;
            height: auto;
            margin-bottom: 20px;
        }
        .aboutgame-content-text1 {
            max-width: 100%;
        }
        .aboutgame-right-image {
            top: 0;
        }
        /* overview-container */
        .overview-container {
            flex-direction: column;
        }
        .overview-content-left {
            display: none;
        }
        .overview-content-left-mobile {
            margin-top: 30px;
            display: flex;
            width: 100vw;
            margin-left: -10vw;
        }

        .swiper {
            max-width: 100vw;
            padding-bottom: 40px;
            padding-top: 20px;
        }
        .overview-content-right {
            width: 100%;
        }
        .roadmapstep-container{
            height: 860px;
        }
        .aboutgame-right-missions{
            display: flex;
            position: relative;
            z-index: 5;
            cursor: pointer;
            margin-top: 50%;
            margin-left: -69px;
            transform: translateY(-24%);
        }         
        .threerabbit-image{
            width: 40vw;
        }
        .landing-genesis{
            height: 41vw;
        }
    }

    @media (max-width: 950px) {
        /* .roadmap-content p{
            margin-left: 4vw;
            font-size: 29px;
        }
        .step-name-and-status span{
            font-size: 11px;
        } */
        .partner-sites{
            flex-wrap: wrap;
        }
        /* .party3-site{
            margin-left: 0px;
        } */
        .landing-genesis{
            height: 43vw;
            margin-top: 30px;
        }
    }

    @media (max-width: 768px) {
        .section-container {
            margin-top: 0;
        }
        .roadmap-content img{
            z-index: 1;
        }
        .roadmap-section-container{
            margin-top: 60px;
        }
        .aboutgame-container {
            padding-left: 20px;
            padding-right: 20px;
        }
        .landing-badge span{
            font-size: 8vw;
            text-align: left;
        }
        .aboutgame-content-text1{
            font-size: 16px;
            line-height: 26px;
        }
        .adjust-next-paragraph{
            margin-left: 0px;
            margin-top: 40px;
        }
        .overview-container{
            flex-direction: column;
            display: flex;                
        }
        .overview-content-left{
            margin-top: 50px;
        }
        .overview-content-left{
            display: none;
        }
        .overview-content-right{

        }
        .aboutgreenrabbit-container {
            margin-top: -20px;
            padding: 40px 10vw 250px;
        }
        .aboutgreenrabbit-item-row{
            flex-direction: column;
        }
        .subtitle-description{
            width: 100%;
        }
        .team-individual-text-bgfont{
            font-size: 20px;
        }
        .subtitle-description-body{
            margin-left: unset;
        } 
        /* .party2-site{
            margin-top: 40px;
            margin-left: -9px;
        }
        .party3-site{
            margin-top: 40px;
            margin-left: -3px;
        } */
        .readyrule-bg2character{
            display: none;
        }
        .roadmapstep-phase{
            font-size: 22px;
        }

        .roadmapstep-container{
            height: 1320px;
        }
        .section-title-font-readyrule{
            font-size: 18px;
        }
        .readyrule-content-font1{
            font-size: 26px;
        }
        .readyrule-quickguide-font{
            font-size: 18px;
        }
        .threerabbit-image{
            width: 65vw;
        }
        .threerabbig-bg-effect{
            width: 65vw;
        }
        .running-rabbit{
            display: none;
        }
        .roadmap-section{
            margin-bottom: 0px;
        }
        .aboutgreenrabbit-team-row{
            transform: unset;
        }
        .aboutgreenrabbit-team-row{
            padding-bottom: 0px;
        }
        .aboutthegame-section{
            padding-bottom: 0px;
        }
    }
    
    @media (max-width: 768px) {
        .readyrule-quickguide{
            flex-direction: column;
        }
        .readyrule-quickguide-col{
            margin-top:  60px;
        }
        .start-playing-now{
            padding-bottom: 0px;
        }
        .landing-genesis{
            height: 43vw;
            margin-top: 60px;
        }
    }
    @media (max-width: 708px) {
        .party3-site{
            margin-left: 0px;
        }
    }
    @media (max-width: 550px) {
        .party1-site{
            width: 90px;
        }
        .party2-site{
            width: 180px;
        }
        .party3-site{
            width: 175px;
        }
        .party4-site{
            width: 65px;
        }
    }

    @media (max-width: 391px) {
        .party2-site{
            width: 177px;
            margin-left: 37px;
        }
        .party4-site{
            margin-left: 33px;
        }
    }
</style> 
    