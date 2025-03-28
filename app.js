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
        display.textContent+=button.textContent;
    });
});


let num1=0;
let num2=0;
let operator='';
let result=0;

addButton.addEventListener('click',function(){
    //Check if the last character is an operator
    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    
    num1 = display.textContent; 
    operator = operators[0];
    
    display.textContent += operator;}
);

subtractButton.addEventListener('click',function(){
    operator= operators[1];
    //Check if the last character is an operator
    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    
    num1 = display.textContent; 
    operator = operators[1];
    display.textContent += operator;});

multiplyButton.addEventListener('click',function(){
    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    
    num1 = display.textContent;
    operator = operators[2];
    display.textContent += operator;}
);

divideButton.addEventListener('click',function(){

    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    

    num1 = display.textContent;
    operator = operators[3];
    display.textContent += operator;
});

equalButton.addEventListener('click',function(){

    let parts = display.textContent.split(operator);
    if (parts.length < 2 || parts[1] === '') {
        return;
    }
    let num2 = parseFloat(parts[1]) || 0;
    
    switch (operator){
        case '+':
            result=parseFloat(num1)+parseFloat(num2);
            display.textContent=result;
            num1=result;
            num2=0;
            break;
        case '-':
            result= parseFloat(num1)-parseFloat(num2);
            display.textContent=result;
            num1=result;
            num2=0;
            break;

        case '*':
            result= parseFloat(num1)*parseFloat(num2);
            display.textContent=result;
            num1=result;
            num2=0;
            break;
        case '/':
            result= parseFloat(num1)/parseFloat(num2);
            display.textContent=result;
            num1=result;
            num2=0;
            break;
        default:
            display.textContent='';
    }

});

clearButton.addEventListener('click',function(){
    display.textContent='';
    num1=0;
    num2=0;
    operator='';
    result=0;
});