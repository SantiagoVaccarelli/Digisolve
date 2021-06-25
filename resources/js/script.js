$(document).ready(function(){

    /*ADDING STICKY NAV*/
    $(".about-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky-nav");
        }
        else{
            $("nav").removeClass("sticky-nav");
        }
    });

    /*ANIMATION ON SCROLL*/
    
});