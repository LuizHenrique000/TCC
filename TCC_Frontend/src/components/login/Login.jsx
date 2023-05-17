import axios from 'axios';
import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';

export default function Login() {

    const { setIsLoggedIn } = useAuthContext();

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = async () => {
        if (!validateUser()) {
          return toast.error('Preencha todos os campos.', { duration: 2000 });
        } else {
            try {
                const { data } = await axios.get(`https://tcc-backend.herokuapp.com/api/v1/user?email=${email}&password=${senha}`);
                if (!validateResponse(data)) {
                    return toast.error('Usuário não encontrado.', { duration: 2000 });
                } else {
                    setIsLoggedIn(true);
                    toast.success('Login realizado com sucesso.', { duration: 2000 });
                    setTimeout(() => {
                        history('/home');
                    }, 2000);
                }
            } catch (error) {
               return toast.error('Não foi possível fazer o login.', { duration: 2000 });
            }
        };
    };

    const validateUser = () => {
        if (email === '' || senha === '') {
            return false
        }
        return true
    }

    const validateResponse = (data) => {
        if (data.length === 0) {
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
