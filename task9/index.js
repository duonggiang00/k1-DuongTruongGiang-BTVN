let a = parseFloat(prompt('Mời nhập số a:'));
let b = parseFloat(prompt('Mời nhập số b:'));
console.log('Trước khi hoán vị '+a,b);
function swapNumber(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    return [a,b];
}
console.log('Sau khi hoán vị: '+swapNumber(a,b))