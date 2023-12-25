import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { usersService } from "../../lib/services/usersService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    email: z.string().nonempty("Informe o e-mail").email("Insira um e-mail válido"),
    password: z.string().nonempty("Informe a senha").min(6, "A senha deve ter no mínimo 6 caracteres").max(32, "A senha deve ter no máximo 32 caracteres"),
    confirmPassword: z.string().nonempty("Informe a senha")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"]
});

export function useResetController(token){
    const navigate = useNavigate()
    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: zodResolver(schema)
    });

    const { isLoading, mutateAsync } = useMutation(usersService.reset);

    const handleSubmit = hookFormSubmit(async data => {
        try {
            await mutateAsync({
                email: data.email,
                token,
                password: data.confirmPassword
            });

            toast.success("Senha alterada com sucesso.", {
                position: toast.POSITION.TOP_RIGHT
            });

            navigate("/acesso");
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error("Tente novamente mais tarde.", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    });

    return {
        control,
        handleSubmit,
        errors,
        isLoading

    }
}