// Que1 =>
function Counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
// alert(counter());//alert1
// alert(counter());//alert2
// alert(counter());//alert3
// alert(counter());//alert4


// Que.2 =>
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})();



// Que3 =>
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // 3 times 3
  }, 1000);
}



// Que4 =>
// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

let width = 200;
function Area(){
    let length = 400;
    
    return function () {
        return `Area of rectangel is ${width * length}`;
    }
}
let rect = Area();
console.log(rect());    //Area of rectangle is 80000




// Que5 =>
// Take a variable in outer function and create an inner function to increase the counter every time it is called
let everyCount = function(){    
    let outr = 5;

    return function(){
        outr++;
        console.log(outr); 
    }
}
let increaseCount = everyCount();
increaseCount();//6
increaseCount();//7
increaseCount();//8



// Que6 =>
// Print Output

// var a = 12;
// (function(){
//     alert(a)
// })();//Alert 12




// Que7 =>
var a = 10;
var x = (function () {
      var a = 12;
        return function () {
        alert(a);
    };
    })();
x();//alert 12 once 



// Que8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// Output =>
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz