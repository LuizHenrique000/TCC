import axios from 'axios';

export const getHorarios = async () => {
    return axios.get("http://localhost:8080/api/v1/horario")
}