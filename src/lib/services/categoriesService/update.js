import { api } from "../../Api"

export async function update(params) {
    const { data } = await api.put("/categories", params);
  
    return data;
}