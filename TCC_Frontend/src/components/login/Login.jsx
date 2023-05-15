import axios from 'axios';
import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';

export default function Login() {

    const { isLoggedIn, setIsLoggedIn } = useAuthContext();

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const showToast = (status) => {
        if (!!status) {
            toast.success('Login realizado com sucesso!', { duration: 2000 });
        } else {
            toast.error('Não foi possível fazer o login.', { duration: 2000 })
        }
    };

    const logar = async () => {
        if (!validateUser()) {
            return toast.error('Preencha todos os campos.', { duration: 2000 })
        } else {
            try {
                const { data } = await toast.promise(
                    axios.get(`http://localhost:8080/api/v1/user?email=${email}&password=${senha}`),
                    {
                        pending: 'Aguarde enquanto estamos realizando o login...',
                        error: 'Não foi possível fazer o login.',
                        success: 'Login realizado com sucesso!',
                        duration: 2000
                    }
                );

                if (data) {
                    setIsLoggedIn(true);
                    setTimeout(() => {
                        history('/home');
                    }, 2000);
                } else {
                    showToast(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
    };

    const validateUser = () => {
        if (email === '' || senha === '') {
            return false
        }
        return true
    }

    return (
        <div className='container'>
            <Toaster />
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
                    <Link to="/cadastro" className='link'>Cadastre-se</Link>
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
