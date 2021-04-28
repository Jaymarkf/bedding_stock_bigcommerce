const navpage_header = document.getElementsByClassName('navPages');
const row_top = document.getElementsByClassName('row-top');
const about_container = document.getElementsByClassName('about-us-container');
const real_reviews = document.getElementsByClassName('real-reviews-container');
const global_container = document.getElementsByClassName('global-container');
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
    }else if(path == '/real-reviews/'){
        real_reviews[0].style.top = navpage_header[0].offsetHeight + 'px';
    }else if(path == '/the-truth/'){
        global_container[0].style.top = navpage_header[0].offsetHeight + 'px';
        global_container[0].style.position = 'relative';
    }else if(path == '/blog/'){
        var top = parseInt(navpage_header[0].offsetHeight) - 29;
        global_container[0].style.top =  top + 'px';
        global_container[0].style.position = 'relative';
    }else if(path == '/comparison/' ||path == '/setup-care-instructions/' || path == '/faqs/' || path == '/shipping-transit-chart/' || path == '/product-certification-features/'){
        let top = parseInt(navpage_header[0].offsetHeight);
        global_container[0].style.top = top + 'px';
        global_container[0].style.position = 'relative';
    }



}
window.onresize = function(){
    let height = (-document.documentElement.scrollTop) +row_top[0].offsetHeight;
    navpage_header[0].style.top = height + 'px';
    var path = window.location.pathname;
    if(path == '/about-us/' || path == '/100-night-sleep-trial/'){
        about_container[0].style.top = navpage_header[0].offsetHeight + 'px';
    }else if(path == '/real-reviews/'){
        real_reviews[0].style.top = navpage_header[0].offsetHeight + 'px';
    }else if(path == '/the-truth/'){
        global_container[0].style.top = navpage_header[0].offsetHeight + 'px';
    }else if(path == '/blog/'){
        var top = parseInt(navpage_header[0].offsetHeight) - 20;
        global_container[0].style.top =  top + 'px';
    }else if(path == '/setup-care-instructions/' || path == '/faqs/' || path == '/shipping-transit-chart/' || path == '/product-certification-features/' || path == '/comparison/'){
        let top = parseInt(navpage_header[0].offsetHeight);
        global_container[0].style.top = top + 'px';
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

$(document).ready(function(){
    var coll =  document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {

                content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});
