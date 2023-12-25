import { api } from "../../Api"

export async function getAll(id) {
    const { data } = await api.get(`/transactions/${id}`);
  
    return data;
}