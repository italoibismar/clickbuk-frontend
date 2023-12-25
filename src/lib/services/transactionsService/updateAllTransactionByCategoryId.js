import { api } from "../../Api"

export async function updateAllTransactionByCategoryId(params) {
    const { data } = await api.put("/transactions/update-categories", params);
  
    return data;
}