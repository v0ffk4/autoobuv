$(window).scroll(function(){
    var fromtop = $(document).scrollTop();
    opac = fromtop/200;
    if(opac > 0.9){
    	opac = 0.9;
    }
    $('.header-bcg').css({opacity: opac});
    console.log(opac);
});