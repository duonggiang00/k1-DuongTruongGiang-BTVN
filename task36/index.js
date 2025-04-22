const students = [
    { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
    { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
    { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
  ];

const dataTable = document.getElementById("dataTable");
students.forEach((student)=>{
    let trStudent=document.createElement("tr");
    trStudent.innerHTML=`
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.city}</td>
    `
    dataTable.appendChild(trStudent)
})
