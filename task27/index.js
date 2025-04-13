const users = [
    { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
    { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
    { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
    { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
    { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
  ];
  
function groupBy(arr,key){
    document.writeln(`<h1>Task27:</h1>`)
   let result={};
    if(Object.keys(arr[0]).includes(key)){
        for(let i = 0; i<arr.length;i++){
            let group = arr[i][key];
            if(!result[group]){
                result[group]=[];
            }
            result[group].push(arr[i]);
           }
        for(const group in result){
            document.writeln(`${group}: <br>`)
            for(let i = 0; i<result[group].length;i++){
                for(const key in result[group][i]){
                    document.writeln(`${key}: ${result[group][i][key]} `)
                }
                    document.writeln(`<br>`)
            }
        }
    }
    return result;
}
groupBy(users,"age");
groupBy(users,"address");

const listUser = [
    { name: "Nguyễn Văn A", age: 18 },
    { name: "Trần Thị B", age: 22 },
    { name: "Lê Văn C", age: 30 },
    { name: "Phạm Thị D", age: 25 },
    { name: "Hoàng Văn E", age: 20 },
    { name: "Đỗ Thị F", age: 27 },
    { name: "Bùi Văn G", age: 35 },
    { name: "Vũ Thị H", age: 24 },
    { name: "Ngô Văn I", age: 29 },
    { name: "Dương Thị K", age: 32 },
  ];
function sortUsersByAgeDesc(arr){
    document.writeln(`<h1>Task28:</h1>`)
    result = arr.sort((a,b)=>{
        return b.age-a.age
    })
    for(let i =0; i<arr.length;i++){
        for(key in arr[i]){
            document.writeln(`${key}: ${arr[i][key]}`)
        }
        document.writeln(`<br>`)
    }
}
sortUsersByAgeDesc(listUser)

// Input
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
    { id: 3, name: "Keyboard", price: 150 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "USB Cable", price: 25 },
    { id: 6, name: "Webcam", price: 120 },
    { id: 7, name: "Desk Lamp", price: 80 },
    { id: 8, name: "Headphones", price: 200 },
    { id: 9, name: "Speaker", price: 180 },
    { id: 10, name: "Chair", price: 250 },
];

function filteredProductNames(arr, price){
    document.writeln(`<h1>Task29:</h1>`)
    const result = arr.filter((item)=>{
        return item.price >= price;
    })
    for(let i = 0; i<result.length;i++){
        for(key in result[i]){
            document.writeln(`${key}:${result[i][key]}`) ;
        }
        document.writeln(`<br>`);
    }
    
}
filteredProductNames(products,200)

const orders = [
    { id: 1, amount: 100, date: "2025-04-01", status: "completed" },
    { id: 2, amount: 200, date: "2025-04-02", status: "pending" },
    { id: 3, amount: 150, date: "2025-04-03", status: "completed" },
    { id: 4, amount: 300, date: "2025-04-04", status: "shipped" },
    { id: 5, amount: 50, date: "2025-04-05", status: "cancelled" },
    { id: 6, amount: 120, date: "2025-04-06", status: "completed" },
    { id: 7, amount: 180, date: "2025-04-07", status: "shipped" },
    { id: 8, amount: 220, date: "2025-04-08", status: "pending" },
    { id: 9, amount: 350, date: "2025-04-09", status: "completed" },
    { id: 10, amount: 500, date: "2025-04-10", status: "completed" },
];

function calculateTotalCompletedAmount(arr, amount){
    document.writeln(`<h1>Task30:</h1>`)
    const orderAmount= arr.filter((item)=>{
        return(item.amount>=amount&&item.status==="completed");
    })
    // console.log(orderAmount);
    let total=0;
    for(let i =0; i<orderAmount.length;i++){
        total+=orderAmount[i].amount;
    }
    console.log(total);
    document.writeln(total);
}
calculateTotalCompletedAmount(orders, 150);
calculateTotalCompletedAmount(orders, 100);