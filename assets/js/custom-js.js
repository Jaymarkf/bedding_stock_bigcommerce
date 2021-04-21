const navpage_header = document.getElementsByClassName('navPages');
const row_top = document.getElementsByClassName('row-top');
const about_container = document.getElementsByClassName('about-us-container');
const real_reviews = document.getElementsByClassName('real-reviews-container');
window.onscroll = function(){



   if(document.documentElement.scrollTop >= 71 ){

       navpage_header[0].style.top = '0px';
   }
   else{
       let height = (-document.documentElement.scrollTop) +row_top[0].offsetHeight;
       navpage_header[0].style.top = height + 'px';
   }
}
window.onload = function(){
    let height = (-document.documentElement.scrollTop) +row_top[0].offsetHeight;
    navpage_header[0].style.top = height + 'px';
    var path = window.location.pathname;
    if(path == '/about-us/'){
       about_container[0].style.top = navpage_header[0].offsetHeight + 'px';
    }



}
window.onresize = function(){
    let height = (-document.documentElement.scrollTop) +row_top[0].offsetHeight;
    navpage_header[0].style.top = height + 'px';
    var path = window.location.pathname;
    if(path == '/about-us/'){
        about_container[0].style.top = navpage_header[0].offsetHeight + 'px';
    }else if(path == '/real-reviews/'){
        real_reviews[0].style.top = navpage_header[0].offsetHeight + 'px';
    }
}
// const heading_title = document.getElementsByClassName('banner-title-2-heading');
setInterval(function(){

   if($('.ot-wrap').css('transition') == 'transform 0.5s ease 0s'){
       if($('.ot-item-0').hasClass('active')){
           $('.banner-title-2-heading').css('color','black');
       }else if($('.ot-item-1').hasClass('active')){
           $('.banner-title-2-heading').css('color','#5fbfc5');
       }
   }

},500);


