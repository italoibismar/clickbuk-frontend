import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query"
import { toast } from "react-toastify";

import { useLayout } from "../../../../../components/Layout/LayoutContext/useLayout"
import { currencyStringToNumber } from "../../../../../lib/Utils";
import { transactionsService } from "../../../../../lib/services/transactionsService";
import { useCategories } from "../../../../../lib/hooks/useCategories";
import { useWallets } from "../../../../../lib/hooks/useWallets"; 

const schema = z.object({
    value: z.string().nonempty('Informe o valor'),
    name: z.string().nonempty('Informe o nome'),
    categoryId: z.string().nonempty('Informe a categoria'),
    accountId: z.string().nonempty('Informe a conta'),
    date: z.date()
});

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useLayout()

  const {
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset
  } =  useForm({
    resolver: zodResolver(schema)
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const queryClient = useQueryClient();
  const { accounts } = useWallets(user.id);
  const { categories } = useCategories(user.id);

  const { isLoading, mutateAsync } = useMutation(transactionsService.create)

  const handleSubmit = hookFormSubmit( async data => {
    
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await mutateAsync({
        name: data.name,
        user_id: user.id,
        category_id: data.categoryId,
        wallet_id: data.accountId,
        value: currencyStringToNumber(data.value),
        type: newTransactionType,
        date: data.date.toISOString()
      });
      queryClient.invalidateQueries({
        queryKey: ['transactions']
      });
      queryClient.invalidateQueries({
        queryKey: ['wallets']
      });
      toast.success(
        newTransactionType === 'EXPENSE'
          ? 'Despesa cadastrada com sucesso!'
          : 'Receita cadastrada com sucesso!'
      );
      closeNewTransactionModal();
      reset();
    } catch {
      toast.error(
        newTransactionType === 'EXPENSE'
          ? 'Erro ao cadastrar a despesa!'
          : 'Erro ao cadastrar a receita!'
      )
    }
  })

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    errors,
    control,
    handleSubmit,
    accounts,
    categories,
    isLoading,
    reset
  }
}
