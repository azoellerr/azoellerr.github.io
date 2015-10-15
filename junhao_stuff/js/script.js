var words = ["Lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","hello"];

$("h1").html(words[Math.floor(Math.random()* words.length)]);

$("h1").each(function() {
    $(this).html(words[Math.floor(Math.random()* words.length)]);
});

var topPosition = Math.floor(Math.random()*500) + "px";
var leftPosition = Math.floor(Math.random()*500) + "px";

$(".dot").css("top",topPosition).css("left",leftPosition).css("width",topPosition).css("height",leftPosition);


for(var increment = 0; increment < 100; increment++) {
    $("body").append("<div class= 'dot'></div>");

}

$(".dot").each(function() {
    var topPosition = Math.floor(Math.random()*500) + "px";
var leftPosition = Math.floor(Math.random()*500) + "px";

$(this).css("top",topPosition).css("left",leftPosition).css("width",topPosition).css("height",leftPosition)
})