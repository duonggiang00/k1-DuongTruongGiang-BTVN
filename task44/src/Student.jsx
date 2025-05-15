import React from 'react'

const Student = ({student}) => {
    
    
  return (
    <tr>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.math}</td>
        <td>{student.literature}</td>
        <td>{student.english}</td>
        <td>{student.avg}</td>
        <td>{student.rank}</td>
    </tr>
    
  )
}

export default Student