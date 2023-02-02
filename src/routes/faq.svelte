<script>
    import { page } from '$app/stores';
    import { getContext, onMount } from 'svelte';
    import FaqItem from 'src/components/landing/faqItem.svelte';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

    import { goto } from '$app/navigation';
    import { each } from 'svelte/internal';
    
    const generalData = [
		{
            key: '1',
			question: 'What is Green Rabbit Game?',
			answer: 'Green Rabbit is a multi-activity NFT game built on the WAX blockchain. In the 2D part of the game you can stake your Green Rabbit NFTs, earn Shellinium token and other resources, craft your Anima Armor, own land and so much more. In the 3D metaverse you can use your Anima Armor to hang out with the community members, race in a parkour type of races, win great prizes and soon battle in the War of Nanotopia.'
		},
		{
            key: '2',
			question: 'How does WAX Blockchain work?',
			answer: 'There are no gas fees on the WAX blockchain, instead you have a set of three resources: CPU, NET and RAM. In order to be able to play and interact with the WAX Blockchain you have to stake some WAX to CPU. See our guide on how to do it here '
        },
        {
            key: '3',
			question: 'Why have I received an error about not enough CPU?',
			answer: 'This means you need to stake some more WAX to CPU. Head over to <a href="https://wallet.wax.io/" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://wallet.wax.io/ </span></a> if you are using the Wax Cloud Wallet or <a href="https://wax.bloks.io" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://wax.bloks.io</span></a> if you are using a wallet such as Anchor. Select CPU and stake the amount you feel is appropriate. See our guide on how to do it here'
        },
        {
            key: '4',
			question: 'Where can I buy Green Rabbit NFTs?',
			answer: 'You can currently buy them either when Green Rabbit does a Collection "Drop", or on our partner’s site <a href="https://nfthive.io/" target="_blank" rel="noreferrer" ><span style="color: #36FFC0">NFThive</span></a>'
        }        
    ];
    const stakingData = [
		{
            key: '1',
			question: 'Why do I need to stake NFTs?',
			answer: 'By staking your Green Rabbit (and partner collection) NFTs onto a GR flash drive NFT you will start earning our in-game token called Shellinium, otherwise known as SHELL. This is essential for players as SHELL is needed for every activity within the game, and can also be used to buy items from our own marketplace called the Shell Road ',
		},
		{
            key: '2',
			question: 'How can I stake NFTs?',
			answer: 'First you must acquire a Green Rabbit flash drive, or more if you need the space. Bear in mind that currently you can only use up to a total of five at once. You can then insert your flash drive into the staking interface on the GR website here. Once the flash drive is inserted you will be able to load it up with your NFTs. More detailed info on staking can be found in the Gitbook here',
        }   
    ];
    const greenprintsData = [
		{
            key: '1',
			question: 'What are Greenprints?',
			answer: 'Greenprints are the technical schematics that are required to build Anima Armor, which you will need to be wearing to take part in all the 3D activities. They contain all the stats and information from their initial crafting process and can later on have these stats boosted.',
		},
		{
            key: '2',
			question: 'How can I craft Greenprints?',
			answer: 'There are two ways to craft Greenprints. One is using a 3D figure and some SHELL, the other is a set of 4 component NFTs - 1 Action, 1 Diorama, 1 Totem Coin, 1 Lore Tablet and some SHELL. These are all loaded up in the (crafting interface) <a href="https://play.greenrabbitgame.io/crafting" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://play.greenrabbitgame.io/crafting </span> </a> More info on crafting can be found in the gitbook (here) <a href="https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/greenprint-crafting" target="_blank" rel="noreferrer" ><span style="color: #36FFC0">https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/greenprint-crafting</span></a>',
        },
		{
            key: '3',
			question: 'Why should I boost a Greenprint?',
			answer: 'Aside from them having better stats, the boosting process makes your Greenprints stronger and therefore, cheaper to fuse into armor. So it is well worth doing for both reasons if you want to be competitive in the playable game modes like Ultra Anima Racing. More details about this can be found (here)  <a href="https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/greenprint-boosting" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/greenprint-boosting</span></a>',
        }              
    ];    
    const orbsData = [
		{
            key: '1',
			question: 'What are Ascendant Orbs and how can I make them?',
			answer: 'Ascendant orbs are vital for many of the game mechanics like Greenprint Boosting. You can attempt to make Ascendant Orbs by fusing 10 Greenprints of the same rarity in the crafting interface. More details can be found (here)  <a href="https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/greenprint-fusion" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/greenprint-fusion </span> </a>',
		},
		{
            key: '2',
			question: 'Can I fuse Greenprints that already had bonus stats achieved during crafting?',
			answer: 'Yes you can, but it is advised to keep your Greenprints with a good initial bonus to be used during the Greenprint Boosting process. Obviously the choice is yours, however we recommend keeping Greenprints with higher bonus statistics and fusing your Greenprints with lower stats.',
        },
		{
            key: '3',
			question: 'What else can I do with Ascendant Orbs other than boost Greenprints?',
			answer: 'At this time, you can also use them in the process of leveling up your foragers used in the Materials Foraging Missions or Greensmiths used for crafting Armor Components and fusing Anima armors. More uses will follow as gameplay mechanics are continuously released.',
        }              
    ];    
    const foragingData = [
		{
            key: '1',
			question: 'What are Foraging Missions?',
			answer: 'Along with SHELL, you will also need some other materials to make your Anima Armor. These materials are Floria, Elder Sap, Versatopium & Nanore and can be obtained by using a Forager and sending them on missions. More info can be found in the gitbook (here) <a href="https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/materials-foraging" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/materials-foraging </span> </a>',
		},
		{
            key: '2',
			question: 'How do I level up a Forager?',
			answer: 'You need to use an Ascendant Orb with a rarity up to but not higher than your Forager. You can find all of the details around this in this section here. <a href=" https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/materials-foraging" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/materials-foraging </span> </a>',
        },
		{
            key: '3',
			question: 'How do I unlock the other two forager slots?',
			answer: "Currently only two Foraging Mission Slots have been unlocked. Be sure to subscribe to the Medium articles so that you receive all of the updates and don't miss on further details relating to the two additional slots.",
        },
		{
            key: '4',
			question: 'How can I access higher tier foraging missions?',
			answer: 'Once your forager has reached level 10 the tier 2 missions will unlock, and tier 3 unlocks at level 25. All of the details related to these Missions can be found (here) <a href=" https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/materials-foraging" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/materials-foraging </span> </a>',
        },
		{
            key: '5',
			question: 'I would like to know more about foragers, the missions, and materials',
			answer: "You can read all about it by clicking into the section on these Missions found (here) <a href='https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/materials-foraging' target='_blank' rel='noreferrer' ><span style='color: #36FFC0'>  https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/materials-foraging </span> </a> <br> Alternatively, you can also watch (this video) <br>  <a href='https://www.youtube.com/watch?v=Mqqq1V94B7Y&t=637s' target='_blank' rel='noreferrer' ><span style='color: #36FFC0'> https://www.youtube.com/watch?v=Mqqq1V94B7Y&t=637s </span> </a>",
        }
    ];    
    const animaData = [
		{
            key: '1',
			question: 'What is an Anima Armor?',
			answer: 'Anima Armor represents the peak of Nanotopian engineering! It is essentially power armor for your character, and will be needed to take part in all of the 3D game activities like racing or battling.',
		},
		{
            key: '2',
			question: 'How do I craft an Anima Armor?',
			answer: 'First you need a greenprint, some SHELL, some materials and finally a Greensmith. You begin by crafting the individual armor components (head, chest, hands, shoulders, legs, boots) and then attempt to fuse them all into a complete suit of Anima Armor. More details on how much of and what materials are needed for each totem and rarity of GP can be found in the gitbook (here) <a href="https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/armor-component-crafting" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/gameplay/armor-component-crafting </span> </a>',
        }
    ];
    const rabbit3dGameData = [
		{
            key: '1',
			question: 'How does the 3D game work?',
			answer: 'In order to participate in the 3D metaverse you would need to have an Anima Armor. The Metaverse let\'s you explore Nanotopia, race in Ultra Anima races and soon battle in the War for Nanotopia',
		},
		{
            key: '2',
			question: 'What are the system requirements for playing the 3D game?',
			answer: 'Operating system: Windows(macOS coming soon) <br>Core i5 4th generation or higher, 8GB RAM or higher, NVidia GeForce, AMD Graphic Card',
        }
    ];    
    const otherData = [
		{
            key: '1',
			question: 'What and when is the next Green Rabbit gameplay release?',
			answer: 'The best answer for this at this time, would be to check the roadmap section found (here)  <a href="https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/roadmap" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/roadmap </span> </a> You will also want to subscribe to our Medium Articles where we make all of our announcements.',
		},
		{
            key: '2',
			question: 'When will more partner staking go live?',
			answer: 'Partner Staking is already live with the Kyle Loza Project. As we continue to move our (Roadmap)  <a href="https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/roadmap" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/roadmap </span> </a>  forward, other projects will be brought forward and activated. Be sure to subscribe to our Medium Articles so that you don\'t miss anything around this.',
        },
		{
            key: '3',
			question: 'What is the AUX port for?',
			answer: 'Currently the only use is for a shell credit token, but other utilities are being made for quality-of-life improvements.',
        },
		{
            key: '4',
			question: 'What is a shell credit token?',
			answer: 'This token will pay the base Shellinium costs associated with a single Greenprint craft of the same rarity as the token. These were initially released through the Shell Road Marketplace. You can watch there for future releases or you can search for some on the Secondary Market.',
        }                        
    ];        
    const economyData = [
		{
            key: '1',
			question: 'What is Shell?',
			answer: 'SHELL is short for Shellinium, and is the in-game token for Green Rabbit that can be earnt by staking GR and partner NFTs on our website (here) <a href="https://play.greenrabbitgame.io/hub" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://play.greenrabbitgame.io/hub </span> </a>',
		},
		{
            key: '2',
			question: 'What tokens are used in the game?',
			answer: 'Aside from SHELL we have 5 more tokens in our game. Four are the materials required for armour component crafting - Floria, Elder Sap, Versatopium and Nanore. The final one is a token for our seasonal events, this is called Solkun otherwise known as SOL. More info on the game’s tokenomics can be found in our gitbook (here) <br> <a href="https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/tokenomics" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://green-rabbit-holdings-llc.gitbook.io/green-rabbit-game/the-game-lfg/tokenomics </span> </a>',
        }		                
    ];      
    const communityData = [
		{
            key: '1',
			question: 'I still have questions',
			answer: 'That’s fine, we can help with that. Come and check out our (discord server)  <a href="https://discord.gg/greenrabbitgame" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://discord.gg/greenrabbitgame </span> </a> which has a warm, welcoming and helpful community and plenty of Mods and team members no matter what time zone you are in!',
		},
		{
            key: '2',
			question: 'Where can I meet other community members?',
			answer: 'You can check out our (discord server) <a href="https://discord.gg/greenrabbitgame" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://discord.gg/greenrabbitgame. </span> </a> And (Telegram channel) <a href="https://t.me/greenrabbitgame" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://t.me/greenrabbitgame </span> </a> or you come say hello and ask questions in our 3D hub as a visitor - no purchase required!',
        },
		{
            key: '3',
			question: 'Where can I report an error/bug?',
			answer: 'We have a channel called #game-support on our discord server. If you are not in the discord yet (here is a link for you to join) <a href="https://discord.gg/greenrabbitgame" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://discord.gg/greenrabbitgame. </span> </a>',
        },        
		{
            key: '4',
			question: 'How do I get the active role in Green Rabbit discord?',
			answer: 'To get the active role all you need to do is chat with your fellow members and it will come in good time. If you want more details then (this video) <a href=" https://www.youtube.com/watch?v=ZQGBsUHKwGU" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://www.youtube.com/watch?v=ZQGBsUHKwGU </span> </a> explains all you need to know.',
        },
		{
            key: '5',
			question: 'I’m interested in collaborating with Green Rabbit - Who should I contact?',
			answer: 'The best way of registering your interest in a collaboration or partnership is to fill out the (partnership program) <a href="https://www.greenrabbitgame.io/partner-program" target="_blank" rel="noreferrer" ><span style="color: #36FFC0"> https://www.greenrabbitgame.io/partner-program </span> </a> form which is found on our website.',
        }                        
    ];       
    
    onMount(async () => {
        document.getElementById('loader').style.display = 'none';
        }
    );

</script>
<div class="bg-wrapper">
    <section class="landing-section">
        <div class="section-banner">
            <LottiePlayer
                src="/assets/landing/lottie/faq.json"
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
            <div class="subtitle-faq-titlepart faq-margin-adjust00">
                <span class="faq-titlefont">GENERAL</span>
                <img src="/assets/landing/common/subtitlesel-about245.svg" alt=""/>
            </div>
            <div class="faq-onerow">
                {#each generalData as entry}
                  <FaqItem {entry} />
                {/each} 
            </div>

            <div class="subtitle-faq-titlepart">
                <span class="faq-titlefont">GAMEPLAY</span>
                <img src="/assets/landing/common/subtitlesel-about245.svg" alt=""/>
                <div class="faq-medium-label">
                    STAKING
                </div>
            </div>

            <div class="faq-onerow faq-margin-adjust20">
                {#each stakingData as entry}
                  <FaqItem {entry}/>
                {/each} 
            </div>            

            <div class="subtitle-faq-titlepart faq-margin-adjust00">
                <div class="faq-medium-label faq-margin-adjust00">
                    GREENPRINTS
                </div>
            </div>
            
            <div class="faq-onerow faq-margin-adjust20">
                {#each greenprintsData as entry}
                  <FaqItem {entry}/>
                {/each} 
            </div>                        

            <div class="subtitle-faq-titlepart faq-margin-adjust00">
                <div class="faq-medium-label faq-margin-adjust00">
                    ASCENDANT ORBS
                </div>
            </div>
            
            <div class="faq-onerow faq-margin-adjust20">
                {#each orbsData as entry}
                  <FaqItem {entry}/>
                {/each} 
            </div>                 

            <div class="subtitle-faq-titlepart faq-margin-adjust00">
                <div class="faq-medium-label faq-margin-adjust00">
                    FORAGING MISSIONS
                </div>
            </div>
            
            <div class="faq-onerow faq-margin-adjust20">
                {#each foragingData as entry}
                  <FaqItem {entry}/>
                {/each} 
            </div>             

            <div class="subtitle-faq-titlepart faq-margin-adjust00">
                <div class="faq-medium-label faq-margin-adjust00">
                    ANIMA ARMOR
                </div>
            </div>
            
            <div class="faq-onerow faq-margin-adjust20">
                {#each animaData as entry}
                  <FaqItem {entry}/>
                {/each} 
            </div>             

            <div class="subtitle-faq-titlepart faq-margin-adjust00">
                <div class="faq-medium-label faq-margin-adjust00">
                    GREEN RABBIT 3D GAME
                </div>
            </div>
            
            <div class="faq-onerow faq-margin-adjust20">
                {#each rabbit3dGameData as entry}
                  <FaqItem {entry}/>
                {/each} 
            </div>             

            <div class="subtitle-faq-titlepart faq-margin-adjust00">
                <div class="faq-medium-label faq-margin-adjust00">
                    OTHER
                </div>
            </div>
            
            <div class="faq-onerow faq-margin-adjust20">
                {#each otherData as entry}
                  <FaqItem {entry}/>
                {/each} 
            </div>              

            <div class="subtitle-faq-titlepart faq-margin-adjust30">
                <span class="faq-titlefont">ECONOMY</span>
                <img src="/assets/landing/common/subtitlesel-about245.svg" alt=""/>
            </div>
            <div class="faq-onerow">
                {#each economyData as entry}
                  <FaqItem {entry} />
                {/each} 
            </div>               

            <div class="subtitle-faq-titlepart faq-margin-adjust30">
                <span class="faq-titlefont">COMMUNITY</span>
                <img src="/assets/landing/common/subtitlesel-about245.svg" alt=""/>
            </div>
            <div class="faq-onerow">
                {#each communityData as entry}
                  <FaqItem {entry} />
                {/each} 
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
    .landing-section { 
        position: relative; 
        width: 100%;
        display: flex;
        background-image: url(/assets/landing/bg.png);
        background-attachment: fixed;
        background-size: cover;
        background-position-x: center;
        background-repeat: no-repeat;
        flex-direction: column;
        padding: 0 40px;
        overflow: hidden;
    }

    .landing-section::before {    
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background: #0E1743;
        opacity: 0.9;
    }
    .section-banner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .section-container{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        margin: auto;
        margin-top: 90px;
        width: 100%;
        max-width: 1104px;
        z-index: 1;
        padding-bottom: 70px;
    }
    /* FAQ STARTED */
    .subtitle-faq-titlepart{
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: auto;
        width: 100%;
        margin-top: 60px;
    }        
    .faq-titlefont{
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
    .subtitle-faq-titlepart img{
        position: absolute;
        top: 12px;
        left: -50px;
    }

    .faq-onerow{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 32px;
    }

    .faq-margin-adjust00{
        margin-top: 0;
    }
    .faq-margin-adjust10{
        margin-top: 10px;
    }
    .faq-margin-adjust20{
        margin-top: 20px;
    }
    .faq-margin-adjust30{
        margin-top: 30px;
    }
    
    .faq-medium-label{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-family: Airstrike;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 21px;
        letter-spacing: 0.03em;
        text-align: left;
        color: #FFFFFF;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        margin-top: 35px;
    }
    
    @media (max-width: 768px) {
        .landing-section {
            padding: 0 20px;
        }
    }    
    /* ABOUT ENDED */
</style> 
