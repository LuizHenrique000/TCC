import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';

export default function Home() {

    // const [bus, setBus] = useState([]);

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

    // useEffect(() => {
    //     const fetchBus = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8080/api/v1/horario');
    //             setBus(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchBus();
    // }, []);

    return (
        <>
            <div className='search-box'>
                <BsSearch className='icon-search' />
                <input type='text' className='input-search' placeholder='Digite um ônibus'></input>
            </div>
            <div className='card-container'>
                {bus.map((bus) => (
                    <div className='card-horario'>
                    <div className='color-icon'></div>    
                    <p className='linha'>{bus.linha}</p>
                    </div>
                ))}
            </div>
        </>
    )
}