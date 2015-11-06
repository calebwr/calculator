var myButtons = ['c', '%', '(', ')', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+', '='];

function ready() {
    var container = document.createElement('div');

    container.id = 'container';

    container.appendChild(headerBuild());

    container.appendChild(calculatorBuild());
    
    document.body.appendChild(container);
}

function headerBuild(){
    var header = document.createElement('h1');
    header.textContent = 'Calculator';
    return header;
}

function calculatorBuild() {
    var calcWrap = document.createElement('div');
    calcWrap.id = 'calculator';
    var input = document.createElement('input');
    input.id = 'calc-input';
    input.className = 'calin';
    calcWrap.appendChild(input);

    myButtons.forEach(function(content) {
        var button = document.createElement('button');
        button.id = content;
        button.className = 'calbut';
        button.appendChild(document.createTextNode(content));
        button.addEventListener('click', clickHandler, false);
        calcWrap.appendChild(button);
    });
    return calcWrap;
}

function clickHandler(event){
    var input = document.getElementById('calc-input');
    if(event.target.id == '='){
        input.value = math.eval(input.value);
    } else {
        input.value = input.value + event.target.id;
    }
}

ready();

