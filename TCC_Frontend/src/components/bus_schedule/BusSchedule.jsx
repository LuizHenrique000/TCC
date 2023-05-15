import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { getHorarios } from '../../services/api';
import './schedule.css';
import { useEffect } from 'react';

export default function BusSchedule() {

    const { isLoggedIn, setIsLoggedIn } = useAuthContext();
    const history = useNavigate();

    const diaUtil = ['07:30', '08:30', '09:15', '10:00', '10:45', '11:00', '12:45', '13:15', '13:45', '14:15', '14:45', '15:00', '15:45', '16:15', '17:00', '17:30', '19:15', '19:45', '21:00', '21:30']

    const sabado = ['06:30', '06:45', '07:00', '07:15', '07:30', '08:00', '08:30', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']

    const domingo = ['07:15', '07:45', '10:15', '10:45', '12:00', '15:00', '15:30', '18:30', '19:30', '21:15']


    useEffect(() => {
        if (!isLoggedIn) {
            history('/');
        }
    }, [isLoggedIn, history]);

    return (
        <div className='schedule-container'>
            <div className='schedule-week'>
                <div className='day'>
                    <p>Segunda à sexta</p>
                </div>
                <div className='sentido'>
                    <p>Centro - Bairro</p>
                </div>
                <div className='CB'>
                    {diaUtil.map((item) => {
                        return (
                            <div className={`horario1`}>
                                <p>{item}</p>
                            </div>
                        )}
                    )}
                </div>
                <div className='sentido'>
                    <p>Bairro - Centro</p>
                </div>
                <div className='BC'>
                    {diaUtil.map((item) => {
                        return (
                            <div className='horario2'>
                                <p>{item}</p>
                            </div>
                        )}
                    )}
                </div>
            </div>
            <div className='schedule-saturday'>
                <div className='day'>
                    <p>Sábado</p>
                </div>
                <div className='sentido'>
                    <p>Centro - Bairro</p>
                </div>
                <div className='CB'>
                    {sabado.map((item) => {
                        return (
                            <div className={`horario1`}>
                                <p>{item}</p>
                            </div>
                        )}
                    )}
                </div>
                <div className='sentido'>
                    <p>Bairro - Centro</p>
                </div>
                <div className='BC'>
                    {sabado.map((item) => {
                        return (
                            <div className='horario2'>
                                <p>{item}</p>
                            </div>
                        )}
                    )}
                </div>
            </div>
            <div className='schedule-sunday'>
                <div className='day'>
                    <p>Domingo</p>
                </div>
                <div className='sentido'>
                    <p>Centro - Bairro</p>
                </div>
                <div className='CB'>
                    {domingo.map((item) => {
                        return (
                            <div className={`horario1`}>
                                <p>{item}</p>
                            </div>
                        )}
                    )}
                </div>
                <div className='sentido'>
                    <p>Bairro - Centro</p>
                </div>
                <div className='BC'>
                    {domingo.map((item) => {
                        return (
                            <div className='horario2'>
                                <p>{item}</p>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    )

}