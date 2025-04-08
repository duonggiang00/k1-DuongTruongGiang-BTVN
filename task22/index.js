const arr = [1, 2, 3, 4, 3, 2, 1,];
function checkSymmetricalArr(){
    let input=document.getElementById('t22-input').value;
    let arr=input.split(',').map(item=>item.trim());
    const checkArr=arr.every(item=>item!==""&& !isNaN(Number(item)));
    const result=document.getElementById("t22-result");
    if(!checkArr){
        result.innerHTML="mảng nhập vào lỗi"
    }else{
    for(let i=0,j=arr.length-1;i<j;i++,j--){
        if(arr[i]!==arr[j]){
            result.innerHTML=`mảng ${arr.join(',')} không phải mảng đối xứng`
            return;
        }
    }
    result.innerHTML=`mảng ${arr.join(',')} là mảng đối xứng`
    }
}

function reverseArr(){
    let input = document.getElementById('t23-input').value;
    let arr = input.split(',').map(item=>item.trim());
    const checkArr = arr.every(item => item!==""&&!isNaN(Number(item)));
    const result=document.getElementById("t23-result");
    arr = [...new Set(arr)];
    if(!checkArr){
        result.innerHTML="mảng nhập vào lỗi"
    }else{
        let b=0;
        for(let i=0;i<arr.length/2-1;i++){
            b=arr[i];
            arr[i]=arr[arr.length-1-i];
            arr[arr.length-1-i]=b;
        }
        result.innerHTML=`mảng đã đảo ngược là ${arr.join(',')}`
        return
    }
}

function sortArrNumber(){
    let input = document.getElementById('t24-input').value;
    let arr = input.split(',').map(item=>item.trim());
    const checkArr=arr.every(item => item!==""&&!isNaN(Number(item)));
    const result=document.getElementById("t24-result");
    if(!checkArr){
        result.innerHTML="mảng nhập vào lỗi"
        return;
    }else{
    function quickSort(arr){
            if(arr.length<=1) return arr;
            let pivot = arr[arr.length-1];
            const left = [];
            const right =[];
            for(let i = 0; i<arr.length-1; i++){
                if(arr[i]<pivot){left.push(arr[i])}
                else{right.push(arr[i])}
            }
            const newArr = [...quickSort(left),pivot,...quickSort(right)];
            return newArr;
        }
    }
    const sortedArr = quickSort(arr);
    result.innerHTML= "Mảng sau khi sắp xếp: " + sortedArr.join(","); 
}


function removeDuplicate(){
    let input=document.getElementById('t25-input').value;
    let arr=input.split(',').map(item=>item.trim());
    let newArr=[];
    
    const result=document.getElementById('t25-result');
    for(let i = 0; i<arr.length; i++){
        let check=true;
        for(let j =0; j<newArr.length;j++){
            if(arr[i] === newArr[j]){
                check = false;
                break;
            }
        }
        if(check){newArr.push(arr[i])}
    }
    result.innerHTML = `mảng đã xóa các phần tử trùng lặp là ${newArr}`;
}

function countElement(){
    let input=document.getElementById('t26-input').value;
    let arr=input.split(',').map(item=>item.trim());
    const result=document.getElementById('t26-result');
    let count={};
    for(let i=0;i<arr.length;i++){
        let element=arr[i];
        count[element]=(count[element]||0)+1;
    }
    let keyValue='';
    for(let value in count){
        keyValue += `${value}: ${count[value]}`;
        keyValue +='<br></br>';
    }
    result.innerHTML=keyValue;
}
