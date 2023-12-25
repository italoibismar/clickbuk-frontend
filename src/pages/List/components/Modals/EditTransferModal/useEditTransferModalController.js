import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useWallets } from "../../../../../lib/hooks/useWallets";
import { useMutation, useQueryClient } from "react-query";
import { transfersService } from "../../../../../lib/services/transferService";
import { currencyStringToNumber } from "../../../../../lib/Utils";
import { toast } from "react-toastify";
import { useState } from "react";

const schema = z.object({
    value: z.union([
        z.string().nonempty('Informe o valor'),
        z.number(),
    ]),
    name: z.string().nonempty("Informe o nome"),
    date: z.date(),
    accountId: z.string().nonempty("Informe a conta de origem"),
    accountTransferId: z.string().nonempty("Informe a conta de destino")
});

export function useEditTransferModalController(transaction, onClose) {
    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            value: transaction?.value,
            name: transaction?.name,
            date: transaction?.data,
            accountId: transaction.type === "EXPENSE" ? transaction?.wallet_id : transaction?.transfer_wallet_id,
            accountTransferId: transaction.type === "EXPENSE" ? transaction?.transfer_wallet_id : transaction?.wallet_id
        }
    });

    const { id } = JSON.parse(localStorage.getItem("user"));
    const queryClient = useQueryClient();
    const { accounts } = useWallets(id);

    const {
        isLoading,
        mutateAsync: updateTransfer
    } = useMutation(transfersService.update);

    const {
        isLoading: isLoadingDelete,
        mutateAsync: removeTransfer,
    } = useMutation(transfersService.remove);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleSubmit = hookFormSubmit(async data => {
        try {
            await updateTransfer({
                id:  transaction?.transfer_id,
                name: data.name,
                value: currencyStringToNumber(data.value),
                date: data.date.toISOString(),
                wallet_id: data.accountId,
                transfer_wallet_id: data.accountTransferId
            })
            queryClient.invalidateQueries({
                queryKey: ['transactions']
              });
            queryClient.invalidateQueries({
                queryKey: ['wallets']
            });
            toast.success("Transferência atualizada com sucesso!");
            onClose();
        } catch (error) {
            if(error.response) {
                toast.error(error.response.data.error, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error("Erro ao atualizar a transferência!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                
            }
        }
    });

    async function handleDeleteTransaction() {
        try {
            await removeTransfer(transaction.transfer_id);
            queryClient.invalidateQueries({
                queryKey: ['transactions']
            });
            queryClient.invalidateQueries({
                queryKey: ['wallets']
            });
            toast.success("A transferência foi deletada com sucesso!");
            handleCloseDeleteModal();
            onClose();
        } catch {
            toast.error("Erro ao deletar a receita!")
        }
    }

    function handleOpenDeleteModal() {
        setIsDeleteModalOpen(true)
    }

    function handleCloseDeleteModal() {
        setIsDeleteModalOpen(false)
    }

    return {
        control,
        errors,
        accounts,
        isLoading,
        handleSubmit,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        handleDeleteTransaction,
        isDeleteModalOpen,
        isLoadingDelete
    }
}