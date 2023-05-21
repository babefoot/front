
import axios from 'axios';




const API_URL="http://localhost:4000/"



const login = async (password: string): Promise<boolean> => {
    const data = {
      "password": password,
    }
    const response = await axios.post(`${API_URL}players/login`, data);
    return response.data;
}


const getPlayers = async (): Promise<boolean> => {
  const response = await axios.get(`${API_URL}players`);
  return response.data;
}

const top10 = async (): Promise<boolean> => {
  const response = await axios.get(`${API_URL}stats/top10`);
  return response.data;
}


const playerStat = async (id: string): Promise<boolean> => {
  const response = await axios.get(`${API_URL}stats/playerstat/${id}`);
  return response.data;
}

export { login, getPlayers, top10, playerStat};