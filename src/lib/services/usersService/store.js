import { api } from "../../Api";

export async function store(params) {
    const data = await api.post("/auth/signup", params);

    return data;
}