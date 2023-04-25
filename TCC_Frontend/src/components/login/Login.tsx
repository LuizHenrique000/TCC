import '../login/login.css';
import React from 'react';

export default function Login() {
    return (
        <div className='container'>
            <div className='card_login'>
                <div>
                    <input className='input_email' type='text' placeholder='Email' />
                </div>
                <div>
                    <input className='input_senha' type='password' placeholder='Senha' />
                </div>
                <div>
                    <button className='botao_login'>Login</button>
                </div>
            </div>
        </div>
    )
}