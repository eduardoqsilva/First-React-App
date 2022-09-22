import React, { useState, useEffect } from 'react';
import './style.css'
import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents(prevState => [...prevState, newStudent])
  }

  useEffect(() => {
    //corpo do useEffect
    console.log("useEffect foi chamado!")
  }, [students])

  return (
    <div className='container'>
      
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Eduardo</strong>
          <img src="https://github.com/eduardoqsilva.png" alt="foto de perfil" />
        </div>
      </header>
      
      
      <input
       type="text" 
       placeholder="Digite seu nome..." 
       onChange={e => setStudentName(e.target.value)}
       />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      
      {
        students.map(student => <Card 
          key={student.time}
          name={student.name}
          time={student.time}
        />)
      }
      
    </div>
  )
}

