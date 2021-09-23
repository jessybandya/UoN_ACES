import React from 'react'
import "./styles.css"
import Header from "../grid/Navbar"

function Blog() {
    return (
<body class="huawei-v4 huawei-lv page-name- none-ecommerce" data-aos-easing="ease" data-aos-duration="500" data-aos-delay="0">
    <div class="optanon-alert-box-wrapper  " role="alertdialog" aria-labelledby="alert-box-title" aria-describedby="alert-box-message" style={{display:"none"}}>
        <div class="optanon-alert-box-bottom-top">
            </div><div class="optanon-alert-box-bg">
                <div class="optanon-alert-box-logo">
                     </div><div class="optanon-alert-box-body">
                         <p class="optanon-alert-box-title legacy-banner-title sr-only" id="alert-box-title" role="heading" aria-level="2">Cookie Notice</p>
                         <p class="banner-content" id="alert-box-message">Mēs izmantojam sīkfailus, lai personalizētu saturu un reklāmas, nodrošinātu sociālo mediju funkcijas un analizētu mūsu datplūsmu. Mūsu sociālo mediju, reklāmas un analītikas partneriem mēs atklājam informāciju par to, kā izmantojat mūsu vietni.  
                          <a href="http://consumer.huawei.com/lv/legal/cookie-policy/" class="banner-policy-link" tabindex="1" aria-label="Uzzināt vairāk">Uzzināt vairāk</a>
                          </p>
                          </div>
                          <div class="optanon-clearfix">
                              </div>
                              <div class="optanon-alert-box-button-container">
                                  <div class="optanon-alert-box-button optanon-button-close">
                                      <div class="optanon-alert-box-button-middle">
                                          <button class="optanon-alert-box-close" aria-label="Aizvērt">Aizvērt</button>
                                          </div>
                                          </div>
            <div class="optanon-alert-box-button optanon-button-allow">
                <div class="optanon-alert-box-button-middle accept-cookie-container">
                    <button class="optanon-allow-all accept-cookies-button" title="AKCEPTĒT VISUS SĪKFAILUS" aria-label="AKCEPTĒT VISUS SĪKFAILUS" onclick="Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Banner Accept Cookies');" tabindex="3">AKCEPTĒT VISUS SĪKFAILUS
                    </button>
                    </div>
                    </div>
                    <div class="optanon-alert-box-button optanon-button-more">
                        <div class="optanon-alert-box-button-middle">
                            <button class="optanon-toggle-display cookie-settings-button" title="COOKIE IESTATĪJUMS" aria-label="COOKIE IESTATĪJUMS" onclick="Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Banner Open Preferences');" tabindex="2">COOKIE IESTATĪJUMS</button></div></div></div><div class="optanon-clearfix optanon-alert-box-bottom-padding"></div></div></div><div id="optanon" class="modern"><div id="optanon-popup-bg"></div><div id="optanon-popup-wrapper" role="dialog" aria-modal="true" tabindex="-1" lang="lv-LV"><div id="optanon-popup-top"></div><div id="optanon-popup-body"><div id="optanon-popup-body-left"><div id="optanon-popup-body-left-shading"></div><div id="optanon-branding-top-logo" style={{backgroundImage: `url('https://optanon.blob.core.windows.net/logos/380/380:consumer.huawei.com/lv//HW_logo_new_300_106.png')!important`}}>
                                </div>
                                <ul id="optanon-menu" aria-label="Navigation Menu" role="tablist">
                                    <li class="menu-item-on menu-item-about" title="Jūsu konfidencialitāte">
                                        <p class="preference-menu-item">
                                            <button role="tab" aria-selected="true" aria-controls="Jūsu-konfidencialitāte" id="Jūsu-konfidencialitāte">Jūsu konfidencialitāte
                                            </button></p></li><li class="menu-item-necessary menu-item-on" title="Būtiskie sīkfaili"><p class="preference-menu-item"><button role="tab" aria-selected="false" aria-controls="Būtiskie-sīkfaili" id="Būtiskie-sīkfaili">Būtiskie sīkfaili</button></p></li><li class="menu-item-on menu-item-performance" title="Analītiskie sīkfaili"><p class="preference-menu-item"><button role="tab" aria-selected="false" aria-controls="Analītiskie-sīkfaili" id="Analītiskie-sīkfaili">Analītiskie sīkfaili</button></p></li><li class="menu-item-on menu-item-advertising" title="Reklāmas sīkfaili"><p class="preference-menu-item"><button role="tab" aria-selected="false" aria-controls="Reklāmas-sīkfaili" id="Reklāmas-sīkfaili">Reklāmas sīkfaili</button></p></li><li class="menu-item-moreinfo menu-item-off" title="Vairāk informācijas"><p class="preference-menu-item"><a target="_blank" aria-label="Vairāk informācijas" href="http://consumer.huawei.com/lv/legal/cookie-policy/" onclick="Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Cookie Policy');">Vairāk informācijas</a></p></li></ul></div><div><div id="optanon-popup-body-right"><p role="heading" aria-level="2" class="legacy-preference-banner-title h2" aria-label="Sīkfailu preferenču centrs">Sīkfailu preferenču centrs</p><div class="vendor-header-container"><p class="header-3" role="heading" aria-level="3"></p><div id="optanon-popup-more-info-bar"><div class="optanon-status"><div class="optanon-status-editable"><form><span class="fieldset"><p><input type="checkbox" value="check" id="chkMain" checked="checked" class="legacy-group-status optanon-status-checkbox"/><label for="chkMain">Aktīvs</label></p></span></form></div><div class="optanon-status-always-active optanon-status-on"><p>Vienmēr aktīvs</p></div></div></div></div><div class="optanon-main-info-text" role="tabpanel"></div></div><div class="optanon-bottom-spacer"></div></div></div><div id="optanon-popup-bottom"> <a href="https://onetrust.com/poweredbyonetrust" target="_blank" rel="noopener"><div id="optanon-popup-bottom-logo" alt="OneTrust Website" style={{background: `url(https://optanon.blob.core.windows.net/skins/6.20.0/default_flat_bottom_two_button_black/v2/images/cookie-collective-top-bottom.png)`,width:155,height:35}} title="powered by OneTrust"></div></a><div class="optanon-button-wrapper optanon-save-settings-button optanon-close optanon-close-consent"><div class="optanon-white-button-left"></div><div class="optanon-white-button-middle"><button title="Saglabāt iestatījumus" aria-label="Saglabāt iestatījumus" onclick="Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Save Settings');">Saglabāt iestatījumus</button></div><div class="optanon-white-button-right"></div></div><div class="optanon-button-wrapper optanon-allow-all-button optanon-allow-all" style={{display: "none"}}><div class="optanon-white-button-left"></div><div class="optanon-white-button-middle"><button title="Akceptēt sīkfailus" aria-label="Akceptēt sīkfailus" onclick="Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Allow All');">Akceptēt sīkfailus</button></div><div class="optanon-white-button-right"></div></div></div></div></div><h1 class="header-tag-title seo">Ilgtspēja</h1>
			
		
	

	
		
			





    



			
            
        
    























    
        
    



		
	





	
    

    
        
        


	

	
	
 



	
    








    
   
	
    
	
		







<input title="cookie" type="hidden" id="cookie-type" value="othercookie"/>

    





<span class="popular-text hidden" data-value="Populāri rezultāti"></span>
<span class="suggested-text hidden" data-value="Ieteiktie rezultāti"></span>


<div class="v4 header-placeholder-pl nav-v2" id="header-placeholder"></div>

<div class="v4 header platform-invisible nav-v2" id="header-v4" data-component="header">
    

    
    
    

    
    <input title="main-nav" type="hidden" id="mainNav" value="nav-v2"/>
    <div class="v4 n01-main-navigation main-navigation nav-v2" data-component="n01-main-navigation">
        
        <div class="container main-navigation__container">
            <a title="logo" class="logo" href="/lv/" data-navicon="logo">
                <img src="//consumer-res.huawei.com/etc/designs/huawei-cbg-site/clientlib-campaign-v4/common-v4/images/logo.svg" width="142" alt="Huawei-v4" onerror="imgErrorUrl(this)"/>
            </a>
            <nav class="main-nav">
                
                    
                    
	
	<div class="lf-nav nav-zone">
		
		

		
		

		<ul class="main-nav__list" role="menubar">
			
				
				
					<li class="main-nav__item main-nav__item--has-children">
						

    <a href="javascript:;" data-navicon="Viedtālrunis" class="main-nav__link unhover">Viedtālrunis</a>
    
    
        <div class="v4 n02-expanded-products popup" data-component="n02-expanded-products">
            <div class="container">
                <button type="button" class="popup__close-btn js-close-popup">
                    <span class="sr-only"></span>
                </button>
                <div class="dropdown ">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="dropdown__left">
                                <ul class="dropdown__top-links">
                                    
                                        <li class="dropdown__top-item">
                                            <a title="Visi produkti" href="/lv/phones/" data-navsecondlink="Visi produkti" data-position="top" class="dropdown__big-link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Visi produkti" cat="navigation" act="Click on navigation" lab="Visi produkti">Visi produkti</a>
                                        </li>
                                    
                                        <li class="dropdown__top-item">
                                            <a title="Salīdzināt telefonus" href="/lv/phones/compare/" data-navsecondlink="Salīdzināt telefonus" data-position="top" class="dropdown__big-link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Salīdzināt telefonus" cat="navigation" act="Click on navigation" lab="Salīdzināt telefonus">Salīdzināt telefonus</a>
                                        </li>
                                    
                                </ul>
                                <ul class="dropdown__list">
                                    
                                        <li class="dropdown__item">
                                            <a title="AppGallery" href="/lv/mobileservices/appgallery/" data-navsecondlink="AppGallery" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="AppGallery" cat="navigation" act="Click on navigation" lab="AppGallery">AppGallery</a>
                                        </li>
                                    
                                        <li class="dropdown__item">
                                            <a title="EMUI" href="/lv/emui/" data-navsecondlink="EMUI" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="EMUI" cat="navigation" act="Click on navigation" lab="EMUI">EMUI</a>
                                        </li>
                                    
                                        <li class="dropdown__item">
                                            <a title="Austiņas un skaļruņi" href="/lv/audio/" data-navsecondlink="Austiņas un skaļruņi" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Austiņas un skaļruņi" cat="navigation" act="Click on navigation" lab="Austiņas un skaļruņi">Austiņas un skaļruņi</a>
                                        </li>
                                    
                                </ul>
                                <ul class="dropdown__list dropdown__list--bottom">
                                    
                                        <li class="dropdown__item">
                                            <a title="Atrast Servisa centru" href="/lv/support/service-center/" data-navsecondlink="Atrast Servisa centru" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Atrast Servisa centru" cat="navigation" act="Click on navigation" lab="Atrast Servisa centru">Atrast Servisa centru</a>
                                        </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-8 dropdown__order">
                            <div class="dropdown__wrap">
                                <div class="dropdown__right ">
                                    
   

   
   

   
   <div class="row dropdown__row-mobile">
       
        <div class="col-md-6 dropdown__right-col unDisplayInMobile">
            <div class="dropdown__block-in">
                
                    <div class="dropdown__holder dropdown__holder--overlay dropdown__holder--two-img">
                        <a title="HUAWEI P40 Pro" href="/lv/phones/p40-pro/" data-navcardlink="HUAWEI P40 Pro" data-position="top" class="dropdown__card_link_btn">
                            <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/v4/home-page/nav/phones/p40-pro.jpg" alt="HUAWEI P40 Pro" class="dropdown__image-cover lazyload-img" onerror="imgErrorUrl(this)"/></a>

                        <div class="dropdown__btns">
                            <div class="dropdown__card_link">
                                <a title="HUAWEI P40 Pro" href="/lv/phones/p40-pro/" data-navcardlink="HUAWEI P40 Pro" data-position="top" class="dropdown__card_link_btn"></a>
                            </div>
                            
                                
                                    
                                    
                                        <a title="Uzziniet vairāk" href="/lv/phones/p40-pro/" data-navcardlink="HUAWEI P40 Pro" data-position="top" class="btn btn--white">Uzziniet vairāk</a>
                                    
                                
                            
                                
                                    
                                        <input type="hidden" name="buyBtnInfo" value="{&quot;productName&quot;:&quot;HUAWEI P40 Pro&quot;,&quot;marketingName&quot;:&quot;HUAWEI P40 Pro&quot;,&quot;productId&quot;:&quot;40699&quot;,&quot;onePriceDisplay&quot;:false,&quot;buyButtonMode&quot;:{&quot;buttonType&quot;:&quot;none&quot;,&quot;openInNewPage&quot;:false,&quot;thirdPartySiteLink&quot;:&quot;https://consumer.huawei.com/en/phones/p30/&quot;,&quot;partnerCountryFilterEffective&quot;:false,&quot;disabledProductLink&quot;:false},&quot;ecOpenInNewPage&quot;:&quot;false&quot;,&quot;productTitle&quot;:&quot;p40-pro&quot;,&quot;detailLink&quot;:&quot;/content/huawei-cbg-site/lv/phones/p40-pro&quot;,&quot;openStoreFinderInNewPage&quot;:false,&quot;showStoreFinder&quot;:false,&quot;disclaimer&quot;:&quot;<p>*Pēc pirkuma saites noklikšķināšanas tiks atvērta trešās puses vietne un iegādes platforma. Lūdzu iepazīstieties ar attiecīgajiem iegādes noteikumiem un privātuma politiku. Huawei nepārvalda un neatbild par trešo pušu lapu darbību.</p>\r\n&quot;,&quot;priceDisplayType&quot;:&quot;{0} {1}{2}&quot;}"/>
                                        <a title="PIRKT" href="/lv/phones/p40-pro/" target="_self" data-nameforga="HUAWEI P40 Pro" data-position="top" data-eventtype="navi" data-ecopeninnewpage="false" data-onepricedisplay="false" class="btn global-buy-button btn--transparent-white ">
                                            PIRKT
                                        </a>
                                    
                                    
                                
                            
                        </div>
                    </div>
                
                
                <p class="dropdown__series"><a title="HUAWEI P40 Pro" href="/lv/phones/p40-pro/" data-navcardlink="HUAWEI P40 Pro" data-position="top" class="dropdown__series-link">HUAWEI P40 Pro</a></p>
            </div>
        </div>
       
        
       
        
       
        
       
        
       
       <div class="col-md-6 dropdown__right-col dropdown__four-images">
           <div class="row dropdown__row-mobile">
               
                   
               
                   <div class="col-md-6 dropdown__right-col ">
                       <div class="dropdown__block-in">
                           <a title="HUAWEI P40" href="/lv/phones/p40/" data-navcardlink="HUAWEI P40" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/v4/home-page/nav/phones/p40-black.png" alt="HUAWEI P40" class="dropdown__image-centered lazyload-img" onerror="imgErrorUrl(this)"/>
                               </div>
                           </a>
                           <p class="dropdown__series"><a title="HUAWEI P40" href="/lv/phones/p40/" data-navcardlink="HUAWEI P40" data-position="top" class="dropdown__series-link">HUAWEI P40</a></p>
                       </div>
                   </div>
               
                   <div class="col-md-6 dropdown__right-col ">
                       <div class="dropdown__block-in">
                           <a title="HUAWEI P40 lite" href="/lv/phones/p40-lite/" data-navcardlink="HUAWEI P40 lite" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/v4/home-page/nav/phones/p40-lite.png" alt="HUAWEI P40 lite" class="dropdown__image-centered lazyload-img" onerror="imgErrorUrl(this)"/>
                               </div>
                           </a>
                           <p class="dropdown__series"><a title="HUAWEI P40 lite" href="/lv/phones/p40-lite/" data-navcardlink="HUAWEI P40 lite" data-position="top" class="dropdown__series-link">HUAWEI P40 lite</a></p>
                       </div>
                   </div>
               
                   <div class="col-md-6 dropdown__right-col ">
                       <div class="dropdown__block-in">
                           <a title="HUAWEI P smart 2021" href="/lv/phones/p-smart-2021/" data-navcardlink="HUAWEI P smart 2021" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/pdp/phones/p-smart-2021/green-list.png" alt="HUAWEI P smart 2021" class="dropdown__image-centered lazyload-img" onerror="imgErrorUrl(this)"/>
                               </div>
                           </a>
                           <p class="dropdown__series"><a title="HUAWEI P smart 2021" href="/lv/phones/p-smart-2021/" data-navcardlink="HUAWEI P smart 2021" data-position="top" class="dropdown__series-link">HUAWEI P smart 2021</a></p>
                       </div>
                   </div>
               
                   <div class="col-md-6 dropdown__right-col ">
                       <div class="dropdown__block-in">
                           <a title="HUAWEI P30 Pro" href="/lv/phones/p30-pro/" data-navcardlink="HUAWEI P30 Pro" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/v4/home-page/nav/phones/p30-pro.png" alt="HUAWEI P30 Pro" class="dropdown__image-centered lazyload-img" onerror="imgErrorUrl(this)"/>
                               </div>
                           </a>
                           <p class="dropdown__series"><a title="HUAWEI P30 Pro" href="/lv/phones/p30-pro/" data-navcardlink="HUAWEI P30 Pro" data-position="top" class="dropdown__series-link">HUAWEI P30 Pro</a></p>
                       </div>
                   </div>
               
           </div>
       </div>
   </div>

   
   

   
   

   
   

   
   

   
   

   
   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    
    


					</li>
				
			
				
				
					<li class="main-nav__item main-nav__item--has-children">
						

    <a href="javascript:;" data-navicon="Dators" class="main-nav__link unhover">Dators</a>
    
    
        <div class="v4 n02-expanded-products popup" data-component="n02-expanded-products">
            <div class="container">
                <button type="button" class="popup__close-btn js-close-popup">
                    <span class="sr-only"></span>
                </button>
                <div class="dropdown ">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="dropdown__left">
                                <ul class="dropdown__top-links">
                                    
                                        <li class="dropdown__top-item">
                                            <a title="Visi MateBook" href="/lv/laptops/" data-navsecondlink="Visi MateBook" data-position="top" class="dropdown__big-link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Visi MateBook" cat="navigation" act="Click on navigation" lab="Visi MateBook">Visi MateBook</a>
                                        </li>
                                    
                                </ul>
                                <ul class="dropdown__list">
                                    
                                        <li class="dropdown__item">
                                            <a title="Austiņas un skaļruņi" href="/lv/audio/" data-navsecondlink="Austiņas un skaļruņi" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Austiņas un skaļruņi" cat="navigation" act="Click on navigation" lab="Austiņas un skaļruņi">Austiņas un skaļruņi</a>
                                        </li>
                                    
                                </ul>
                                <ul class="dropdown__list dropdown__list--bottom">
                                    
                                        <li class="dropdown__item">
                                            <a title="Atrast Servisa centru" href="/lv/support/service-center/" data-navsecondlink="Atrast Servisa centru" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Atrast Servisa centru" cat="navigation" act="Click on navigation" lab="Atrast Servisa centru">Atrast Servisa centru</a>
                                        </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-8 dropdown__order">
                            <div class="dropdown__wrap">
                                <div class="dropdown__right dropdown__right--no-overflow">
                                    
   

   
   

   
   

   
   

   
   

   
   

   
   

   
   <div class="row dropdown__row-mobile">
       
           <div class="col-md-6 ">
               <div class="dropdown__block-in">
                   
                       <div class="dropdown__holder dropdown__holder--overlay dropdown__holder--two-img">
                           <a title="HUAWEI MateBook X Pro 2020" href="/lv/laptops/matebook-x-pro-2020/" data-navcardlink="HUAWEI MateBook X Pro 2020" data-position="top" class="dropdown__card_link_btn">
                               <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/v4/home-page/nav/laptops/matebook-x-pro-2020.jpg" alt="HUAWEI MateBook X Pro 2020" class="dropdown__image-cover lazyload-img" onerror="imgErrorUrl(this)"/></a>

                           <div class="dropdown__btns">
                               <div class="dropdown__card_link">
                                   <a title="HUAWEI MateBook X Pro 2020" href="/lv/laptops/matebook-x-pro-2020/" data-navcardlink="HUAWEI MateBook X Pro 2020" data-position="top" class="dropdown__card_link_btn"></a>
                               </div>
                               
                                   
                                       
                                       
                                           <a title="Aplūkot" href="/lv/laptops/matebook-x-pro-2020/" data-navcardlink="HUAWEI MateBook X Pro 2020" data-position="top" class="btn btn--white">Aplūkot</a>
                                       
                                   
                               
                                   
                                       
                                           <input type="hidden" name="buyBtnInfo" value="{&quot;productName&quot;:&quot;HUAWEI MateBook X Pro 2020&quot;,&quot;marketingName&quot;:&quot;HUAWEI MateBook X Pro 2020&quot;,&quot;productId&quot;:&quot;40420&quot;,&quot;onePriceDisplay&quot;:false,&quot;buyButtonMode&quot;:{&quot;buttonType&quot;:&quot;partner&quot;,&quot;openInNewPage&quot;:true,&quot;partnerCountryFilterEffective&quot;:false,&quot;disabledProductLink&quot;:false},&quot;ecOpenInNewPage&quot;:&quot;false&quot;,&quot;productTitle&quot;:&quot;matebook-x-pro-2020&quot;,&quot;detailLink&quot;:&quot;/content/huawei-cbg-site/lv/laptops/matebook-x-pro-2020&quot;,&quot;openStoreFinderInNewPage&quot;:false,&quot;showStoreFinder&quot;:false,&quot;disclaimer&quot;:&quot;<p>*Pēc pirkuma saites noklikšķināšanas tiks atvērta trešās puses vietne un iegādes platforma. Lūdzu iepazīstieties ar attiecīgajiem iegādes noteikumiem un privātuma politiku. Huawei nepārvalda un neatbild par trešo pušu lapu darbību.</p>\r\n&quot;,&quot;priceDisplayType&quot;:&quot;{0} {1}{2}&quot;}"/>
                                           <a title="Pirkt" href="/lv/laptops/matebook-x-pro-2020/" target="_blank" data-nameforga="HUAWEI MateBook X Pro 2020" data-position="top" data-eventtype="navi" data-ecopeninnewpage="false" data-onepricedisplay="false" class="btn global-buy-button btn--transparent-white ">
                                               Pirkt
                                           </a>
                                       
                                       
                                   
                               
                           </div>
                       </div>
                   
                   
                   <p class="dropdown__series"><a title="HUAWEI MateBook X Pro 2020" href="/lv/laptops/matebook-x-pro-2020/" data-navcardlink="HUAWEI MateBook X Pro 2020" data-position="top" class="dropdown__series-link">HUAWEI MateBook X Pro 2020</a></p>
               </div>
           </div>
       
           <div class="col-md-6 ">
               <div class="dropdown__block-in">
                   
                       <div class="dropdown__holder dropdown__holder--overlay dropdown__holder--two-img">
                           <a title="HUAWEI MateBook 13 AMD" href="/lv/laptops/matebook-13-amd/" data-navcardlink="HUAWEI MateBook 13 AMD" data-position="top" class="dropdown__card_link_btn">
                               <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/homepage/nav/laptops/matebook13_nav.jpg" alt="HUAWEI MateBook 13 AMD" class="dropdown__image-cover lazyload-img" onerror="imgErrorUrl(this)"/></a>

                           <div class="dropdown__btns">
                               <div class="dropdown__card_link">
                                   <a title="HUAWEI MateBook 13 AMD" href="/lv/laptops/matebook-13-amd/" data-navcardlink="HUAWEI MateBook 13 AMD" data-position="top" class="dropdown__card_link_btn"></a>
                               </div>
                               
                                   
                                       
                                       
                                           <a title="Aplūkot" href="/lv/laptops/matebook-13-amd/" data-navcardlink="HUAWEI MateBook 13 AMD" data-position="top" class="btn btn--white">Aplūkot</a>
                                       
                                   
                               
                                   
                                       
                                           <input type="hidden" name="buyBtnInfo" value="{&quot;productName&quot;:&quot;HUAWEI MateBook 13 AMD&quot;,&quot;marketingName&quot;:&quot;HUAWEI MateBook 13 AMD&quot;,&quot;productId&quot;:&quot;38508&quot;,&quot;onePriceDisplay&quot;:false,&quot;buyButtonMode&quot;:{&quot;buttonType&quot;:&quot;partner&quot;,&quot;openInNewPage&quot;:true,&quot;partnerCountryFilterEffective&quot;:false,&quot;disabledProductLink&quot;:false},&quot;ecOpenInNewPage&quot;:&quot;false&quot;,&quot;productTitle&quot;:&quot;matebook-13-amd&quot;,&quot;detailLink&quot;:&quot;/content/huawei-cbg-site/lv/laptops/matebook-13-amd&quot;,&quot;openStoreFinderInNewPage&quot;:false,&quot;showStoreFinder&quot;:false,&quot;disclaimer&quot;:&quot;<p>*Pēc pirkuma saites noklikšķināšanas tiks atvērta trešās puses vietne un iegādes platforma. Lūdzu iepazīstieties ar attiecīgajiem iegādes noteikumiem un privātuma politiku. Huawei nepārvalda un neatbild par trešo pušu lapu darbību.</p>\r\n&quot;,&quot;priceDisplayType&quot;:&quot;{0} {1}{2}&quot;}"/>
                                           <a title="Pirkt" href="/lv/laptops/matebook-13-amd/" target="_blank" data-nameforga="HUAWEI MateBook 13 AMD" data-position="top" data-eventtype="navi" data-ecopeninnewpage="false" data-onepricedisplay="false" class="btn global-buy-button btn--transparent-white ">
                                               Pirkt
                                           </a>
                                       
                                       
                                   
                               
                           </div>
                       </div>
                   
                   
                   <p class="dropdown__series"><a title="HUAWEI MateBook 13 AMD" href="/lv/laptops/matebook-13-amd/" data-navcardlink="HUAWEI MateBook 13 AMD" data-position="top" class="dropdown__series-link">HUAWEI MateBook 13 AMD</a></p>
               </div>
           </div>
       
   </div>

   
   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    
    


					</li>
				
			
				
				
					<li class="main-nav__item main-nav__item--has-children">
						

    <a href="javascript:;" data-navicon="Planšetdators" class="main-nav__link unhover">Planšetdators</a>
    
    
        <div class="v4 n02-expanded-products popup" data-component="n02-expanded-products">
            <div class="container">
                <button type="button" class="popup__close-btn js-close-popup">
                    <span class="sr-only"></span>
                </button>
                <div class="dropdown ">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="dropdown__left">
                                <ul class="dropdown__top-links">
                                    
                                        <li class="dropdown__top-item">
                                            <a title="Visi MatePad" href="/lv/tablets/" data-navsecondlink="Visi MatePad" data-position="top" class="dropdown__big-link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Visi MatePad" cat="navigation" act="Click on navigation" lab="Visi MatePad">Visi MatePad</a>
                                        </li>
                                    
                                        <li class="dropdown__top-item">
                                            <a title="Salīdzināt MatePad" href="/lv/tablets/compare/" data-navsecondlink="Salīdzināt MatePad" data-position="top" class="dropdown__big-link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Salīdzināt MatePad" cat="navigation" act="Click on navigation" lab="Salīdzināt MatePad">Salīdzināt MatePad</a>
                                        </li>
                                    
                                </ul>
                                <ul class="dropdown__list">
                                    
                                        <li class="dropdown__item">
                                            <a title="AppGallery" href="/lv/mobileservices/appgallery/" data-navsecondlink="AppGallery" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="AppGallery" cat="navigation" act="Click on navigation" lab="AppGallery">AppGallery</a>
                                        </li>
                                    
                                        <li class="dropdown__item">
                                            <a title="EMUI" href="/lv/emui/" data-navsecondlink="EMUI" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="EMUI" cat="navigation" act="Click on navigation" lab="EMUI">EMUI</a>
                                        </li>
                                    
                                        <li class="dropdown__item">
                                            <a title="Austiņas un skaļruņi" href="/lv/audio/" data-navsecondlink="Austiņas un skaļruņi" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Austiņas un skaļruņi" cat="navigation" act="Click on navigation" lab="Austiņas un skaļruņi">Austiņas un skaļruņi</a>
                                        </li>
                                    
                                </ul>
                                <ul class="dropdown__list dropdown__list--bottom">
                                    
                                        <li class="dropdown__item">
                                            <a title="Atrast Servisa centru" href="/lv/support/service-center/" data-navsecondlink="Atrast Servisa centru" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Atrast Servisa centru" cat="navigation" act="Click on navigation" lab="Atrast Servisa centru">Atrast Servisa centru</a>
                                        </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-8 dropdown__order">
                            <div class="dropdown__wrap">
                                <div class="dropdown__right dropdown__right--no-overflow">
                                    
   

   
   

   
   

   
   

   
   

   
   

   
   

   
   <div class="row dropdown__row-mobile">
       
           <div class="col-md-6 ">
               <div class="dropdown__block-in">
                   
                       <div class="dropdown__holder dropdown__holder--overlay dropdown__holder--two-img">
                           <a title="HUAWEI MatePad Pro" href="/lv/tablets/matepad-pro/" data-navcardlink="HUAWEI MatePad Pro" data-position="top" class="dropdown__card_link_btn">
                               <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/v4/home-page/nav/tablets/matepad-pro-4g.jpg" alt="HUAWEI MatePad Pro" class="dropdown__image-cover lazyload-img" onerror="imgErrorUrl(this)"/></a>

                           <div class="dropdown__btns">
                               <div class="dropdown__card_link">
                                   <a title="HUAWEI MatePad Pro" href="/lv/tablets/matepad-pro/" data-navcardlink="HUAWEI MatePad Pro" data-position="top" class="dropdown__card_link_btn"></a>
                               </div>
                               
                                   
                                       
                                       
                                           <a title="Uzziniet vairāk" href="/lv/tablets/matepad-pro/" data-navcardlink="HUAWEI MatePad Pro" data-position="top" class="btn btn--white">Uzziniet vairāk</a>
                                       
                                   
                               
                                   
                                       
                                           <input type="hidden" name="buyBtnInfo" value="{&quot;productName&quot;:&quot;HUAWEI MatePad Pro &quot;,&quot;marketingName&quot;:&quot;HUAWEI MatePad Pro &quot;,&quot;productId&quot;:&quot;39550&quot;,&quot;onePriceDisplay&quot;:false,&quot;buyButtonMode&quot;:{&quot;buttonType&quot;:&quot;partner&quot;,&quot;openInNewPage&quot;:true,&quot;partnerCountryFilterEffective&quot;:false,&quot;disabledProductLink&quot;:false},&quot;ecOpenInNewPage&quot;:&quot;false&quot;,&quot;productTitle&quot;:&quot;matepad-pro&quot;,&quot;detailLink&quot;:&quot;/content/huawei-cbg-site/lv/tablets/matepad-pro&quot;,&quot;openStoreFinderInNewPage&quot;:false,&quot;showStoreFinder&quot;:false,&quot;disclaimer&quot;:&quot;<p>*Pēc pirkuma saites noklikšķināšanas tiks atvērta trešās puses vietne un iegādes platforma. Lūdzu iepazīstieties ar attiecīgajiem iegādes noteikumiem un privātuma politiku. Huawei nepārvalda un neatbild par trešo pušu lapu darbību.</p>\r\n&quot;,&quot;priceDisplayType&quot;:&quot;{0} {1}{2}&quot;}"/>
                                           <a title="Pirkt" href="/lv/tablets/matepad-pro/" target="_blank" data-nameforga="HUAWEI MatePad Pro" data-position="top" data-eventtype="navi" data-ecopeninnewpage="false" data-onepricedisplay="false" class="btn global-buy-button btn--transparent-white ">
                                               Pirkt
                                           </a>
                                       
                                       
                                   
                               
                           </div>
                       </div>
                   
                   
                   <p class="dropdown__series"><a title="HUAWEI MatePad Pro" href="/lv/tablets/matepad-pro/" data-navcardlink="HUAWEI MatePad Pro" data-position="top" class="dropdown__series-link">HUAWEI MatePad Pro</a></p>
               </div>
           </div>
       
           <div class="col-md-6 ">
               <div class="dropdown__block-in">
                   
                       <div class="dropdown__holder dropdown__holder--overlay dropdown__holder--two-img">
                           <a title="HUAWEI MatePad 11" href="/lv/tablets/matepad-11/" data-navcardlink="HUAWEI MatePad 11" data-position="top" class="dropdown__card_link_btn">
                               <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/homepage/nav/tablets/matepad11.png" alt="HUAWEI MatePad 11" class="dropdown__image-cover lazyload-img" onerror="imgErrorUrl(this)"/></a>

                           <div class="dropdown__btns">
                               <div class="dropdown__card_link">
                                   <a title="HUAWEI MatePad 11" href="/lv/tablets/matepad-11/" data-navcardlink="HUAWEI MatePad 11" data-position="top" class="dropdown__card_link_btn"></a>
                               </div>
                               
                                   
                                       
                                       
                                           <a title="Uzziniet vairāk" href="/lv/tablets/matepad-11/" data-navcardlink="HUAWEI MatePad 11" data-position="top" class="btn btn--white">Uzziniet vairāk</a>
                                       
                                   
                               
                           </div>
                       </div>
                   
                   
                   <p class="dropdown__series"><a title="HUAWEI MatePad 11" href="/lv/tablets/matepad-11/" data-navcardlink="HUAWEI MatePad 11" data-position="top" class="dropdown__series-link">HUAWEI MatePad 11</a></p>
               </div>
           </div>
       
   </div>

   
   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    
    


					</li>
				
			
				
				
					<li class="main-nav__item main-nav__item--has-children">
						

    <a href="javascript:;" data-navicon="Vairāk produkti" class="main-nav__link unhover">Vairāk produkti</a>
    
    
        <div class="v4 n02-expanded-products popup" data-component="n02-expanded-products">
            <div class="container">
                <button type="button" class="popup__close-btn js-close-popup">
                    <span class="sr-only"></span>
                </button>
                <div class="dropdown ">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="dropdown__left">
                                <ul class="dropdown__top-links">
                                    
                                        <li class="dropdown__top-item">
                                            <a title="Nēsājamās ierīces" href="/lv/wearables/" data-navsecondlink="Nēsājamās ierīces" data-position="top" class="dropdown__big-link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Nēsājamās ierīces" cat="navigation" act="Click on navigation" lab="Nēsājamās ierīces">Nēsājamās ierīces</a>
                                        </li>
                                    
                                        <li class="dropdown__top-item">
                                            <a title="Audio" href="/lv/audio/" data-navsecondlink="Audio" data-position="top" class="dropdown__big-link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Audio" cat="navigation" act="Click on navigation" lab="Audio">Audio</a>
                                        </li>
                                    
                                        <li class="dropdown__top-item">
                                            <a title="Rūteris" href="/lv/routers/" data-navsecondlink="Rūteris" data-position="top" class="dropdown__big-link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Rūteris" cat="navigation" act="Click on navigation" lab="Rūteris">Rūteris</a>
                                        </li>
                                    
                                        <li class="dropdown__top-item">
                                            <a title="Aksesuāri" href="/lv/accessories/" data-navsecondlink="Aksesuāri" data-position="top" class="dropdown__big-link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Aksesuāri" cat="navigation" act="Click on navigation" lab="Aksesuāri">Aksesuāri</a>
                                        </li>
                                    
                                </ul>
                                <ul class="dropdown__list">
                                    
                                        <li class="dropdown__item">
                                            <a title="Atrast Servisa centru" href="/lv/support/service-center/" data-navsecondlink="Atrast Servisa centru" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Atrast Servisa centru" cat="navigation" act="Click on navigation" lab="Atrast Servisa centru">Atrast Servisa centru</a>
                                        </li>
                                    
                                </ul>
                                
                            </div>
                        </div>

                        <div class="col-xl-8 dropdown__order">
                            <div class="dropdown__wrap">
                                <div class="dropdown__right ">
                                    
   

   
   

   
   <div class="row dropdown__row-mobile">
       
        <div class="col-md-6 dropdown__right-col unDisplayInMobile">
            <div class="dropdown__block-in">
                
                    <div class="dropdown__holder dropdown__holder--overlay dropdown__holder--two-img">
                        <a title="HUAWEI FreeBuds Pro" href="/lv/audio/freebuds-pro/" data-navcardlink="HUAWEI FreeBuds Pro" data-position="top" class="dropdown__card_link_btn">
                            <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/homepage/nav/more-products/freebuds-pro.jpg" alt="HUAWEI FreeBuds Pro" class="dropdown__image-cover lazyload-img" onerror="imgErrorUrl(this)"/></a>

                        <div class="dropdown__btns">
                            <div class="dropdown__card_link">
                                <a title="HUAWEI FreeBuds Pro" href="/lv/audio/freebuds-pro/" data-navcardlink="HUAWEI FreeBuds Pro" data-position="top" class="dropdown__card_link_btn"></a>
                            </div>
                            
                                
                                    
                                    
                                        <a title="Uzziniet vairāk" href="/lv/audio/freebuds-pro/" data-navcardlink="HUAWEI FreeBuds Pro" data-position="top" class="btn btn--white">Uzziniet vairāk</a>
                                    
                                
                            
                                
                                    
                                        <input type="hidden" name="buyBtnInfo" value="{&quot;productName&quot;:&quot;HUAWEI FreeBuds Pro&quot;,&quot;marketingName&quot;:&quot;HUAWEI FreeBuds Pro&quot;,&quot;productId&quot;:&quot;41460&quot;,&quot;onePriceDisplay&quot;:false,&quot;buyButtonMode&quot;:{&quot;buttonType&quot;:&quot;partner&quot;,&quot;openInNewPage&quot;:true,&quot;partnerCountryFilterEffective&quot;:false,&quot;disabledProductLink&quot;:false},&quot;ecOpenInNewPage&quot;:&quot;false&quot;,&quot;productTitle&quot;:&quot;freebuds-pro&quot;,&quot;detailLink&quot;:&quot;/content/huawei-cbg-site/lv/audio/freebuds-pro&quot;,&quot;openStoreFinderInNewPage&quot;:false,&quot;showStoreFinder&quot;:false,&quot;disclaimer&quot;:&quot;<p>*Pēc pirkuma saites noklikšķināšanas tiks atvērta trešās puses vietne un iegādes platforma. Lūdzu iepazīstieties ar attiecīgajiem iegādes noteikumiem un privātuma politiku. Huawei nepārvalda un neatbild par trešo pušu lapu darbību.</p>\r\n&quot;,&quot;priceDisplayType&quot;:&quot;{0} {1}{2}&quot;}"/>
                                        <a title="Pirkt" href="/lv/audio/freebuds-pro/" target="_blank" data-nameforga="HUAWEI FreeBuds Pro" data-position="top" data-eventtype="navi" data-ecopeninnewpage="false" data-onepricedisplay="false" class="btn global-buy-button btn--transparent-white ">
                                            Pirkt
                                        </a>
                                    
                                    
                                
                            
                        </div>
                    </div>
                
                
                <p class="dropdown__series"><a title="HUAWEI FreeBuds Pro" href="/lv/audio/freebuds-pro/" data-navcardlink="HUAWEI FreeBuds Pro" data-position="top" class="dropdown__series-link">HUAWEI FreeBuds Pro</a></p>
            </div>
        </div>
       
        
       
        
       
        
       
        
       
       <div class="col-md-6 dropdown__right-col dropdown__four-images">
           <div class="row dropdown__row-mobile">
               
                   
               
                   <div class="col-md-6 dropdown__right-col ">
                       <div class="dropdown__block-in">
                           <a title="HUAWEI WATCH GT 2 Pro" href="/lv/wearables/watch-gt2-pro/" data-navcardlink="HUAWEI WATCH GT 2 Pro" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/homepage/nav/more-products/gt2-pro.png" alt="HUAWEI WATCH GT 2 Pro" class="dropdown__image-centered lazyload-img" onerror="imgErrorUrl(this)"/>
                               </div>
                           </a>
                           <p class="dropdown__series"><a title="HUAWEI WATCH GT 2 Pro" href="/lv/wearables/watch-gt2-pro/" data-navcardlink="HUAWEI WATCH GT 2 Pro" data-position="top" class="dropdown__series-link">HUAWEI WATCH GT 2 Pro</a></p>
                       </div>
                   </div>
               
                   <div class="col-md-6 dropdown__right-col ">
                       <div class="dropdown__block-in">
                           <a title="HUAWEI FreeLace Pro	" href="/lv/audio/freelace-pro/" data-navcardlink="HUAWEI FreeLace Pro	" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/homepage/nav/more-products/freelace-pro.png" alt="HUAWEI FreeLace Pro	" class="dropdown__image-centered lazyload-img" onerror="imgErrorUrl(this)"/>
                               </div>
                           </a>
                           <p class="dropdown__series"><a title="HUAWEI FreeLace Pro	" href="/lv/audio/freelace-pro/" data-navcardlink="HUAWEI FreeLace Pro	" data-position="top" class="dropdown__series-link">HUAWEI FreeLace Pro	</a></p>
                       </div>
                   </div>
               
                   <div class="col-md-6 dropdown__right-col ">
                       <div class="dropdown__block-in">
                           <a title="HUAWEI WiFi AX3 (Quad-core)" href="/lv/routers/ax3-quad-core/" data-navcardlink="HUAWEI WiFi AX3 (Quad-core)" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/homepage/nav/more-products/ax.png" alt="HUAWEI WiFi AX3 (Quad-core)" class="dropdown__image-centered lazyload-img" onerror="imgErrorUrl(this)"/>
                               </div>
                           </a>
                           <p class="dropdown__series"><a title="HUAWEI WiFi AX3 (Quad-core)" href="/lv/routers/ax3-quad-core/" data-navcardlink="HUAWEI WiFi AX3 (Quad-core)" data-position="top" class="dropdown__series-link">HUAWEI WiFi AX3 (Quad-core)</a></p>
                       </div>
                   </div>
               
                   <div class="col-md-6 dropdown__right-col ">
                       <div class="dropdown__block-in">
                           <a title="HUAWEI WATCH FIT" href="/lv/wearables/watch-fit/" data-navcardlink="HUAWEI WATCH FIT" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/lv/mkt/homepage/nav/more-products/navigation.png" alt="HUAWEI WATCH FIT" class="dropdown__image-centered lazyload-img" onerror="imgErrorUrl(this)"/>
                               </div>
                           </a>
                           <p class="dropdown__series"><a title="HUAWEI WATCH FIT" href="/lv/wearables/watch-fit/" data-navcardlink="HUAWEI WATCH FIT" data-position="top" class="dropdown__series-link">HUAWEI WATCH FIT</a></p>
                       </div>
                   </div>
               
           </div>
       </div>
   </div>

   
   

   
   

   
   

   
   

   
   

   
   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    
    


					</li>
				
			
				
				
					<li class="main-nav__item main-nav__item--has-children">
						

    <a href="javascript:;" data-navicon="AppGallery" class="main-nav__link unhover">AppGallery</a>
    
    
        <div class="v4 n02-expanded-products popup" data-component="n02-expanded-products">
            <div class="container">
                <button type="button" class="popup__close-btn js-close-popup">
                    <span class="sr-only"></span>
                </button>
                <div class="dropdown ">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="dropdown__left">
                                <ul class="dropdown__top-links">
                                    
                                        <li class="dropdown__top-item">
                                            <a title="HUAWEI Mobile Services" href="/lv/mobileservices/" data-navsecondlink="HUAWEI Mobile Services" data-position="top" class="dropdown__big-link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="HUAWEI Mobile Services" cat="navigation" act="Click on navigation" lab="HUAWEI Mobile Services">HUAWEI Mobile Services</a>
                                        </li>
                                    
                                </ul>
                                <ul class="dropdown__list">
                                    
                                        <li class="dropdown__item">
                                            <a title="HUAWEI Mobile Cloud" href="/lv/mobileservices/mobilecloud/" data-navsecondlink="HUAWEI Mobile Cloud" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="HUAWEI Mobile Cloud" cat="navigation" act="Click on navigation" lab="HUAWEI Mobile Cloud">HUAWEI Mobile Cloud</a>
                                        </li>
                                    
                                        <li class="dropdown__item">
                                            <a title="HUAWEI Themes" href="/lv/mobileservices/themes/" data-navsecondlink="HUAWEI Themes" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="HUAWEI Themes" cat="navigation" act="Click on navigation" lab="HUAWEI Themes">HUAWEI Themes</a>
                                        </li>
                                    
                                        <li class="dropdown__item">
                                            <a title="HUAWEI ID" href="/lv/mobileservices/id/" data-navsecondlink="HUAWEI ID" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="HUAWEI ID" cat="navigation" act="Click on navigation" lab="HUAWEI ID">HUAWEI ID</a>
                                        </li>
                                    
                                        <li class="dropdown__item">
                                            <a title="HUAWEI Assistant" href="/lv/mobileservices/assistant/" data-navsecondlink="HUAWEI Assistant" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="HUAWEI Assistant" cat="navigation" act="Click on navigation" lab="HUAWEI Assistant">HUAWEI Assistant</a>
                                        </li>
                                    
                                        <li class="dropdown__item">
                                            <a title="HUAWEI Browser" href="/lv/mobileservices/browser/" data-navsecondlink="HUAWEI Browser" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="HUAWEI Browser" cat="navigation" act="Click on navigation" lab="HUAWEI Browser">HUAWEI Browser</a>
                                        </li>
                                    
                                        <li class="dropdown__item">
                                            <a title="Petal Search" href="/lv/mobileservices/search/" data-navsecondlink="Petal Search" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="Petal Search" cat="navigation" act="Click on navigation" lab="Petal Search">Petal Search</a>
                                        </li>
                                    
                                        <li class="dropdown__item">
                                            <a title="HUAWEI Health" href="/lv/mobileservices/health/" data-navsecondlink="HUAWEI Health" data-position="top" class="dropdown__link ha-click-dispach a-support-common dmpa-click-dispach" ha-id="navigation_click_tab" ha-title="HUAWEI Health" cat="navigation" act="Click on navigation" lab="HUAWEI Health">HUAWEI Health</a>
                                        </li>
                                    
                                </ul>
                                
                            </div>
                        </div>

                        <div class="col-xl-8 dropdown__order">
                            <div class="dropdown__wrap">
                                <div class="dropdown__right ">
                                    
   <div class="row dropdown__row-mobile one-four-icon">
       
        <div class="col-md-6 dropdown__right-col ">
            <div class="dropdown__block-in fist-ba-cnt ">
                
                
                    <a title="AppGallery" href="/lv/mobileservices/appgallery/" data-mobileservice="AppGallery" data-position="top" class="dropdown__block-item">
                        <div class="dropdown__holder dropdown__holder--two-img">
                            <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/homepage/nav/mobileservices/ag-new.jpg" alt="AppGallery" class="dropdown__image-cover lazyload-img" onerror="imgErrorUrl(this)"/>
                        </div>
                    </a>
                
            </div>
        </div>
       
        
       
        
       
        
       
        
       

       <div class="col-md-6 dropdown__right-col dropdown__four-images">
           <div class="row dropdown__row-mobile">
               
                   
               
                   <div class="col-md-6 dropdown__right-col color-bg ">
                       <div class="dropdown__block-in four-icon-cnt">
                           <a title="Petal Search" href="/lv/mobileservices/search/" data-mobileservice="Petal Search" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <div class="icon-cnt">
                                       <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/homepage/nav/mobileservices/ag1.png" alt="Petal Search" class="dropdown__image-left lazyload-img" onerror="imgErrorUrl(this)"/>
                                       <div class="icon-cnt-title">Petal Search</div>
                                       <p class="icon-cnt-description">Atrodi savas iecienītākas lietotnes, ziņas, attēlus, video un vēl.</p>
                                   </div>
                               </div>
                           </a>
                       </div>
                   </div>
               
                   <div class="col-md-6 dropdown__right-col color-bg ">
                       <div class="dropdown__block-in four-icon-cnt">
                           <a title="HUAWEI  Tēmas" href="/lv/mobileservices/themes/" data-mobileservice="HUAWEI  Tēmas" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <div class="icon-cnt">
                                       <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/homepage/nav/mobileservices/ag5.png" alt="HUAWEI  Tēmas" class="dropdown__image-left lazyload-img" onerror="imgErrorUrl(this)"/>
                                       <div class="icon-cnt-title">HUAWEI  Tēmas</div>
                                       <p class="icon-cnt-description">Personalizē savu viedtālruni ar ikoniskām tēmām, ekrāna tapetēm un fontiem.</p>
                                   </div>
                               </div>
                           </a>
                       </div>
                   </div>
               
                   <div class="col-md-6 dropdown__right-col color-bg ">
                       <div class="dropdown__block-in four-icon-cnt">
                           <a title="HUAWEI  Pārlūks" href="/lv/mobileservices/browser/" data-mobileservice="HUAWEI  Pārlūks" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <div class="icon-cnt">
                                       <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/homepage/nav/mobileservices/ag2.png" alt="HUAWEI  Pārlūks" class="dropdown__image-left lazyload-img" onerror="imgErrorUrl(this)"/>
                                       <div class="icon-cnt-title">HUAWEI  Pārlūks</div>
                                       <p class="icon-cnt-description">Vienmērīga un droša sērfošana internetā</p>
                                   </div>
                               </div>
                           </a>
                       </div>
                   </div>
               
                   <div class="col-md-6 dropdown__right-col color-bg ">
                       <div class="dropdown__block-in four-icon-cnt">
                           <a title="HUAWEI  Mākonis" href="/lv/mobileservices/mobilecloud/" data-mobileservice="HUAWEI  Mākonis" data-position="top" class="dropdown__block-item">
                               <div class="dropdown__holder dropdown__holder--four-img">
                                   <div class="icon-cnt">
                                       <img data-src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/homepage/nav/mobileservices/ag3.png" alt="HUAWEI  Mākonis" class="dropdown__image-left lazyload-img" onerror="imgErrorUrl(this)"/>
                                       <div class="icon-cnt-title">HUAWEI  Mākonis</div>
                                       <p class="icon-cnt-description">Drošāks veids datu glabāšanai</p>
                                   </div>
                               </div>
                           </a>
                       </div>
                   </div>
               
           </div>
       </div>
   </div>

   
   

   
   

   
   

   
   

   
   

   
   

   
   

   
   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    
    


					</li>
				
			
		</ul>
	</div>

	
	<div class="rg-nav nav-zone">
		<ul class="main-nav__list" role="menubar">
			
				
					<li class="main-nav__item ">
						<a title="Atbalsts" data-navicon="Atbalsts" class="main-nav__link unhover" href="/lv/support/">Atbalsts</a>
					</li>
				
				
			
				
					<li class="main-nav__item ">
						<a title="Forums" data-navicon="Forums" class="main-nav__link unhover" href="/en/community/" target="_blank" rel="noopener noreferrer">Forums</a>
					</li>
				
				
			
		</ul>
	</div>

                
                

                
                
                




                
                
                
            </nav>

            <div class="nav-addons">
                <button class="nav-addons__link nav-addons__search js-open-search" data-navicon="search">
                    <span class="icon font-ico-search">
                        <span class="sr-only">Search</span>
                    </span>
                </button>

                
                
                

                
                
                

                
                    
                
                
                <button class="nav-toggle js-nav-toggle">
                    <span class="sr-only">Menu</span>
                </button>
            </div>
        </div>
    </div>
    

    
    <div class="v4 n12-search popup nav-v2" data-component="n12-search">
        <div class="container">
            <button type="button" class="popup__close-btn js-close-popup">
                <span class="sr-only"></span>
            </button>
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div class="search__form-container">
                        <label class="sr-only" for="search">search</label>
                        <input class="search__form-input js-search-autocomplete" text="search" name="search" id="search" autocomplete="off" data-enable-ph-search="no" placeholder="Meklēt Huawei..."/>
                        <button class="search__form-submit" type="button">
                            <span class="icon font-ico-search">
                                <span class="sr-only"></span>
                            </span>
                        </button>
                        <button class="search__form-clear js-search-clear" type="button">
                            <span class="icon font-ico-close">
                                <span class="sr-only"></span>
                            </span>
                        </button>
                    </div>
                    <div class="popular-show-wrap">
                        <div class="popular-wrap">
                            <div class="top-title">
                                populārākos produktus
                            </div>
                            <div class="popular-product dropdown__right">
                                <div class="row  dropdown__row-mobile">

                                </div>
                            </div>

                        </div>
                        <div class="quick-link">
                            <div class="top-title">
                                Quick View
                            </div>
                            <div class="link-wrap row">
                                
                                    <div class="col-sm-4 link-list">
                                        <a title="Salīdzināt telefonus" href="/lv/phones/compare/">Salīdzināt telefonus</a>
                                    </div>
                                
                                    <div class="col-sm-4 link-list">
                                        <a title="AppGallery" href="/lv/mobileservices/">AppGallery</a>
                                    </div>
                                
                                    <div class="col-sm-4 link-list">
                                        <a title="Izvēlēties valodu" href="/en/worldwide/" target="_blank">Izvēlēties valodu</a>
                                    </div>
                                
                                    <div class="col-sm-4 link-list">
                                        <a title="Nēsājamās ierīces" href="/lv/wearables/">Nēsājamās ierīces</a>
                                    </div>
                                
                                    <div class="col-sm-4 link-list">
                                        <a title="Aksesuāri" href="/lv/accessories/">Aksesuāri</a>
                                    </div>
                                
                                    <div class="col-sm-4 link-list">
                                        <a title="Atrast Servisa centru" href="/lv/support/service-center/">Atrast Servisa centru</a>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search_toast">
                ievadiet papildu meklēšanas atslēgvārdus
            </div>
        </div>
    </div>
    
    
    <div class="v4 n16-simple-tabs simple-tabs simple-tabs__sticky" data-component="n16-simple-tabs" style={{display: "none"}}>
        <div class="container">
            <div class="wrap">
                <ul class="simple-tabs__wrap">
                    <li class="simple-tabs__continent" data-region="Africa">Africa</li>
                    <li class="simple-tabs__continent" data-region="Asia Pacific">Asia Pacific</li>
                    <li class="simple-tabs__continent" data-region="Europe">Europe</li>
                    <li class="simple-tabs__continent" data-region="Latin America">Latin America</li>
                    <li class="simple-tabs__continent" data-region="Middle East">Middle East</li>
                    <li class="simple-tabs__continent" data-region="North America">North America</li>
                    <li class="simple-tabs__continent" data-region="Global">Global</li>
                </ul>
            </div>
        </div>
    </div>
    
</div>





<div class="cookie-data">
    <div class="required-category">
        
    </div>
    <div class="analysis-category">
        
    </div>
    <div class="advertise-category">
        
    </div>
    <div class="function-category">
        
    </div>
    <div class="unknown-category">
        
    </div>
</div>






	




	
	





        
        
	
	
		<main class="content-v4 v4-s">
			<div>
				
				<div class="section"><div class="new"></div>
</div><div class="iparys_inherited"><div class="eumiSecondMenuV4 iparsys parsys"></div>
</div>

			</div>
			



    
    
    <div class="html-text-component parbase">

	<main class="body-v4-s sustainability-landing v4-s">
    
    <nav class="v4-s n01-sustainability-navigation sustainability-navigation" data-component="n01-sustainability-navigation" style={{top: 60}}>
        <a href="javascript:;" class="sustainability-navigation__link" style={{cursor: "default"}}>Ilgtspēja</a>
        <ul class="sustainability-navigation__list">
            <li class="sustainability-navigation__list-item" data-text="CEO Letter">
                <a class="sustainability-navigation__list-link text_link" data-datalayer="Izpilddirektora vēstule" data-pagename="Ilgtspēja @ consumer BG: CEO Letter" data-linkposition="1" href="https://consumer.huawei.com/lv/sustainability/ceo-letter/">Izpilddirektora vēstule</a>
            </li>
            <li class="sustainability-navigation__list-item" data-text="People">
                <a class="sustainability-navigation__list-link text_link" data-datalayer="Cilvēki" data-pagename="Ilgtspēja @ consumer BG: People" data-linkposition="2" href="https://consumer.huawei.com/lv/sustainability/people/">Cilvēki</a>
            </li>
            <li class="sustainability-navigation__list-item" data-text="Planet">
                <a class="sustainability-navigation__list-link text_link" data-datalayer="Planēta" data-pagename="Ilgtspēja @ consumer BG: Planet" data-linkposition="3" href="https://consumer.huawei.com/lv/sustainability/planet/">Planēta</a>
            </li>
            <li class="sustainability-navigation__list-item" data-text="Privacy">
                <a class="sustainability-navigation__list-link text_link" data-datalayer="Privātums" data-pagename="Ilgtspēja @ consumer BG: Privacy" data-linkposition="4" href="https://consumer.huawei.com/lv/sustainability/privacy/">Privātums</a>
            </li>
            <li class="sustainability-navigation__list-item" data-text="Supplier Sustainability">
                <a class="sustainability-navigation__list-link text_link" data-datalayer="Piegādātāju ilgtspēja" data-pagename="Ilgtspēja @ consumer BG: Supplier Sustainability" data-linkposition="5" href="https://consumer.huawei.com/lv/sustainability/supplier-sustainability/">Piegādātāju
                    ilgtspēja</a>
            </li>
            <li class="sustainability-navigation__list-item" data-text="More Info">
                <a class="sustainability-navigation__list-link text_link" data-datalayer="Vairāk informācijas" data-pagename="Ilgtspēja @ consumer BG: More information" data-linkposition="6" href="https://consumer.huawei.com/lv/sustainability/more-information/">Vairāk informācijas</a>
            </li>
        </ul>
        <span class="sustainability-navigation__active-tab"></span>
        <button class="sustainability-navigation__btn">
            <span class="icon font-ico-arrow-down sustainability-navigation__btn-icon"></span>
        </button>
    </nav>

    <div class="v4-s b01-banner-text b01-banner-text-top" data-component="b01-banner-text">
        <div class="banner-text has-cover img-position-right banner-pc aos-init aos-animate" style={{backgroundImage: `url('/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-landing.jpg')`}} data-aos="fade-up" data-aos-delay="200" role="img" aria-label="Sustainability-hero banner">
            <img class="banner-mb" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-landing-mb.jpg" alt="sustainability - hero banner" onerror="imgErrorUrl(this)"/>
            <div class="banner-text__container--no-bg container">
                <div class="banner-text__wrap banner-text__wrap--centered wrap wrap--medium">
                    <div class="banner-text__in">
                        <h2 class="banner-text__title banner-text__title--centered aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">Veidojiet labāku, zaļāku un pilnībā savienotu viedo pasauli
                        </h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="banner-text has-cover img-position-right banner-mb aos-init aos-animate" style={{backgroundImage: `url('/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-landing-mb.jpg')`}} data-aos="fade-up" data-aos-delay="200" role="img" aria-label="sustainability-hero banner">
            <div class="banner-text__container--no-bg container">
                <div class="banner-text__wrap banner-text__wrap--centered wrap wrap--medium">
                    <div class="banner-text__in">
                        <h2 class="banner-text__title banner-video__title banner-text__title--centered aos-init aos-animate" style={{bottom: "20%",top: "auto", transform: "translate(-50%, 0)"}} data-aos="fade-up" data-aos-delay="500">Veidojiet labāku, zaļāku un pilnībā savienotu viedo pasauli
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="v4-s c03-ceo-audio ceo-audio" data-component="c03-ceo-audio">
        <div class="ceo-audio__wrap aos-init" data-aos="fade-up" data-aos-delay="200" data-aos-offset="100">
            <p class="ceo-audio__quote">Uzņēmumā Huawei mēs veicam nopietnus pasākumus, lai samazinātu negatīvo ietekmi
                uz planētu, piemēram, izstrādājot videi draudzīgus produktus, samazinot iepakojumu, drukājot ar sojas
                bāzes tinti, pārstrādājot produktus un samazinot mūsu ražošanas ietekmi.
            </p>
            <div class="ceo-audio__content">
                <div class="ceo-audio__details">
                    <div class="ceo-audio__image">
                        <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/ceo-round.png" alt="Richard Yu image" class="ceo-audio__image-img" onerror="imgErrorUrl(this)"/>
                    </div>
                    <div class="ceo-audio__description">
                        <span class="ceo-audio__name">Richard Yu</span>
                        <span class="ceo-audio__position">CEO, Huawei Consumer</span>
                        <span class="ceo-audio__business">Business Group</span>
                    </div>
                </div>
                <a data-datalayer="Lasīt pilnu izpilddirektora vēstuli" href="https://consumer.huawei.com/lv/sustainability/ceo-letter/" class="ceo-audio__link btn_link">Lasīt pilnu izpilddirektora vēstuli
                </a>
            </div>
        </div>
    </div>

    <div class="v4-s b01-banner-text" data-component="b01-banner-text">
        <div class="banner-text banner-text--banner has-cover aos-init" style={{backgroundImage: `url('/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-people-nogradient.jpg')`}} data-aos="fade-up" data-aos-delay="200" role="img" aria-label="sustainability- People section banner">
            <img class="banner-mb" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-people-nogradient-mb.jpg" alt="sustainability - People section banner" onerror="imgErrorUrl(this)"/>
            <div class="banner-text__container container">
                <img class="banner-mb" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-people-nogradient-mb.jpg" onerror="imgErrorUrl(this)"/>
                <div class="banner-text__wrap  wrap wrap--medium">
                    <div class="banner-text__in">
                        <p class="banner-text__text aos-init" data-aos="fade-up" data-aos-delay="300">
                            Mēs sniedzam cilvēkiem iespējas, nodrošinot produktus un pakalpojumus, kas palīdz klientiem
                            uzlabot produktivitāti, uzturēt sakarus un būt veseliem.

                        </p>
                        <a href="https://consumer.huawei.com/lv/sustainability/people/" class="banner-text__link link-arrow text_link aos-init" data-datalayer="Mūsu stāsts par iedrošinātiem cilvēkiem" data-pagename="Ilgtspēja @ consumer BG: People" data-linkposition="7" data-aos="fade-up" data-aos-delay="400">Mūsu stāsts par iedrošinātiem cilvēkiem
                        </a>
                        <h2 class="heading-02 banner-text__title aos-init" data-aos="fade-up" data-aos-delay="500">Cilvēki
                        </h2>
                    </div>
                </div>
                <div class="banner-text-afterfix" style={{backgroundColor: "red"}}></div>
            </div>
        </div>
    </div>

    <div class="v4-s c01-featured-cards  " data-component="c01-featured-cards">
        <div class="container">
            <div class="wrap wrap--medium">
                <div class="featured  ">
                    <div class="featured__col featured__col--first ">
                        <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Produkti visiem
                        </h3>
                        <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                            <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-accessibility.jpg" alt="sustainability - People - Accessibility" onerror="imgErrorUrl(this)"/>
                            <a href="https://consumer.huawei.com/lv/sustainability/people?key=accessibility" class="featured__link-to js-link-to text_link" data-pagename="Cilvēki" data-datalayer="Atklājiet" data-linkposition="8" data-item="accessibility"></a>
                        </div>
                        <button class="discover-btn">
                            <span class="discover-btn__background"></span>
                            <span class="discover__text">Atklājiet</span>
                        </button>
                    </div>
                    <div class="featured__col featured__col--second ">
                        <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Produkti visiem
                        </h3>
                        <div class="featured__bottom-align">
                            <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Pieejamība</h4>
                            <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Tehnoloģijai vajadzētu dot labumu visiem. Tāpēc mēs izgatavojam
                                savus produktus ikvienam un īpaši izstrādājam tos pieejamībai plašā spektrā fizisko
                                spēju, tehnoloģisko īpašību un sociālekonomiskā pamata.</p>
                            <a href="https://consumer.huawei.com/lv/sustainability/people?key=accessibility" class="featured__link link-arrow text_link aos-init" data-pagename="Cilvēki" data-datalayer="Atklājiet" data-linkposition="8" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                        </div>
                    </div>
                </div>
                <div class="featured featured--reverse ">
                    <div class="featured__col featured__col--first ">
                        <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Sasniedziet
                            vairāk ar tehnoloģiju jaudu</h3>
                        <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                            <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-productivity.jpg" alt="sustainability - People - productivity" onerror="imgErrorUrl(this)"/>
                            <a href="https://consumer.huawei.com/lv/sustainability/people/?key=productivity" class="featured__link-to js-link-to text_link" data-linkposition="9" data-pagename="Cilvēki" data-datalayer="Atklājiet" data-item="productivity"></a>
                        </div>
                        <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Atklājiet</span></button>
                    </div>
                    <div class="featured__col featured__col--second ">
                        <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Sasniedziet
                            vairāk <br/>
                            ar tehnoloģiju jaudu</h3>
                        <div class="featured__bottom-align">
                            <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Produktivitāte</h4>
                            <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Informācijas piesātinātā pasaulē Huawei palīdz organizēt savu darbu
                                un dzīvi.</p>
                            <a href="https://consumer.huawei.com/lv/sustainability/people/?key=productivity" class="featured__link link-arrow text_link aos-init" data-linkposition="9" data-pagename="Cilvēki" data-datalayer="Atklājiet" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                        </div>
                    </div>
                </div>
                <div class="featured  ">
                    <div class="featured__col featured__col--first featured__col--narrow">
                        <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Izbaudiet
                            tehnoloģijas,<br/> bet nelietojiet pārmērīgi</h3>
                        <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                            <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-connections.jpg" alt="sustainability- People - connections" onerror="imgErrorUrl(this)"/>
                            <a href="https://consumer.huawei.com/lv/sustainability/people/?key=connections" class="featured__link-to js-link-to text_link" data-linkposition="10" data-pagename="Cilvēki" data-datalayer="Atklājiet" data-item="connections"></a>
                        </div>
                        <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Atklājiet</span></button>
                    </div>
                    <div class="featured__col featured__col--second ">
                        <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Izbaudiet
                            tehnoloģijas,
                            <br/> bet nelietojiet <br/>pārmērīgi</h3>
                        <div class="featured__bottom-align">
                            <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Savienojumi</h4>
                            <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Mēs mudinām mazus bērnus piekļūt jaunākajām tehnoloģijām,
                                vienlaikus izvairoties no pārmērīgas lietošanas.</p>
                            <a href="https://consumer.huawei.com/lv/sustainability/people/?key=connections" class="featured__link link-arrow text_link aos-init" data-linkposition="10" data-pagename="Cilvēki" data-datalayer="Atklājiet" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                        </div>
                    </div>
                </div>
                <div class="featured featured--reverse ">
                    <div class="featured__col featured__col--first ">
                        <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Prasmes visiem
                        </h3>
                        <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                            <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-education-v2.jpg" alt="sustainability - People - Education" onerror="imgErrorUrl(this)"/>
                            <a href="https://consumer.huawei.com/lv/sustainability/people?key=education" class="featured__link-to js-link-t text_link" data-linkposition="11" data-pagename="Cilvēki" data-datalayer="Atklājiet" data-item="education"></a>
                        </div>
                        <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Atklājiet</span></button>
                    </div>
                    <div class="featured__col featured__col--second ">
                        <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Prasmes visiem
                        </h3>
                        <div class="featured__bottom-align">
                            <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Izglītība</h4>
                            <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Mēs sadarbojamies ar valdībām, vietējām kopienām un citām nozarēm,
                                lai uzlabotu indivīdu un visas sabiedrības digitālās prasmes un palīdzētu MVU uzlabot
                                digitālās iespējas. Šādi rīkojoties, Huawei veicina vietējo kopienu un valstu attīstību
                                un padara viņu digitālo ekonomiku konkurētspējīgāku.</p>
                            <a href="https://consumer.huawei.com/lv/sustainability/people?key=education" class="featured__link link-arrow text_link aos-init" data-linkposition="11" data-pagename="Cilvēki" data-datalayer="Atklājiet" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                        </div>
                    </div>
                </div>
                <div class="featured  featured--botom-spacing">
                    <div class="featured__col featured__col--first ">
                        <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Sekojiet līdzi
                            savai veselībai</h3>
                        <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                            <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-health.jpg" alt="sustainability- People - health" onerror="imgErrorUrl(this)"/>
                            <a href="https://consumer.huawei.com/lv/sustainability/people?key=health" class="featured__link-to js-link-to text_link" data-linkposition="12" data-pagename="Cilvēki" data-datalayer="Atklājiet" data-item="health"></a>
                        </div>
                        <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Atklājiet</span></button>
                    </div>
                    <div class="featured__col featured__col--second ">
                        <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Sekojiet līdzi
                            <br/>savai veselībai</h3>
                        <div class="featured__bottom-align">
                            <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Veselībai</h4>
                            <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Huawei produkti palīdz jums dzīvot veselīgāku dzīvi, sekojot līdzi
                                fiziskajai sagatavotībai un mudinot būt aktīvākiem.</p>
                            <a href="https://consumer.huawei.com/lv/sustainability/people?key=health" class="featured__link link-arrow text_link aos-init" data-linkposition="12" data-pagename="Cilvēki" data-datalayer="Discover" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="v4-s b01-banner-text " data-component="b01-banner-text">
        <div class="banner-text banner-text--banner has-cover aos-init" style={{backgroundImage: `url('/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-planet-nogradient.jpg')`}} data-aos="fade-up" data-aos-delay="200" role="img" aria-label="sustainability - Planet ">
            <img class="banner-mb" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-planet-nogradient-mb.jpg" alt="sustainability - Planet " onerror="imgErrorUrl(this)"/>
            <div class="banner-text__container container">
                <img class="banner-mb" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-planet-nogradient-mb.jpg" alt="sustainability - Planet " onerror="imgErrorUrl(this)"/>
                <div class="banner-text__wrap  wrap wrap--medium">
                    <div class="banner-text__in">
                        <p class="banner-text__text aos-init" data-aos="fade-up" data-aos-delay="300">
                            Mēs izstrādājām savu biznesa modeli tā, lai par prioritāti atzītu mūsu planētas un tās
                            resursu aizsardzību.
                        </p>
                        <a href="https://consumer.huawei.com/lv/sustainability/planet/" class="banner-text__link link-arrow text_link aos-init" data-datalayer="Izlasiet mūsu planētas priekšrocības" data-pagename="Ilgtspēja @ consumer BG: Planet" data-linkposition="13" data-aos="fade-up" data-aos-delay="400">Izlasiet mūsu planētas priekšrocības</a>
                        <h2 class="heading-02 banner-text__title aos-init" data-aos="fade-up" data-aos-delay="500">Planēta
                            <fw h2=""> </fw></h2></div> </div> <div class="banner-text-afterfix" style={{backgroundColor: "red"}}>
                    </div>
                </div>
            </div>
        </div>

        <div class="v4-s c01-featured-cards" data-component="c01-featured-cards">
            <div class="container">
                <div class="wrap wrap--medium">
                    <div class="featured  ">
                        <div class="featured__col featured__col--first ">
                            <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Veidots no
                                drošiem materiāliem</h3>
                            <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                                <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-materials.jpg" alt="sustainability - planet - greener &amp; safer materials" onerror="imgErrorUrl(this)"/>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=materials" data-linkposition="14" class="featured__link-to js-link-to text_link" data-pagename="Planēta" data-datalayer="Atklājiet" data-item="materials"></a>
                            </div>
                            <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Atklājiet</span></button>
                        </div>
                        <div class="featured__col featured__col--second ">
                            <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Veidots no
                                drošiem materiāliem</h3>
                            <div class="featured__bottom-align">
                                <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Zaļāki un
                                    drošāki materiāli</h4>
                                <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Visi mūsu produkti ir izstrādāti, lai tie atbilstu tiesiskajām
                                    drošības prasībām valstīs, kurās mēs darbojamies, kā arī atbilstoši labākajiem
                                    nozares standartiem.
                                </p>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=materials" class="featured__link link-arrow text_link aos-init" data-linkposition="14" data-pagename="Planēta" data-datalayer="Atklājiet" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="featured featured--reverse">
                        <div class="featured__col featured__col--first ">
                            <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">FSC -
                                sertificēts papīrs</h3>
                            <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                                <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-greenpackaging.jpg" alt="sustainability - planet - green packing" onerror="imgErrorUrl(this)"/>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=greenpacking" class="featured__link-to js-link-to text_link" data-linkposition="15" data-pagename="Planēta" data-datalayer="Atklājiet" data-item="greenpacking"></a>
                            </div>
                            <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Atklājiet</span></button>
                        </div>
                        <div class="featured__col featured__col--second ">
                            <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">FSC -
                                sertificēts papīrs</h3>
                            <div class="featured__bottom-align">
                                <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Zaļš iepakojums
                                </h4>
                                <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Huawei izmanto FSC sertificētu papīru, lai iesaiņotu mūsu
                                    produktus visā piegādes ķēdē, lai nodrošinātu, ka visas kastes nāk no atbildīgi
                                    apsaimniekotiem un ilgtspējīgiem mežiem.</p>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=greenpacking" class="featured__link link-arrow text_link aos-init" data-linkposition="15" data-pagename="Planēta" data-datalayer="Atklājiet" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="featured  ">
                        <div class="featured__col featured__col--first featured__col--narrow">
                            <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Ierīces ar
                                augstiem standartiem</h3>
                            <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                                <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-certificates.jpg" alt="sustainability - planet - certificates" onerror="imgErrorUrl(this)"/>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=certificates" class="featured__link-to js-link-to text_link" data-pagename="Planēta" data-linkposition="16" data-datalayer="Atklājiet" data-item="certificates"></a>
                            </div>
                            <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Atklājiet</span></button>
                        </div>
                        <div class="featured__col featured__col--second ">
                            <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Ierīces ar
                                augstiem standartiem</h3>
                            <div class="featured__bottom-align">
                                <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Sertifikāti
                                </h4>
                                <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Huawei ierīces atbilst augstiem standartiem, un tās ir
                                    sertificējušas vairākas vadošas, neatkarīgas standartu organizācijas.</p>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=certificates" class="featured__link link-arrow text_link aos-init" data-linkposition="16" data-pagename="Planēta" data-datalayer="Atklājiet" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="featured featured--reverse ">
                        <div class="featured__col featured__col--first ">
                            <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Uzlabojiet
                                veiktspēju <br/> un taupiet enerģiju</h3>
                            <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                                <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-energyefficiency.jpg" alt="sustainability - planet - energy efficiency" onerror="imgErrorUrl(this)"/>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=energy" class="featured__link-to js-link-to text_link" data-linkposition="17" data-pagename="Planēta" data-datalayer="Atklājiet" data-item="energy"></a>
                            </div>
                            <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Atklājiet</span></button>
                        </div>
                        <div class="featured__col featured__col--second ">
                            <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Uzlabojiet
                                veiktspēju un taupiet enerģiju</h3>
                            <div class="featured__bottom-align">
                                <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">
                                    Energoefektivitāte</h4>
                                <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Huawei izmanto Kirin čipkopas, kas palīdz ievērojami uzlabot
                                    veiktspēju un energoefektivitāti, kā arī sasniedz optimālu energoefektivitāti,
                                    vienlaikus nodrošinot izcilu sniegumu.</p>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=energy" class="featured__link link-arrow text_link aos-init" data-linkposition="17" data-pagename="Planēta" data-datalayer="Atklājiet" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="featured  ">
                        <div class="featured__col featured__col--first ">
                            <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Pārstrādājami
                                produkti</h3>
                            <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                                <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-recycling.jpg" alt="sustainability - planet - recycling " onerror="imgErrorUrl(this)"/>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=recycle" class="featured__link-to js-link-to text_link" data-linkposition="18" data-pagename="Planet" data-datalayer="Discover" data-item="recycle"></a>
                            </div>
                            <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Discover</span></button> 
                        </div>
                        <div class="featured__col featured__col--second ">
                            <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Pārstrādājami
                                produkti</h3>
                            <div class="featured__bottom-align">
                                <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Pārstrāde</h4>
                                <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Lietoti mobilie tālruņi, kas ir bezrūpīgi izmesti vai nepareizi
                                    apstrādāti, var radīt nopietnas vides problēmas un apdraudēt jūsu veselību un
                                    drošību.</p>
                            <a href="https://consumer.huawei.com/lv/sustainability/planet?key=recycle" class="featured__link link-arrow text_link" data-linkposition="18" data-pagename="Planet" data-datalayer="Discover" data-aos="fade-up" data-aos-delay="400">Discover</a>
                            </div>
                        </div>
                    </div>
                    <div class="featured featured--reverse ">
                        <div class="featured__col featured__col--first featured__col--narrow">
                            <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Vienkārša
                                atjaunināšana <br/> visiem tālruņiem</h3>
                            <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                                <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-product-life.jpg" alt="sustainability - planet - extend product life " onerror="imgErrorUrl(this)"/>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=extendproductlife" class="featured__link-to js-link-to text_link" data-linkposition="19" data-pagename="Planēta" data-datalayer="Atklājiet" data-item="extendproductlife"></a>
                            </div>
                            <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Atklājiet</span></button>
                        </div>
                        <div class="featured__col featured__col--second ">
                            <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Vienkārša
                                atjaunināšana visiem tālruņiem</h3>
                            <div class="featured__bottom-align">
                                <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Pagariniet
                                    produkta kalpošanas laiku</h4>
                                <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Huawei ir apņēmies ātri jaunināt vecos tālruņus uz jaunāko EMUI
                                    versiju. Mēs arī nepārtraukti ieviešam jaunas tehnoloģijas. </p>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=extendproductlife" class="featured__link link-arrow text_link aos-init" data-linkposition="19" data-pagename="Planēta" data-datalayer="Atklājiet" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="featured  featured--botom-spacing">
                        <div class="featured__col featured__col--first ">
                            <h3 class="featured__title heading-03 aos-init" data-aos="fade-up" data-aos-delay="100">Caurspīdīgums
                                uz vides ietekmi</h3>
                            <div class="featured__holder has-cover aos-init" data-aos="fade-up" data-aos-delay="200">
                                <img class="featured__image cover-img" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/card-feature-product-environmental.jpg" alt="sustainability - planet - product environmental info" onerror="imgErrorUrl(this)"/>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=recycle" class="featured__link-to js-link-to text_link" data-linkposition="20" data-pagename="Planēta" data-datalayer="Atklājiet" data-item="recycle"></a>
                            </div>
                            <button class="discover-btn"><span class="discover-btn__background"></span><span class="discover__text">Atklājiet</span></button>
                        </div>
                        <div class="featured__col featured__col--second ">
                            <h3 class="featured__title heading-03 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">Caurspīdīgums
                                uz vides ietekmi</h3>
                            <div class="featured__bottom-align">
                                <h4 class="featured__subititle aos-init" data-aos="fade-up" data-aos-delay="400">Produkta vides
                                    informācija</h4>
                                <p class="featured__text body-text aos-init" data-characters="" data-aos="fade-up" data-aos-delay="400">Mēs pētām inovatīvus veidus, kā izmantot LCA metodoloģiju un
                                    vides dizainu, lai palielinātu produktu enerģijas izmantošanas efektivitāti un
                                    vienlaikus samazinātu oglekļa pēdu un jebkādu negatīvu ietekmi uz vidi.</p>
                                <a href="https://consumer.huawei.com/lv/sustainability/planet?key=recycle" class="featured__link link-arrow text_link aos-init" data-linkposition="20" data-pagename="Planēta" data-datalayer="Atklājiet" data-aos="fade-up" data-aos-delay="400">Atklājiet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="v4-s b01-banner-text no-margin" data-component="b01-banner-text">
            <div class="banner-text banner-text--banner has-cover aos-init" style={{backgroundImage: `url('/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-privacy-protection.jpg')`}} data-aos="fade-up" data-aos-delay="200" role="img" aria-label="Privacy">
                <img class="banner-mb" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-privacy-protection-mb.jpg" alt="sustainability - Privacy" onerror="imgErrorUrl(this)"/>
                <div class="banner-text__container container">
                    <img class="banner-mb" src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/banner-privacy-protection-mb.jpg" alt="sustainability - Privacy" onerror="imgErrorUrl(this)"/>
                    <div class="banner-text__wrap  wrap wrap--medium">
                        <div class="banner-text__in">
                            <p class="banner-text__text aos-init" data-aos="fade-up" data-aos-delay="300">
                                Huawei liek lielu uzsvaru uz r mobilo viedierīču drošību, nodrošinot pilnīgus drošības
                                risinājumus, vienlaikus nodrošinot izcilu lietotāja pieredzi.
                            </p>
                            <a href="https://consumer.huawei.com/lv/sustainability/privacy/" class="banner-text__link link-arrow text_link aos-init" data-datalayer="Privātums" data-pagename="Privātums" data-linkposition="21" data-aos="fade-up" data-aos-delay="400">Lasīt vairāk par mūsu privātuma aizsardzību</a>
                            <h2 class="heading-02 banner-text__title aos-init" data-aos="fade-up" data-aos-delay="500">Privātums
                            </h2>
                        </div>
                    </div>
                    <div class="banner-text-afterfix" style={{backgroundColor: "red"}}></div>
                </div>
            </div>
        </div>

        <div class="v4-s s01-sustainability sustainability" data-component="s01-sustainability">
            <div class="container">
                <span class="sustainability__title">Uzzināt vairāk par Huawei Ilgtspēju</span>
                <div class="sustainability__wrap">
                    <div class="sustainability__holder">
                        <a href="https://consumer.huawei.com/lv/sustainability/people/" class="sustainability__word js-link-to text_link" data-index="0" data-datalayer="Pieejamība" data-pagename="Ilgtspēja @ consumer BG: People" data-linkposition="22" data-item="accessibility">Pieejamība</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/people/" class="sustainability__word js-link-to text_link" data-index="1" data-datalayer="Savienojumi" data-pagename="Ilgtspēja @ consumer BG: People" data-linkposition="23" data-item="connections">Savienojumi</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/people/" class="sustainability__word js-link-to text_link" data-index="2" data-datalayer="Izglītība" data-pagename="Ilgtspēja @ consumer BG: People" data-linkposition="24" data-item="education">Izglītība</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/people/" class="sustainability__word js-link-to text_link" data-index="3" data-datalayer="Veselība" data-pagename="Ilgtspēja @ consumer BG: People" data-linkposition="25" data-item="health">Veselība</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/people/" class="sustainability__word js-link-to text_link" data-index="4" data-datalayer="Produktivitāte" data-pagename="Ilgtspēja @ consumer BG: People" data-linkposition="26" data-item="productivity">Produktivitāte</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/planet/" class="sustainability__word js-link-to text_link" data-index="5" data-datalayer="Materiāli" data-pagename="Ilgtspēja @ consumer BG: Planet" data-linkposition="27" data-item="materials">Materiāli</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/planet/" class="sustainability__word js-link-to text_link" data-index="6" data-datalayer="Iepakojums" data-pagename="Ilgtspēja @ consumer BG: Planet" data-linkposition="28" data-item="greenpacking">Iepakojums</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/planet/" class="sustainability__word js-link-to text_link" data-index="7" data-datalayer="Energoefektivitāte" data-pagename="Ilgtspēja @ consumer BG: Planet" data-linkposition="29" data-item="energy">Energoefektivitāte</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/planet/" class="sustainability__word js-link-to text_link" data-index="8" data-datalayer="Sertifikācija" data-pagename="Ilgtspēja @ consumer BG: Planet" data-linkposition="30" data-item="certificates">Sertifikācija</a>
                        <a class="sustainability__word js-link-to text_link" data-index="14" data-datalayer="Pārstrāde" data-pagename="Ilgtspēja @ consumer BG: Planet" data-linkposition="31" data-item="Recycling">Pārstrāde</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/planet/" class="sustainability__word js-link-to text_link" data-index="9" data-datalayer="Produkta kalpošanas laiks" data-pagename="Ilgtspēja @ consumer BG: Planet" data-linkposition="32" data-item="extendproductlife">Produkta kalpošanas laiks</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/planet/" class="sustainability__word js-link-to text_link" data-index="15" data-datalayer="Vide" data-pagename="Ilgtspēja @ consumer BG: Planet" data-linkposition="33" data-item="Environment">Vide</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/privacy/" class="sustainability__word js-link-to text_link" data-index="10" data-datalayer="Chip līmeņa drošība" data-pagename="Ilgtspēja @ consumer BG: Privacy" data-linkposition="34" data-item="chiplevel">Chip līmeņa drošība</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/privacy/" class="sustainability__word js-link-to text_link" data-index="11" data-datalayer="EMUI drošība" data-pagename="Ilgtspēja @ consumer BG: Privacy" data-linkposition="35" data-item="system">EMUI drošība</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/privacy/" class="sustainability__word js-link-to text_link" data-index="12" data-datalayer="Mākoņu pakalpojumu drošība" data-pagename="Ilgtspēja @ consumer BG: Privacy" data-linkposition="36" data-item="cloudservice">Mākoņu pakalpojumu drošība</a>
                        <a href="https://consumer.huawei.com/lv/sustainability/privacy/" class="sustainability__word js-link-to text_link" data-index="13" data-datalayer="Konfidencialitātes un drošības sertifikāti" data-pagename="Ilgtspēja @ consumer BG: Privacy" data-linkposition="37" data-item="privacy">Konfidencialitātes un drošības sertifikāti</a>
                    </div>
                    <div class="sustainability__images">
                        <div class="sustainability__image" data-image="0">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-0.png" alt="sustainability - People - Accessibility" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="1">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-1.png" alt="sustainability - People - connections" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="2">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-2.png" alt="sustainability - People - Education" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="3">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-3.png" alt="sustainability - People - health" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="4">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-4.png" alt="sustainability - People - productivity" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="5">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-5.png" alt="sustainability - Planet - Material" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="6">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-6.png" alt="sustainability - Planet - Green Packaging" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="7">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-7.png" alt="sustainability - planet - energy efficiency" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="8">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-8.png" alt="sustainability - planet - certificates" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="14">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-14.jpg" alt="sustainability - planet - recycling" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="9">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-9.png" alt="sustainability - planet - extend product life" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="15">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-15.jpg" alt="sustainability - planet - environment" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="10">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-11.png" alt="sustainability - Privacy- chip level security solutions" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="11">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-10.png" alt="sustainability - Privacy- Security of systems and apps" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="12">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-12.png" alt="sustainability - Privacy - Huawei mobile cloud service - Huawei AppGallery" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                        <div class="sustainability__image" data-image="13">
                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/sustainability-13.png" alt="sustainability - Privacy - Privacy and security certifications" class="sustainability__image-img" onerror="imgErrorUrl(this)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="v4-s p01-procurement procurement" data-component="p01-procurement">
            <div class="container">
                <div class="wrap">
                    <h2 class="procurement__title aos-init" data-aos="fade-up" data-aos-delay="100">Piegādātāju ilgtspēja</h2>
                    <h5 class="procurement__subtitle aos-init" data-aos="fade-up" data-aos-delay="200"></h5>
                    <a href="https://consumer.huawei.com/lv/sustainability/supplier-sustainability/" class="procurement__link text_link aos-init" data-datalayer="Skatiet mūsu atbildīgo un ilgtspējīgo avotu" data-pagename="Ilgtspēja @ consumer BG: Supplier Sustainability" data-linkposition="38" data-aos="fade-up" data-aos-delay="300">
                        Skatiet mūsu atbildīgo un ilgtspējīgo avotu
                        <span class="icon font-ico-arrow-down procurement__link-arrow procurement__top-arrow"></span>
                    </a>
                    <div class="slider__container">
                        <div class="slider__wrap">
                            <div class="slider__holder swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-android">
                                <div class="procurement__holder swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                    <div class="procurement__box swiper-slide aos-init swiper-slide-active" data-aos="fade-up" data-aos-delay="400" style={{width: 312, marginRight: 13}}>
                                        <div class="procurement__image">
                                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/procurement-supplier.svg" class="procurement__image-img" alt="Supplier Assessment image" onerror="imgErrorUrl(this)"/>
                                        </div>
                                        <div class="procurement__content">
                                            <h5 class="procurement__content-title">Piegādātāja vērtējums</h5>
                                            <p class="procurement__content-text">Mēs esam izveidojuši piegādātāju KSA
                                                novērtēšanas sistēmu, lai uzraudzītu viņu KSA sniegumu un nodrošinātu
                                                pastāvīgus piegādes ķēdes uzlabojumus.</p>
                                            <a class="procurement__content-link text_link" data-pagename="Ilgtspēja @ consumer BG: Supplier Sustainability" data-linkposition="39" data-datalayer="Uzzināt vairāk" target="_blank" href="https://consumer.huawei.com/lv/sustainability/supplier-sustainability/#bannerText2">
                                                Uzzināt vairāk
                                                <span class="icon font-ico-arrow-down procurement__link-arrow"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="procurement__box swiper-slide aos-init swiper-slide-next" data-aos="fade-up" data-aos-delay="400" style={{width: 312, marginRight: 13}}>
                                        <div class="procurement__image">
                                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/procurement-supplier-dev.svg" class="procurement__image-img" alt="Supplier Development image" onerror="imgErrorUrl(this)"/>
                                        </div>
                                        <div class="procurement__content">
                                            <h5 class="procurement__content-title">Piegādātāju Attīstība</h5>
                                            <p class="procurement__content-text">Mēs esam izstrādājuši programmas
                                                piegādātājiem, lai izveidotu viņu KSA pārvaldības iespējas</p>
                                            <a class="procurement__content-link text_link" data-datalayer="Uzzināt vairāk" data-pagename="Ilgtspēja @ consumer BG: Supplier Sustainability" data-linkposition="40" target="_blank" href="https://consumer.huawei.com/lv/sustainability/supplier-sustainability/#bannerText3">
                                                Uzzināt vairāk
                                                <span class="icon font-ico-arrow-down procurement__link-arrow"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="procurement__box swiper-slide aos-init" data-aos="fade-up" data-aos-delay="400" style={{width: 312, marginRight: 13}}>
                                        <div class="procurement__image">
                                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/procurement-material.svg" class="procurement__image-img" alt="Responsible Material Management image" onerror="imgErrorUrl(this)"/>
                                        </div>
                                        <div class="procurement__content">
                                            <h5 class="procurement__content-title">Atbildīga materiālu iegūšana</h5>
                                            <p class="procurement__content-text">Mēs atbildīgi iegūstam izejvielas un
                                                nodrošinām detalizētu konfliktu materiālu pārvaldību ar likumības
                                                pārbaudes procesu.</p>
                                            <a class="procurement__content-link text_link" data-datalayer="Uzzināt vairāk" data-pagename="Ilgtspēja @ consumer BG: Supplier Sustainability" data-linkposition="41" target="_blank" href="https://consumer.huawei.com/lv/sustainability/supplier-sustainability/#featuredCards3">
                                                Uzzināt vairāk
                                                <span class="icon font-ico-arrow-down procurement__link-arrow"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="procurement__box swiper-slide aos-init" data-aos="fade-up" data-aos-delay="400" style={{width: 312, marginRight: 13}}>
                                        <div class="procurement__image">
                                            <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/v4/csd/images/procurement-policy.svg" class="procurement__image-img" alt="Policy and Statement image" onerror="imgErrorUrl(this)"/>
                                        </div>
                                        <div class="procurement__content">
                                            <h5 class="procurement__content-title">Politika un Paziņojums</h5>
                                            <p class="procurement__content-text">Huawei izturas taisnīgi un ar cieņu
                                                pret cilvēkiem, kuri strādā mūsu labā. Mēs strādājam, lai nodrošinātu,
                                                ka mūsu piegādātāji uzvedas sociāli atbildīgi un videi draudzīgi.</p>
                                            <a class="procurement__content-link text_link" data-datalayer="Uzzināt vairāk" data-pagename="Ilgtspēja @ consumer BG: Supplier Sustainability" data-linkposition="42" target="_blank" href="https://consumer.huawei.com/lv/sustainability/supplier-sustainability/#procurement">
                                                Uzzināt vairāk
                                                <span class="icon font-ico-arrow-down procurement__link-arrow"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="procurement__pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span></div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="v4-s h01-hero-ask-us" data-component="h01-hero-ask-us">
            <div class="container">
                <div class="wrap">
                    <div class="row">
                        <div class="offset-xxl-2 col-xxl-3 offset-xl-1 col-xl-4 offset-lg-0 col-lg-6">
                            <h2 class="ask-us__title heading-02 aos-init" data-aos="fade-up" data-aos-delay="100">Jautājiet mums
                                jebko
                            </h2>
                        </div>
                        <div class="offset-xxl-1 col-xxl-3 offset-xl-1 col-xl-4 offset-lg-0 col-lg-6">
                            <div class="ask-us__in">
                                <p class="ask-us__text body-text aos-init" data-aos="fade-up" data-aos-delay="200">
                                    Lai uzzinātu vairāk par mūsu ilgtspēju, lūdzu, sazinieties ar mums vietnē
                                </p>
                                <a href="mailto:consumercsd@huawei.com" class="ask-us__link text_link aos-init" data-datalayer="ConsumerCSD@huawei.com" data-pagename="Email" data-linkposition="43" data-aos="fade-up" data-aos-delay="300">ConsumerCSD@huawei.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</main>





</div>



		</main>
	

        
        









	<div>


    




</div>





	

<footer class="v4 n09-footer footer" data-component="n09-footer">
    <div class="container">
        
        
            

            
            <div class="breadcrumbs">
                <ul class="breadcrumbs__list">
                    <li class="breadcrumbs__item">
                        
                        <a class="breadcrumbs__link" title="Sākums" href="/lv/">Sākums</a>
                    </li>
                
                    <li class="breadcrumbs__item">
                        <span class="breadcrumbs__link">Ilgtspēja</span>
                        
                    </li>
                </ul>
            </div>
        
        <div class="usp-wrap">
            



        </div>
        <div class="footer-links">
            <div class="row">
                
                    <div class="col-xl-2 col-lg-4">
                        <div class="footer-links__block">
                            

<div class="heading footer-links__title heading-06 js-footer-accordion-btn">PRODUKTI</div>
<ul class="footer-links__list">
    
        <li class="footer-links__item">
            <a title="Viedtālrunis" data-title="Viedtālrunis" class="footer-links__link " href="/lv/phones/">Viedtālrunis</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Planšetdators" data-title="Planšetdators" class="footer-links__link " href="/lv/tablets/">Planšetdators</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Nēsājamā ierīce" data-title="Nēsājamā ierīce" class="footer-links__link " href="/lv/wearables/">Nēsājamā ierīce</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Audio" data-title="Audio" class="footer-links__link " href="/lv/audio/">Audio</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Rūteris" data-title="Rūteris" class="footer-links__link " href="/lv/routers/">Rūteris</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Aksesuāri" data-title="Aksesuāri" class="footer-links__link " href="/lv/accessories/">Aksesuāri</a>
        </li>
    
</ul>


                        </div>
                    </div>
                
                    <div class="col-xl-2 col-lg-4">
                        <div class="footer-links__block">
                            

<div class="heading footer-links__title heading-06 js-footer-accordion-btn">PALĪDZĪBA</div>
<ul class="footer-links__list">
    
        <li class="footer-links__item">
            <a title="Apkalpošanas centra atrašanās vieta" data-title="Apkalpošanas centra atrašanās vieta" class="footer-links__link " href="/lv/support/service-center/">Apkalpošanas centra atrašanās vieta</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Servisa konfidencialitātes paziņojums" data-title="Servisa konfidencialitātes paziņojums" class="footer-links__link " href="/lv/support/service-privacy-notice/">Servisa konfidencialitātes paziņojums</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Huawei remonta pakalpojumu Noteikumi un nosacījumi" data-title="Huawei remonta pakalpojumu Noteikumi un nosacījumi" class="footer-links__link " href="/lv/support/warranty-policy/">Huawei remonta pakalpojumu Noteikumi un nosacījumi</a>
        </li>
    
</ul>


                        </div>
                    </div>
                
                    <div class="col-xl-2 col-lg-4">
                        <div class="footer-links__block">
                            

<div class="heading footer-links__title heading-06 js-footer-accordion-btn">PAR HUAWEI</div>
<ul class="footer-links__list">
    
        <li class="footer-links__item">
            <a title="Par mums" data-title="Par mums" class="footer-links__link " href="/lv/about-us/">Par mums</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Jaunumi un pasākumi" data-title="Jaunumi un pasākumi" class="footer-links__link " href="/lv/press/news/">Jaunumi un pasākumi</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Ilgtspēja" data-title="Ilgtspēja" class="footer-links__link " href="/lv/sustainability/">Ilgtspēja</a>
        </li>
    
        <li class="footer-links__item">
            <a title="HUAWEI Enterprise" data-title="HUAWEI Enterprise" class="footer-links__link " href="https://e.huawei.com/en/" target="_blank" rel="noopener noreferrer">HUAWEI Enterprise</a>
        </li>
    
        <li class="footer-links__item">
            <a title="HUAWEI Carrier" data-title="HUAWEI Carrier" class="footer-links__link " href="https://www.huawei.com/en/carrier/index.htm" target="_blank" rel="noopener noreferrer">HUAWEI Carrier</a>
        </li>
    
        <li class="footer-links__item">
            <a title="HUAWEI Grupa" data-title="HUAWEI Grupa" class="footer-links__link " href="https://www.huawei.com/en/" target="_blank" rel="noopener noreferrer">HUAWEI Grupa</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Pievienojieties mums" data-title="Pievienojieties mums" class="footer-links__link " href="https://career.huawei.com/recruitment/?language=en" target="_blank" rel="noopener noreferrer">Pievienojieties mums</a>
        </li>
    
        <li class="footer-links__item">
            <a title="Kontakti" data-title="Kontakti" class="footer-links__link " href="/lv/contact-us/">Kontakti</a>
        </li>
    
</ul>


                        </div>
                    </div>
                
            </div>
        </div>
        <div class="contact">
            <div class="row">
                






                
                    <div class="contact__block col-xl-4 col-md-6">
                    <div class="heading contact__title heading-06">Sekojiet Mums</div>
                    <ul class="contact__social-links lazyload-target">
                        
                            
                            
                                
                                    <li class="contact__social-item">
                                        <a title="facebook" class="contact__social-link" data-social="facebook" href="https://www.facebook.com/HuaweiLatvia/" target="_blank" rel="noopener">
                                            <span class="icon font-ico-facebook">
                                                <span class="sr-only"></span>
                                            </span>
                                        </a>
                                    </li>
                                

                                
                                
                            
                        
                            
                            
                                
                                    <li class="contact__social-item">
                                        <a title="instagram" class="contact__social-link" data-social="instagram" href="https://www.instagram.com/huaweilatvia/" target="_blank" rel="noopener">
                                            <span class="icon font-ico-instagram">
                                                <span class="sr-only"></span>
                                            </span>
                                        </a>
                                    </li>
                                

                                
                                
                            
                        
                            
                            
                                
                                    <li class="contact__social-item">
                                        <a title="youtube" class="contact__social-link" data-social="youtube" href="https://www.youtube.com/channel/UCANLARzcOIUWBQNXxaqUvjA?view_as=subscriber" target="_blank" rel="noopener">
                                            <span class="icon font-ico-youtube">
                                                <span class="sr-only"></span>
                                            </span>
                                        </a>
                                    </li>
                                

                                
                                
                            
                        
                    </ul>
                </div>
                
                
            </div>
        </div>
        <div class="footer-legals">
            <div class="row">
                <div class="copyright col-xl-4 col-md-8">
                    <small class="copyright__text">©2021 Huawei Device Co., Ltd. Visas tiesības aizsargātas.</small>
                </div>
                <div class="bottom-links col-xl-5">
                    <ul class="bottom-links__list">
                        
                            <li class="bottom-links__item">
                                <a title="Vietnes karte" class="bottom-links__link" href="/lv/sitemap/">
                                    Vietnes karte
                                </a>
                            </li>
                        
                            <li class="bottom-links__item">
                                <a title="Lietošanas noteikumi" class="bottom-links__link" href="/lv/legal/terms-of-use/">
                                    Lietošanas noteikumi
                                </a>
                            </li>
                        
                            <li class="bottom-links__item">
                                <a title="Paziņojums par konfidencialitāti" class="bottom-links__link" href="/lv/legal/privacy-policy/">
                                    Paziņojums par konfidencialitāti
                                </a>
                            </li>
                        
                            <li class="bottom-links__item">
                                <a title="Sīkfaili" class="bottom-links__link" href="/lv/legal/cookie-policy/">
                                    Sīkfaili
                                </a>
                            </li>
                        
                        <li class="bottom-links__item"><div class="optanon-show-settings-popup-wrapper"><div class="optanon-show-settings-button optanon-toggle-display"><div class="optanon-show-settings-left"></div><div class="optanon-show-settings-middle"><a class="a-common optanon-show-settings bottom-links__link" cat="navigation" act="breadcrumb" lab="cookies_settings">Sīkdatņu iestatījumi</a></div><div class="optanon-show-settings-right"></div></div></div></li>
                    </ul>
                </div>


                <div class="language-switcher col-xl-3 col-md-4 ">
                    
                        <a title="Latvia - Latviešu" class="language-switcher__link" href="/en/worldwide/" target="_blank">Latvia - Latviešu</a>
                    
                    
                        
                            <a href="/en/worldwide/" title="globe" target="_blank">
                                <span class="icon font-ico-globe"></span>
                            </a>
                        
                    
                </div>

                
                <input type="hidden" id="is_editor" data-is-editor-mode="false" value="false"/>
                

            </div>
        </div>
    </div>
</footer>    


<input type="hidden" id="hide-spu-questionnaire" value="0"/>

    


	 
<div class="optanon-show-settings-popup-wrapper">
    <div class="optanon-show-settings-button optanon-toggle-display">
        <div class="optanon-show-settings-left">
            </div><div class="optanon-show-settings-middle">
                <a class="optanon-show-settings">Sīkdatņu iestatījumi</a>
                </div><div class="optanon-show-settings-right">
                    </div>
                    </div>
        </div>
               
	 


        
    







</body>
    )
}

export default Blog
