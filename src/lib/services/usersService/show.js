import { api } from "../../Api"

export async function show(id) {
    const { data } = await api.get(`/users/${id}`);
  
    return data;
}