
import axios from 'axios';




const API_URL="http://localhost:4000/"



const login = async (password: string): Promise<boolean> => {
    const data = {
      "password": password,
    }
    const response = await axios.post(`${API_URL}players/login`, data);
    return response.data;
}


export default login;