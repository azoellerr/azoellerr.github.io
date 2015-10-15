$(".images").html() {
var random_images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg" , "image7.jpg" , "image8.jpg" , "image9.jpg" , "image10.jpg"];
});

random_images[Math.floor(Math.random()*random_images.length)];

var currentimg = false;

for (var i = 0; i < 100; i++) {
    $("body").append("<div class='images'></div>");
};

$(".toggle").click(function() {
    
    $(".images").each(function() {
    var randtop = Math.floor(Math.random() * 1000) + "px";
    var randleft = Math.floor(Math.random() * 1000) + "px";
    
   $(this).css("top", randtop);
   $(this).css("left", randleft);
  
});
    var randomimg = images[Math.floor(Math.random()*images.length)];
    
    while (randomimg == currentimg) {
        randomimg = images[Math.floor(Math.random()*images.length)];
    }
    
    currentimg = randomimg;
    
    $(".images").html("<img src='img/" + randomimg + "'>");
});