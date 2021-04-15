const navpage_header = document.getElementsByClassName('navPages');
const row_top = document.getElementsByClassName('row-top');

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
}
window.onresize = function(){
    let height = (-document.documentElement.scrollTop) +row_top[0].offsetHeight;
    navpage_header[0].style.top = height + 'px';
}