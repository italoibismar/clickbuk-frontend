import { api } from "../../Api"

export async function remove(id) {
    const { data } = await api.delete(`/wallets/${id}`);
  
    return data;
}