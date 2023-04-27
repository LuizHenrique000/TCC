import React, { useState } from "react";
import './style.css';
import axios from "axios";

export default function NewProfile() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const saveUser = async () => {
        if (validateUser() === false) return
        const user = { name: nome, email: email, password: senha }
        await axios.post("http://localhost:8080/api/v1/user", user)
            .then(() => {
                alert('Usuário cadastrado com sucesso!')
                window.location.href = '/login'
            })
    }

    const validateUser = () => {
        if (nome === '' || email === '' || senha === '') {
            alert('Preencha todos os campos')
            return false
        }
    }

    return (
        <div className='container'>
            <div className='card_nome'>
                <div className='nome'>
                    <input className='input_nome' type='text' placeholder='Nome' onChange={(e) => { setNome(e.target.value) }} />
                </div>
                <div className='email'>
                    <input className='input_email' type='email' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='senha'>
                    <input className='input_senha' type='password' placeholder='Senha' onChange={(e) => { setSenha(e.target.value) }} />
                </div>
                <div className='salvar'>
                    <button className='botao_salvar' onClick={() => saveUser()}>Salvar</button>
                </div>
            </div>
        </div>
    )
}