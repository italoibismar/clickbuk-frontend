import { useLayout } from "../../../Layout/LayoutContext/useLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "react-query";
import { walletsService } from "../../../../lib/services/walletsService";
import { currencyStringToNumber } from "../../../../lib/Utils";
import { toast } from "react-toastify";
import { useState } from "react";



const schema = z.object({
    initialAmount: z.union([
        z.string().nonempty('Saldo inicial é obrigatório'),
        z.number()
    ]),
    name: z.string().nonempty("Informe o nome"),
    type: z.string().nonempty("Informe o tipo"),
    color: z.string().nonempty("Informe a cor")
});

export function useEditAccountModal() {
    const {
        isEditAccountModalOpen,
        closeEditAccountModal,
        accountBeingEdited
    } = useLayout();

    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            initialAmount: Number(accountBeingEdited?.initial_amount),
            name: accountBeingEdited?.name,
            type: accountBeingEdited?.type,
            color: accountBeingEdited?.color
        }
    });

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const queryClient = useQueryClient();

    const {
        mutateAsync: updateAccount,
        isLoading
    } = useMutation(walletsService.update);

    const {
        mutateAsync: removeWallet,
        isLoading: isLoadingDelete
    } = useMutation(walletsService.remove);

    const handleSubmit = hookFormSubmit(async (data) => {
        try {
            await updateAccount({
                ...data,
                initial_amount: currencyStringToNumber(data.initialAmount),
                id: accountBeingEdited.id
            });

            queryClient.invalidateQueries({
                queryKey: ["wallets"]
            });

            toast.success("A conta foi editada com sucesso!");
            closeEditAccountModal();
        } catch {
            toast.error("Erro ao salvar as alterações!");
        }
    });

    function handleOpenDeleteModal() {
        setIsDeleteModalOpen(true)
    }

    function handleCloseDeleteModal() {
        setIsDeleteModalOpen(false)
    }

    async function handleDeleteAccount() {
        try {
            await removeWallet(accountBeingEdited.id)
            queryClient.invalidateQueries({
                queryKey: ["wallets"]
            });
            queryClient.invalidateQueries({
                queryKey: ["transactions"]
            });
            toast.success("A conta foi deletada com sucesso!");
            closeEditAccountModal();
        } catch {
            toast.error('Erro ao deletar a conta!');
        }
    }
    
    return {
        isEditAccountModalOpen,
        closeEditAccountModal,
        accountBeingEdited,
        control,
        errors,
        handleSubmit,
        isLoading,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        isDeleteModalOpen,
        handleDeleteAccount,
        isLoadingDelete
    }
}