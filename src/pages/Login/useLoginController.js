import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const schema = z.object({
    email: z.string().nonempty("Informe o e-mail").email("Insira um e-mail válido"),
    password: z.string().nonempty("Informe a senha")
});

export function useLoginController(){
    const { login, auth, isLoading } = useContext(AuthContext);

    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: zodResolver(schema),
    })

    const handleSubmit = hookFormSubmit(async data => {
        const {email, password} = data;
        login(email, password);
    })

    return {
        auth,
        handleSubmit,
        control,
        errors,
        isLoading
    }
}