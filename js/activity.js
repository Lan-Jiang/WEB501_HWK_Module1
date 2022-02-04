//Add toggle click
$(document).ready(function() {
    //select 'not available'

    //mouseover with cursor hand, exclude td first child
    $("table").find("td").not(":nth-child(1)").mouseover(function() {
        $(this).css('cursor', 'pointer');
        
    });

    //click to change background
    // $("table").find("td").not('#notavailable').on('click', function (){ 
    //     $(this).toggleClass("selected");
    // });
    //:not is twice faster than .not()
    $("table td:not('#notavailable')").on('click', function (){ 
        $(this).toggleClass("selected");
    });

});





















