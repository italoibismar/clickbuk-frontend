import { z } from "zod";
import { useLayout } from "../../../Layout/LayoutContext/useLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "react-query";
import { walletsService } from "../../../../lib/services/walletsService";
import { currencyStringToNumber } from "../../../../lib/Utils";
import { toast } from "react-toastify";

const schema = z.object({
    initialAmount: z.string().nonempty('Saldo inicial é obrigatório'),
    name: z.string().nonempty("Informe o nome"),
    type: z.string().nonempty("Informe o tipo"),
    color: z.string().nonempty("Informe a cor")
});

export function useNewAccountModalController() {
    const {
        openNewAccountModal,
        closeNewAccountModal,
        isNewAccountModalOpen
    } = useLayout();

    const {
        register,
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control,
        reset
    } = useForm({
        resolver: zodResolver(schema)
    });

    const queryClient = useQueryClient()

    const { isLoading, mutateAsync } = useMutation(walletsService.create);

    const handleSubmit = hookFormSubmit( async data => {
        const { id } = JSON.parse(localStorage.getItem("user"));

        try {
            await mutateAsync({
                name: data.name,
                user_id: id,
                color: data.color,
                initial_amount: currencyStringToNumber(data.initialAmount),
                type: data.type
            });
            queryClient.invalidateQueries({
                queryKey: ["wallets"]
            });
            toast.success('Conta cadastrada com sucesso!');
            closeNewAccountModal()
            reset();
        } catch {
            toast.error('Erro ao cadastrar a conta!');
        }
    } )

    return {
        openNewAccountModal,
        closeNewAccountModal,
        isNewAccountModalOpen ,
        register,
        errors,
        control,
        isLoading,
        handleSubmit,
        reset
    }
}