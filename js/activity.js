//Add toggle click
$(document).ready(function() {
    //mouseover with cursor hand, exclude td first child
    $("table").find("td").not(":nth-child(1)").mouseover(function() {
        $(this).css('cursor', 'pointer');       
    });

    //click to change background
    // $("table").find("td").not('#notavailable').on('click', function (){ 
    //     $(this).toggleClass("selected");
    // });
    //:not is twice faster than .not()
    // $("table td:not('#notavailable')").on('click', function (){ 
    //     $(this).toggleClass("selected");
    // });

    //click function and show info box
    $("td").click(function() {
        var content = $(this).text();
        var thIndex = $(this).index();
        var thContent = $("table").find("th").eq(thIndex).text()

        if (content != "Not Available") {
            $(this).toggleClass("selected");

            if ($(this).hasClass("selected")) {
                $("#displaySelected").css("visibility", "visible");
                $("#displaySelected").css("margin-top", "2em");
                $("#result").append("<p>" + content + " at " + thContent + "</p>");             
            } else {
                $("#result p:contains(" + content + ")").remove();

                if ($("#result").has("p").length == false) {
                    $("#displaySelected").css("visibility", "hidden");
                    $("#displaySelected").css("margin-top", "0");
                }
            }
        }
    });

});

//Hide displaySelected when load
function hidedisplaySelected() {
    document.getElementById("displaySelected").style.visibility = "hidden";
};

hidedisplaySelected();





















