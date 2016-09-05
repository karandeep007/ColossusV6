jQuery(document).ready(function($){"use strict";$('a[data-rel]').each(function(){$(this).attr('rel',$(this).data('rel'));});if($('#search-push').length){$('#search-push').on('click',function(){var $navigacia=$('#cp-slide-search');var $val=($navigacia.width());if($val=='0'){$val='100%';$('#cp-slide-search form input[type="text"]').css({padding:'0 30px',});}else{$val='0';$('#cp-slide-search form input[type="text"]').css({padding:'0',transition:'all ease-in-out 0.8s',});}
$navigacia.animate({width:$val},600)});}
if($('#home-banner').length){$("#home-banner").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,autoPlay:true,autoplayTimeout:1000,singleItem:true});}
if($('#welcome-banner').length){$("#welcome-banner").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,autoPlay:true,autoplayTimeout:1000,singleItem:true});}
if($(".cp-gallery-metro-2 .isotope").length){var $container=$('.cp-gallery-metro-2 .isotope');$container.isotope({itemSelector:'.item',transitionDuration:'0.6s',masonry:{columnWidth:$container.width()/ 12
},layoutMode:'masonry'});$(window).resize(function(){$container.isotope({masonry:{columnWidth:$container.width()/ 12
}});});}
if($('.portfolioContainer').length){var $container=$('.portfolioContainer');$container.isotope({filter:'*',animationOptions:{duration:750,easing:'linear',queue:false}});$('.portfolioFilter a').click(function(){$('.portfolioFilter .current').removeClass('current');$(this).addClass('current');var selector=$(this).attr('data-filter');$container.isotope({filter:selector,animationOptions:{duration:750,easing:'linear',queue:false}});return false;});}
if($('.gallery').length){$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000,autoplay_slideshow:true});$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000,hideflash:true});}
if($('#tab-slider').length){$("#tab-slider").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,autoPlay:true,autoplayTimeout:1000,singleItem:true});}
if($('#testimonial-style-1').length){$("#testimonial-style-1").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,autoPlay:true,autoplayTimeout:1000,singleItem:true});}
if($('.bxslider').length){$('.bxslider').bxSlider({pagerCustom:'#bx-pager'});}
if($(".filter-gallery-metro-1 .isotope").length){var $container=$('.filter-gallery-metro-1 .isotope');$container.isotope({itemSelector:'.item',transitionDuration:'0.6s',masonry:{columnWidth:3},layoutMode:'masonry'});$(window).resize(function(){$container.isotope({masonry:{columnWidth:$container.width()/ 12
}});});}
if($('#map_contact_1').length){var map;var myLatLng=new google.maps.LatLng(48.85661,2.35222);var myOptions={zoom:12,center:myLatLng,zoomControl:true,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:false,styles:[{stylers:[{hue:'#cacaca'},{saturation:-100,},{lightness:10}]}],}
map=new google.maps.Map(document.getElementById('map_contact_1'),myOptions);var marker=new google.maps.Marker({position:map.getCenter(),map:map,icon:'images/map-icon-2.png'});marker.getPosition();var map=new google.maps.Map(document.getElementById('map-canvas'),{zoom:7,center:new google.maps.LatLng(originalLocation[0],originalLocation[1]),scrollwheel:false});}
if($('#blog-banner').length){$("#blog-banner").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,autoPlay:true,autoplayTimeout:1000,singleItem:true});}
if($('#recent-project').length){$("#recent-project").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,autoPlay:true,autoplayTimeout:1000,singleItem:true});}
if($('.single-project').length){$('.single-project').bxSlider({pagerCustom:'#bx-pager'});}
if($('#defaultCountdown').length){var austDay=new Date();austDay=new Date(austDay.getFullYear()+ 1,1- 1,26);$('#defaultCountdown').countdown({until:austDay});$('#year').text(austDay.getFullYear());}});