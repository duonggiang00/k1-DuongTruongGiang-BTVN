const list = document.getElementById("list")
const item = document.getElementsByClassName("item")
console.log(list.childElementCount)

function addItem(){
    const newItem = document.createElement("div")
    newItem.className="item"
    newItem.innerText=`Phần tử ${list.childElementCount+1}`
    list.appendChild(newItem)
}

function removeItem(){
    if(list.childElementCount>0){
        list.removeChild(list.lastChild)
    }else alert("còn cái nịt")
    
}