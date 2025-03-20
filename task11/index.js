let a = parseFloat(prompt('Mời nhập số a:'));
let b = parseFloat(prompt('Mời nhập số b:'));
let c = parseFloat(prompt('Mời nhập số c:'));

function isTriangle(a,b,c){
    if(a<0||b<0||c<0){
        return`${a},${b},${c} không tạo thành tam giác`
    }else if(a+b<=c||a+c<=b||b+c<=a){
            return `${a},${b},${c}  không tạo thành tam giác`;
        }else return `${a},${b},${c} tạo thành 1 tam giác`;
}

console.log(isTriangle(a,b,c));