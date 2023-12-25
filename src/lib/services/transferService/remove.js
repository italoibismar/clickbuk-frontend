import { api } from "../../Api"

export async function remove(transferId) {
    const { data } = await api.delete(`/transfers/${transferId}`);
  
    return data;
}