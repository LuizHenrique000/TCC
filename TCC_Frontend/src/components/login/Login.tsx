import axios from 'axios';
import '../login/style.css'
import React, { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userReq, setUserReq] = useState({});
    const [userRes, setUserRes] = useState({});

    const logar = () => {
        setUserReq({ email: email, password: senha })
    }

    return (
        <div className='container'>
            <div className='card_login'>
                <div className='email'>
                    <input className='input_email' type='text' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}/>
                </div>
                <div className='senha'>
                    <input className='input_senha' type='password' placeholder='Senha' onChange={(e) => { setSenha(e.target.value) }}/>
                </div>
                        <button className="cadastro">Novo por aqui?</button>
                <div className='login'>
                    <button className='botao_login' onChange={() => logar()}>Login</button>
                </div>
            </div>
        </div>
    )
}
