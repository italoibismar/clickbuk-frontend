import { api } from "../../Api";

export async function create(params) {
    const data = await api.post('/transactions', params);
  
    return data;
}