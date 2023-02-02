<script>
    import { page } from '$app/stores';
    import { getContext, onMount } from 'svelte';

    import { goto } from '$app/navigation';
    import { each } from 'svelte/internal';
    import LoreVideoPlayer from 'src/components/landing/LoreVideoPlayer.svelte';
    import { browser } from '$app/env';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    let paused_v = true;
    let paused_a = true;
    let time_v = 0;
    let time_a = 0;

    let innerWidth;
    //https://tobiasahlin.com/moving-letters/
    
    onMount(async () => {
        document.getElementById('loader').style.display = 'none';
        }
    );
    let nowChapterIndex = 0;
    let chapterList = [
        {
            chapterNum : "1",
            title: 'An Introduction To Nanotopia',
            posterUrl: 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg',
            audioUrl : '/assets/landing/lore/LoreRecordings/T-420_Lore_CH_1.mp3',
            videoUrl : 'https://www.youtube.com/embed/-GkNjXd02KU',
            content : 'The story begins on the world of Nanotopia. A place that has known peace for countless millennium. This utopian sphere is now home to a society, made up of all manner of organic beings living in harmony with their tremendous technological advances. Having long ago mastered the symbiotic relationship between nature and technology, Nanotopia had reached what some refer to as the singularity. However, instead of being an apocalyptic moment, it only increased the harmony between all beings on the world. Every organism, whether humanoid, animal, robot, cyborg, or machine, live and work in peace as a one world community. A Shangri-la amongst the metaverse.<br><br><br>The stories of long ago remain on Nanotopia. So old they are recorded on paper. Ancient writings from the elder beings. From a time when this now perfect balance was still a dream. These papers held information about a sacred and powerful force contained within the world. A mysterious force that worked from the inside out, bringing peace and prosperity. In these writings they advised the Nanotopians to find a stasis with their world, and a respect for all other beings, and through these actions their world would flourish.<br><br><br>                        In the practicing of the knowledge passed down from the ancients the traditional Nanotopians continued to advance, evolve, and connect. One of the societies that has formed on Nanotopia are the Faunians. A sort of “Techno Hippy”, the Faunians are an interesting people. Their pursuit of new technologies, mixed with their respect and connection to the world and its being’s, has lead to a distinct technology that pays homage to their natural world. The Faunians hold elaborate ceremonies in order to “feel” the power of Nanotopia. During these ceremonies young Faunians experience waking dreams. Each one different and unique. Each one connecting them spiritually with a creature of their world.<br><br><br>Once a Faunian has experienced this life changing event they begin using their mastery of technology and body modification to create an exosuit in the likeness of the animal they have been bound to. These amazing suits called, Anima-Armor, are unlike anything else in the metaverse. Built with the look and attributes of their inspiration, the Faunians glide through their world with a natural ease that enhances their connection even further. The line between nature and technology continued to blur. The more in tune with their world they became, the more it seemed to provide. Most Nanotopians were very content. Working in businesses related to the arts, entertainment, recreation, or sports. Because of their mastery of technology and nature, these two things coexisted in an almost effortless balance. <br><br><br>As the generations passed, the power of this cycle spread through all facets of the world. Even non-Faunians were able to experience the ceremonies and pilot their own anima-armor. The more inhabitants to take part in the ceremony, the wider the variety of creatures represented with their anima-armors.<br><br><br>Over time a pattern emerged connecting certain types of animals with specific groups, tribes, or cities. Though there were anomalies, life continued this way for Nanotopians. The passing of centuries re-enforcing these connections, not only with animals, but with the skills and status associated with them. <br><br><br>In the way of nature, not all are created equal. Some groups had connected almost exclusively with the more envied animals such as felines, primates, and bears, while other groups were made up of reptiles, scavengers, and other less physically gifted creatures.<br><br><br>Daily living in this evolving world provided little strife on the surface. The inhabitants of Nanotopia gravitated towards contributing to society in ways that naturally coincided with their anima-armors’ abilities. While being logical, this began to cause separation amongst a world built on connection.<br><br><br>Those with less physically gifted armor were tasked with the more seemingly mundane occupations. In a world so centered on their animal totems, most reptiles worked out of the spotlight. Performing tasks integral to the survival of all.<br><br><br>One such Nanotopian, Shelldon “Shelly” Tortuga, became just as well known as any Faunian. Possessing extreme intelligence and patience he has built the largest business on Nanotopia. Shell Corp. Responsible for building the majority of automated labor on the planet. Shelly is a very generous man. Giving freely to all manner of causes, he is loved by the citizens.<br><br><br>Most of the Faunians lived what were considered more glamorous lives. While many still worked in traditional roles as teachers, or shop keepers. There were many Faunians who stood out from the crowd. The Shaman, athletes, entertainers, and builders being the celebrities of their world. Some of the most well known were the athletes who raced in “Ultra-Anima!”. An insane obstacle course style race on a massive scale. Sponsored by Shell Corp, the athletes race through a track full of natural and mechanical obstacles designed to slow them down. They are treated as heroes and watched by all. Currently Albert Greene and his Rabbit inspired Anima-Armor has taken first place. A spot normally reserved for Cheetahs, Lions, Dogs, or Gazelle.<br><br><br>'
        },
        {
            chapterNum : "2",
            title: 'The rise and fall of shell corp',
            posterUrl: 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg',
            audioUrl : '/assets/landing/lore/LoreRecordings/T-420_Lore_CH_2.mp3',
            videoUrl : 'https://www.youtube.com/embed/ZPYM-KuO5vo',
            content : 'During his long life, Shelly Tortuga made several stunning discoveries. Many of the most extreme advancements had been made after constructing his immense and impenetrable R&D laboratory…The Shell. Shell Corp had tried to keep the plans a secret, but they were eventually uncovered. This was due to the strange, years long site search conducted by Shelly. Seeming to settle for no less than an absolutely perfect location, his quest was anything but subtle by its completion.<br><br><br>Once finished Shelly rarely emerged from The Shell. There was much speculation on his near disappearance. As more time passed between his sightings so too did he pass from the thoughts of many Nanotopians. Until he eventually passed away physically with far less fanfare than he was due. His Anima-Armor turned into a statue in front of The Shell. With the Corporation passed down to Shelly’s adult son, Shelldon M. Tortuga Jr., things carried on without a hitch. The automatons created by Shell Corp continued to improve. And most importantly to farm. Fueled by the unheralded work of Shell Corps reptilian workers.<br><br><br>The Faunians continued to thrive. Their ways changing very little with the world around them. “Ultra-Anima” remained the focus of almost every citizen. From babies to gentlemen, generations were still enthralled by the contest. Albert had raced longer than any other Faunian in history. His focus on greatness had been his only care. Spending the majority of his life at or near the top of the standings. Cemented in history his memory would live on forever. The Nanotopian world carried on this way for a century. The veil of the utopian existence slipping by the year.<br><br><br>In that 100 years, a schism had noticeably been driven between the Faunians and the other inhabitants of Nanotopia. The prosperity and bountiful harvests began to slowly wane. The non-faunians began filling with discontent at their rank in the society. Feeling as though they had spent their lives providing, while the Faunians benefitted. Living lives starkly contrasted in health, wealth, and happiness. One of the extreme exceptions was Shelly Tortuga Jr. Living an extraordinary life, for someone with a Tortoise for their totem, just like his father. And just like his father, Shelly Jr. spent his life creating amazing inventions and continuing to revolutionize the society. With Shell Corp having amassed even more power by the time of his death. Though he had lived to such an advanced age that some had joked that he had invented a way to have the same life span as his totem.<br><br><br>Shelly Jr. had lived a philanthropic life just like his namesake. Seemingly admired by all. Family, friends, employees, and citizens. Though great with charity, he was not great with wives. However, Shelly Jr. did have 3 sons, quite different in age. Albert Tortuga was the eldest from his first marriage. Albert also had 2 half brothers, Steve J. Tortuga and Shelldon M. Tortuga III. Albert dying tragically in a reported accident inside The Shell soon after taking over leadership of the company. <br><br><br>The leadership torch of Shell Corp was then passed to Steve. He tried hard to follow in the footsteps of his father and grandfather. His younger brother, who had been referred to as Little Shelly while growing up, was very different. He had longed to transcend his place in the world. Even attempting to race in “Ultra-Anima” after his father had bought him entrance into a qualifying race. Little Shelly had grown into a resentful man. Believing that his family should be using the power of Shell Corp to take leadership of Nanotopia. For this reason insisting on being called by his middle name….Mark.<br><br><br>'
        },
        {
            chapterNum : "3",
            title: 'The Discovery of Shellinium',
            posterUrl: 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg',
            audioUrl : '/assets/landing/lore/LoreRecordings/T-420_Lore_CH_3.mp3',
            videoUrl : 'https://www.youtube.com/embed/ak3J7qT1N_0',
            content : 'Mark Tortuga longed for the day that he would take leadership of Shell Corp from his older brother Steve. Mark was jealous of Steve and certain that there were company secrets still being hidden from him. Though Mark had everything he could ever need, power was all he craved.<br><br><br>Mark was not the only non-nanotopian that shared this opinion of Shell Corps position in the world. A sizeable group had grown around Mark, hoping to wrest control of the company and advance their dreams of domination.<br><br><br>With the support of his group, many of them employees, Mark combed the Shell Corp restricted files looking for an advantage. After much work he came upon an oddly generic file name. “The Future?”. Inside he found documents referring to something called Shellinium. Amazingly, as he read on the words of his father and grandfather spoke of a cave beneath The Shell, filled with this Shellinium, possessing qualities yet to be quantified by science.<br><br><br>Emboldened and enraged that this knowledge had been kept from him, Mark prepared to lead a violent takeover of the company. Using the growing group of disgruntled Shell Corp employees to set the stage, they were clear to commence their move. The next morning Mark entered the Shell Corp conference room for their morning meeting. Steve Tortuga sitting at the head of the table, as a CEO should. With him as always was Head of Security Saw-Scale and his automaton Shell Soldiers. As Steve Tortuga was about to start the meeting, Mark ordered the Shell Soldiers to seize Steve and any remaining loyal members of his inner circle and transport them to the Shellinium Chamber. Before going himself, Mark and Head of Security Saw-Scale emerged from The Shell to attend a planned press conference. Telling the public that his brother would be taking a “leave of absence”.<br><br><br>Meanwhile outside the Shellinium Chamber the Shell Soldiers were attempting to gain entry. Not only was the Chamber located deep within The Shell, but it also had one of the most impenetrable doors ever created. By the time Mark and Saw-Scale arrived on the scene it was clear the Soldiers would not be able to gain entry. This left Mark with no other choice.Slowly emerging from the darkness of the hallway was “The Doctor”. The longest tenured employee of Shell Corp, he had been in charge of developing their most secret projects for decades. The Doctor was carrying a container that had an intense green glow. As he approached Steve Tortuga knew what was in the container and that his resistance was futile.<br><br><br>Steve warned his brother Mark that he did not understand the power of Shellinium and that it needed to be used for the good of all the beings of Nanotopia. This enraged Mark even further. Having had to execute an exhaustive search just to learn of it’s existence, Mark refused to believe his brother.<br><br><br>The Doctor approached Head of Security Saw-Scale with the glowing container. Opening a secret compartment in the back of his Anima-Armor and inserting Shellinium from the container.  Saw-Scale visibly grew in power.<br><br><br>Feeling at this point unstoppable Mark revealed his plans that had been set in motion. Using Shellinium and the other vast resources of Shell Corp, he planned to rule Nanotopia. All that stood in his way was the Chamber door. Mark turned to Saw-Scale in his new form, “Every Ruler needs a General. So General…do us the honor!”. In an instant the newly dubbed General Saw-Scale tore the door from the wall. Along with it the peace that had for so long been unbroken on Nanotopia.<br><br><br>'
        },        
        {
            chapterNum : "4",
            title: "Mark's Big plan (part1)",
            posterUrl: 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg',
            audioUrl : '/assets/landing/lore/LoreRecordings/T-420_Lore_CH_4.1.mp3',
            videoUrl : 'https://www.youtube.com/embed/Obn_AwWedJE',
            content : 'Mark Tortuga’s takeover had worked flawlessly. From inside the insanely secure Shell, it was time to begin the real plan. Having witnessed the shocking transformation of General Saw-Scale, Mark knew there was no turning back. Now with Shell Corp and The Shell solely in his clutches Mark was ready to unleash his pent-up rage on Nanotopia.<br><br><br>To the outside world things at Shell Corp seemed unchanged following the announcement of Steve Tortuga’s “Leave of Absence”. Little did they know that inside Mark was already busy maximizing his newly found power and control of the mysterious Shellinium. With Steve and all those who had stayed loyal to him now his prisoners, Mark put them to work.<br><br><br>They were forced to continually extract the Shellinium from the cave beneath The Shell. While the prisoners worked, Mark’s plan pressed forward entirely unnoticed. The automaton production remained on time and unchanged. Or so it seemed.<br><br><br>In order to strike all across Nanotopia and still maintain the element of surprise Mark realized they could not openly deploy the Shellinium powered Anima-Armor until the last second. As the Doctor directed the imprisoned armor crafters on the construction of the new overpowered armor, the factory workers were busy overpowering something of their own.<br><br><br>Mark had managed to sway most of the top minds at Shell Corp into joining his new regime. Amazingly they were able to engineer and create Shellinium powered Shell Soldiers but still maintain the appearance of standard automaton laborers. With this incredible and sneaky innovation Mark Tortuga was able to send his invading force to every corner of Nanotopia… while still making a profit!<br><br><br>As wave after wave of these sleeper soldiers continued to leave The Shell, the progress by the armor crafters was also showing results. Having now completed the Shellinium powered Anima-Armor for Mark and his inner circle, the prisoners we sent back underground to commence the mining of new chambers of Shellinium. The first ever conducted in the known history of Nanotopia.<br><br><br>Up until this point love of their world had been the core tenet of all Nanotopians. Having always known that respecting their home was the path to peace and abundance. It was now clear that the long strange search by Mark’s grandfather for the perfect location for The Shell was really a quest to find a naturally accessible cavern of Shellinium. His thirst for this knowledge still not enough to disturb his world as a way to gain access to this magical substance.<br><br><br>As the first implements tore into the wall of the Shellinium chamber an ominous shudder was felt across Nanotopia. As if the world had flinched from the pain. Having never experienced anything like it, the citizens were confused by the odd and foreboding feeling. Unfortunately, unbeknownst to them this was just the starting gun. The first blasphemous act in Mark’s symphony of destruction.<br><br><br>'
        },                
        {
            chapterNum : "4",
            title: "Mark's Big plan (part2)",
            posterUrl: 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg',
            audioUrl : '/assets/landing/lore/LoreRecordings/T-420_Lore_CH_4.2.mp3',
            videoUrl : 'https://www.youtube.com/embed/Obn_AwWedJE',
            content : 'The mining increased at an expeditious speed. Quickly transforming from desecration to industry with each load of Shellinium extracted. Feeling confident in the constant flow of power from the mines, Mark prepared to take the final steps before his glorious conquest<br><br><br>Calling the Doctor to his side, it was now time for Mark to feel the power himself. His massive and powerful Snapping Turtle Anima-Armor now ready to be fueled by Shellinium. Mark donned the armor. His lust for power fueling his near unbridled anticipation.  With no delay the Doctor filled the power chamber with Shellinium. The same incredible effects that had transformed General Saw-Scale began to happen to Mark. The Anima-Armor, an awesome technological specimen, was taking on more “magical” qualities. <br><br><br>As the Anima-Armor outwardly changed from tech-suit to techno-creature, internally a change was happening as well. More than just adding strength and other qualities to the suit, the Shellinium caused a fusing of Mark, the Anima-Armor, and his animal totem on a level he had not anticipated. Though General Saw-Scale had already been through this process, Mark was still shocked by the power of the transformation. Having been filled with maniacal dreams of conquest, he now grew even more fervent. Insisting the takeover wait no longer, the rest of Mark’s inner circle entered their new armor. <br><br><br>Outside The Shell the media gathered once again. The normal podium stood outside the main entrance next to the Anima-Armor statue of the great Shelldon “Shelly” Tortuga. The unsuspecting reporters outside ready for another grandiose announcement from his arrogant ancestor.<br><br><br>The large doors to the main entrance began slowly opening. Instead of the Mark they had become accustomed to, or even his Anima-Armor, out walked a seemingly equal parts tech, animal, and humanoid figure. At this same moment his trusted right hand, General Saw-Scale, began unleashing the sleeper soldiers that had infiltrated Nanotopia.<br><br><br>With his attack already underway against an unprepared and unsuspecting world, Mark strode to the podium with the swagger of someone who has already won the battle. The terrified crowd hanging on his first word. Entranced by his new form they fought their instinct to flee.<br><br><br>As Mark reached the spot where he would address the crowd, he swiftly back handed the decades old statue of his grandfather, the beloved “Shelly”. Stunningly it soared through the air. Landing in the crowd and injuring several spectators. Aggressively exclaiming, “Welcome to the new Nanotopia! The Reptile class has been trampled on by all you Faunian lovers for way too long. This is Shell Corps world now…whether you like it or not!”.<br><br><br>'
        },              
        {
            chapterNum : "5",
            title: "Mark's takeover of Nanotopia",
            posterUrl: 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg',
            audioUrl : '',
            videoUrl : 'https://www.youtube.com/embed/uc0Nkz-JWCg',
            content : 'Unable to make sense of the images being shown by the media, panic spread across the world like wildfire. With their Anima-Armors now fueled by the strange essence of the Shellinium, their otherworldly forms incited mass hysteria throughout Nanotopia. Mark stood at the podium, flanked by his inner circle of trusted advisors and anti-Faunians, basking in the glory of the mayhem they were creating.<br><br><br>The pain staking plan of the confidential cabal was unfolding across the world. Unbeknownst to the citizens, the enemy had long been in their midst. The Shell Corp automaton laborers, found in such abundance across Nanotopia, suddenly began to reveal their true form. Transforming themselves into Shellinium powered Shell Soldiers in an incredible feat of mechanical mutation.<br><br><br>The Nanotopians watched in horror. The automatons they had lived side-by-side with, sometimes even helping care for their children, altering themselves into instruments of violence. The effects being felt across the cities, towns, villages, farms, and factories. The world instantly erupting into battle. A situation yet unknown to the collective memory.<br><br><br>Up until this point forms of conflict on the utopian world had always been dealt with in more elegant means. Any friction commonly the result of varying viewpoints by scholars and philanthropists, or apprehension instigated by the groundbreaking inventions of the Tortuga family. Violence as a form of conflict resolution was unheard of. Instead, the only aggressive acts took place during the beautiful contests of martial arts mastery occurring within the contests of “Arena-Anima: Temple of Honor”.<br><br><br>Now countless skirmishes raged throughout the land. Exponentially growing as time passed.<br><br><br>Surprisingly, the citizens seemed to be holding their own in the cities and more populated areas. With these places containing a large percentage of citizens compared to automatons per capita, there was hope that this nefarious plot by Shell Corp could be stopped. The Ultra-Anima racers and other Faunians were becoming the heroes of the day. Using their incredible skills and Anima-Armor to help beat back the automaton invaders and seemingly defend their cities.<br><br><br>Unfortunately, this feeling of impending triumph was very unwarranted. As the vast majority of farms and factories were located in the more rural and sparsely populated regions of Nanotopia, the citizens living there were faced with far different circumstances. The automaton laborers from the farms and factories morphed into growing armies of formidable Shellinium powered Shell Soldiers.<br><br><br>The collected groups swarmed across the land capturing or killing any citizens that failed to assimilate to Shell Corps new agenda. Sweeping through the towns and villages, their numbers continued to grow as the Shell Soldiers from each settlement joined the ranks.<br><br><br>The soldiers were a kinetic force. Barreling over the land. Speed and momentum increasing along with the expanding mass of their numbers. Soon it became apparent that the cities were the end point of these roving forces. The citizens and Faunians attempting to retain these strong holds began to prepare for their arrival.<br><br><br>Though everything was unfolding as planned Mark Tortuga grew impatient. The introduction of the mysterious Shellinium was affecting him in many ways. Coursing with his newly found power, Mark was unable to restrain his lust for vengeance. His thoughts corrupted by a lifetime of jealousy, entitlement, and selfishness. Mark’s mind was now consumed with extracting payback and gaining power for the Reptile class. Determined to redefine a family and company that he felt willingly allowed themselves to be subservient to the Faunians. Mark had reached his boiling point with the General’s “strategy”. He raged at General Saw-Scale. Insisting that they wait no more, Mark and his crew joined the fray.<br><br><br>The view from the cities was terrifying. A literal horde of elimination arose from the horizon. Appearing as an immense amebous mass obscuring the landscape. As the form drew near the individual marauders began to emerge. Terrifyingly, scattered throughout the nearly unfathomably sized horde of Shell Soldiers and Anima-Armors, was Mark, General Saw-Scale, and the rest of the inner circle. Easily discernable from the crowd. Moving at insane speeds and annihilating any resistance unlucky enough to fall in their path. The collision course was inevitable.<br><br><br>As the Faunians and their allies prepared for the showdown, the swarm of mayhem had begun crashing against the capital of Nanotopia, Paragon City. The city had been home to many revered Nanotopians, Faunian and Non-Faunian alike, such as Albert Greene, Shelldon “Shelly’ Tortuga, as well as being the starting point of the Ultra-Anima races for decades. Having constructed makeshift defenses that were impressive for a pacifist society, they were no match for the dynamism of Shell Corps Shellinium powered instruments of carnage.<br><br><br>The cities fell with a speed that was difficult to comprehend. Afterwards, following the orders of General Saw-Scale, all survivors who were not loyal to their cause were imprisoned or transported by the Shell Soldiers to The Shell to begin work in the mines.<br><br><br>Mark Tortuga also returned to The Shell. A place, that from the outside, was transformed in an instant from beloved den of progress to an abomination. Now surrounded by prison camps housing all the Nanotopians who’s existence was now devoted to extracting the precious Shellinium. Mark enjoyed the view from his new lair. He looked out over the land that had just been laid to waste. Mark gazed towards the horizon, beyond the ever-expanding prison camps, to the distant silhouette of the broken and smoldering Paragon City. Feeling satisfied that he was able to finally unleash his rage on the world and step out from the shadow of his legendary grandfather.'
        },
        {
            chapterNum : "6",
            title: "Shell Corp. in disarray",
            posterUrl: 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg',
            audioUrl : '',
            videoUrl : 'https://www.youtube.com/embed/QvkgyxR-rAU',
            content : 'Mark’s utterly iron grip closed around the world at an irrational rate. Even the athletes of Ultra-Anima or the “Martial Armorists”, as their fans called them, from the Temple of Honor arena, put up a hardly noticeable resistance. The cities were occupied by Shell Soldiers and put on lock down. The Nanotopians awaiting their fate.<br><br><br>Meanwhile, back at The Shell, Mark Tortuga instructed that Shellinium mining be expanded as rapidly as possible. Having been briefed by General Saw-Scale and the Doctor upon their return from victory, they all knew that in order to continue to fuel their army the mining must be expanded exponentially. This also meant that their supply of miners needed to be expanded exponentially as well. The prison barracks quickly turning into a city of its own.<br><br><br>The plan continued like clockwork. With Mark and the General supremely satisfied with the outcome, Nanotopia began to settle into its horrifying new reality. Gone were the core customs of their society. Any display of Faunian tradition immediately punished with the most severe means. All Anima-Armor was confiscated, with any of the world’s prominent athletes and Faunians that remained, forced into the underground of Paragon City in fear of punishment.<br><br><br>As the time passed on Nanotopia the changes to the world caused by the actions of Mark and his Cabal were becoming apparent. At a rate of undeniable symbiosis, the rise in Shellinium mining was met with a proportionate decrease in food production. The disregard for the stasis of their home placing them in a disastrous circumstance.<br><br><br>The dwindling food supply meant dwindling productivity from Shell Corps army of prison laborers. For the first time since his now years long take over, Mark Tortuga began to feel vulnerable to failure. He began to talk through his options with General Saw-Scale, and the rest of his inner circle. The inevitable faced them all. The options were few. One was to loosen the strangle hold on the citizens of Nanotopia by returning the Shell Soldiers to the fields and mines attempting to artificially rekindle the magic of their world.<br><br><br>Even contemplating this act of self-preservation stirred a familiar rage inside of Mark. As he began to reassess the problem at hand, his reptile mind twisted a new enemy into focus. One he had been fighting with his entire life. Dealing with every day. An enemy responsible for the existence of the Faunians, as well as the current failing trajectory of his plan. Seemingly the only one with the power to stop him. The world of Nanotopia itself.<br><br><br>With the mystical place being the power that fuels everything, it was Marks greatest enemy as well as his ally. The more they sought a solution, the more confused and enraged he became. Finally descending into near madness, he suggested that instead of returning the Shell Soldiers to work that they begin to farm the animals to feed their captive work force. Completely abandoning any hope of a sustainable outcome. Having witnessed firsthand what disagreeing with Mark or the General did for someone’s future, The rest of Shell Corp quietly agreed with plan. The morbid plans set in motion towards reality.<br><br><br>Left out of the planning by Mark was the Doctor. Mark knew that the Doctor, who had been with Shell Corp since long before his takeover, possessed love for Nanotopia, as well as reason. Having worked with the previous Tortugas increasing the quality of life across all people.<br><br><br>Once the Doctor uncovered the plans he was shaken to the core. He was now faced with something he had hoped could be averted at all costs. In front of him laid an impossible decision. Keep his secret and ensure the death of Nanotopia, or unleash it and vault everyone into the unknown. He knew consequences of his decision could not be fathomed, but there was only one choice.<br><br><br>The Doctor entered the meeting room as he did any with other meeting. His mind blowing secret tucked beneath his arm. Before the meeting could begin he approached Mark Tortuga. He pulled the massive folder from under his arm stamped with “T-420”, and a hand scribbled note attached reading “The Past?”'
        },                                        
        {
            chapterNum : "7",
            title: "Discovery of the T420 time machine",
            posterUrl: 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg',
            audioUrl : '',
            videoUrl : 'https://www.youtube.com/embed/LjMq89xCsqI',
            content : 'The Doctor stood next to Mark Tortuga as he took in the contents of the file. Frozen in fear for a myriad of reasons. Having revealed to him that there were still more Shell Corp secrets being withheld, the Doctor feared Mark’s retribution. Instead of anger, a smile washed over the face of Mark. Flipping through the pages of the file Mark read of another underground Shell Corp location. Hidden in the forest outside the Shell, housing an incredible, game changing invention. Unable to contain his excitement at this newest revelation, he called over his trusted General. Before them lay the location, and specs of the “T-420 Time Machine by Shell Corp”. The true meaning of this revelation quickly becoming apparent to everyone in the room. While any sane Nanotopian would look at this amazing turn of events as a way to save themselves, Mark saw it as a way to expand his domination exponentially. Mark Tortuga immediately ordered a team of Shell Recon Soldiers to find and enter the cave. General Saw-Scale, ever the thorough tactician, diligently continued to read every word in the file. Putting together the full picture of the decades of work behind this incredible device. As he worked his way deeper into the file, the seemingly mundane documents revealed stunning information.<br><br><br>An inventory of a containment room inside this new cavern revealed a massive treasure trove. If the document was to be believed the room must be gigantic. Supposedly stacked to the ceiling with chests of varying sizes full of Shellinium. Next, he came across a list of codes. At first not sure what he was looking at, the General’s mind soon began to make some sense of the list. The more he pondered the codes that lay before his eyes, one consistent detail began to emerge. Encoded within each piece of information was a year. The General realized that he was looking at a list of locations. These were not locations in space, but in time. Eager to feast their eyes on this reality shaking device, Mark Tortuga and General Saw-Scale left to join the Shell Soldiers at the newly discovered compound. The General, enlightening Mark to all the additional details in the file while enroute. Amongst the data Mark was most concerned with was the list of codes. Scanning the pieces of information that the General had deciphered, his eyes became fixated on one line. Their convoy soon arrived at the secret location. Deep within the forests of Nanotopia the entrance to the underground compound that housed the T-420 Time Machine was expertly nestled nearly out of sight. Once Mark and the General saw the entrance their rage began to return. Barely visible in a grove of trees and underbrush, sat the entrance. The exterior and doorway built to resemble a shell. Bearing all the markings of being a creation of the legendary Shelly Tortuga. Inside, Mark Tortuga and General Saw-Scale were faced with everything that was contained in the file. All of it being true. All of it still there, including the Shellinium. With confirmation of this information as reality, Mark already knew his first move. Turning to General Saw-Scale Mark aggressively jabbed his finger into the document. The General looked at the line of code he had pointed to. As he read the year that it contained, he knew exactly what Mark was thinking.<br><br><br>The “when” that they were preparing to visit was legendary. The year in the code was the year that Shelly Tortuga finally opened The Shell Research and Development Lab. It was also the time when Nanotopia’s other legend, Albert Greene, was at the height of his Ultra-Anima domination. In one fell swoop Mark had been gifted the ability to farm resources, widen his oppressive reach for power, and extract the revenge he had longed for all his life. The Doctor was shaken to the core. Back at his laboratory at The Shell, he was overcome by the weight of his decision. Having fully expected to be a victim of Mark’s rage when he revealed that he had been keeping information from him, the Doctor had not expected to leave that room alive. He now began to coalesce his new mission. With the drive to make up for his years of apathy, and self-preservation, the Doctor was determined to do anything he could to set things straight. The task was daunting. Trapped inside The Shell. Seemingly alone in his quest. The Doctor was determined to save Steve Tortuga, Nanotopia, and its glorious utopian past.'
        },                                                
        {
            chapterNum : "8",
            title: "A plan to change the past",
            posterUrl: 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg',
            audioUrl : '',
            videoUrl : 'https://www.youtube.com/embed/k_WMnz5EFa8',
            content : 'Mark Tortuga and General Saw-Scale returned to The Shell, leaving behind a team of scientists and engineers to learn all they could about this “time machine”. Eager to begin another invasion, Mark was stifled by the General. Despite his appearance, General Saw-Scale maintained his brilliant strategic mind knowing that far too much was still unknown about the T-420 device, and its reliability.<br><br><br>In the days that passed the beginning of their plan was formed. The Shell Corp team was confident they would be able to operate the T-420 correctly, having powered up the device using the Shellinium from the cavern. They also discovered the small, Shellinium powered transmitters, used for returning to the time of origin.<br><br><br>Once satisfied with their knowledge of the device, the first experimentation could begin. Mark and his inner circle gathered in the cavern. They readied themselves to witness the mind-bending event.<br><br><br>First, they would send through an automaton shell soldier. The scientists powered up the T-420. The first soldier stepped into the chamber at the center of the device. Around its perimeter the three consoles were set to the correct coordinates. Next the power of the Shellinium flowed through the device. Then in a blink of an eye, the soldier was gone.<br><br><br>The next minute passed with so much anticipation that it felt like a year. Then, as quickly as it had disappeared, the shell soldier reappeared in the central chamber of the T-420. The visual recording of the soldier was immediately displayed on a console.<br><br><br>The recording began with the events everyone had watched. Then the soldiers view inside the chamber instantly morphed. As if changing a channel, the view of the chamber turned to a view of a familiar utopian landscape. One from before any of the observer’s times, but implanted in their memories from the stories, recordings, and fairytale-like events from the prior generations of Nanotopians.<br><br><br>If the look of joy had ever been on Mark’s face, now was the time. After running another test with a Shell Corp employee to make sure of its safety for living beings, the planning of an invasion could begin in earnest.<br><br><br>Mark gathered his inner circle in his conference room to figure out the next move. Mark began with a boisterous speech. Not unlike many other such speeches delivered by maniacal leaders bent on revenge. When he had either finished or was out of breath, General Saw-Scale took the floor.<br><br><br>Always the tactician, the General pragmatically formed the beginnings of their action. He explained that no matter how powerful, an invading force must always perform the proper reconnaissance. That they must not underestimate their enemy, even with the power of Shellinium on their side.<br><br><br>The General explained that they would be sending a team through the T-420 to blend in with the Nanotopia of the past, and report back with information about the world. This would be a very delicate mission. Any hint of coming violence would tip off the totally unsuspecting enemies.<br><br><br>The General already knew who the only two suitable for mission were, and as he looked around the conference table it was clear that no other choice could be made. Amongst Marks crew of mad scientists and warmongers, two individuals stood out in their ability to move through societies with ease.<br><br><br>The first was long time Shell Corp security team member, and the General’s most trusted underling, Lieutenant E’Leon. The Lieutenant was a master of blending in and moving undetected. After living his life with the Chameleon as his Totem these skills were second nature to him. With Anima-Armor crafted for these abilities, he long acted as a spy for Shell Corp.<br><br><br>The second one chosen from Mark’s inner circle was none other than Mark’s own companion, Goldie DiGarr. Cold, calculating, and dangerous, Ms. DiGarr knew how to move in silence. Having the Crocodile as her Totem provided her the skills and temperament of the quiet predator. A lifelong thirst to climb the social ladder had landed her at Mark’s side. With these skills at hand, she had the knowledge and etiquette to gather the needed information from this past world.<br><br><br>The two would suit up in their traditional Anima-Armor to blend in with the past world and travel back in time through the T-420. They were tasked with gathering as much information as they could about any possible defenses or weaknesses. Mark also gave Goldie a very special addition to her mission.<br><br><br>Mark Tortuga had great faith in Goldie’s abilities and tasked her with finding and collecting information on the legendary Albert Greene. Burning with near constant hatred of Faunians, Rabbits, and specifically Albert, erasing his existence seemed nearly as important to Mark as their world’s survival.<br><br><br>With General Saw-Scale finishing his remarks the mission became clear. The two trusted teammates enthusiastically accepted the mission. Mark stood, dramatically slamming his fist on the table, “The time has come to not only preserve reptile dominance, but to wipe the slate clean of the Faunians, Albert Greene, and all the spineless reptiles that bow down to them…like the “great” Shelly Tortuga!”.<br><br><br>With a roar the group rose from the table in a frenzy, ready to literally change the course of history.'
        },                                                        
        // {
        //     chapterNum : "5",
        //     videoOrAudio : "Video",
        //     title: 'An Introduction To AAAAANanotopia',
        //     posterUrl: 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg',
        //     videoUrl : 'https://sveltejs.github.io/assets/caminandes-llamigos.mp4',
        //     content : 'The second story begins on the world of Nanotopia. A place that has known peace for countless millennium. This utopian sphere is now home to a society, made up of all manner of organic beings living in harmony with their tremendous technological advances. Having long ago mastered the symbiotic relationship between nature and technology, Nanotopia had reached what some refer to as the singularity. However, instead of being an apocalyptic moment, it only increased the harmony between all beings on the world. Every organism, whether humanoid, animal, robot, cyborg, or machine, live and work in peace as a one world community. A Shangri-la amongst the metaverse.<br><br><br>The stories of long ago remain on Nanotopia. So old they are recorded on paper. Ancient writings from the elder beings. From a time when this now perfect balance was still a dream. These papers held information about a sacred and powerful force contained within the world. A mysterious force that worked from the inside out, bringing peace and prosperity. In these writings they advised the Nanotopians to find a stasis with their world, and a respect for all other beings, and through these actions their world would flourish.<br><br><br>                        In the practicing of the knowledge passed down from the ancients the traditional Nanotopians continued to advance, evolve, and connect. One of the societies that has formed on Nanotopia are the Faunians. A sort of “Techno Hippy”, the Faunians are an interesting people. Their pursuit of new technologies, mixed with their respect and connection to the world and its being’s, has lead to a distinct technology that pays homage to their natural world. The Faunians hold elaborate ceremonies in order to “feel” the power of Nanotopia. During these ceremonies young Faunians experience waking dreams. Each one different and unique. Each one connecting them spiritually with a creature of their world.<br><br><br>Once a Faunian has experienced this life changing event they begin using their mastery of technology and body modification to create an exosuit in the likeness of the animal they have been bound to. These amazing suits called, Anima-Armor, are unlike anything else in the metaverse. Built with the look and attributes of their inspiration, the Faunians glide through their world with a natural ease that enhances their connection even further. The line between nature and technology continued to blur. The more in tune with their world they became, the more it seemed to provide. Most Nanotopians were very content. Working in businesses related to the arts, entertainment, recreation, or sports. Because of their mastery of technology and nature, these two things coexisted in an almost effortless balance. <br><br><br>As the generations passed, the power of this cycle spread through all facets of the world. Even non-Faunians were able to experience the ceremonies and pilot their own anima-armor. The more inhabitants to take part in the ceremony, the wider the variety of creatures represented with their anima-armors.<br><br><br>Over time a pattern emerged connecting certain types of animals with specific groups, tribes, or cities. Though there were anomalies, life continued this way for Nanotopians. The passing of centuries re-enforcing these connections, not only with animals, but with the skills and status associated with them. <br><br><br>In the way of nature, not all are created equal. Some groups had connected almost exclusively with the more envied animals such as felines, primates, and bears, while other groups were made up of reptiles, scavengers, and other less physically gifted creatures.<br><br><br>Daily living in this evolving world provided little strife on the surface. The inhabitants of Nanotopia gravitated towards contributing to society in ways that naturally coincided with their anima-armors’ abilities. While being logical, this began to cause separation amongst a world built on connection.<br><br><br>Those with less physically gifted armor were tasked with the more seemingly mundane occupations. In a world so centered on their animal totems, most reptiles worked out of the spotlight. Performing tasks integral to the survival of all.<br><br><br>One such Nanotopian, Shelldon “Shelly” Tortuga, became just as well known as any Faunian. Possessing extreme intelligence and patience he has built the largest business on Nanotopia. Shell Corp. Responsible for building the majority of automated labor on the planet. Shelly is a very generous man. Giving freely to all manner of causes, he is loved by the citizens.<br><br><br>Most of the Faunians lived what were considered more glamorous lives. While many still worked in traditional roles as teachers, or shop keepers. There were many Faunians who stood out from the crowd. The Shaman, athletes, entertainers, and builders being the celebrities of their world. Some of the most well known were the athletes who raced in “Ultra-Anima!”. An insane obstacle course style race on a massive scale. Sponsored by Shell Corp, the athletes race through a track full of natural and mechanical obstacles designed to slow them down. They are treated as heroes and watched by all. Currently Albert Greene and his Rabbit inspired Anima-Armor has taken first place. A spot normally reserved for Cheetahs, Lions, Dogs, or Gazelle.<br><br><br>'
        // }    
    ];

    function ReloadChapterInfo(param){
        if (param == "next" && nowChapterIndex < chapterList.length-1)
            nowChapterIndex++;

        if (param == "prev" && nowChapterIndex > 0)
            nowChapterIndex--;

        paused_v = true;
        paused_a = true;
        time_v = 0;
        time_a = 0;
        window.scrollTo(0, 0);


        var textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
        .add({
            targets: '.ml12 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 500 + 30 * i
        })
    }

    let lottiePrevButton;
    function onEnterPrev(isDisable){
        if (!isDisable){
            lottiePrevButton.stop();
            lottiePrevButton.play();
        }
    }

    let lottieNextButton;
    function onEnterNext(isDisable){
        if (!isDisable){
            lottieNextButton.stop();
            lottieNextButton.play();
        }
    }
</script>
<svelte:head>
</svelte:head>
<svelte:window bind:innerWidth />
<div class="bg-wrapper">
    <section class="landing-section">
        <div class="section-banner">
            <LottiePlayer
                style="margin-top: {innerWidth > 768 ? '70px' : '80px'}; max-width: 1500px;"
                src="/assets/landing/lottie/GREEN_LORE.json"
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
            <div class="section-title gettingstarted-chapterfont1">
                <p>
                    {chapterList[nowChapterIndex].title}
                </p>
                <div class="chapter-title subtitle-gettingstarted-titlepart">
                    <img src="/assets/landing/common/subtitlesel-gettingstarted157.svg" alt=""/>
                    <div class="chapter-title-bignum">
                        <span>{chapterList[nowChapterIndex].chapterNum}</span>
                    </div>
                    <h1 class="gettingstarted-chapterfont ml12">CHAPTER</h1>
                </div>
            </div>
            <div class="gettingstarted-onerow">
                <div class="subtitle-paragraph">

                    {#if chapterList[nowChapterIndex].videoUrl != ""}
                    <div class:lore-videopan = {chapterList[nowChapterIndex].videoUrl != ""}>
                        <LoreVideoPlayer 
                            videoOrAudio = {"video"}
                            playlist={chapterList[nowChapterIndex].playlist} 
                            title = {chapterList[nowChapterIndex].title} 
                            posterUrl = {chapterList[nowChapterIndex].posterUrl}
                            videoUrl = {chapterList[nowChapterIndex].videoUrl}
                            bind:paused = {paused_v}
                            bind:time = {time_v}
                        />
                     </div>
                     {/if}

                     {#if chapterList[nowChapterIndex].audioUrl != ''}
                    <div class:lore-audiopan = {chapterList[nowChapterIndex].audioUrl != ""}> 
                        <LoreVideoPlayer 
                            videoOrAudio = {"audio"}
                            title = {chapterList[nowChapterIndex].title} 
                            posterUrl = {chapterList[nowChapterIndex].posterUrl}
                            audioUrl = {chapterList[nowChapterIndex].audioUrl}
                            bind:paused = {paused_a}
                            bind:time = {time_a}
                        />
                     </div>
                     {/if}
                    <div class="subtitle-description-body">
                        <div class="video-content-texts"  data-aos="fade-up" data-aos-duration="3000">
                            {@html chapterList[nowChapterIndex].content}
                        </div>
                    </div>
                </div>
            </div>
            <div class="prev-next-buttons">
                <div class="button-style229" 
                    class:gray-button = {nowChapterIndex == 0}
                    on:click={()=>{
                        if (nowChapterIndex != 0)
                            ReloadChapterInfo("prev")
                }}>
                <!--</div> on:mouseenter={onEnterPrev(nowChapterIndex == 0)} -->
                    <!-- <p class="unselectable">PREVIOUS CHAPTER</p> -->
                    {#if browser}
                        <LottiePlayer
                            bind:this={lottiePrevButton}
                            src="/assets/landing/lottie/buttons/previouschapter.json"
                            speed="1"
                            loop="{false}"
                            controls="{false}"
                            autoplay="{true}"
                            renderer="svg"
                            background="transparent"
                            height="{44}"
                            width="{252}"
                            hover
                        />
                    {/if}
                </div>        
                <div class="button-style229"
                     class:gray-button = {nowChapterIndex == chapterList.length - 1}
                    on:click={()=>{
                        if (nowChapterIndex != chapterList.length -1)
                          ReloadChapterInfo("next")
                }}
                >
                    {#if browser}
                        <LottiePlayer
                            bind:this={lottieNextButton}
                            src="/assets/landing/lottie/buttons/nextchapter.json"
                            speed="1"
                            loop="{false}"
                            controls="{false}"
                            autoplay="{true}"
                            renderer="svg"
                            background="transparent"
                            height="{44}"
                            width="{252}"
                            hover
                        />
                    {/if}                
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
    .gray-button{
        transition: opacity 0.5;
        opacity: 0.6;
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
      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 0.6; }
    }
    .gettingstarted-onerow{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 175px;
    }
    .subtitle-paragraph{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .subtitle-gettingstarted-titlepart img{
        position: absolute;
        top: 12px;
        left: 0px;
    }
    .subtitle-description-body{
        margin-top: 120px;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        text-align: left;
        display: flex;
    }
    .button-style229{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 20px;
    }
    .lore-videopan{
        display: flex;
        position: relative;
        height: 395px;
        width: 100%;
        margin-top: 80px;
        background-image: url('/assets/landing/gettingstarted/video1.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .lore-audiopan{
        display: flex;
        position: relative;
        width: 100%;
    }

    .chapter-title-bignum{
        position: absolute;
        left: 111px;
        bottom: -32px;
    }
    .chapter-title-bignum span{
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
    .video-content-texts{
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
    .prev-next-buttons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: -150px;
        margin-bottom: 30px;
    }
    .gettingstarted-chapterfont{
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
        margin-left: 32px;
    }
    .gettingstarted-chapterfont1{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 32px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        z-index: 2;
        margin-top:-35px;
    }
    .section-container{
        max-width: 750px;
        margin: auto;
        margin-top: 150px;
        z-index: 1;
    }
    .section-title {
        position: relative;
        text-align: center;
    }
    .chapter-title {
        position: absolute;
        left: -100px;
        transform: translateX(-100%);
    }
    
    @media (max-width: 1400px) {
        .section-title {
            margin-top: 80px;
        }
        .chapter-title {
            top: -20px;
            left: 0;
            transform: translateY(-100%);
        }
		.gettingstarted-chapterfont1 p{
			margin-top: 30px;
		}
	}	

    @media (max-width: 768px) {
        .section-container {
            padding: 0 20px;
        }
        .section-container{
            margin-top: 50px;
        }

    }

    @media (max-width: 600px) {
        .prev-next-buttons {
            width: 100%;
            flex-direction: column;
            margin-bottom: 20px;
        }    
    }
</style> 