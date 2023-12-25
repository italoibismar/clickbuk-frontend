import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useWallets } from "../../../../../lib/hooks/useWallets"; 
import { useCategories } from "../../../../../lib/hooks/useCategories";
import { currencyStringToNumber } from "../../../../../lib/Utils";
import { useMutation, useQueryClient } from "react-query";
import { transactionsService } from "../../../../../lib/services/transactionsService";
import { toast } from "react-toastify";
import { useState } from "react";

const schema = z.object({
    value: z.union([
        z.string().nonempty('Informe o valor'),
        z.number(),
    ]),
    name: z.string().nonempty('Informe o nome'),
    categoryId: z.string().nonempty('Informe a categoria'),
    accountId: z.string().nonempty('Informe a conta'),
    date: z.date()
})

export function useEditTransactionModalController(transaction, onClose) {
    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control,
        reset
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            accountId: transaction?.wallet_id,
            categoryId: transaction?.category_id,
            name: transaction?.name,
            value: transaction?.value,
            date: transaction ? new Date(transaction?.date) : new Date(),
        }
    });
    

    const user = JSON.parse(localStorage.getItem("user"));

    const queryClient = useQueryClient();
    const { accounts } = useWallets(user.id);
    const { categories } = useCategories(user.id);

    const {
        isLoading,
        mutateAsync: updateTransaction
    } = useMutation(transactionsService.update);

    const {
        isLoading: isLoadingDelete,
        mutateAsync: removeTransaction,
    } = useMutation(transactionsService.remove);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleSubmit = hookFormSubmit(async data => {
        try {
            await updateTransaction({
                name: data.name,
                id: transaction.id,
                category_id: data.categoryId,
                wallet_id: data.accountId,
                value: currencyStringToNumber(data.value),
                type: transaction.type,
                date: data.date.toISOString()
            });
            queryClient.invalidateQueries({
                queryKey: ['transactions']
              });
            queryClient.invalidateQueries({
                queryKey: ['wallets']
            });
            toast.success(
                transaction.type === 'EXPENSE' 
                ? 'Despesa editada com sucesso!'
                : 'Receita editada com sucesso!'
            );
            onClose();
        } catch {
            toast.error(
                transaction.type === 'EXPENSE'
                ? 'Erro ao salvar a despesa!'
                : 'Erro ao salvar a receita!'
            )            
        }
    });

    async function handleDeleteTransaction() {
        try {
          await removeTransaction(transaction.id)
    
          queryClient.invalidateQueries({
            queryKey: ['transactions']
          });
          queryClient.invalidateQueries({
            queryKey: ['wallets']
          });
    
          toast.success(
            transaction.type === 'EXPENSE'
              ? 'A despesa foi deletada com sucesso!'
              : 'A receita foi deletada com sucesso!'
          );
          handleCloseDeleteModal();
          onClose();
        } catch {
          toast.error(
            transaction.type === 'EXPENSE'
              ? 'Erro ao deletar a despesa!'
              : 'Erro ao deletar a receita!'
          )
        }
      }

    function handleOpenDeleteModal() {
        setIsDeleteModalOpen(true)
    }

    function handleCloseDeleteModal() {
        setIsDeleteModalOpen(false)
    }
    

    return {
        errors,
        control,
        accounts,
        categories,
        reset,
        isLoading,
        handleSubmit,
        isDeleteModalOpen,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        isLoadingDelete,
        handleDeleteTransaction
    }
}