import { z } from "zod";
import { useLayout } from "../../../../../components/Layout/LayoutContext/useLayout";
import { useWallets } from "../../../../../lib/hooks/useWallets";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "react-query";
import { transfersService } from "../../../../../lib/services/transferService";
import { currencyStringToNumber } from "../../../../../lib/Utils";
import { toast } from "react-toastify";

const schema = z.object({
    value: z.string().nonempty("Informe o valor"),
    name: z.string().nonempty("Informe o nome"),
    date: z.date(),
    accountId: z.string().nonempty("Informe a conta de origem"),
    accountTransferId: z.string().nonempty("Informe a conta de destino")
});

export function useNewTransfertionModalController() {
    const {
        isNewTransferModalOpen,
        closeNewTransferModal
    } = useLayout();

    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "Transferência"
        }
    })

    const { id } = JSON.parse(localStorage.getItem("user"));
    const queryClient = useQueryClient();
    const { accounts } = useWallets(id);

    const {
        isLoading,
        mutateAsync
    } = useMutation(transfersService.create);

    const handleSubmit = hookFormSubmit(async data => {
        try {
            await mutateAsync({
                name: data.name,
                value: currencyStringToNumber(data.value),
                date: data.date.toISOString(),
                user_id: id,
                wallet_id: data.accountId,
                transfer_wallet_id: data.accountTransferId

            });
            queryClient.invalidateQueries({
                queryKey: ['transactions']
              });
            queryClient.invalidateQueries({
                queryKey: ['wallets']
            });
            toast.success("Transferência realizada com sucesso!");
            closeNewTransferModal();
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.error, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error("Erro ao cadastrar a transferência!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                
            }
        }
    })

    return {
        isNewTransferModalOpen,
        closeNewTransferModal,
        accounts,
        control,
        errors,
        isLoading,
        handleSubmit
    }
}