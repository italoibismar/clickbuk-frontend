import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { usersService } from "../../../../lib/services/usersService";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    name: z.string().nonempty("Informe o nome"),
    email: z.string().nonempty("Informe o e-mail").email("Insira um e-mail válido")
})

export function useProfileController() {
    var user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: user?.name,
            email: user?.email
        }
    });

    const {
        isLoading,
        mutateAsync: updateProfile
    } = useMutation(usersService.profile);

    const handleSubmit = hookFormSubmit(async data => {
        var { id } = JSON.parse(localStorage.getItem("user"));
        try {
            await updateProfile({
                id: id,
                name: data.name,
                email: data.email
            });
            var user = {id: id, name: data.name, email: data.email};
            localStorage.setItem("user", JSON.stringify(user));
            navigate(0);

        } catch (error) {
            toast.error("Erro ao atualizar perfil!");
        }
    })

    return {
        control,
        errors,
        handleSubmit,
        isLoading
    }
}