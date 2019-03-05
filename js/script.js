$(document).ready(function(){
    /*$("#panel").click(function(){
        $(this).children(".container").hide();
    });
    
    $(".superButton").click(function(){
        $(".container").show();
    });
    
    $(".container").click(function(){
        $(this).hide();
    })
    
    $(".superButton").click(function(){
        $(".container").show();
    });
    
    $(".container").click(function(){
        $(this).children(".theButton").hide();
    })
    
    $(".superButton").click(function(){
        $(".theButton").show();
    });*/
    
    $(".container").click(function(){
        $(this).siblings().fadeTo('slow', 0.1);
    });
    
});