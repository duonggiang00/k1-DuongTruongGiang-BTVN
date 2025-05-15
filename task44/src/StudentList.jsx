import React from 'react'
import { students } from './DataStudent'
import Student from './Student'
import { useState } from 'react'


function StudentList({students}) {
    const [search, setSearch] = useState('')
    const [rank,setRank] = useState('')
    const [sort,setSort] = useState('')
    const handleSearch = (e) => {
        setSearch(e.target.value.trim().toLowerCase())
    }
    const handleSort = (e) =>{
        setSort(e.target.value)
    }
    const handleRank = (e)=>{
        setRank(e.target.value)
    }
    const newStudents=students.map(item=>{
        const avg=((item.math + item.literature + item.english)/3).toFixed(2)
        const rank = avg >= 8? 'good' : avg >=6 ?'medium' : 'low'
        return {...item, avg:avg,rank:rank}
    })
    // console.log(newStudents)
  return (
    
    <div id="studentList">
        <input type="text" id='search' name='search' onInput={handleSearch} />
        <div id="filterSection">
            <select name="sort" id="sort" onChange={handleSort}>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
                <option value="">default</option>
            </select>
            <select name="rank" id="rank" onChange={handleRank}>
                <option value="">default</option>
                <option value="good">good</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
        </div>
         <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>math</th>
                <th>literature</th>
                <th>english</th>
                <th>avg</th>
                <th>rank</th>
            </tr>
        </thead>
        <tbody>
            {
                newStudents
                .filter(item=> search===''? item : item.name.toLowerCase().includes(search) )
                .sort((a,b) => sort==='asc' ? a.avg-b.avg: sort === 'desc' ? b.avg-a.avg : newStudents )
                .filter(item=> rank===''? item : item.rank === rank)
                .map(item=>
                    <Student student={item}/>
                    )
            }
        </tbody>
    </table>
    </div>
   
  )
}

export default StudentList