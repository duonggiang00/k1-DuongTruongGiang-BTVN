let a = parseFloat(prompt('Mời nhập số a:'));
let b = parseFloat(prompt('Mời nhập số b:'));
let c = parseFloat(prompt('Mời nhập số c:'));

console.log('Chuỗi cần đảo ngược là ' +a,b,c);

function sortNumber(a,b,c){
    if (a<b){
        a=a+b;
        b=a-b;
        a=a-b;
    } 
    if (a<c){
        a=a+c;
        c=a-c;
        a=a-c;
    }
    if (b<c){
        b=b+c;
        c=b-c;
        b=b-c;
    } 
    return [a,b,c];
}

console.log(sortNumber(a,b,c));