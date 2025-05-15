import './App.css'
import { students } from './DataStudent.jsx'
import StudentList from './StudentList.jsx'

function App() {
  console.log(students)
  return (
    <>
    <StudentList students={students} />
    </>
  )
}

export default App
