import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { usersService } from "../../lib/services/usersService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    email: z.string().nonempty("Informe o e-mail").email("Insira um e-mail válido")
});

export function useForgotController(){
    const navigate = useNavigate()
    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: zodResolver(schema)
    });

    const { isLoading, mutateAsync } = useMutation(usersService.forgot);

    const handleSubmit = hookFormSubmit(async data => {
        try {
            await mutateAsync({
                email: data.email
            });

            toast.success("Quase lá, dê uma checada no seu e-mail :)", {
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