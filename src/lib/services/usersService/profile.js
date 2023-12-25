import { api } from "../../Api";

export async function profile(params) {
    const data = await api.put("/update-profile", params);

    return data;
}