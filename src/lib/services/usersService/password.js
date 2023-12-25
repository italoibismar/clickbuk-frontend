import { api } from "../../Api";

export async function password(params) {
    const data = await api.put("/update-password", params);

    return data;
}