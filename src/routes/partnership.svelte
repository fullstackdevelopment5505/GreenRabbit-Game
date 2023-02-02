<script>
    import { page } from '$app/stores';
    import { getContext, onMount } from 'svelte';
    import { useForm, HintGroup, Hint, validators, email, required } from "svelte-use-form";
    import { goto } from '$app/navigation';
    import { each } from 'svelte/internal';
    import LoreVideoPlayer from 'src/components/landing/LoreVideoPlayer.svelte';
    import { browser } from '$app/env';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    let paused = true;
    let time = 0;

    const form = useForm('xrgradzp');
    //https://tobiasahlin.com/moving-letters/
    onMount(async () => {
        document.getElementById('loader').style.display = 'none';
        // Wrap every letter in a span
        }
    );

   function handleSubmit(){

    }
 
</script>
<svelte:head>
</svelte:head>

<div class="bg-wrapper">
    <div class="box-data">
        <div class="partner-program__Container">
            <h1 class="partner-program__FormHeader">Partner Program Information Request</h1>
            <form enctype="multipart/form-data" use:form>
                <div class="Form__FormGroup">
                    <label for="project_name" class="Form__Label">Project Name <span class="Form__RequiredLabel">*</span></label>
                    <input type="text" id="project_name" name="project_name" use:validators={[required]}  class="Form__Input">
                    <HintGroup for="project_name">
                        <Hint on="required">This is a mandatory field</Hint>
                        <Hint on="project_name" hideWhenRequired>Project Name is not valid</Hint>
                      </HintGroup>
                </div>
                <div class="Form__FormGroup">
                    <label class="Form__Label">Project Collection on AtomicHub (Link URL) <span class="Form__RequiredLabel">*</span></label>
                    <input type="text" id="collection_link" name="collection_link" use:validators={[required]} class="Form__Input">
                    <HintGroup for="collection_link">
                        <Hint on="required">This is a mandatory field</Hint>
                        <Hint on="collection_link" hideWhenRequired>URL is not valid</Hint>
                      </HintGroup>
                </div>
                <div class="Form__FormGroup">
                    <label class="Form__Label">Project Socials (Link URLs):</label>
                    <div class="Form__InputGroup">
                        <div class="Form__InputLeftElement">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#1DA1F2" style="color:#1DA1F2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                        </div>
                        <input type="text" style="width:100%;min-width:0px;position:relative;appearance:none;font-size:1rem;padding-inline-start:2.5rem;padding-inline-end:2.5rem;height:2.5rem;border-radius:0.375rem;border-width:1px;border-style:solid" id="twitter_url" name="twitter_url" placeholder="Twitter" class="Form__Input">
                    </div>                    
                    <div class="Form__InputGroup">
                        <div class="Form__InputLeftElement">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="#7289d9" style="color:#7289d9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg>
                        </div>
                        <input type="text" style="width:100%;min-width:0px;position:relative;appearance:none;font-size:1rem;padding-inline-start:2.5rem;padding-inline-end:2.5rem;height:2.5rem;border-radius:0.375rem;border-width:1px;border-style:solid" id="discord_url" name="discord_url" placeholder="Discord" class="Form__Input-sc-1lk86ui-3 jWFAVT">
                    </div>
                    <div class="Form__InputGroup">
                        <div class="Form__InputLeftElement">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" color="#0088cc" style="color:#0088cc" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>
                        </div>
                        <input type="text" style="width:100%;min-width:0px;position:relative;appearance:none;font-size:1rem;padding-inline-start:2.5rem;padding-inline-end:2.5rem;height:2.5rem;border-radius:0.375rem;border-width:1px;border-style:solid" id="telegram_url" name="telegram_url" placeholder="Telegram" class="Form__Input-sc-1lk86ui-3 jWFAVT">
                    </div>
                </div>
                <div class="Form__FormGroup">
                    <label for="project_url" class="Form__Label">Project Website (Link URL):</label>
                        <input type="text" id="project_url" name="project_url" class="Form__Input">
                </div>
                <div class="Form__FormGroup">
                    <label for="project_desc" class="Form__Label">Tell us more about your project <span class="Form__RequiredLabel">*</span></label>
                    <textarea id="project_desc" type="text" name="project_desc" rows="8" use:validators={[required]} class="Form__TextArea"></textarea>
                    <HintGroup for="project_desc">
                        <Hint on="required">This is a mandatory field</Hint>
                        <Hint on="project_desc" hideWhenRequired>This is not valid</Hint>
                      </HintGroup>
                </div>
                <div class="Form__FormGroup"><label for="key_contact_name" class="Form__Label">Key Contact Name <span class="Form__RequiredLabel">*</span></label>
                    <input type="text" id="key_contact_name" name="key_contact_name"  use:validators={[required]} class="Form__Input">
                    <HintGroup for="key_contact_name">
                        <Hint on="required">This is a mandatory field</Hint>
                        <Hint on="key_contact_name" hideWhenRequired>This is not valid</Hint>
                      </HintGroup>
                </div>
                <div class="Form__FormGroup">
                    <label for="key_contact_email" class="Form__Label">Key Contact Email <span class="Form__RequiredLabel">*</span></label><input type="email" id="key_contact_email" name="key_contact_email" use:validators={[required, email]} class="Form__Input">
                    <HintGroup for="key_contact_email">
                        <Hint on="required">This is a mandatory field</Hint>
                        <Hint on="key_contact_email" hideWhenRequired>This email is not valid</Hint>
                      </HintGroup>

                </div>
                <div class="Form__FormGroup"><label class="Form__Label">Key Contact Socials (Link URLs):</label><div class="Form__InputGroup">
                    <div class="Form__InputLeftElement">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="#7289d9" style="color:#7289d9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
                        </svg>
                    </div>
                    <input type="text" style="width:100%;min-width:0px;position:relative;appearance:none;font-size:1rem;padding-inline-start:2.5rem;padding-inline-end:2.5rem;height:2.5rem;border-radius:0.375rem;border-width:1px;border-style:solid" id="key_contact_discord" name="key_contact_discord" placeholder="Discord" class="Form__Input">
                </div>
                <div class="Form__InputGroup">
                    <div class="Form__InputLeftElement">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" color="#0088cc" style="color:#0088cc" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>
                    </div>
                    <input type="text" style="width:100%;min-width:0px;position:relative;appearance:none;font-size:1rem;padding-inline-start:2.5rem;padding-inline-end:2.5rem;height:2.5rem;border-radius:0.375rem;border-width:1px;border-style:solid" id="key_contact_telegram" name="key_contact_telegram" placeholder="Telegram" class="Form__Input">
                </div>
                <div class="Form__FormGroup">
                    <label for="collab_option" class="Form__Label">Are you interested in a...</label>
                    <div class="Form__RadioContainer">
                        <div>
                            <input type="radio" name="collab_option" id="collab_option_1" value="1" use:validators={[required]}> <!-- -->Collaboration Piece
                            <HintGroup for="collab_option_1">
                                <Hint on="required">This is a mandatory field</Hint>
                                <Hint on="collab_option_1" hideWhenRequired>This field is not valid</Hint>
                              </HintGroup>
                        </div>
                        <div>
                            <input type="radio" name="collab_option" id="collab_option_2" value="2" use:validators={[required]}> <!-- -->Partner Staking Program
                            <HintGroup for="collab_option_2">
                                <Hint on="required">This is a mandatory field</Hint>
                                <Hint on="collab_option_2" hideWhenRequired>This field is not valid</Hint>
                            </HintGroup>
                        </div>
                    </div>
                </div>
                <div class="Form__FormGroup">
                    <div class="Form__FormGroup">
                        <label for="collab_idea" class="Form__Label">What's your idea for a collaboration? <span class="Form__RequiredLabel">*</span></label>
                        <textarea id="collab_idea" type="text" name="collab_idea" rows="8" use:validators={[required]} class="Form__TextArea"></textarea>
                        <HintGroup for="collab_idea">
                            <Hint on="required">This is a mandatory field</Hint>
                            <Hint on="collab_idea" hideWhenRequired>This field is not valid</Hint>
                        </HintGroup>
                    </div>
                    <div class="Form__FormGroup"><label for="collab_history" class="Form__Label">What other collaborations have you done in the past? (Please provide any links where possible) <span class="Form__RequiredLabel">*</span></label>
                    <textarea id="collab_history" type="text" name="collab_history" rows="8" use:validators={[required]} class="Form__TextArea"></textarea>
                    <HintGroup for="collab_history">
                        <Hint on="required">This is a mandatory field</Hint>
                        <Hint on="collab_history" hideWhenRequired>This field is not valid</Hint>
                    </HintGroup>
                </div>
                <div class="Form__FormGroup">
                    <label for="collab_other" class="Form__Label">What other details do you feel we should know about your collaboration approach and ideas?</label><textarea id="collab_other" type="text" name="collab_other" rows="8" class="Form__TextArea"></textarea>
                </div>
                <div class="Form__FormGroup">
                    <label for="psr_form" class="Form__Label">Have you completed a Partner Staking Registration Form as well?</label>
                    <div class="Form__RadioContainer">
                        <div style="width: 50%;">
                            <div>
                                <input type="radio" name="psr_form" value="yes"> Yes
                            </div>
                            <div> 
                                <input type="radio" name="psr_form" value="no"> No
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Form__FormGroup">
                    <div class="g-recaptcha" data-sitekey="6Ldm7bQbAAAAAEFuWSJfOwGndPbHVSnUh1yucDlq">
                        <div style="width: 304px; height: 78px;">
                            <div>
                                <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Ldm7bQbAAAAAEFuWSJfOwGndPbHVSnUh1yucDlq&amp;co=aHR0cHM6Ly93d3cuZ3JlZW5yYWJiaXRnYW1lLmlvOjQ0Mw..&amp;hl=en&amp;v=85AXn53af-oJBEtL2o2WpAjZ&amp;size=normal&amp;cb=lhcjl8bn7rg4" width="304" height="78" role="presentation" name="a-v6zg16oz94hn" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox">
                                </iframe>
                            </div>
                            <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;">
                            </textarea>
                        </div>
                        <iframe style="display: none;"></iframe>
                    </div>
                </div>
                <div class="Form__FormGroup">
                    <button type="submit" class="Form__StyledButton">Submit</button>
                </div>
            </form>
        </div>
    </div>                       
</div>

<style>

    .Form__FormGroup{
        color: papayawhip;
        display: block;
        max-width: 500px;
        margin: 50px auto;
    }
    .Form__FormGroup label{
        margin-bottom: 0.5em;
        color: white;
        display: block;
    }
    span {
        color: red;
    }

    .Form__FormGroup input{
        padding: 0.5em;
        color: rgb(35, 35, 35);
        background: papayawhip;
        border: none;
        border-radius: 3px;
        width: 100%;
        margin-bottom: 0.5em;
    }

    .Form__InputGroup{
        position: relative;
    }
    .Form__StyledButton{
        color: rgb(255, 255, 255);
        background: linear-gradient(to right, rgb(68, 190, 152) 3%, rgb(32, 144, 109) 84%);
        z-index: 10;
        cursor: pointer;
        white-space: nowrap;
        border: 1px solid rgb(54, 255, 192);
        height: 45px;
        width: 180px;
        font-weight: 600;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }

    .Form__FormGroup textarea{
        padding: 0.5em;
        color: rgb(35, 35, 35);
        background: papayawhip;
        border: none;
        border-radius: 3px;
        width: 100%;
        margin-bottom: 0.5em;
    }
    .Form__RadioContainer{
        display: flex;
        justify-content: space-between;
        -webkit-box-pack: justify;
    }
    .Form__RadioContainer input{
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        width: unset;
    }
    .Form__InputLeftElement{
        left: 0px;
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        position: absolute;
        top: 0px;
        z-index: 2;
        pointer-events: none;
    }

    h1{
        font-size: 30px;
        text-align: center;
        margin: 20px 0px;
    }
    p{
        margin-top: 12px;
        font-size: 18px;
    }
    h2{
        font-size: 28px;
        margin-top: 24px;
        margin-bottom: 10px;
    }
    .bg-wrapper{      
        display: flex;       
        flex-direction: column;        
        width: 100%;
        display: inline;
    }

    .box-data{
        margin-top: 44px;
        max-width: 910px;
        margin: 0 auto;
        padding: 48px 12px;
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        color: #FFFFFF;
        text-align: left;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 150px;
    }
  

    @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 0.6; }
    }
 
    /* LORE ENDED */      
</style> 