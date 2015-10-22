
 var myImages1 =["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg",
 "images/image6.jpg","images/image7.jpg","images/image8.jpg","images/image9.jpg","images/image10.jpg",
 "images/image11.jpg","images/image12.jpg","images/image13.jpg","images/image14.jpg","images/image15.jpg",
 "images/image16.jpg","images/image17.jpg","images/image18.jpg","images/image19.jpg","images/image20.jpg",
 "images/image21.jpg","images/image22.jpg","images/image23.jpg","images/image24.jpg","images/image25.jpg",
 "images/image26.jpg","images/image27.jpg","images/image28.jpg","images/image29.jpg","images/image30.jpg"]


 function randomImg1(){
//        var myImages1 = new Array ();

        var rnd = Math.floor( Math.random() * myImages1.length );
        console.log("hello, its working")
      if( rnd == 0 ) {
        rnd =1;
      }
      //document.write('<img class="images" src="' + myImages1[rnd] + '"/>');
      $("#asshole").append('<img class="images" src="' + myImages1[rnd] + '"/>');
     // $("div").html("<img src=","images/image1.jpg",">");
   // console.log("hello, its working02")
    }
    
    
    
    
/*NOTES
 to get a number between say 0 and 99, 
 math.random()*100;
 when using Math.random, it never gets to an exact integer; always gets to a huge decimal
 so, you need to round; 
 math.floor(Math.random()*100); rounds the values in an array
 ^^^^^ this is how to retrieve a random number
 
 ["red", "blue", "green"][0]
 0 would be red
 
 to change position in jquery and not css:
 for say the class="ball"
 $(".ball").css("top", "100px").css("left", "200px);
 now to randomize:
 store them in a variable
 
 var randomNum = Math.floor(Math.random)*100);
 
 var topPosition = "100px";
 var leftPosition = "100px";
 ORRRRR
  var topPosition = randomNum + "px";
  var leftPosition = randomNum + "px";
 
  $(".ball").css("top", "100px").css("left", "200px);
  ("left", leftPosition);
  
  ORRRRRRRR
  to do a random width and/or height:
  var randomWidth = Math.floor(Math.random()*$(window).width());
  var randomHeight = Math.floor(Math.random()*$(window).height());

	say width of your ball is 100px, according to CSS;
	to move around within the size of the window without it going outside of window (bc it picks position based
	on top left), you can do:
	var randomWidth = Math.floor(Math.random() * ($(window).width() -100);
  	var randomHeight = Math.floor(Math.random() * ($(window).height() -100);

 */