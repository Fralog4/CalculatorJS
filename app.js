const addButton= document.querySelector('#addButton');
const subtractButton= document.querySelector('#minusButton');
const multiplyButton= document.querySelector('#multiplyButton');
const divideButton= document.querySelector('#divideButton');
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


let num1=display.textContent;
let num2=0;
let operator='';
let result=0;



addButton.addEventListener('click',function(){
    num1=display.textContent;
    operator= operators[0];
    //If the operator is already set, then do not put it again
    if (num1[num1.length-1] in operators){
        return;
    }
    display.textContent=num1+operator;
}
);

subtractButton.addEventListener('click',function(){
    num1=display.textContent;
    operator= operators[1];
    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    
    display.textContent=num1+operator;
});

multiplyButton.addEventListener('click',function(){
    num1=display.textContent;
    operator= operators[2];
    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    
    display.textContent=num1+operator;
}
);
divideButton.addEventListener('click',function(){
    num1=display.textContent;

    operator= operators[3];
    let lastChar= display.textContent.slice(-1);
    if (operators.includes(lastChar)){
        return;
    }    
    display.textContent=num1+operator;
});

equalButton.addEventListener('click',function(){

    let num2=display.textContent.split(operator)[
        1];

    switch (operator){
        case '+':
            result=parseFloat(num1)+parseFloat(num2);
            display.textContent=result;
            break;
        case '-':
            result= parseFloat(num1)-parseFloat(num2);
            display.textContent=result;
            break;

        case '*':
            result= parseFloat(num1)*parseFloat(num2);
            display.textContent=result;
            break;
        case '/':
            result= parseFloat(num1)/parseFloat(num2);
            display.textContent=result;
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