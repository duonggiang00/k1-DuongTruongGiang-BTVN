    const studentForm = document.getElementById("studentForm")
    const studentName = document.getElementById("studentName")
    const mathPoint = document.getElementById("mathPoint")
    const englishPoint = document.getElementById("englishPoint")
    const sciencePoint = document.getElementById("sciencePoint")
    const errorMessage = document.getElementById("errorMessage")
    const addBtn = document.getElementById("addBtn")
    const resetBtn = document.getElementById("resetBtn")
    const studentList = document.getElementById("studentList")
    

    const studentServices = {
        localStudents:JSON.parse(localStorage.getItem('students')||"[]"),
        getStudents(){
          return this.localStudents
        },
        saveStudents(save){
          let newSave = this.xinchao(save)
          newSave = this.averagePoint(newSave)
          localStorage.setItem('students',JSON.stringify(newSave))
          return this.localStudents = newSave
        },
        addStudent(newStudent){
          const students = this.localStudents;
          const updatedStudents = [...students,newStudent];
          this.saveStudents(updatedStudents);
          return updatedStudents;
        },
        editStudent(id,newStudent){
          const students = this.localStudents;
          const updatedStudents = students.map(item=>item.id === id ? {...item,...newStudent}:item)
          this.saveStudents(updatedStudents);
          return updatedStudents
        },
        removeStudent(id){
          const students = this.localStudents;
          const updatedStudents = students.filter(item=>item.id!==id)
          this.saveStudents(updatedStudents);
          return updatedStudents
        },
        xinchao(students){
          return students.map(item=> ({...item, ...{action:"xinchao"}}) )
        },
  
        averagePoint(students){
          const updatedStudents = students.map(item=>{
            let avg = ((item.mathPoint+item.sciencePoint+item.englishPoint)/3).toFixed(2)
            let rank
            if(avg>=8){return {...item,...{avgPoint:+avg, rankPoint:"good"}}}
            else if(avg<8&&avg>=6){return {...item,...{avgPoint:+avg, rankPoint:"medium"}}}
            else if(avg<6){return {...item,...{avgPoint:+avg, rankPoint:"low"}}}
          }
          )
          return updatedStudents
        },
        searchStudent(name){
          let searchName = name.toLowerCase().trim()
          return this.localStudents.filter(item=>item.name.toLowerCase().includes(searchName))
        },
        filterStudent(rank){
          if(rank){return this.localStudents.filter(item=>item.rankPoint==rank)
          }else return this.localStudents
        },
        sortStudentRank(type){
          switch(type){
            case 'asc':
              return this.localStudents.sort((a,b)=>a.avgPoint-b.avgPoint)
            case 'desc':
              return this.localStudents.sort((a,b)=>b.avgPoint-a.avgPoint)
            default:
              return this.localStudents
          }
        }
      }  

      let isEditing = false;
      let idEdit = null

      function renderList(students=studentServices.localStudents){
        studentList.innerHTML=""
        if(students.length === 0){
          studentList.innerHTML=`<th colspan=8>không có dữ liệu</td>`
        }
        students.forEach(item => {
          let trElement = document.createElement("tr")
          trElement.innerHTML=`
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.mathPoint}</td>
            <td>${item.englishPoint}</td>
            <td>${item.sciencePoint}</td>
            <td>${item.avgPoint}</td>
            <td>${item.rankPoint}</td>
            <td>
              <button onclick="editStudent('${item.id}')">update</button>
              <button onclick="removeStudent('${item.id}')">remove</button>
            </td>
          `
          studentList.appendChild(trElement)
        });
        resetForm()
      }  

      function addStudent(){
        const student={
          id:generateRandomId(4),
          name:studentName.value,
          mathPoint:+mathPoint.value,
          englishPoint:+englishPoint.value,
          sciencePoint:+sciencePoint.value,
        }
        if(!validation()){return} ;
        if(isEditing){
          studentServices.editStudent(idEdit,student)
        }else{
          studentServices.addStudent(student)
        }
        renderList()
      }
      
      function validation(){
        const inputs = studentForm.querySelectorAll('input')
        for(const item of inputs) {
          if(!item.value){
            handleErrorMessage("Vui lòng không bỏ trống")
            return false
          }
          if(item.type==='number'&& +item.value>10){
            handleErrorMessage("Điểm nhập vào không quá 10")
            return false
          }
        }
        return true
      }

      function resetForm(){
        studentForm.reset()
        isEditing = false;
        idEdit = null;
        errorMessage.style.display="none"
        addBtn.innerText='Add'
        studentName.readOnly=false
    }

       function editStudent(id){
        const student = studentServices.localStudents.find(item=>`${item.id}` === id)
        if(student){
         isEditing=true
         idEdit=student.id
         addBtn.innerText='Edit'
         studentName.value= student.name
         mathPoint.value = student.mathPoint
         englishPoint.value = student.englishPoint
         sciencePoint.value = student.sciencePoint
         studentName.readOnly=true
        }
       }

      function removeStudent(id){
        studentServices.removeStudent(id)
        renderList()
      }

      function sortStudent(type=document.getElementById('sort').value){
        renderList(studentServices.sortStudentRank(type))
      }

      function filterStudent(rank=document.getElementById('filter').value){
        renderList(studentServices.filterStudent(rank))
      }

      function searchStudent(name=document.getElementById("search").value){
        renderList(studentServices.searchStudent(name))
      }

      function generateRandomId(n,prefix = 'Student-'){
        const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890"
        let id = prefix;
        for(let i = 0; i<n;i++){
          id+=characters.charAt(Math.floor(Math.random()*characters.length))
        }
        return id
      }

      function handleErrorMessage(text){
        errorMessage.style.display="block";
        errorMessage.innerText=text
      }

      studentForm.addEventListener("submit",function(event){
        event.preventDefault()
        addStudent()
      })
  
      resetBtn.addEventListener("click",resetForm)

      renderList()