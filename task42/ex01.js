    // //============DOM===========
    // const studentForm = document.getElementById("studentForm")
    // const studentName = document.getElementById("studentName")
    // const mathPoint = document.getElementById("mathPoint")
    // const englishPoint = document.getElementById("englishPoint")
    // const sciencePoint = document.getElementById("sciencePoint")
    // const errorMessage = document.getElementById("errorMessage")
    // const addBtn = document.getElementById("addBtn")
    // const resetBtn = document.getElementById("resetBtn")
    // const studentList = document.getElementById("studentList")

    // //===========Object chứa dữ liệu và hàm thao tác với dữ liệu
    // const studentServices = {
    //     localStudents:JSON.parse(localStorage.getItem('students')||"[]"),
    //     saveStudents(save){
    //       const newSave = save.map(item=>{
    //         let avg = ((item.mathPoint+item.englishPoint+item.sciencePoint)/3).toFixed(2)
    //         let rank = avg >=8 ? 'good' : avg >=6 ? 'medium' : 'low'
    //         return {...item, avgPoint:+avg, rankPoint:rank}
    //       })
    //       localStorage.setItem('students',JSON.stringify(newSave))
    //       return this.localStudents = newSave
    //     },
    //     addStudent(newStudent){
    //       return this.saveStudents([...this.localStudents,newStudent]); ;
    //     },
    //     editStudent(id,newStudent){
    //       return this.saveStudents(this.localStudents.map(item=>item.id === id ? {...item,...newStudent}:item));
    //     },
    //     removeStudent(id){
    //       return this.saveStudents(this.localStudents.filter(item=>item.id!==id));
    //     },
    //     searchStudent(name, data = this.localStudents){
    //       return data.filter(item=>item.name.toLowerCase().includes(name.toLowerCase().trim()))
    //     },
    //     filterStudent(rank,data = this.localStudents){
    //       return rank ? data.filter(item=>item.rankPoint==rank) : data
    //     },
    //     sortStudentRank(type,data = this.localStudents ){
    //       return type === 'asc' ? data.sort((a,b)=>a.avgPoint-b.avgPoint) : type === 'desc' ? data.sort((a,b)=>b.avgPoint-a.avgPoint) : this.localStudents
    //     },
    //     getStudentByFilter(rank = this.localStudents,type=this.localStudents,name=this.localStudents){
    //       return this.filterStudent(rank,this.sortStudentRank(type,this.searchStudent(name)))
    //     }
    //   }

    //   //========trạng thái edit
    //   let isEditing = false;
    //   let idEdit = null

    //   //========Chức năng chính
    //   function renderList(students=studentServices.localStudents){
    //     studentList.innerHTML=""
    //     students.length === 0 ? studentList.innerHTML=`<th colspan=8>không có dữ liệu</th>` :
    //     students.forEach(item => {
    //       let trElement = document.createElement("tr")
    //       trElement.innerHTML=
    //         `<td>${item.id}</td>
    //         <td>${item.name}</td>
    //         <td>${item.mathPoint}</td>
    //         <td>${item.englishPoint}</td>
    //         <td>${item.sciencePoint}</td>
    //         <td>${item.avgPoint}</td>
    //         <td>${item.rankPoint}</td>
    //         <td>
    //           <button onclick="editStudent('${item.id}')" class="btn btn-warning">update</button>
    //           <button onclick="removeStudent('${item.id}')" class="btn btn-danger">remove</button>
    //         </td>`
    //       studentList.appendChild(trElement)
    //     });
    //     resetForm()
    //   }  

    //   function addStudent(){
    //     const student={
    //       id:generateRandomId(4),
    //       name:studentName.value,
    //       mathPoint:+mathPoint.value,
    //       englishPoint:+englishPoint.value,
    //       sciencePoint:+sciencePoint.value,
    //     }
    //     if(!validation()){return} ;
    //     isEditing ? studentServices.editStudent(idEdit,student) : studentServices.addStudent(student)
    //     renderList()
    //   }
      
    //   function resetForm(){
    //     studentForm.reset()
    //     isEditing = false;
    //     idEdit = null;
    //     errorMessage.style.display="none"
    //     addBtn.innerText='Add'
    //     studentName.readOnly=false
    // }

    //    function editStudent(id){
    //     const student = studentServices.localStudents.find(item=>item.id === id)
    //     if(student){
    //      isEditing=true
    //      idEdit=student.id
    //      addBtn.innerText='Edit'
    //      studentName.value= student.name
    //      mathPoint.value = student.mathPoint
    //      englishPoint.value = student.englishPoint
    //      sciencePoint.value = student.sciencePoint
    //      studentName.readOnly=true
    //      studentName.focus()
    //     }
    //    }

    //   function removeStudent(id){
    //     studentServices.removeStudent(id)
    //     renderList()
    //   }

    //   //===========Chức năng lọc, tìm kiếm, sắp xếp
    //   function filterStudent(rank=document.getElementById('filter').value, name=document.getElementById("search").value, type=document.getElementById('sort').value){
    //     renderList(studentServices.getStudentByFilter(rank,type,name))
    //   }

    //   //===========Chức năng phụ
    //   function generateRandomId(n,prefix = 'Student-'){
    //     const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890"
    //     let id = prefix;
    //     for(let i = 0; i<n;i++){
    //       id+=characters.charAt(Math.floor(Math.random()*characters.length))
    //     } return id
    //   }

    //   function handleErrorMessage(text){
    //     errorMessage.style.display="block";
    //     errorMessage.innerText=text
    //   }

    //   function validation(){
    //     const inputs = studentForm.querySelectorAll('input')
    //     for(const item of inputs) {
    //       if(!item.value){
    //         handleErrorMessage("Vui lòng không bỏ trống")
    //         return false
    //       }
    //       if(item.type==='number'){
    //         if(item.value<0 || item.value>10){
    //         handleErrorMessage("Điểm nhập vào phải trong khoảng 0-10")
    //         return false
    //       }}
    //     }
    //     return true
    //   }

    //   //sự kiện cho nút
    //   studentForm.addEventListener("submit",function(event){
    //     event.preventDefault()
    //     addStudent()
    //   })
  
    //   //=========hiển thị
    //   renderList()

    const STORAGE_KEY = "students";
const $ = (id) => document.getElementById(id);
const generateId = (prefix = "id-", length = 4) =>
    prefix +
    Array(length)
        .fill()
        .map(() =>
            "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890".charAt(
                (Math.random() * 62) | 0
            )
        )
        .join("");
const storage = {
    get: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
    set: (students) =>
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(
                students.map((student) => {
                    const avg = (
                        (student.mathPoint + student.englishPoint + student.sciencePoint) /
                        3
                    ).toFixed(2);
                    const avgNum = +avg;
                    return {
                        ...student,
                        avgPoint: avgNum,
                        rankPoint: avgNum >= 8 ? "good" : avgNum >= 6 ? "medium" : "low",
                    };
                })
            )
        ),
};
const dataService = {
    get: storage.get,
    add: (student) => storage.set([...storage.get(), student]),
    update: (id, data) =>
        storage.set(
            storage.get().map((student) => (student.id === id ? { ...student, ...data } : student))
        ),
    remove: (id) => storage.set(storage.get().filter((student) => student.id !== id)),
    find: (id) => storage.get().find((student) => student.id === id),
    filter: (search, rank, sort) => {
        let students = storage.get();
        if (search)
            students = students.filter((student) =>
                student.name.toLowerCase().includes(search.toLowerCase().trim())
            );
        if (rank) students = students.filter((student) => student.rankPoint === rank);
        if (sort)
            students = students.sort((a, b) =>
                sort === "asc" ? a.avgPoint - b.avgPoint : b.avgPoint - a.avgPoint
            );
        return students;
    },
};
const uiService = {
    state: { isEditing: false, editId: null },
    render: (students) =>
        ($("studentList").innerHTML = students.length
            ? students
                  .map(
                      (student) =>
                          `<tr><td>${student.id}</td><td>${student.name}</td><td>${student.mathPoint}</td><td>${student.englishPoint}</td><td>${student.sciencePoint}</td><td>${student.avgPoint}</td><td>${student.rankPoint}</td><td><button onclick="uiService.edit('${student.id}')" class="btn btn-warning">update</button><button onclick="uiService.remove('${student.id}')" class="btn btn-danger">remove</button></td></tr>`
                  )
                  .join("")
            : "<tr><td colspan=8>không có dữ liệu</td></tr>"),
    getForm: () => ({
        id: uiService.state.isEditing ? uiService.state.editId : generateId("Student-"),
        name: $("studentName").value,
        mathPoint: +$("mathPoint").value,
        englishPoint: +$("englishPoint").value,
        sciencePoint: +$("sciencePoint").value,
    }),
    showError: (message) => {
        const errorElem = $("errorMessage");
        errorElem.style.display = "block";
        errorElem.innerText = message;
    },
    reset: () => {
        $("studentForm").reset();
        uiService.state = { isEditing: false, editId: null };
        $("errorMessage").style.display = "none";
        $("addBtn").innerText = "Add";
        $("studentName").readOnly = false;
    },
    edit: (id) => {
        const student = dataService.find(id);
        if (student) {
            uiService.state = { isEditing: true, editId: id };
            $("addBtn").innerText = "Edit";
            $("studentName").value = student.name;
            $("mathPoint").value = student.mathPoint;
            $("englishPoint").value = student.englishPoint;
            $("sciencePoint").value = student.sciencePoint;
            $("studentName").readOnly = true;
            $("studentName").focus();
        }
    },
    remove: (id) => {
        dataService.remove(id);
        uiService.render(dataService.get());
    },
    filter: () =>
        uiService.render(dataService.filter($("search").value, $("filter").value, $("sort").value)),
    validate: () => {
        for (const input of $("studentForm").querySelectorAll("input")) {
            if (!input.value.trim()) return uiService.showError("Vui lòng không bỏ trống"), false;
            if (input.type === "number" && (+input.value < 0 || +input.value > 10))
                return (
                    uiService.showError(
                        +input.value > 10
                            ? "Điểm nhập vào không quá 10"
                            : "Điểm nhập vào không dưới 0"
                    ),
                    false
                );
        }
        return true;
    },
    init: () => {
        $("studentForm").onsubmit = (e) => {
            e.preventDefault();
            if (!uiService.validate()) return;
            const student = uiService.getForm();
            uiService.state.isEditing
                ? dataService.update(uiService.state.editId, student)
                : dataService.add(student);
            uiService.render(dataService.get());
            uiService.reset();
        };
        $("resetBtn").onclick = uiService.reset;
        ["search", "filter", "sort"].forEach((id) =>
            $(id).addEventListener(id === "search" ? "input" : "change", uiService.filter)
        );
        uiService.render(dataService.get());
    },
};
uiService.init();