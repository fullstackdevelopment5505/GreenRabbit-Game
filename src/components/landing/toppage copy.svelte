<script>
	import { goto } from '$app/navigation';
	import { getContext, onMount } from 'svelte';
	import { each } from 'svelte/internal';
	import { page } from '$app/stores';

	import Accordion from './Accordion.svelte';
	import LandingCarousel from '/src/components/landing/LandingCarousel.svelte';
	import { SplideSlide } from '@splidejs/svelte-splide';
	import LandingFooter from './LandingFooter.svelte';

	let currentSectionName = '';

	const showCollapse = (i) => {
		i === show ? (show = show) : (show = i);
	};
	let show = 0;
	const items = [
		{
			key: '1',
			title: 'Stake NFTs to Get Shellinium!',
			text:
				'Stake NFTs on a Green Rabbit Flash Drive and claim the Green Rabbit in-game token - Shellinium! Shellinium is the backbone of the Green Rabbit economy and the main token you will need in order to progress in the game'
		},
		{
			key: '2',
			title: 'Send Foragers on Missions!',
			text:
				'Assemble your team of Foragers, send them on missions and collect valuable materials which will be used for crafting your Anima Armours, upgrades, repairs and more!'
		},
		{
			key: '3',
			title: 'Own Land in Nanotopia!',
			text:
				'Own you pieace of Nanotopia and collect fees everytime a Foragers uses your land to collect resources. Upgrade and maintain the land to make it more attractive for foragers and receive a higher yield! Trade the resources or use them to craft an Anima Armour!'
		},
		{
			key: '4',
			title: 'Craft and assemble youR Anima Armour!',
			text:
				'Own you pieace of Nanotopia and collect fees everytime a Foragers uses your land to collect resources. Upgrade and maintain the land to make it more attractive for foragers and receive a higher yield! Trade the resources or use them to craft an Anima Armour!'
		},
		{
			key: '5',
			title: 'HANG OUT IN THE METAVERSE',
			text:
				'Enter Nanotopia Metaverse and hang out the comminity, meet new people, discuss about game strategies and more. Test your Anima Armour by competing in various mini-games and discovering hidden places inside the Metaverse!'
		},
		{
			key: '6',
			title: 'Race IN UNIQUE 3d RACES!',
			text:
				'Particiapte in unique parkour style 3D races: run, climb on obsticles, jump of buildings, slide though passages, apply the right strategy based on your Anima Armour characteristics and become the Legend on Nanotopia!'
		}
	];

	const teamItem = [
		{
			key: '1',
			name: 'NVENOM',
			role: 'Management',
			pic: '/assets/landing/aboutgreenrabbit/nvenom.png'
		},
		{
			key: '2',
			name: 'DrPr0ph3t',
			role: 'Management',
			pic: '/assets/landing/aboutgreenrabbit/lorena.png'
		},
		{
			key: '3',
			name: 'Lorena',
			role: 'Management',
			pic: '/assets/landing/aboutgreenrabbit/drpro.png'
		},
		{
			key: '4',
			name: 'PIGWIG',
			role: 'Lead-Smart Contract<br>Development',
			pic: '/assets/landing/aboutgreenrabbit/pigwig.png'
		},
		{
			key: '5',
			name: 'STERSMERLIN',
			role: 'Lead - Tokenomics',
			pic: '/assets/landing/aboutgreenrabbit/stermerlin.png'
		},
		{
			key: '6',
			name: 'ZHUCKLY<br>(GEORGE)',
			role: 'Unity Team',
			pic: '/assets/landing/aboutgreenrabbit/zhuckly.png'
		},
		{
			key: '7',
			name: 'Victory',
			role: 'Unity Team',
			pic: '/assets/landing/aboutgreenrabbit/victory.png'
		},
		{
			key: '8',
			name: 'Victory',
			role: 'Unity Team',
			pic: '/assets/landing/aboutgreenrabbit/zhuckly1.png'
		},
		{
			key: '9',
			name: 'Victory',
			role: 'Unity Team',
			pic: '/assets/landing/aboutgreenrabbit/victory.png'
		},
		{
			key: '10',
			name: 'Victory',
			role: 'Unity Team',
			pic: '/assets/landing/aboutgreenrabbit/victory.png'
		},
		{
			key: '11',
			name: 'Victory',
			role: 'Unity Team',
			pic: '/assets/landing/aboutgreenrabbit/victory.png'
		}
	];

	const resetCurrentActiveIndicator = () => {
		// background-color:#4652B6;
		// const activeIndicator = document.querySelector(".active");
		// if (activeIndicator)
		//     activeIndicator.classList.remove("active");
		const activeIndicator = document.getElementsByClassName('indicator');
		for (var i = 0; i < activeIndicator.length; i++)
			activeIndicator[i].setAttribute('style', 'background-color: #4652B6;');
	};

	const HideSidebar = () => {
		const sidebar = document.querySelector('#sidebar');
		if (sidebar) {
			sidebar.style.display = 'none';
		}
	};

	const ShowSidebar = () => {
		const sidebar = document.querySelector('#sidebar');
		if (sidebar) {
			sidebar.style.display = 'flex';
		}
	};

	const MakeOpacityZero = () => {
		document.getElementsByName('aboutthegame')[0].setAttribute('style', 'opacity: 0');
		document.getElementsByName('overview')[0].setAttribute('style', 'opacity: 0');
		document.getElementsByName('aboutgreenrabbit')[0].setAttribute('style', 'opacity: 0');
		document.getElementsByName('roadmap')[0].setAttribute('style', 'opacity: 0');
		document.getElementsByName('readynanotopia')[0].setAttribute('style', 'opacity: 0');
	};

	function roadmapAnimate() {
		let roadmapRows = document.getElementsByClassName('roadmap-row');
		let proceedlines = document.getElementsByClassName('roadmap-proceed-line');
		let proceedright = document.getElementsByClassName('roadmap-proceed-rightline');
		let proceedleft = document.getElementsByClassName('roadmap-proceed-leftline');

		let todolines = document.getElementsByClassName('roadmap-todo-line');
		let todoright = document.getElementsByClassName('roadmap-todo-rightline');
		let todoleft = document.getElementsByClassName('roadmap-todo-leftline');

		const elementList = [];

		elementList.push(roadmapRows[0]);
		elementList.push(proceedlines[0]);
		elementList.push(proceedlines[1]);
		elementList.push(proceedlines[2]);
		elementList.push(proceedlines[3]);
		elementList.push(proceedright[0]);
		elementList.push(roadmapRows[1]);
		elementList.push(proceedlines[7]);
		elementList.push(proceedlines[6]);
		elementList.push(proceedlines[5]);
		elementList.push(proceedlines[4]);
		elementList.push(proceedleft[0]);
		elementList.push(roadmapRows[2]);
		elementList.push(proceedlines[8]);
		elementList.push(proceedlines[9]);
		elementList.push(proceedlines[10]);
		elementList.push(proceedlines[11]);
		elementList.push(proceedright[1]);
		elementList.push(roadmapRows[3]);
		elementList.push(proceedlines[15]);
		elementList.push(proceedlines[14]);
		elementList.push(proceedlines[13]);
		elementList.push(proceedlines[12]);
		elementList.push(todoleft[0]);
		elementList.push(roadmapRows[4]);
		elementList.push(todolines[0]);

		// elementList.push(proceedlines[16]);

		for (let i = 0; i < elementList.length; i++) {
			elementList[i].setAttribute('style', 'display: none');
		}
		for (let i = 0; i < elementList.length; i++) {
			setTimeout(() => {
				elementList[i].setAttribute('style', 'display: flex');
			}, 50 * i);
		}
	}

	function animateIt(sectionId) {
		return;
		let overview = document.getElementsByClassName('section-banner-font')[sectionId];
		let overview_bg2 = document.getElementsByClassName('landing-section-banner2')[sectionId];
		let overview_bg3 = document.getElementsByClassName('landing-section-banner3')[sectionId];
		let overview_bg4 = document.getElementsByClassName('landing-section-banner4')[sectionId];
		let overview_str = document.getElementsByClassName('landing-section-banner5')[sectionId];

		// overview.style.animation = 'unset';
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
		//overview.getBoundingClientRect();
		overview_str.getBoundingClientRect();
		overview_bg2.getBoundingClientRect();
		overview_bg3.getBoundingClientRect();
		overview_bg4.getBoundingClientRect();
		// overview.style.animation = 'fadein 3s ease infinite ';
		/* left: calc(50%); 
        transform: translateX(-50%);*/
		// overview.setAttribute("style", "animation: fadein 3s ease infinite ");
		//console.log(overview);
		//overview.classList.add("fadein-animation");
		//overview.setAttribute("style", "transition: opacity 3s linear");
		overview_str.setAttribute(
			'style',
			'transition: transform 1700ms;  transform: translateX(calc(50vw - 50%)); '
		);
		overview_bg2.setAttribute('style', 'transition: transform 1500ms; transform: translateX(50vw)');
		overview_bg3.setAttribute(
			'style',
			'transition: transform 900ms; transition-delay: 300ms; transform: translateX(50vw)'
		);
		overview_bg4.setAttribute('style', 'transition: transform 1200ms; transform: translateX(50vw)');
		// setTimeout(() => {
		//     overview.style.animation = "none";
		// }, 3000);
	}

	const onSectionLeavesViewport = (section) => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						resetCurrentActiveIndicator();

						const element = entry.target;
						currentSectionName = element.id;
						const indicator = document.querySelector(`a[href='#${element.id}']`);
						//     if (element.id == "badge" || element.id == "footer"){
						//         HideSidebar();
						//     }
						//    else{
						//         ShowSidebar();
						//     }
						if (indicator) {
							if (element.id == 'aboutthegame') {
								animateIt(0);
							} else if (element.id == 'overview') {
								animateIt(1);
							} else if (element.id == 'aboutgreenrabbit') {
								animateIt(2);
							} else if (element.id == 'roadmap') {
								animateIt(3);
								roadmapAnimate();
							} else if (element.id == 'readynanotopia') {
								animateIt(4);
							}

							// MakeOpacityZero();
							// const span_text = document.getElementsByName(element.id)[0];
							// if (span_text)
							//     span_text.setAttribute("style", "opacity: 0.9;");
							// indicator.setAttribute("style", "background-color: #36FFC0;");
						}
						return;
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.1
			}
		);
		observer.observe(section);
	};

	onMount(async () => {
		const indicators = document.querySelectorAll('.indicator');

		const sections = document.querySelectorAll('section');

		indicators.forEach((indicator) => {
			indicator.addEventListener('click', function (event) {
				event.preventDefault();
				document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
				resetCurrentActiveIndicator();
				this.classList.add('active');
			});

			sections.forEach(onSectionLeavesViewport);
		});
	});
</script>

<div
	class="bg-wrapper"
	on:mousewheel={(e) => {
		console.log(e);
		if (e.deltaY < 0) {
		} else if (e.deltaY > 0) {
		}
	}}
>
	>
	<section class="landing-badge" id="badge">
		<span class="trial-text1">STAKE, CRAFT AND EARN!</span>
		<span class="trial-text2">RACE IN UNIQUE 3D RACES!</span>
		<span class="trial-text3">SAVE NANOTOPIA!</span>
	</section>
	<section class="landing-section" id="aboutthegame" style="padding-bottom: 50px">
		<div class="section-banner">
			<lottie-player
				src="/assets/landing/lottie/About_.json"
				background="transparent"
				speed="1"
				style=" margin-top: 80px;"
				autoplay
			/>
			<!-- <div class="landing-section-banner1 banner-detail-adjust1">
                <span class="section-banner-font"
                    class:fade-in = {currentSectionName == "aboutthegame"}
                    class:notransition = {currentSectionName != "aboutthegame"}
                >ABOUT THE GAME</span>
            </div>
            <div class="landing-section-banner2 banner-detail-adjust2">
                <img src="/assets/landing/common/titlebgdecorate1.svg" alt=""/>
            </div>
            <div class="landing-section-banner3 banner-detail-adjust3">
                <img src="/assets/landing/common/titlebgdecorate1.svg" alt=""/>
            </div>
            <div class="landing-section-banner4 banner-detail-adjust4">
                <img src="/assets/landing/common/titlebgdecorate.svg" alt=""/>
            </div>
            <div class="landing-section-banner5 banner-detail-adjust5">
                <span class="section-title-font">ABOUT THE GAME</span>
            </div> -->
		</div>
		<div class="section-container">
			<div class="aboutgame-container">
				<div class="aboutgame-content-text1">
					<img src="/assets/landing/common/subtitlesel.svg" alt="" />
					The world of Nanotopia is home to an advanced, utopian society. Its citizens are immersed in
					the beautiful cities and diverse landscapes, through exciting competitions and activities.
					At the top of this list are the prestigious Ultra Anima Races! <br />
					<br />
					Craft your own Anima Armor and become a legend of Nanotopia!
				</div>
				<div class="aboutgame-content-text1" style="margin-left: 50px; margin-top: 80px">
					<img src="/assets/landing/common/subtitlesel.svg" alt="" />
					But wait, using a secret time machine, an evil force arrives from the grim future. Determined
					to save themselves by conquering Nanotopia and harnessing the power of its people and resources.
					<br />
					<br />
					Be sure you are ready by building and upgrading your Anima Armor, soon it will be needed for
					far more than just racing!<br />
					<br />
					Nanotopia needs your help! Are you up to the challenge?
				</div>
				<div class="aboutgame-content-text1">
					<img src="/assets/landing/common/subtitlesel.svg" alt="" />
					The world of Nanotopia is home to an advanced, utopian society. Its citizens are immersed in
					the beautiful cities and diverse landscapes, through exciting competitions and activities.
					At the top of this list are the prestigious Ultra Anima Races! <br />
					<br />
					Craft your own Anima Armor and become a legend of Nanotopia!
				</div>
				<div class="aboutgame-content-text1" style="margin-left: 50px; margin-top: 80px">
					<img src="/assets/landing/common/subtitlesel.svg" alt="" />
					But wait, using a secret time machine, an evil force arrives from the grim future. Determined
					to save themselves by conquering Nanotopia and harnessing the power of its people and resources.
					<br />
					<br />
					Be sure you are ready by building and upgrading your Anima Armor, soon it will be needed for
					far more than just racing!<br />
					<br />
					Nanotopia needs your help! Are you up to the challenge?
				</div>
				<div class="aboutgame-content-text1">
					<img src="/assets/landing/common/subtitlesel.svg" alt="" />
					The world of Nanotopia is home to an advanced, utopian society. Its citizens are immersed in
					the beautiful cities and diverse landscapes, through exciting competitions and activities.
					At the top of this list are the prestigious Ultra Anima Races! <br />
					<br />
					Craft your own Anima Armor and become a legend of Nanotopia!
				</div>
				<div class="aboutgame-content-text1" style="margin-left: 50px; margin-top: 80px">
					<img src="/assets/landing/common/subtitlesel.svg" alt="" />
					But wait, using a secret time machine, an evil force arrives from the grim future. Determined
					to save themselves by conquering Nanotopia and harnessing the power of its people and resources.
					<br />
					<br />
					Be sure you are ready by building and upgrading your Anima Armor, soon it will be needed for
					far more than just racing!<br />
					<br />
					Nanotopia needs your help! Are you up to the challenge?
				</div>
				<div class="aboutgame-content-image">
					<div class="aboutgame-right-image">
						<!-- <img src="/assets/landing/aboutgame/synthetic_process.png"  style="width: 730px;" alt=""> -->
					</div>

					<!-- <div class="shell-info">
                        <img src="/assets/landing/aboutgame/shell.png" alt="">
                    </div>
                    <div class="nftcard-info">
                        <img src="/assets/landing/aboutgame/nftcard.png" alt="">
                    </div>
                    <div class="synthetic-info">
                        <img src="/assets/landing/aboutgame/synthetic.png" alt="">
                    </div>
                    <div class="material-info">
                        <img src="/assets/landing/aboutgame/floria.png" style="margin-left: 6px" alt="">
                        <img src="/assets/landing/aboutgame/sap.png" style="height: 60px; width: auto; margin-left: 43px;" alt="">
                        <img src="/assets/landing/aboutgame/versat.png" style="height: 53px; width: auto; " alt="">
                        <img src="/assets/landing/aboutgame/nanore.png" style="height: 50px; width: auto; margin-left: 40px;" alt="">
                        
                    </div>
                    <div class="completed-info">
                        <img src="/assets/landing/aboutgame/completednfts.png" alt="">
                    </div> -->
				</div>
			</div>
		</div>
	</section>
	<section class="landing-section" id="overview">
		<!-- https://codepen.io/cssnagarajan/pen/LVJdWb -->
		<div class="section-banner">
			<lottie-player
				src="/assets/landing/lottie/gameplay_overview.json"
				background="transparent"
				speed="1"
				style=" margin-top: 80px;"
				autoplay
			/>
			<!-- <div class="landing-section-banner1 banner-detail-adjust1">
                <span class="section-banner-font"
                    class:fade-in = {currentSectionName == "overview"}
                    class:notransition = {currentSectionName != "overview"}
                >GAMEPLAY OVERVIEW</span>
            </div>
            <div class="landing-section-banner2 banner-detail-adjust2">
                <img src="/assets/landing/common/titlebgdecorate1.svg" alt=""/>
            </div>
            <div class="landing-section-banner3 banner-detail-adjust3">
                <img src="/assets/landing/common/titlebgdecorate1.svg" alt=""/>
            </div>
            <div class="landing-section-banner4 banner-detail-adjust4">
                <img src="/assets/landing/common/titlebgdecorate.svg" alt=""/>
            </div>
            <div class="landing-section-banner5 banner-detail-adjust5">
                <span class="section-title-font">GAMEPLAY OVERVIEW</span>
            </div> -->
		</div>
		<div class="section-container">
			<div class="overview-container">
				<div
					class="overview-content-left"
					on:mousewheel={(e) => {
						e.preventDefault();
						e.stopPropagation();
						console.log(e);
						if (e.deltaY < 0) {
							show = show == 0 ? 0 : show - 1;
						} else if (e.deltaY > 0) {
							show = show == 5 ? 5 : show + 1;
						}
					}}
				>
					<div style="display: flex; flex-direction: column">
						{#each items as item, i}
							<Accordion {i} {show} {showCollapse} {item} />
						{/each}
					</div>
					<!-- <ul id="nav" style=" list-style-type: none; padding: 10px">
                        <li>
                            <group style="opacity: 1;">
                                <span class="overview-item-bg-effect3">1</span>
                                <span class="overview-item-bg-line"></span>
                                <img class="overview-item-bg-img" src="/assets/landing/common/subtitlesel-overview594.svg" alt="">
                                <span class="overview-item-bg-effect1"></span>
                                <span class="overview-item-bg-effect2"></span>
                            </group>

                            <a style="display: relative"> 
                                <p class="overview-item-font">
                                    Stake NFTs to Get Shellinium!
                                </p>
                            </a>
                            <div class="overview-item-contentfont">
                                    Stake NFTs on a Green Rabbit Flash Drive and claim the Green Rabbit in-game token - Shellinium!
                                        Shellinium is the backbone of the Green Rabbit economy and the main token you will need in order to progress in the game
                            </div>
                        </li>
                        <li>
                            <group>
                                <span class="overview-item-bg-effect3">2</span>
                                <span class="overview-item-bg-line"></span>
                                <img class="overview-item-bg-img" src="/assets/landing/common/subtitlesel-overview594.svg" alt="">
                                <span class="overview-item-bg-effect1"></span>
                                <span class="overview-item-bg-effect2"></span>
                            </group>
                            <a>
                                <p class="overview-item-font">
                                    Send Foragers on Missions!
                                </p>
                            </a>
                            <div class="overview-item-contentfont">
                                Assemble your team of Foragers, send them on missions and collect valuable materials which will be used for crafting your Anima Armours, upgrades, repairs and more!
                            </div>
                        </li>
                        <li>
                            <group>
                                <span class="overview-item-bg-effect3">3</span>
                                <span class="overview-item-bg-line"></span>
                                <img class="overview-item-bg-img" src="/assets/landing/common/subtitlesel-overview594.svg" alt="">
                                <span class="overview-item-bg-effect1"></span>
                                <span class="overview-item-bg-effect2"></span>
                            </group>
                            <a>
                                <p class="overview-item-font">
                                    Own Land in Nanotopia!
                                </p>
                            </a>
                            <div class="overview-item-contentfont">
                                Own you pieace of Nanotopia and collect fees everytime a Foragers uses your land to collect resources. Upgrade and maintain the land to make it more attractive for foragers and receive a higher yield! Trade the resources or use them to craft an Anima Armour!
                            </div>
                        </li>
                        <li>
                            <group>
                                <span class="overview-item-bg-effect3">4</span>
                                <span class="overview-item-bg-line"></span>
                                <img class="overview-item-bg-img" src="/assets/landing/common/subtitlesel-overview594.svg" alt="">
                                <span class="overview-item-bg-effect1"></span>
                                <span class="overview-item-bg-effect2"></span>
                            </group>
                            <a>
                                <p class="overview-item-font">
                                    Craft and assemble youR Anima Armour!
                                </p>
                            </a>
                            <div class="overview-item-contentfont">
                                Own you pieace of Nanotopia and collect fees everytime a Foragers uses your land to collect resources. Upgrade and maintain the land to make it more attractive for foragers and receive a higher yield! Trade the resources or use them to craft an Anima Armour!
                            </div>
                        </li>
                        <li>
                            <group>
                                <span class="overview-item-bg-effect3">5</span>
                                <span class="overview-item-bg-line"></span>
                                <img class="overview-item-bg-img" src="/assets/landing/common/subtitlesel-overview594.svg" alt="">
                                <span class="overview-item-bg-effect1"></span>
                                <span class="overview-item-bg-effect2"></span>
                            </group>
                            <a>
                                <p class="overview-item-font">
                                    HANG OUT IN THE METAVERSE
                                </p>
                            </a>
                            <div class="overview-item-contentfont">
                                Enter Nanotopia Metaverse and hang out the comminity, meet new people, discuss about game strategies and more. Test your Anima Armour by competing in various mini-games and discovering hidden places inside the Metaverse!
                            </div>
                        </li>
                        <li>
                            <group>
                                <span class="overview-item-bg-effect3">6</span>
                                <span class="overview-item-bg-line"></span>
                                <img class="overview-item-bg-img" src="/assets/landing/common/subtitlesel-overview594.svg" alt="">
                                <span class="overview-item-bg-effect1"></span>
                                <span class="overview-item-bg-effect2"></span>
                            </group>
                            <a>
                                <p class="overview-item-font">
                                    Race IN UNIQUE 3d RACES!
                                </p>
                            </a>
                            <div class="overview-item-contentfont">
                                Particiapte in unique parkour style 3D races: run, climb on obsticles, jump of buildings, slide though passages, apply the right strategy based on your Anima Armour characteristics and become the Legend on Nanotopia!
                            </div>
                        </li>
                    </ul> -->
				</div>
				<div class="overview-content-right">
					{#if show == 0}
						<div class="aboutgame-right-image">
							<img src="/assets/landing/overview/flashdrives.png" style="width: 355px;" alt="" />
						</div>
						<div class="flashdrive-button">
							<span>FLASH DRIVE</span>
						</div>
						<div class="button-style229">
							<p class="unselectable">CLAIM SHELLINIUM</p>
						</div>
					{:else if show == 1}
						<div class="aboutgame-right-image">
							<img
								src="/assets/landing/overview/missions.png"
								style="width: 375px; height: 333px"
								alt=""
							/>
						</div>
						<div class="button-style229">
							<p class="unselectable">SEE MISSION RESULTS</p>
						</div>
					{:else if show == 2}
						<div class="aboutgame-upgradeland-toplabels">
							<span class="aboutgame-upgradeland-font1">
								Players foraging<br />
								on your land
							</span>
							<span class="aboutgame-upgradeland-font2"> 3 </span>
							<span class="aboutgame-upgradeland-font1">
								Resources<br />
								gained
							</span>
							<span class="aboutgame-upgradeland-font2"> 15 </span>
						</div>
						<div class="aboutgame-right-image">
							<img
								src="/assets/landing/overview/propertyinnanotopia.png"
								style="width: 401px; height: 272px"
								alt=""
							/>
						</div>
						<div class="button-style229">
							<p class="unselectable">UPGRADE LAND</p>
						</div>
					{:else if show == 3}
						<div class="overview-anima-font">
							Assemble and fuse your<br />
							Anima Armour
						</div>
						<div class="aboutgame-right-image">
							<img
								src="/assets/landing/overview/anima.png"
								style="width: 302px; height: 337px"
								alt=""
							/>
						</div>
						<div class="button-style229" style="opacity: 0.4">
							<p class="unselectable">FUSE ANIMA ARMOR</p>
						</div>
					{:else if show == 5}
						<div class="button-style229">
							<p class="unselectable">PLAY GREEN RABBIT</p>
						</div>
					{/if}
					<!-- <div class="shell-info">
                        <img src="/assets/landing/aboutgame/shell.png" alt="">
                    </div>
                    <div class="nftcard-info">
                        <img src="/assets/landing/aboutgame/nftcard.png" alt="">
                    </div>
                    <div class="synthetic-info">
                        <img src="/assets/landing/aboutgame/synthetic.png" alt="">
                    </div>
                    <div class="material-info">
                        <img src="/assets/landing/aboutgame/floria.png" style="margin-left: 6px" alt="">
                        <img src="/assets/landing/aboutgame/sap.png" style="height: 60px; width: auto; margin-left: 43px;" alt="">
                        <img src="/assets/landing/aboutgame/versat.png" style="height: 53px; width: auto; " alt="">
                        <img src="/assets/landing/aboutgame/nanore.png" style="height: 50px; width: auto; margin-left: 40px;" alt="">
                        
                    </div>
                    <div class="completed-info">
                        <img src="/assets/landing/aboutgame/completednfts.png" alt="">
                    </div> -->
				</div>
			</div>
		</div>
	</section>
	<section class="landing-section" id="aboutgreenrabbit">
		<div class="section-banner">
			<lottie-player
				src="/assets/landing/lottie/About_GR.json"
				background="transparent"
				speed="1"
				style=" margin-top: 80px;"
				autoplay
			/>
			<!-- <div class="landing-section-banner1 banner-detail-adjust1">
                <span class="section-banner-font"
                    class:fade-in = {currentSectionName == "aboutgreenrabbit"}
                    class:notransition = {currentSectionName != "aboutgreenrabbit"}
                >ABOUT GREEN RABBIT</span>
            </div>
            <div class="landing-section-banner2 banner-detail-adjust2">
                <img src="/assets/landing/common/titlebgdecorate1.svg" alt=""/>
            </div>
            <div class="landing-section-banner3 banner-detail-adjust3">
                <img src="/assets/landing/common/titlebgdecorate1.svg" alt=""/>
            </div>
            <div class="landing-section-banner4 banner-detail-adjust4">
                <img src="/assets/landing/common/titlebgdecorate.svg" alt=""/>
            </div>
            <div class="landing-section-banner5 banner-detail-adjust5">
                <span class="section-title-font">ABOUT GREEN RABBIT</span>
            </div> -->
		</div>
		<div class="section-container">
			<div class="aboutgreenrabbit-container">
				<div class="aboutgreenrabbit-item-row">
					<div class="subtitle-description">
						<div class="subtitle-description-titlepart">
							<span>OUR STORY</span>
							<img src="/assets/landing/common/subtitlesel-aboutgreenrabbit.svg" alt="" />
						</div>
						<div class="subtitle-description-body">
							Founded in 2021, Green Rabbit is a world wide metaverse<br />
							creative team focused on NFT game design and <br />
							development. A diverse group with combined skills in NFT<br />
							creation, cryptocurrency, as well as game and art design.<br />
							Green Rabbit is set to become the premiere team in the NFT<br />
							gaming space.
						</div>
					</div>
					<div class="subtitle-description">
						<div class="subtitle-description-titlepart">
							<span>MILESTONES</span>
							<img src="/assets/landing/common/subtitlesel-aboutgreenrabbit.svg" alt="" />
						</div>
						<div class="subtitle-description-body">
							Broke the record as the largest pack sale in 2021 on WAX<br /><br />
							More than 7.000 active players<br /><br />
							Lorem ipsum dolor sit amet qyot lorem siut amet<br /><br />
							Lorem ipsum dolor sit amet qyot lorem siut amet<br />
						</div>
					</div>

					<div class="aboutgreenrabbit-img-row" style="margin-top: 45px">
						<div class="subtitle-imagepart">
							<div class="subtitle-description-titlepart">
								<span>TEAM</span>
								<img src="/assets/landing/common/subtitlesel-aboutgreenrabbit.svg" alt="" />
							</div>
							<div class="subtitle-description-body">
								<div class="team-imagelist">
									<div class="swiper badgeSwiper">
										<LandingCarousel perPage={6} dots={true} loop={true} pagination={false}>
											<div slot="right-control" class="nav-right-btn flex center unselectable">
												<img src="/assets/landing/aboutgreenrabbit/slideright.png" alt="" />
											</div>
											{#each teamItem as eachitem}
												<SplideSlide>
													<div class="team-individual-info">
														<img src={eachitem.pic} alt="" />
														<span class="team-individual-text-bgfont">{@html eachitem.name}</span>
														<span class="team-individual-text-smallfont">{@html eachitem.role}</span
														>
													</div>
												</SplideSlide>
											{/each}
										</LandingCarousel>
									</div>
								</div>
								<!-- <div class="team-imagelist">
                                    <div class="nextbutton-image-toend">
                                        <img src="/assets/landing/common/arrownext.svg" alt=""/> 
                                        <img src="/assets/landing/common/arrow-character.svg" alt=""/> 
                                    </div>
                                    <div class="mask-image-end">
                                        <img src="/assets/landing/aboutgreenrabbit/mask.png" alt=""/> 
                                    </div>
    
                                    <div class="team-individual-info">
                                        <img src="/assets/landing/aboutgreenrabbit/nvenom.png" alt=""/>
                                        <span class="team-individual-text-bgfont">NVENOM</span>
                                        <span class="team-individual-text-smallfont">Management</span>
                                    </div>
                                    <div class="team-individual-info">
                                        <img src="/assets/landing/aboutgreenrabbit/lorena.png" alt=""/>
                                        <span class="team-individual-text-bgfont">DrPr0ph3t</span>
                                        <span class="team-individual-text-smallfont">Management</span>
                                    </div>
                                    <div class="team-individual-info">
                                        <img src="/assets/landing/aboutgreenrabbit/drpro.png" alt=""/>
                                        <span class="team-individual-text-bgfont">Lorena</span>
                                        <span class="team-individual-text-smallfont">Management</span>
                                    </div>
                                    <div class="team-individual-info">
                                        <img src="/assets/landing/aboutgreenrabbit/pigwig.png" alt=""/>
                                        <span class="team-individual-text-bgfont">PIGWIG</span>
                                        <span class="team-individual-text-smallfont">Lead-Smart Contract<br>
                                            Development
                                        </span>
                                    </div>
                                    <div class="team-individual-info">
                                        <img src="/assets/landing/aboutgreenrabbit/stermerlin.png" alt=""/>
                                        <span class="team-individual-text-bgfont">STERSMERLIN</span>
                                        <span class="team-individual-text-smallfont">Lead - Tokenomics</span>
                                    </div>
                                    <div class="team-individual-info">
                                        <img src="/assets/landing/aboutgreenrabbit/zhuckly.png" alt=""/>
                                        <span class="team-individual-text-bgfont">ZHUCKLY<br>(GEORGE)</span>
                                        <span class="team-individual-text-smallfont">Unity Team</span>
                                    </div>
                                    <div class="team-individual-info">
                                        <img src="/assets/landing/aboutgreenrabbit/victory.png" alt=""/>
                                        <span class="team-individual-text-bgfont">Victory</span>
                                        <span class="team-individual-text-smallfont">Unity Team</span>
                                    </div>                            
                                    <div class="team-individual-info">
                                        <img src="/assets/landing/aboutgreenrabbit/zhuckly1.png" alt=""/>
                                        <span class="team-individual-text-bgfont">NVENOM</span>
                                        <span class="team-individual-text-smallfont">Management</span>
                                    </div>
                                </div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- subtitlesel-aboutgreenrabbit.svg -->
		</div>
	</section>
	<section class="landing-section" id="roadmap">
		<div class="section-banner">
			<lottie-player
				src="/assets/landing/lottie/road_map.json"
				background="transparent"
				speed="1"
				style=" margin-top: 80px;"
				autoplay
			/>
			<!-- <div class="landing-section-banner1 banner-detail-adjust1">
                <span class="section-banner-font"
                    class:fade-in = {currentSectionName == "roadmap"}
                    class:notransition = {currentSectionName != "roadmap"}
                >ROAD MAP</span>
            </div>
            <div class="landing-section-banner2 banner-detail-adjust2">
                <img src="/assets/landing/common/titlebgdecorate1.svg" alt=""/>
            </div>
            <div class="landing-section-banner3 banner-detail-adjust3">
                <img src="/assets/landing/common/titlebgdecorate1.svg" alt=""/>
            </div>
            <div class="landing-section-banner4 banner-detail-adjust4">
                <img src="/assets/landing/common/titlebgdecorate.svg" alt=""/>
            </div>
            <div class="landing-section-banner5 banner-detail-adjust5">
                <span class="section-title-font">ROAD MAP</span>
            </div> -->
		</div>
		<div class="section-container">
			<div class="roadmapstep-container">
				<div class="roadmap-row">
					<div class="roadmap-content">
						<img src="/assets/landing/roadmap/checked.png" alt="" />
						<p>1</p>
						<div class="step-name-and-status">
							<span>Green Rabbit Staking</span>
							<span style="color: #35FBBD;">Completed</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-proceed-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img src="/assets/landing/roadmap/checked.png" alt="" />
						<p>2</p>
						<div class="step-name-and-status">
							<span>Greenprint Crafting</span>
							<span style="color: #35FBBD;">Completed</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-proceed-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img src="/assets/landing/roadmap/checked.png" alt="" />
						<p>3</p>
						<div class="step-name-and-status">
							<span>Leaderboards</span>
							<span style="color: #35FBBD;">Completed</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-proceed-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img src="/assets/landing/roadmap/checked.png" alt="" />
						<p>4</p>
						<div class="step-name-and-status">
							<span>Greenprint Fusion</span>
							<span style="color: #35FBBD;">Completed</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-proceed-bottompoint" />
					</div>
				</div>
				<div class="roadmap-row">
					<div class="roadmap-content">
						<img src="/assets/landing/roadmap/checked.png" alt="" />
						<p>8</p>
						<div class="step-name-and-status">
							<span>Materials Foraging</span>
							<span style="color: #35FBBD;">Completed</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-proceed-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img src="/assets/landing/roadmap/checked.png" alt="" />
						<p>7</p>
						<div class="step-name-and-status">
							<span>Loza Partner Staking</span>
							<span style="color: #35FBBD;">Completed</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-proceed-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img src="/assets/landing/roadmap/checked.png" alt="" />
						<p>6</p>
						<div class="step-name-and-status">
							<span>Ascendant Orb Fusion</span>
							<span style="color: #35FBBD;">Completed</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-proceed-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img src="/assets/landing/roadmap/checked.png" alt="" />
						<p>5</p>
						<div class="step-name-and-status">
							<span>Greenprint Boosting</span>
							<span style="color: #35FBBD;">Completed</span>
						</div>
						<div class="roadmap-proceed-rightline" />
						<div class="roadmap-proceed-line" />
						<div class="roadmap-proceed-bottompoint" />
					</div>
				</div>
				<div class="roadmap-row">
					<div class="roadmap-content">
						<div class="roadmap-proceed-leftline" />
						<img src="/assets/landing/roadmap/checked.png" alt="" />
						<p>9</p>
						<div class="step-name-and-status">
							<span>2D Unity Mini Game</span>
							<span style="color: #35FBBD;">Completed</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-todo-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img class="roadmap-uncheckedimg" src="/assets/landing/roadmap/unchecked.png" alt="" />
						<p>10</p>
						<div class="step-name-and-status">
							<span>Creek Partner Staking</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-todo-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img class="roadmap-uncheckedimg" src="/assets/landing/roadmap/unchecked.png" alt="" />
						<p>11</p>
						<div class="step-name-and-status">
							<span>Component Crafting<br />Missions</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-todo-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img class="roadmap-uncheckedimg" src="/assets/landing/roadmap/unchecked.png" alt="" />
						<p>12</p>
						<div class="step-name-and-status">
							<span>Armor Fusion</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-todo-bottompoint" />
					</div>
				</div>
				<div class="roadmap-row">
					<div class="roadmap-content">
						<img src="/assets/landing/roadmap/checked.png" alt="" />
						<p>16</p>
						<div class="step-name-and-status">
							<span>Armor Upgrades</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-todo-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img class="roadmap-uncheckedimg" src="/assets/landing/roadmap/unchecked.png" alt="" />
						<p>15</p>
						<div class="step-name-and-status">
							<span>Foraging Land Offering</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-todo-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img class="roadmap-uncheckedimg" src="/assets/landing/roadmap/unchecked.png" alt="" />
						<p>14</p>
						<div class="step-name-and-status">
							<span>V1 Optimization Chip</span>
						</div>
						<div class="roadmap-proceed-line" />
						<div class="roadmap-todo-bottompoint" />
					</div>
					<div class="roadmap-content">
						<img class="roadmap-uncheckedimg" src="/assets/landing/roadmap/unchecked.png" alt="" />
						<p>13</p>
						<div class="step-name-and-status">
							<span>V1 Stats Chip</span>
						</div>
						<div class="roadmap-proceed-rightline" />
						<div class="roadmap-proceed-line" />
						<div class="roadmap-todo-bottompoint" />
					</div>
				</div>
				<div class="roadmap-row">
					<div class="roadmap-content roadmap-todo-bottomline">
						<img class="roadmap-uncheckedimg" src="/assets/landing/roadmap/unchecked.png" alt="" />
						<p>17</p>
						<div class="step-name-and-status">
							<span>Ultra Anima Unity Races</span>
						</div>
						<div class="roadmap-todo-leftline" />
						<div class="roadmap-todo-line" />
						<div class="roadmap-todo-bottompoint" />

						<div class="roadmap-todo-pointpoint" style="right: -45px" />
						<div class="roadmap-todo-pointpoint" style="right: -60px" />
						<div class="roadmap-todo-pointpoint" style="right: -75px" />
						<div class="roadmap-todo-pointpoint" style="right: -90px" />
					</div>
				</div>
			</div>
			<!-- <div class="login-pannel">
                <img src="/assets/landing/login/bg.png" alt="" >
        </div> -->
		</div>
	</section>
	<section class="landing-section" style="height: calc(100vh + 132px);" id="readynanotopia">
		<div class="section-banner">
			<lottie-player
				src="/assets/landing/lottie/getting_started.json"
				background="transparent"
				speed="1"
				style=" margin-top: 80px;"
				autoplay
			/>
			<!-- <div class="landing-section-banner1 banner-detail-adjust1">
                    <span class="section-banner-font"
                        class:fade-in = {currentSectionName == "readynanotopia"}
                        class:notransition = {currentSectionName != "readynanotopia"}
                    >READY TO RULE NANOTOPIA</span>
                </div>
                <div class="landing-section-banner2 banner-detail-adjust2">
                    <img src="/assets/landing/common/titlebgdecorate1.svg" alt=""/>
                </div>
                <div class="landing-section-banner3 banner-detail-adjust3">
                    <img src="/assets/landing/common/titlebgdecorate1.svg" alt=""/>
                </div>
                <div class="landing-section-banner4 banner-detail-adjust4">
                    <img src="/assets/landing/common/titlebgdecorate.svg" alt=""/>
                </div>
                <div class="landing-section-banner5 banner-detail-adjust5">
                    <span class="section-title-font">READY TO RULE NANOTOPIA?</span>
                </div> -->
		</div>
		<div class="section-container">
			<div class="readyrule-container">
				<span class="section-title-font-readyrule">Start Playing Green Rabbit Now!</span>
				<div class="play-greenrabbit-button">
					<div
						class="button-style249"
						on:click={() => {
							window.location = '/dashboard';
						}}
					>
						<p class="unselectable">PLAY GREEN RABBIT</p>
					</div>
				</div>
				<div class="readyrule-before-starting">
					<p class="readyrule-content-font1">NEED MORE INFO BEFORE STARTING?</p>
					<img src="/assets/landing/nanotopia/needmore.png" alt="" />
				</div>
				<div class="readyrule-quickguide">
					<div class="readyrule-quickguide-col">
						<p class="readyrule-quickguide-font">
							Master the first steps of the game<br />with our quick guide
						</p>
						<div class="button-style249">
							<p class="unselectable">SEE QUICK GUIDE</p>
						</div>
					</div>
					<div class="readyrule-quickguide-col">
						<p class="readyrule-quickguide-font">Read the complete<br />Green Rabbit Gameplay</p>
						<div class="button-style249">
							<p class="unselectable">COMPLETE GAMEPLAY</p>
						</div>
					</div>
				</div>
				<div class="readyrule-bg2character">
					<div class="readyrule-doublecharacter">
						<img src="/assets/landing/readytorule/greenrabbit1.png" alt="" />
					</div>
					<div class="readyrule-doublecharacter">
						<img src="/assets/landing/readytorule/greenrabbit2.png" alt="" />
						<div class="readyrule-shadow-character">
							<img src="/assets/landing/readytorule/greenrabbit3.png" alt="" />
						</div>
					</div>
				</div>
				<!-- <div class="readyrule-character-select">
                        <div class="readyrule-selected-cutimg">
                            <img src="/assets/landing/readytorule/seltop.svg" style="position: absolute; top: 0px; left: 0px;" alt=""/>
                            <img src="/assets/landing/readytorule/selbottom.svg" style="position: absolute; bottom: 0px; right: 0px;" alt=""/>
                        </div>
                    </div> -->
				<div class="readyrule-bottommask" />
			</div>
		</div>
	</section>
</div>

<style>
	/* partner : https://www.leonicornswap.com/ */
	/* swithcer: https://alvarotrigo.com/blog/create-a-slidebar-bullet-navigation-to-smoothly-snap-to-sections/ */

	/* https://www.npmjs.com/package/svelte-video-player */

	/* body{
                background-color: #0E1743;
            } */
	.bg-wrapper {
		display: flex;
		flex-direction: column;
		width: 100vw;
	}
	/* .bg-wrapper:before{
            position: absolute;
            content: "";
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-image: url('/assets/landing/bg.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position-x: center;
            opacity: 0.8;
         } */
	section {
		/* border-bottom: 1px solid white; */
		padding: 1rem;
		min-height: 100vh;
		scroll-snap-align: start;
		text-align: center;
		position: relative;
	}
	.landing-header {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		width: 100vw;
		z-index: 999;
		margin-top: 10px;
	}
	.landing-footer {
		min-height: 132px;
		height: 132px;
		width: 100vw;
		display: flex;
		justify-content: space-around;
		background-color: #0e1425;
		background-size: cover;
		background-position-x: center;
		align-items: center;
		margin: -8px;
		z-index: 999;
	}
	.landing-footer-leftpart {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
	.landing-footer-rightpart {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}
	.url-iconlist {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
	}
	.footer-font1 {
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 18px;
		display: flex;
		align-items: center;
		color: #ffffff;
		width: 100%;
	}
	.footer-font2 {
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 14px;
		display: flex;
		align-items: center;
		color: #ffffff;
	}
	.footer-font3 {
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 14px;
		display: flex;
		align-items: center;
		letter-spacing: 0.03em;
		color: #ffffff;
		width: 100%;
		justify-content: flex-end;
	}
	.menu-contents {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 169px;
	}
	.menu-contents p {
		font-family: Obvia;
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 18px;
		display: flex;
		align-items: center;
		color: #ffffff;
		margin-right: 40px;
		cursor: pointer;
		border-bottom: 2.88px solid transparent;
	}

	.landing-badge {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		background-image: url('/assets/landing/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position-x: center;
		width: 100vw;
		min-height: calc(100vh + 30px);
		margin: -8px;
		margin-top: -30px;
	}
	.landing-badge span {
		font-family: Airstrike;
		font-style: normal;
		font-weight: normal;
		font-size: 60px;
		line-height: 52px;
		display: flex;
		align-items: center;
		color: #ffffff;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 6px 0px #000000;
	}
	.trial-text1 {
		display: flex;
		margin-top: 308px;
		margin-left: 213px;
	}
	.trial-text2 {
		margin-left: 184px;
		margin-top: 18px;
	}
	.trial-text3 {
		margin-left: 153px;
		margin-top: 18px;
	}
	.landing-section {
		position: relative;
		width: 100vw;
		/* min-height: 100vh;
            max-width: 100vw; */
		display: flex;
		/* background-image: url('/assets/landing/bg.png'); */
		/* background-image: url('/assets/landing/bg-mask.png'); */
		background: #0e1743;
		background-size: cover;
		background-position-x: center;
		/* background-position-y: center; */
		flex-direction: column;
		margin: -8px;
		scroll-snap-align: start;
		padding-bottom: 100px;
		overflow: hidden;
		/* background-image: url('/assets/landing/bg-mask.png');
            background-size: contain; */
		background-repeat: repeat-y;
	}
	.section-banner {
		display: flex;
		flex-direction: column;
	}
	.landing-section-banner1 {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		top: 0px;
		width: 100%;
	}
	.landing-section-banner2 {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* left: calc(50%); */
		left: -50px;
		top: 0px;
		width: 100%;
		/* transform: translateX(-50%);    */
	}
	.landing-section-banner3 {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* left: calc(50%); */
		left: -50px;
		top: 0px;
		width: 100%;
		/* transform: translateX(-50%);         */
	}
	.landing-section-banner4 {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* left: calc(50%); */
		left: -50px;
		top: 0px;
		width: 100%;
		/* transform: translateX(-50%);         */
	}
	.landing-section-banner5 {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* left: calc(50%); 
            transform: translateX(-50%);        */
	}
	.banner-detail-adjust1 {
		top: 85px;
		z-index: 999;
	}
	.banner-detail-adjust2 {
		top: 148px;
		max-width: 379px;
		margin-left: -143px;
	}
	.banner-detail-adjust3 {
		top: 190px;
		max-width: 379px;
		margin-left: -115px;
	}
	.banner-detail-adjust4 {
		top: 175px;
		max-width: 559px;
		margin-left: -176px;
	}
	.banner-detail-adjust5 {
		top: 150px;
	}
	.section-banner-font {
		color: white;
		font-family: Airstrikeout;
		font-style: normal;
		font-weight: normal;
		font-size: 6vw;
		line-height: 105px;
		display: flex;
		align-items: center;
		opacity: 0;
		transition: 3s ease all;
		text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
		justify-content: center;
		width: 100%;
	}
	.fade-in {
		opacity: 0.1;
	}
	.notransition {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		transition: none !important;
		opacity: 0;
	}
	.unset-animation {
		animation: unset;
	}
	.fadein-animation {
		animation: fadein 3s ease infinite;
	}
	/* .m-fadeOut {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s linear 300ms, opacity 300ms;
    }
        .m-fadeIn {
            visibility: visible;
            opacity: 1;
            transition: visibility 0s linear 0s, opacity 300ms;
        } */
	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.1;
		}
	}
	@keyframes pulse {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0.1;
		}
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
		/* text-align: center; */
		letter-spacing: 0.03em;
		text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
		justify-content: flex-start;
	}
	.section-container {
		display: flex;
		z-index: 1;
		margin-top: 242px;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.aboutgame-container {
		display: flex;
		width: 100vw;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.aboutgame-content-text1 {
		position: relative;
		width: 750px;
		z-index: 3;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 30px;
		display: flex;
		align-items: center;
		text-align: left;
		color: #ffffff;
	}
	.aboutgame-content-text1 img {
		position: absolute;
		left: -17px;
		top: 0px;
		width: 32.66px;
		height: auto;
	}
	/* .aboutgame-content-image{
            position: relative;
            margin-left: 39px;
            width: 500px;
            height: 300px;
            border: 1px solid yellow;
            width: 800px;
            display: flex;
            height: 30vh;
            min-width: 78vw;
            margin-top: -120px;    
            width: 70%;
            height: 573px;
        } */
	.aboutgame-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.shell-info {
		position: absolute;
		top: 460px;
		left: 40px;
	}
	.shell-info img {
		width: 220px;
	}
	.nftcard-info {
		position: absolute;
		bottom: 10px;
		right: 340px;
	}
	.nftcard-info img {
		width: 220px;
	}
	.synthetic-info {
		position: absolute;
		top: 280px;
		left: 20px;
	}
	.synthetic-info img {
		width: 161px;
	}
	.material-info {
		position: absolute;
		top: 390px;
		right: 80px;
		flex-wrap: wrap;
		width: 180px;
		display: flex;
		align-items: flex-start;
	}
	.material-info img {
		width: 52px;
		margin-top: 15px;
	}
	.completed-info {
		position: absolute;
		top: 40px;
		right: 10px;
	}
	.completed-info img {
		width: 220px;
	}
	/* .completed-info:after{
            position: absolute;
            width: 216px;
            content: url('/assets/landing/aboutgame/itemsel.png');
            bottom: 0px;
            left: 0px;
        } */

	.aboutgame-right-image {
		display: flex;
		align-items: flex-start;
		z-index: 1;
	}
	.aboutgame-right-image img {
		width: 52px;
		margin-top: 15px;
	}
	/* OVERVIEW PART START */
	.button-style229 {
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
	.button-style229 p {
		font-family: "Forza A", "Forza B";
		font-style: italic;
		font-weight: normal;
		font-size: 18px;
		line-height: 22px;
		display: flex;
		align-items: center;
		color: #ffffff;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.button-style229:before {
		content: url('/assets/landing/button/button229-1.svg');
		position: absolute;
		left: 9px;
		top: 10px;
	}
	.flashdrive-button {
		display: flex;
		width: 208px;
		height: 40px;
		background: #c4c4c4;
		justify-content: center;
		align-items: center;
		margin-top: -5px;
	}
	.flashdrive-button span {
		font-family: Airstrike;
		font-style: normal;
		font-weight: normal;
		font-size: 26px;
		line-height: 24px;
		display: flex;
		align-items: center;
		color: hsl(0, 0%, 0%);
	}
	.overview-container {
		display: flex;
		width: 100vw;
		justify-content: center;
		align-items: center;
		padding-left: 20vw;
		padding-right: 20vw;
	}
	.overview-content-left {
		z-index: 2;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 30px;
		display: flex;
		align-items: center;
		text-align: left;
		color: #ffffff;
		width: 60vw;
	}
	.overview-content-right {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 30vw;
	}
	.aboutgame-upgradeland-toplabels {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.aboutgame-upgradeland-font1 {
		margin-left: 30px;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 13px;
		line-height: 16px;
		display: flex;
		align-items: center;
		letter-spacing: 0.02em;
		color: #ffffff;
		text-align: left;
	}
	.aboutgame-upgradeland-font2 {
		margin-left: 15px;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 22px;
		display: flex;
		align-items: center;
		letter-spacing: 0.02em;
		color: #36ffc0;
	}
	.overview-anima-font {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 22px;
		display: flex;
		align-items: center;
		text-align: center;
		letter-spacing: 0.02em;
		color: #ffffff;
	}

	#nav {
		float: left;
		width: 770px;
		/* border: 1px solid red; */
	}
	#nav li {
		position: relative;
	}
	#nav li a {
		display: inline-block;
		background: transparent;
		/* border: 1px solid blue; */
		text-decoration: none;
		color: #000;
		height: 85px;
		opacity: 0.6;
		position: relative;
	}
	#nav li div {
		display: none;
	}
	group {
		opacity: 0;
	}
	.overview-item-show-opacity {
		opacity: 1;
	}
	.overview-item-font {
		font-family: Airstrike;
		font-style: normal;
		font-weight: normal;
		font-size: 32px;
		line-height: 24px;
		display: flex;
		align-items: center;
		letter-spacing: 0.02em;
		text-align: left;
		color: #efefef;
		text-transform: uppercase;
		cursor: pointer;
		z-index: 999;
	}
	.overview-item-bg-effect1 {
		position: absolute;
		background: linear-gradient(270deg, #192664 1.18%, rgba(25, 38, 100, 0) 100%);
		opacity: 0.7;
		width: 633px;
		height: 78px;
		top: -12px;
		left: -77px;
	}
	.overview-item-bg-effect2 {
		position: absolute;
		width: 633px;
		height: 40px;
		left: -55px;
		top: 41px;
		background: linear-gradient(270deg, #1e2e7b 1.18%, rgba(25, 38, 100, 0) 100%);
		opacity: 0.9;
	}
	.overview-item-bg-effect3 {
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
	.overview-item-bg-line {
		position: absolute;
		width: 644px;
		height: 0px;
		left: -69px;
		top: 65px;
		border: 1px solid #ffffff;
	}
	.overview-item-bg-img {
		position: absolute;
		width: 594px;
		height: auto;
		top: 66px;
		left: -143px;
	}
	.overview-item-content {
		height: 220px;
		border: 1px solid red;
	}
	.overview-item-contentfont {
		padding-left: 10px;
		padding-top: 10px;
		display: flex;
		width: 700px;
		height: 100px;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		text-align: left;
		font-size: 18px;
		line-height: 28px;
		color: #ffffff;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	:global(.accordion) {
		width: 100%;
		max-width: 450px;
		margin: 0 auto;
	}

	:global(.accordion-item) {
		border-bottom: 1px solid rgb(100, 120, 140);
	}

	.header {
		display: flex;
		align-items: center;
		padding: 0.5em;
	}
	/* OVERVIEW PART END */

	/* ABOUT GREEN RABBIT START */
	.aboutgreenrabbit-container {
		display: flex;
		width: 100vw;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.aboutgreenrabbit-item-row {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		flex-wrap: wrap;
	}
	.aboutgreenrabbit-img-row {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		flex-wrap: wrap;
	}
	.aboutgreenrabbit-content-text {
		z-index: 2;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 30px;
		display: flex;
		align-items: center;
		color: #ffffff;
		flex-wrap: wrap;
	}
	.subtitle-description {
		display: flex;
		flex-direction: column;
		/* margin-left: calc(25%);
            transform: translateX(-50%);
            width: 50%; */
	}
	.subtitle-imagepart {
		display: flex;
		flex-direction: column;
		/* margin-left: calc(50%);
            transform: translateX(-50%); */
		width: 100%;
	}
	.subtitle-description-titlepart {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 245px;
		height: auto;
	}

	/* .with-end-mask{
            position: absolute;
            top: 0px;
            right: 30px;
            background-image: url('/assets/landing/aboutgreenrabbit/mask.png');
            background-repeat: no-repeat;
            background-size: contain;
        } */
	.subtitle-description-titlepart span {
		font-family: Airstrike;
		font-style: normal;
		font-weight: normal;
		font-size: 28px;
		line-height: 24px;
		display: flex;
		align-items: center;
		letter-spacing: 0.03em;
		color: #ffffff;
		text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
		z-index: 1;
		position: absolute;
		top: 0px;
	}
	.subtitle-description-titlepart img {
		position: absolute;
		top: 12px;
	}
	.subtitle-description-body {
		margin-top: 60px;
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 28px;
		color: #ffffff;
		text-align: left;
		margin-left: 46px;
	}
	.team-imagelist {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		cursor: pointer;
	}
	.mask-image-end {
		display: relative;
		width: 100%;
	}
	.mask-image-end img {
		position: absolute;
		top: 0px;
		right: -4px;
		width: 430px;
		height: 396px;
	}
	.nextbutton-image-toend {
		width: 100%;
	}
	.nextbutton-image-toend img:nth-child(1) {
		position: absolute;
		bottom: 0px;
		right: 0px;
		width: 101px;
		height: 40px;
		z-index: 1;
	}
	.nextbutton-image-toend img:nth-child(2) {
		position: absolute;
		bottom: 8px;
		right: 40px;
		width: 18px;
		height: auto;
		z-index: 1;
	}
	.team-individual-info {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.team-individual-info img {
		max-width: unset;
		width: 140px;
		height: auto;
		cursor: pointer;
	}
	.team-individual-text-bgfont {
		font-family: Airstrike;
		font-style: normal;
		font-weight: normal;
		font-size: 26px;
		line-height: 23px;
		display: flex;
		align-items: center;
		text-align: center;
		color: #ffffff;
		margin-top: 31px;
		text-transform: uppercase;
	}
	.team-individual-text-smallfont {
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 26px;
		color: #ffffff;
		margin-top: 6px;
		text-align: center;
	}

	.swiper {
		max-width: 1440px;
		margin: auto;
		padding-bottom: 40px;
		padding-top: 20px;
	}
	.badgeSwiper .splide--slide {
		padding-bottom: 50px !important;
	}

	.nav-left-btn {
		width: 95px;
		height: auto;
		cursor: pointer;
		z-index: 5;
		position: absolute;
		opacity: 0.6;
	}
	.nav-right-btn {
		width: 95px;
		height: auto;
		cursor: pointer;
		z-index: 5;
		position: absolute;
		opacity: 1;
	}

	/* ABOUT GREEN RABBIT END */
	/* ROADMAP START */
	.roadmapstep-container {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		padding-bottom: 10px;
	}
	.roadmap-row {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		margin-top: 40px;
	}
	.roadmap-content {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		position: relative;
		padding-bottom: 8px;
		height: 50px;
		width: 280px;
	}
	.roadmap-content img {
		position: absolute;
		width: 50px;
		/* margin-left: -16px; */
		left: -17px;
		bottom: 13px;
	}
	.roadmap-uncheckedimg {
		position: absolute;
		width: 32px !important;
		/* margin-left: -16px; */
		left: -10px !important;
		bottom: 21px !important;
	}
	.roadmap-content p {
		/* position: absolute;
            left: 49px;
            bottom: -11px; */
		font-family: Obvia;
		font-style: normal;
		font-weight: normal;
		font-size: 31px;
		line-height: 31px;
		text-align: right;
		letter-spacing: 0.05em;
		color: #ffffff;
		margin-left: 44px;
	}
	.roadmap-proceed-bottomline {
		border-bottom: 2.95px solid #36ffc0;
	}
	.roadmap-todo-line {
		position: absolute;
		left: 0px;
		top: -40px;
		width: 100%;
		height: calc(100% + 40px);
		border-bottom: 2.95px solid #5a5b5b;
	}
	.roadmap-proceed-bottompoint {
		position: absolute;
		left: 0px;
		bottom: -5.4px;
		background: #36ffc0;
		border-bottom: 2.95px solid #36ffc0;
		box-sizing: border-box;
		box-shadow: 0px 0px 11.0299px #36ffc0;
		border-radius: 1.47px;
		width: 10.29px;
		height: 10.29px;
	}
	.roadmap-proceed-line {
		position: absolute;
		left: 0px;
		top: -40px;
		width: 100%;
		height: calc(100% + 40px);
		border-bottom: 2.95px solid #36ffc0;
	}
	.roadmap-todo-pointpoint {
		position: absolute;
		right: -45px;
		bottom: -12.4px;
		background: #5a5b5b;
		border-bottom: 2.95px solid #5a5b5b;
		box-sizing: border-box;
		border-radius: 1.47px;
		width: 6.29px;
		height: 6.29px;
	}
	.roadmap-proceed-rightline {
		position: absolute;
		left: 0px;
		top: -40px;
		width: 100%;
		height: calc(100% + 40px);
		border-right: 2.95px solid #36ffc0;
	}
	.roadmap-todo-rightline {
		position: absolute;
		left: 0px;
		top: -40px;
		width: 100%;
		height: calc(100% + 40px);
		border-right: 2.95px solid #5a5b5b;
	}
	.roadmap-proceed-leftline {
		position: absolute;
		left: -40px;
		top: -42px;
		width: 45px;
		height: calc(100% + 42px);
		border-left: 2.95px solid #36ffc0;
		border-top: 2.95px solid #36ffc0;
		border-bottom: 2.95px solid #36ffc0;
		border-radius: 2.95px;
	}
	.roadmap-todo-leftline {
		position: absolute;
		left: -40px;
		top: -42px;
		width: 45px;
		height: calc(100% + 42px);
		border-left: 2.95px solid #5a5b5b;
		border-top: 2.95px solid #5a5b5b;
		border-bottom: 2.95px solid #5a5b5b;
		border-radius: 2.95px;
	}
	.roadmap-todo-bottompoint {
		position: absolute;
		left: 0px;
		bottom: -5.4px;
		background: #5a5a5a;
		border: 2.94132px solid #5a5b5b;
		box-sizing: border-box;
		border-radius: 1.47px;
		width: 10.29px;
		height: 10.29px;
	}
	.step-name-and-status {
		display: flex;
		/* position: absolute;
            left: 10px;
            bottom: 10px; */
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		border-left: 1px solid #59605e;
		padding-left: 8px;
		margin-left: 10px;
		margin-right: 30px;
		padding-bottom: 5px;
	}
	.step-name-and-status span {
		font-family: Obvia;
		font-style: normal;
		font-weight: bold;
		font-size: 13px;
		line-height: 16px;
		letter-spacing: 0.05em;
		color: #ffffff;
	}
	/* ROANDMAP END */
	/* READY TO RULE NANOTOPIA START */
	.readyrule-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.section-title-font-readyrule {
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 23px;
		text-align: center;
		color: #ffffff;
	}
	.play-greenrabbit-button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 44px;
	}
	.button-style258 {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		background-image: url('/assets/landing/button/button258.svg');
		background-repeat: no-repeat;
		width: 258px;
		height: 60px;
		cursor: pointer;
		min-width: 162px;
		margin-top: 20px;
		z-index: 1;
	}
	.button-style258 p {
		font-family: "Forza A", "Forza B";
		font-style: italic;
		font-weight: normal;
		font-size: 18px;
		line-height: 22px;
		display: flex;
		align-items: center;
		color: #ffffff;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		cursor: pointer;
	}
	.button-style258:before {
		content: url('/assets/landing/button/button258-1.svg');
		position: absolute;
		left: 9px;
		top: 10px;
		cursor: pointer;
	}
	.button-style249 {
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
	}
	.button-style249 p {
		font-family: "Forza A", "Forza B";
		font-style: italic;
		font-weight: normal;
		font-size: 18px;
		line-height: 22px;
		display: flex;
		align-items: center;
		color: #ffffff;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		cursor: pointer;
	}
	.button-style249:before {
		content: url('/assets/landing/button/button249-1.svg');
		position: absolute;
		left: 9px;
		top: 10px;
		cursor: pointer;
	}
	.readyrule-contents {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.readyrule-before-starting {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.readyrule-before-starting img {
		position: absolute;
		bottom: -30px;
		left: 0px;
		width: 525px;
		height: auto;
	}
	.readyrule-quickguide {
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.readyrule-quickguide-col {
		display: flex;
		flex-direction: column;
	}
	.readyrule-quickguide-font {
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 26px;
		text-align: center;
		color: #ffffff;
	}
	.readyrule-content-font1 {
		font-family: Airstrike;
		font-style: normal;
		font-weight: normal;
		font-size: 30px;
		line-height: 26px;
		display: flex;
		align-items: center;
		letter-spacing: 0.03em;
		color: #ffffff;
		text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
		margin-top: 142px;
		position: relative;
		z-index: 1;
	}
	.readyrule-bg2character {
		position: absolute;
		display: flex;
		align-items: center;
		width: 100vw;
		left: -79px;
		bottom: -24px;
		justify-content: space-between;
	}
	.readyrule-bg2character img {
		width: 322px;
		/* margin-left: calc(50vw - 300px);
            transform: translateX(-100%);  */
	}
	.readyrule-doublecharacter {
		display: flex;
		position: relative;
	}
	.readyrule-shadow-character {
		position: absolute;
		width: 322px;
		height: auto;
		top: 14px;
		left: 174px;
	}
	.readyrule-character-select {
		position: absolute;
		bottom: 0px;
		left: 206px;
		bottom: 327px;
		height: 327px;
		width: 443px;
	}
	.readyrule-selected-cutimg:before {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 2;
		background: radial-gradient(61.93% 50% at 50% 50%, #0e1743 0%, #3350d9 100%);
		opacity: 0.1;
	}

	.readyrule-bottommask {
		position: absolute;
		bottom: 0px;
		left: 0px;
		height: 408px;
		width: 100vw;
		background-color: #000000;
		opacity: 0.3;
	}
	/* READY TO RULE NANOTOPIA END */
	/*SIDEBAR STARTED*/
	.landing-sidebar {
		display: relative;
		position: fixed;
		right: 157px;
		bottom: calc(50vh);
		z-index: 1000;
	}
	.sidebar-item {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 200px;
		margin-top: 10px;
	}
	.sidebar-item-button {
		display: flex;
		background: #36ffc0;
		border: 1px solid #36ffc0;
		border-radius: 999px;
		width: 8px;
		height: 8px;
		z-index: 999;
		cursor: pointer;
	}
	.sidebar-item-text {
		font-family: "Forza A", "Forza B";
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 28px;
		text-align: left;
		color: #ffffff;
		margin-right: 15px;
		opacity: 0;
	}
	aside {
		position: fixed;
		top: 48%;
		transform: translate(-50%, -50%);
	}
	aside ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style-type: none;
	}
	aside ul li .indicator {
		cursor: pointer;
		display: block;
		height: 8px;
		width: 8px;
		border-radius: 50%;
		background-color: #4652b6;
		z-index: 999;
	}
	aside ul li .active {
		/* transform: scale(2); */
		transition: transform 200ms ease-in-out;
		background-color: #36ffc0;
	}
	.sidebar-innerline {
		position: absolute;
		display: flex;
		/* border: 1px solid red; */
		background-color: #4652b6;
		top: 27px;
		right: 3.5px;
		width: 1px;
		height: 153px;
	}
	/*SIDEBAR ENDED*/
	/* LOGIN STARTED */
	.login-pannel img {
		width: 716px;
	}
	/* LOGIN ENDED */
	/* SPECIAL EFFECTS STARTED */
	.rabbiticon-effect {
		cursor: pointer;
		transition: all 3s;
	}
	.rabbiticon-effect:hover {
		transform: rotate(1080deg);
	}
	.rabbittext-effect {
		margin-left: 6px;
		cursor: pointer;
		transition: transform 0.3s;
	}
	.rabbittext-effect:hover {
		transform: skewY(2deg);
	}
	.cylon_eye {
		background-color: red;
		background-image: linear-gradient(
			to right,
			rgba(0, 0, 0, 0.9) 25%,
			rgba(0, 0, 0, 0.1) 50%,
			rgba(0, 0, 0, 0.9) 75%
		);
		color: white;
		height: 100%;
		width: 20%;

		-webkit-animation: 4s linear 0s infinite alternate move_eye;
		animation: 4s linear 0s infinite alternate move_eye;
	}

	@-webkit-keyframes move_eye {
		from {
			margin-left: -20%;
		}
		to {
			margin-left: 100%;
		}
	}
	@keyframes move_eye {
		from {
			margin-left: -20%;
		}
		to {
			margin-left: 100%;
		}
	}
	/* SPECIAL EFFECTS ENDED */
	/* https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/     swing */
</style>
