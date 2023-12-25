import { api } from "../../Api";

export async function reset(params) {
    const data = await api.post("/auth/reset", params);

    return data;
}