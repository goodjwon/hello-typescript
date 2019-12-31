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
