import React, { useState } from "react";
import './style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewProfile() {

    const history = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const saveUser = async () => {
        await axios.post('http://localhost:8080/api/v1/user', {
            name: nome,
            email: email,
            password: senha
        })
            .then(() => {
                alert('Usuário cadastrado com sucesso!')
                history('/')
            }).catch(() => {
                alert('Erro ao cadastrar usuário!')
            })
    }

    const validateUser = () => {
        if (nome === '' || email === '' || senha === '') {
            alert('Preencha todos os campos')
            return false
        }
    }

    // const validateIfUserExists = async () => {
    //     await axios.get(`http://localhost:8080/api/v1/user?`,
    //      { 
    //         params:
    //          { 
    //             email: email, 
    //             password: senha 
    //         } 
    //     }).then((response) => {
    //         if (response){
    //             alert('Usuário já cadastrado!')
    //             return false
    //         }
    //     })
    // }

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