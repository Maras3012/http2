/*Carousel*/
$(document).ready(function () {
    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            576:{
                items: 2
            },
            768:{
                items: 3
            }
        }
    });
});



/*Korisnici*/
$(document).ready(function () {
    $('#misljenje').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

$(function(){
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() < 50 ) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");
        }
        else {
            // show nav
            $("nav").addClass("vesco-top-nav");
        }
    });
});

$(function(){
    
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        
        var section = $(this).attr("href");
        
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250);
        
    });
});


$(function(){
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() < 50 ) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");
        }
        else {
            // show nav
            $("nav").addClass("vesco-top-nav");
        }
    });
});

$(function(){
    
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        
        var section = $(this).attr("href");
        
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250);
        
    });
});



