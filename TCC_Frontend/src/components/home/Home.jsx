import React, { useEffect } from 'react'
import './home.css'
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { busLine } from '../../resources/bus';
import { useBusContext } from '../../context/BusContext';

export default function Home() {

    const { isLoggedIn } = useAuthContext();
    const history = useNavigate();
    const { bus, setBus } = useBusContext();

    const goToSchedule = () => {
        history('/schedule');
    }

    const handleClick = (e) => {
        if (e.key === 'Enter') {
            goToSchedule();
        }
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
                <input type='text' className='input-search' placeholder='Digite um ônibus' 
                onChange={(e) => {setBus(e.target.value)}}
                onKeyDown={(e) => {() => handleClick(e)}}
                ></input>
            </div>
            <div className='card-container'>
                {busLine.map((bus) => (
                    <div className='card-horario' onClick={goToSchedule}>
                        <div className='color-icon'></div>
                        <p className='linha'>{bus.linha}</p>
                    </div>
                ))}
            </div>
        </>
    )
}