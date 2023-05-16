import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { getHorarios } from '../../services/api';
import './schedule.css';
import { useEffect } from 'react';
import { diaUtil } from '../../resources/schedule';
import { sabado } from '../../resources/schedule';
import { domingo } from '../../resources/schedule';
import { useBusContext } from '../../context/BusContext';

export default function BusSchedule() {
  const { isLoggedIn } = useAuthContext();
  const history = useNavigate();
  const { bus } = useBusContext();

  useEffect(() => {
    if (!isLoggedIn) {
      history('/');
    }
  }, [isLoggedIn, history]);

  const diasDaSemana = [
    { nome: 'Segunda a sexta', horarios: diaUtil },
    { nome: 'Sábado', horarios: sabado },
    { nome: 'Domingo', horarios: domingo },
  ];

  return (
    <div className="schedule-container">
      <h1>{bus}</h1>
      {diasDaSemana.map((dia) => (
        <div className="schedule-week" key={dia.nome}>
          <div className="day">
            <p>{dia.nome}</p>
          </div>
          <div className="sentido">
            <p>Centro - Bairro</p>
          </div>
          <div className="CB">
            {dia.horarios.map((item, index) => (
              <div className="horario1" key={`CB-${index}`}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="sentido">
            <p>Bairro - Centro</p>
          </div>
          <div className="BC">
            {dia.horarios.map((item, index) => (
              <div className="horario2" key={`BC-${index}`}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
