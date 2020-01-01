//Boolean Type
var isDone = false;
//Number Type
var deciaml = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//String Type
var color = "blue";
color = 'red';
console.log(color);
var fullName = "Jwon Good~!!";
var age = 37;
var sentence = "Hello, my name is " + fullName + "\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//Array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
x = ["hello", 10];
console.log(x[0].substr(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//AnyType
var notSure = 4;
notSure = "문자일수 있다.";
notSure = false;
/* 오류발생
let prettySure: Object = 4;
prettySure.toFixed();
*/
var any_list = [1, true, "free"];
any_list[1] = 100;
function warnUser() {
    alert("This is my warning message");
}
//undefied or null 만 할당 가능.
var unsuable = undefined;
//undefied 와 null은 다른 서브 타입이다.
var u = undefined;
var n = null;
//naver 반환이 가능한 경우 
function error(message) {
    throw new Error(message);
}
//type assertions 타입선언.
var someValue = "this is a string";
var strLength = someValue.length;
