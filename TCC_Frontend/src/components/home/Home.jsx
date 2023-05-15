import React, { useEffect } from 'react'
import './home.css'
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export default function Home() {

    const { isLoggedIn, setIsLoggedIn } = useAuthContext();

    const history = useNavigate();

    const bus = [
        {
            id: 1,
            linha: 'T12 - Restinga'
        },
        {
            id: 2,
            linha: 'T13 - Campus'
        },
        {
            id: 3,
            linha: 'T11 - Aeroporto'
        },
        {
            id: 1,
            linha: 'T12 - Restinga'
        },
        {
            id: 2,
            linha: 'T13 - Campus'
        },
        {
            id: 3,
            linha: 'T11 - Aeroporto'
        }
    ]

    const goToSchedule = () => {
        history('/schedule');
    }

    useEffect(() => {
        if (!isLoggedIn) {
            history('/');
        }
    }, [isLoggedIn, history]);

    return (
        <>
            <div className='search-box'>
                <BsSearch className='icon-search' />
                <input type='text' className='input-search' placeholder='Digite um ônibus'></input>
            </div>
            <div className='card-container'>
                {bus.map((bus) => (
                    <div className='card-horario' onClick={goToSchedule}>
                        <div className='color-icon'></div>
                        <p className='linha'>{bus.linha}</p>
                    </div>
                ))}
            </div>
        </>
    )
}