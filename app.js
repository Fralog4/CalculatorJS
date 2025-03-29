const addButton= document.querySelector('#addButton');
const subtractButton= document.querySelector('#minusButton');
const multiplyButton= document.querySelector('#multiplyButton');
const divideButton= document.querySelector('#divisionButton');
const equalButton= document.querySelector('#equalsButton');
const clearButton= document.querySelector('#clearButton');
const display= document.querySelector('#display');
const numberButtons = document.querySelectorAll('[data-value]');

const operators= ['+','-','*','/']; 

numberButtons.forEach((button) => {
    button.addEventListener('click', function(){
        if (!isNotDone) return; //no input after equal button is pressed
        display.textContent += button.textContent;
    });
});



let num1='';
let num2='';
let operator='';
let result='';
let isNotDone=true;

addButton.addEventListener('click',function(){
    //Check if the last character is an operator
    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    
    operator = operators[0];
    
    display.textContent += operator;
});

subtractButton.addEventListener('click',function(){
    operator= operators[1];
    //Check if the last character is an operator
    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    
    operator = operators[1];
    display.textContent += operator;});

multiplyButton.addEventListener('click',function(){
    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    
    operator = operators[2];
    display.textContent += operator;}
);

divideButton.addEventListener('click',function(){

    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    
    operator = operators[3];
    display.textContent += operator;
});

equalButton.addEventListener('click',function(){

    let parts = display.textContent.split(operator);
    if (parts.length < 2 || parts[1] === '') {
        return;
    }
    let num1 = parseFloat(parts[0]) || '';
    let num2 = parseFloat(parts[1]) || '';
    
    switch (operator){
        case '+':
            result=parseFloat(num1)+parseFloat(num2);
            display.textContent=result.toString();
            break;
        case '-':
            result= parseFloat(num1)-parseFloat(num2);
            display.textContent=result.toString();
            break;

        case '*':
            result= parseFloat(num1)*parseFloat(num2);
            display.textContent=result.toString();
            break;
        case '/':
            result= parseFloat(num1)/parseFloat(num2);
            display.textContent=result.toString();
            break;
        default:
            display.textContent='';
    }
    isNotDone = false;

});

clearButton.addEventListener('click', function(){
    display.textContent = '';
    operator = '';
    result = '';
    isNotDone = true; // Riattiva input dopo clear
});
