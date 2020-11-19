console.log('hello typescript');
console.log('hello javascirpt');
var abc = 1;
console.log(abc);
var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var word = document.createElement('div');
word.textContent = numberOne + " \uACF1\uD558\uAE30 " + numberTwo;
document.body.append(word);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'number';
document.body.append(input);
var button = document.createElement('button');
button.textContent = '정답은?';
form.append(button);
var resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (result === Number(input.value)) {
        resultDiv.textContent = '딩동댕동.';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        result = numberOne * numberTwo;
        word.textContent = numberOne + " \uACF1\uD558\uAE30 " + numberTwo + " \uB294?";
    }
    else {
        resultDiv.textContent = '땡';
        input.value = '';
        input.focus();
    }
});
