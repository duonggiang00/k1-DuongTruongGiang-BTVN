const arr=[1, 0, "", null, "hello", undefined, NaN, 2, 3]

function cleanFalsyValues(){
    let newArr=[];
    for(let i =0;i<arr.length;i++){
        if(arr[i]){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
console.log(`Viết hàm nhận vào một mảng và làm sạch các falsy values có trong mảng`)
cleanFalsyValues(arr)

const arr1= [1, 2, 3, 4, 5, 6];
const arr2= [1, 3, 5, 7];
const arr3= [-2, -1, 0, 1, 2];

function filterEvenNumbers(arr){
    let newArr=[];
    for(let i =0;i<arr.length;i++){
        if(arr[i]&&arr[i]%2==0){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
console.log(`Viết hàm lọc lấy các số chẵn của một mảng`)
filterEvenNumbers(arr1);
filterEvenNumbers(arr2);
filterEvenNumbers(arr3);


function filterLongStrings(arr){
    let newArr=[];
    for(let i =0;i<arr.length;i++){
        if(arr[i]&&arr[i].length>5){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
console.log(`Viết hàm lọc lấy các chuỗi có độ dài lớn hơn 5 của mảng các chuỗi`)
filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); // Output: ["hello world", "goodbye!!"]
filterLongStrings(["hi", "bye", "yes"]); // Output: []

function findMinMaxAverage(arr){
    let a=arr[1];
    let b=arr[1];
    let maxIndex="0";
    let minIndex="0";
    let newArr=[];
    let primeAverage=0;
    let count=0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>a){
            a=arr[i];
            maxIndex=i;
        }
        if(arr[i]<b){
            b=arr[i];
            minIndex=i;
        }
    }
    for (let i = 0; i<arr.length;i++){
        let isPrime=true;
        if(arr[i]<=1){
            isPrime=false;
        }else if(arr[i] ===2){
            isPrime=true;
        }else{
            for(let j =2;j*j<=arr[i];j++){
                if(arr[i]%j ===0 ){
                    isPrime=false
                    break;
                }
            }
        }
        if(isPrime){
            newArr.push(arr[i])
            primeAverage+=arr[i]
            count++;
        }
    }
    primeAverage/=count;
    
    console.log(`max: ${a}, maxIndex: ${maxIndex}, min: ${b}, minIndex: ${minIndex}, primeAverage: ${primeAverage}`);
    console.log(newArr);
}
console.log(`Cho trước mảng chứa các số nguyên, viết hàm tìm:`)
findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); 
findMinMaxAverage([5, 5, 2, 2, 1]); 
findMinMaxAverage([-3, 7, -8, 11, 0]);

function insertNumber(arr,num){
    for(let i =0;i<arr.length;i++){
        if(!arr[i]||typeof(arr[i])!== 'number'){
            arr.splice(i,1);
            i--;
        }
    }
    if(num){arr.push(num)}
    if(arr.length<=1) return arr;
    let pivot = arr[arr.length-1];
    const left = [];
    const right = [];
    for(let i =0 ; i<arr.length-1;i++){
        if(arr[i]<pivot){left.push(arr[i])}
        else(right.push(arr[i]))
    }
    const result = [...insertNumber(left),pivot,...insertNumber(right)];
    return result;
    
}
console.log(`Viết hàm chèn số vào mảng mà không thay đổi thứ tự tăng dần của mảng.`)
console.log(insertNumber([1, 3, 5, 7, 9], 6)); 
console.log(insertNumber([3, "hello", 1, NaN, 4, null], 2));
console.log(insertNumber([], 5)); 
console.log(insertNumber([-1, 10, -5, "abc"], -3));
console.log(insertNumber([5, 2, 8], NaN));