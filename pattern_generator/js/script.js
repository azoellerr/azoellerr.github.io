
 var myImages1 =["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg",
 "images/image6.jpg","images/image7.jpg","images/image8.jpg","images/image9.jpg","images/image10.jpg"]


 function randomImg1(){
//        var myImages1 = new Array ();
 /*       myImages1[1] = "images/image1.jpg";
        myImages1[2] = "images/image2.jpg";
        myImages1[3] = "images/image3.jpg";
        myImages1[4] = "images/image4.jpg";
        myImages1[5] = "images/image5.jpg";
        myImages1[6] = "images/image6.jpg";
        myImages1[7] = "images/image7.jpg";
        myImages1[8] = "images/image8.jpg";
        myImages1[9] = "images/image9.jpg";
        myImages1[10] = "images/image10.jpg";*/
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