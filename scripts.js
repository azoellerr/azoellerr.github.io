var counter = 0;


//to make a function happen when interacting with it on page:
$("h1").click(function(){
    if (counter < 10) {
    $("h1").append("...");
    }
    $("h1").toggleClass("yellow");
    counter++;
    console.log(counter);
});

/*difference between mouseDown, mouseUp and click, typically used for games
mouseMove - everytime the mouse moves 1 px that change applies,
again typically used for games
mouseEnter happens whenever mouse enters that object
mouseLeave happens whenever mouse leaves that object
*/

var person = {
    name: "Arielle",
    age: "21",
    gender: "Female",
    currrentLocation: "Brooklyn, NY"
}

// can .addClass, .removeClass, .toggleClass, hide, show, remove
//can edit the css or html of an element in console with jquery
//.append adds things onto the end of elements; .prepend adds to beginning

console.log("hello world");

var blackjack = 21;

function myFunction(arg1, arg2) {
    console.log("hello world");
}

function addNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
}