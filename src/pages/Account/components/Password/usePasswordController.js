import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { usersService } from "../../../../lib/services/usersService";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    password: z.string().nonempty("Informe a senha"),
    newPassword: z.string().nonempty("Informe a senha").min(6, "A senha deve ter no mínimo 6 caracteres").max(32, "A senha deve ter no máximo 32 caracteres"),
    confirmPassword: z.string().nonempty("Confirmação de senha é obrigatório")
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"]
});

export function usePasswordController(){
    var user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: zodResolver(schema)
    });

    const { isLoading, mutateAsync } = useMutation(usersService.password);

    const handleSubmit = hookFormSubmit(async data => {
        try {
            await mutateAsync({
                id: user?.id,
                password: data.password,
                newPassword: data.confirmPassword
            });
            toast.success("Senha alterada com sucesso.", {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate(0);
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
        errors,
        handleSubmit,
        isLoading
    }
}