import { api } from "../../Api";

export async function create(params) {
    const data = await api.post('/categories', params);
  
    return data;
}