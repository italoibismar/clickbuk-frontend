import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { z } from "zod";
import { categoriesService } from "../../../../../lib/services/categoriesService";
import { useCategories } from "../../../../../lib/hooks/useCategories";
import { transactionsService } from "../../../../../lib/services/transactionsService";
import { toast } from "react-toastify";
import { useState } from "react";

const schema = z.object({
    newCategoryId: z.string().nonempty("Informe a categoria")
});

export function useDeleteCategoryModalController(category, onClose) {

    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control,
        reset
    } = useForm({
        resolver: zodResolver(schema),
    });

    const { id } = JSON.parse(localStorage.getItem("user"));
    
    const queryClient = useQueryClient();

    const { categories } = useCategories(id)

    const { 
        mutateAsync: updateAllTransaction 
    } = useMutation(transactionsService.updateAllTransactionByCategoryId);
    
    const { 
        isLoading: isLoadingDelete, 
        mutateAsync: removeCategory 
    } = useMutation(categoriesService.remove);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleSubmit = hookFormSubmit(async data => {
        try {
            await updateAllTransaction({
                oldCategoryId: category.id,
                newCategoryId: data.newCategoryId
            });
            await removeCategory(category.id, {
                newCategoryId: data.newCategoryId
            });
            toast.success("A categoria foi deletada com sucesso!");
            queryClient.invalidateQueries({
                queryKey: ["transactions"]
            });
            queryClient.invalidateQueries({
                queryKey: ["categories"]
            });
            onClose();
            reset();
        } catch {
            toast.error("Erro ao deletar a categoria!");
        }
    });

    function handleOpenDeleteModal() {
        setIsDeleteModalOpen(true)
    }

    function handleCloseDeleteModal() {
        setIsDeleteModalOpen(false)
    }

    return {
        handleSubmit,
        isLoadingDelete,
        categories,
        errors,
        control,
        isDeleteModalOpen,
        handleOpenDeleteModal,
        handleCloseDeleteModal
    }
}