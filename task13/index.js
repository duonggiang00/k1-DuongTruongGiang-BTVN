function printPrimedNumber(){
    let a = document.getElementById("max").value;
    a=parseInt(a);
    let b =0;
    let c=[];
    for(let i=2;i<=a;i++){
        let isPrime=true;
        for(let n = 2; n*n<=i;n++){
            if (i%n === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            c[b]=i;
            b++;
        }
    }
    document.getElementById("result").innerHTML = c.join(", ");
}

function findMaxNumber(){
    let a = parseInt(document.getElementById("so1").value);
    let b = parseInt(document.getElementById("so2").value);
    let c = parseInt(document.getElementById("so3").value);
    if(a<b){
        a=b;
    }
    if(a<c){
        a=c;
    }
    document.getElementById("maxNumber").innerHTML = a;
}

function isSameSign(){
    let a = parseInt(document.getElementById("so01").value);
    let b = parseInt(document.getElementById("so02").value);
    if(a*b>0){
        if(a>0&&b>0){
            document.getElementById("ketluan").innerHTML = a + " và " + b + " cùng dấu dương";
        }else document.getElementById("ketluan").innerHTML = a + " và " + b + " cùng dấu âm";
    }else document.getElementById("ketluan").innerHTML = a + " và " + b + " trái dấu"
}

function taxiBill(){
    let a = parseFloat(document.getElementById("km").value);
    let ketluan="Tổng tiền phải trả ";
    let tongtien=0;
    if(a<0||isNaN(a)){
        document.getElementById("total").innerHTML="số km không hợp lệ";
        return;
    }
    if(a<=1){
        tongtien=10000;
    }
    else if(a>1&&a<=30){
        tongtien=10000+(a-1)*8000;

    }
    else if(a>30){
        tongtien=10000+(30-1)*8000+(a-30)*7000;
    }
    document.getElementById("total").innerHTML= ketluan + tongtien +" đ";
}

function taxSalary(){
    let a = parseFloat(document.getElementById("salary").value);
    let ketluan="Tổng tiền phải trả ";
    let tongtien=0;
    if(a<0||isNaN(a)){
        document.getElementById("tax").innerHTML="Thu nhập không hợp lệ";
        return;
    }
    if(a<=11000000){
        tongtien=0;
    }
    else if(a>11000000&&a<=25000000){
        tongtien=a*5/100;

    }
    else if(a>25000000&&a<=50000000){
        tongtien=a*10/100;
    }
    else if(a>50000000&&a<=80000000){
        tongtien=a*20/100;
    }
    else if(a>80000000){
        tongtien=a*30/100;
    }
    document.getElementById("tax").innerHTML= ketluan + tongtien +" đ";
}

function printIsoscelesTriangle(){
    let a = parseFloat(document.getElementById("n").value);
    let b = document.getElementById("character").value;
    let triangle="";
    for(let i = 1;i<=a;i++){
        let line="";
        for(j=0;j<a-i;j++){
            line+=" ";
        }
        for(k=0;k<2*i-1;k++){
            line+=b;
        }
        triangle += line + "\n"
    }
    document.getElementById("triangle").innerText = triangle;
}
function printMultiplicationTable(){
    let line="";
    for(i=1;i<=10;i++){
        for(j=1;j<=10;j++){
            let k=i*j;
            line+=`${i}x${j}=${k} \n`;
        }
        line += "\n";
    }
    document.getElementById("multi-table").innerText=line;
}