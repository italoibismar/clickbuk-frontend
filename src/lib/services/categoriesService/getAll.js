import { api } from "../../Api"

export async function getAll(id) {
    const { data } = await api.get(`/categories/${id}`);
  
    return data;
}