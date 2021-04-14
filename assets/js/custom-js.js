window.onscroll = function(){
   const navpage_header = document.getElementsByClassName('navPages');
   const row_top = document.getElementsByClassName('row-top');
   if(document.documentElement.scrollTop >= 71 ){
       navpage_header[0].style.top = document.documentELement.scrollTop + 'px';
   }
   else{
       navpage_header[0].style.top = '49px';
   }
}