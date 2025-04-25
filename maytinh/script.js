const display = document.getElementById("display")
function appendToDisplay(a){
    display.value += `${a}`
}

function clearDisplay(){
    display.value = 0;
}

function deleteLast(){
    const result = display.value.split("")
    result.pop()
    display.value=result.join("")
    
}

function calculate(){
    
}

