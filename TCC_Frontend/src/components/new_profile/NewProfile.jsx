import React, { useState } from "react";
import './newProfile.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export default function NewProfile() {

    const history = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const saveUser = async () => {
        if (!validateUser()) {
            return toast.error('Preencha todos os campos.', { duration: 2000 })
        }
        if (await verifyIfUserAlreadyExists()) {
            return toast.error('Usuário já cadastrado.', { duration: 2000 })
        } else {
            try {
                await toast.promise(
                    axios.post('http://localhost:8080/api/v1/user', {
                        name: nome,
                        email: email,
                        password: senha
                    }),
                    {
                        pending: 'Aguarde enquanto estamos cadastrando o usuário...',
                        success: 'Usuário cadastrado com sucesso!',
                        error: 'Não foi possível cadastrar o usuário.',
                        duration: 2000
                    }
                );
                setTimeout(() => {
                    history('/');
                }, 2000);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const validateUser = () => {
        if (nome === '' || email === '' || senha === '') {
            return false
        }
        return true
    }

    const verifyIfUserAlreadyExists = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/user?email=${email}&password=${senha}`);
            if (data) {
                return true
            }
            return false
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <Toaster/>
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