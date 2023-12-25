import { api } from "../../Api";

export async function forgot(params) {
    const data = await api.post("/auth/forgot", params);

    return data;
}