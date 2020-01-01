//Boolean Type
let isDone: boolean = false;

//Number Type
let deciaml: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String Type
let color: string = "blue";
color = 'red'
console.log(color);

let fullName: string = `Jwon Good~!!`
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}

I'll be ${age +1} years old next month.`;
console.log(sentence);


//Array
let list: number[] = [1,2,3]
;

let list2: Array<number> = [1,2,3];

let x: [string, number]

x =["hello", 10]

console.log(x[0].substr(1))


enum Color {Red, Green, Blue}

let c:Color = Color.Green;


//AnyType
let notSure: any = 4;
notSure = "문자일수 있다."
notSure = false;

/* 오류발생
let prettySure: Object = 4;
prettySure.toFixed();
*/

let any_list: any[] = [1, true, "free"]
any_list[1] = 100;


function warnUser(): void{
    alert("This is my warning message");
}

//undefied or null 만 할당 가능.
let unsuable: void = undefined;

//undefied 와 null은 다른 서브 타입이다.
let u: undefined = undefined;
let n: null = null;

//naver 반환이 가능한 경우 
function error(message: string): never{
    throw new Error(message);
}


//type assertions 타입선언.
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

