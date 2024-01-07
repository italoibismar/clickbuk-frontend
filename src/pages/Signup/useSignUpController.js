import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { usersService } from "../../lib/services/usersService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    name: z.string().nonempty("Informe o nome"),
    email: z.string().nonempty("Informe o e-mail").email("Insira um e-mail válido"),
    password: z.string().nonempty("Informe a senha").min(6, "A senha deve ter no mínimo 6 caracteres").max(32, "A senha deve ter no máximo 32 caracteres"),
    confirmPassword: z.string().nonempty("Confirmação de senha é obrigatório")

}).refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"]
});

export function useSignUpController(){
    const navigate = useNavigate();

    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: zodResolver(schema)
    });

    const { isLoading, mutateAsync } = useMutation(usersService.store);

    const handleSubmit = hookFormSubmit(async data => {
        try {
            await mutateAsync({
                name: data.name,
                email: data.email,
                password: data.confirmPassword
            });
            toast.success("Confirme seu cadastro!", {
                position: toast.POSITION.TOP_RIGHT
            });

            navigate("/confirmar-cadastro");
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error("Não foi possível cadastrar.", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    });

    return {
        control,
        errors,
        handleSubmit,
        isLoading
    }
}