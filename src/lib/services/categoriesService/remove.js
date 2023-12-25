import { api } from "../../Api"

export async function remove(categoryId, params) {
    const { data } = await api.delete(`/categories/${categoryId}`, params);
  
    return data;
}