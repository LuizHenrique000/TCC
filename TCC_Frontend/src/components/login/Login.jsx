import axios from 'axios';
import '../login/style.css'
import React, { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/user', {
                params: {
                    email: email,
                    password: senha,
                },
            });

            if (response.data) {
                alert('Login realizado com sucesso!');
                <link to="/home" />
            } else {
                alert('Email ou senha inválidos!');
            }
        } catch (error) {
            console.log(error);
            alert('Não foi possível fazer o login.');
        }
    };

    return (
        <div className='container'>
            <div className='card_login'>
                <div className='email'>
                    <input
                        className='input_email'
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className='senha'>
                    <input
                        className='input_senha'
                        type='password'
                        placeholder='Senha'
                        value={senha}
                        onChange={(e) => { setSenha(e.target.value) }} />
                </div>
                <div className="cadastro">
                    <Link to="/cadastro">Novo por aqui?</Link>
                </div>
                <div className='login'>
                    <button
                        className='botao_login'
                        onClick={() => logar()}>Login
                    </button>
                </div>
            </div>
        </div>
    )
}
