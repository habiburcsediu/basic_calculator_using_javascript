var button = document.querySelectorAll('button');

Array.from(button).map((arrayIndex) => {
    arrayIndex.addEventListener('click', () => {
        var btnValue = arrayIndex.textContent;

        if(btnValue == 'C'){
            clear();
        }
        else if(btnValue == '='){
            result();
        }
        else{
            appendValue(btnValue);
        }
    });
});

var inputElment = document.querySelector('input');

function clear(){
    inputElment.value = '';
}

function result(){
    inputElment.value = eval(inputElment.value);
}

function appendValue(btnValue){
    inputElment.value += btnValue;
}