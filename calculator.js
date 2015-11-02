var buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+', '='];

function ready(){
    var container = document.createElement('div');
    var calculator = document.createElement('div');
    
    container.id = 'container';
    calculator.id = 'calculator';
    
    container.appendChild(calculator);
    
    calculator.appendChild(calculator());
}

function calculator(){
    var calcWrap = document.createElement('div');
    calcWrap.id = 'calc';
    
    var field = document.createElement('input');
    field.id = 'calc-box';
    calcWrap.appendChild(field);
    
    function buttons(buttonContent){
        var button = document.createElement('button');
        button.id = buttonContent;
        calcWrap.appendChild(button);
    }
    return calcWrap;
}