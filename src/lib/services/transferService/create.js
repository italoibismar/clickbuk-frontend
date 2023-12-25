import { api } from "../../Api";

export async function create(params) {
    const data = await api.post('/transfers', params);
  
    return data;
}