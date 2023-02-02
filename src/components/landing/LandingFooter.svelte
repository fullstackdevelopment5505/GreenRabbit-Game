<script>
    import { goto } from '$app/navigation';
</script>


<div class="landing-footer">
    <div class="landing-footer-leftpart">
        <p class="footer-font1">GREEN RABBIT HOLDINGS, LLC - 427 E. 17TH ST. F259, COSTA MESA, CA, 92627</p>
        <p class="footer-font2">©2022 GREEN RABBIT HOLDINGS, LLC | ALL RIGHTS RESERVED  - All trademarks referenced herein are the properties of their respective owners</p>
    </div>
    <div class="landing-footer-rightpart">
        <div class="url-iconlist">
            <img class="twitter-img icon-img-discord" 
                src="/assets/landing/button/topicon1.svg"  
                style="width: 29.62px" alt=""
                on:click={()=>{
                        window.open(
                        'https://discord.com/invite/5fvKZSDNKt',
                        '_blank'
                    );
                }}
            />
            <!-- <img class="twitter-img icon-img-blabla" 
                src="/assets/landing/button/topicon6.svg"  
                style="width: 42px; margin-top: 8px;" alt=""
                on:click={()=>{
                        window.open(
                        'https://greenrabbit.medium.com/',
                        '_blank'
                    );
                }}
             /> -->
            <img class="twitter-img icon-img-twitter" 
                src="/assets/landing/button/topicon2.svg" 
                style="width: 26.55px" alt=""
                on:click={()=>{
                    window.open(
                    'https://twitter.com/greenrabbitgame',
                    '_blank'
                );
            }}            
          />
          <img class="twitter-img icon-img-tme" 
                src="/assets/landing/button/topicon3.svg" 
                style="width: 25.79px" alt=""
                on:click={()=>{
                    window.open(
                    'https://t.me/greenrabbitgame',
                    '_blank'
                );
            }}             
          />
            <img class="twitter-img icon-img-instgram" 
                src="/assets/landing/button/topicon4.svg" 
                style="width: 22px" alt=""
                on:click={()=>{
                    window.open(
                        'https://www.instagram.com/greenrabbitgame/',
                        '_blank'
                );
            }}             
          />


            <!-- <img class="twitter-img" src="/assets/landing/button/topicon1.svg" alt=""/>
            <img class="twitter-img" src="/assets/landing/button/topicon2.svg" alt=""/>
            <img class="twitter-img" src="/assets/landing/button/topicon3.svg" alt=""/>
            <img class="twitter-img" src="/assets/landing/button/topicon4.svg" alt=""/> -->
        </div>        
        <div class="privacy-manage">
            <p class="footer-font3">
                <span on:click={()=>{goto('/privacy')}}>PRIVACY</span>
                |  
                <span on:click={()=>{goto('/termofuse')}}>TERMS OF USE</span>
                |  
                <span on:click={()=>{goto('/partnership')}}>PARTNERSHIP PROGRAM</span>
            </p>
        </div>
        <p class="footer-font4">©2022 GREEN RABBIT HOLDINGS, LLC | ALL RIGHTS RESERVED  - All trademarks referenced herein are the properties of their respective owners</p>
    </div>
</div>
<style>
    .landing-footer{
        height: 132px;
        width: 100%;
        padding: 30px 40px;
        display: flex;
        justify-content:space-between;
        background-color: #0E1425;
        background-size: cover;
        background-position-x: center;
        z-index: 999;
    }
    .landing-footer-leftpart{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-right: 20px;
    }
    .landing-footer-rightpart{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;
    }
    .twitter-img{
        margin-left: 30px;
        cursor: pointer;
        width: 29.62px;
    }         
    .icon-img-blabla:hover{
        content : url('/assets/landing/button/topicon6-focus.svg');
    }
    .icon-img-discord:hover{
        content : url('/assets/landing/button/topicon1-focus.svg');
    }
    .icon-img-twitter:hover{
        content : url('/assets/landing/button/topicon2-focus.svg');
    }
    .icon-img-tme:hover{
        content : url('/assets/landing/button/topicon3-focus.svg');
    }
    .icon-img-instgram:hover{
        content : url('/assets/landing/button/topicon4-focus.svg');
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
    .footer-font4{
        display: none;

    }
    .footer-font3{
        font-family: "Forza A", "Forza B";
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        width: 100%;
        text-align: right;
    }
    .footer-font3 span{
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .landing-footer {
            height: auto;
            padding: 20px 40px;
            flex-direction: column;
        }
        .footer-font1 {
            text-align: center;
            justify-content: center;
            margin-top: 15px;
            margin-bottom: 30px;
        }
        .footer-font2 {
            display: none;
            margin-top: 30px;
            text-align: center;
        }
        .footer-font3 {
            margin-top: 30px;
        }
        .footer-font4{
            display: flex;
            margin-top: 30px;
            font-family: "Forza A", "Forza B";
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
            color: #FFFFFF;
            text-align: center;
        }
        .landing-footer-rightpart {
            padding-left: unset;
        }
        .url-iconlist {
            margin: 15px 0;
            justify-content: center;
        }
        .twitter-img:first-child {
            margin-left: 0px;
        }
        .footer-font3 {
            text-align: center;
        }

    
    }
</style>