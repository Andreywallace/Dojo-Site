/*
$(function() {
    
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
  
});



$(window).bind('scroll', function () {
   
    if ($(window).scrollTop() >=  0) {
        $('.menu').addClass('fixed');
        $('#servicos').addClass('margin-top-fluid');
        $('#titulo-servicos').addClass('titulo-servicos-2');
        //  $('#video-section').css({'margin-bottom':'0px'});

      
        if ($(window).width() >= 768) {
            $('.opcao-menu').css({
                "padding": "15px 20px 15px 20px"
            });
            $('.opcao-menu').css({
                "font-size": "16px"
            });
        } else {
            $('.opcao-menu-brand').css({
                "padding": "0px 20px 0px 20px"
            });
        } 

    } else {
        $('.menu').removeClass('fixed');
        //   $('#video-section').css({'margin-bottom':'-80px'});
        $('#titulo-servicos').removeClass('titulo-servicos-2');
        
           if ($(window).width() >= 768) {
            $('.opcao-menu').css({
                "padding": "40px 20px 40px 20px"
            });
            $('.opcao-menu').css({
                "font-size": "20px"
            });
            $('.opcao-menu-brand').css({
                "padding": "10px 20px 0px 20px"
            });
        } 
    }
});
*/
