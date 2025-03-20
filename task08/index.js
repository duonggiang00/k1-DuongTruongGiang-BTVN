//tính BMI

let weight = parseFloat(prompt("Mời nhập cân nặng(kg):"));
let height = parseFloat(prompt("Mời nhập chiều cao(m):"));



function calcBMI(weight,height){
    
    let BMI = weight / (height*height);
    BMI = BMI.toFixed(2);
    if (BMI < 18.5) {
        return(`BMI = ${BMI} → Thiếu cân`);
    } else if (BMI >= 18.5 && BMI < 23) {
        return(`BMI = ${BMI} → Bình thường`);
    } else if (BMI >= 23 && BMI < 25) {
        return(`BMI = ${BMI} → Thừa cân`);
    } else {
        return(`BMI = ${BMI} → Béo phì`);
    }
}

console.log(calcBMI(weight,height));

