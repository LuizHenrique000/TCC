import { React, useState } from 'react';
import { getHorarios } from './services/api';
import './app.css';

export default function App() {

  const [horarios, setHorarios] = useState([]);
  const [nome, setNome] = useState('');

  getHorarios().then((response) => {
    setHorarios(response.data);
    setNome(response.data[0].linha);
  });

  return (
    <div className='container'>
      <div className='header'>
        <h1>{nome.toUpperCase()}</h1>
      </div>
      <div className='card-dia'>
        <p>Segunda a Sexta</p>
        <p>Sábado</p>
        <p>Domingo</p>
      </div>
      <div className='sentido'>
          <p>Bairro</p>
          <p>Centro</p>
          <p>Bairro</p>
          <p>Centro</p>
          <p>Bairro</p>
          <p>Centro</p>
        </div>
      {horarios.map((horario) => (
        <div className='card-horario'>
          <div key={horario.id}>
            <p>{horario.horario_largada}</p>
          </div>
        </div>
      ))}
    </div>
  );
}