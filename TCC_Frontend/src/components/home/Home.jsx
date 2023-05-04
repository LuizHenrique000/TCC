import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import BsSearch from 'react-icons/bs';

export default function Home() {

    const [horarios, setHorarios] = useState([]);

    const getHorarios = async () => {
        await axios.get('https://gorest.co.in/public/v2/users').then((response) => {
            setHorarios(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getHorarios();
    }, [])

    return (
        <>
            <div className='search-box'>
                {/* <BsSearch className='search-icon'/> */}
                <input type='text' className='search-bar' placeholder='Digite um ônibus'></input>
            </div>
        </>
    )
}