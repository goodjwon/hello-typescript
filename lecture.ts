

let numberOne = Math.ceil(Math.random()*9);
let numberTwo = Math.ceil(Math.random()*9);
let result = numberOne * numberTwo;

const word = document.createElement('div');
word.textContent = `${numberOne} 곱하기 ${numberTwo}`;
document.body.append(word);

const form = document.createElement('form');
document.body.append(form);

const input = document.createElement('input');
input.type = 'number'
document.body.append(input);


const button = document.createElement('button');
button.textContent = '정답은?';
form.append(button);

const resultDiv = document.createElement('div');
document.body.append(resultDiv);


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(result === Number(input.value)) {
        resultDiv.textContent = '딩동댕동.';
        numberOne = Math.ceil(Math.random()*9)
        numberTwo = Math.ceil(Math.random()*9)
        result = numberOne * numberTwo;
        word.textContent = `${numberOne} 곱하기 ${numberTwo} 는?`
    }else{
        resultDiv.textContent = '땡';
        input.value = '';
        input.focus();
    }
})




