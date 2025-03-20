let a = parseFloat(prompt('Mời nhập số a:'));

function printSquareNumber(a){
    for(i=2;i*i<a;i++){
        console.log(i*i)
    }
}
printSquareNumber(a);