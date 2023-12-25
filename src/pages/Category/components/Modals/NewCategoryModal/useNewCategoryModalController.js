import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query"
import { toast } from "react-toastify";

import { useLayout } from "../../../../../components/Layout/LayoutContext/useLayout";
import { categoriesService } from "../../../../../lib/services/categoriesService";

const schema = z.object({
    name: z.string().nonempty("Informe o nome"),
    color: z.string().nonempty("Informe a cor"),
    type: z.string().nonempty("Informe o tipo"),
    icon: z.string().nonempty("Informe o ícone")
})


export function useNewCategoryModalController() {
    const {
        isNewCategoryModalOpen,
        closeNewCategoryModal,
        openNewCategoryModal
    } = useLayout();

    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control,
        reset
    } = useForm({
        resolver: zodResolver(schema),
    });

    
    const queryClient = useQueryClient();
    const { isLoading, mutateAsync } = useMutation(categoriesService.create);
    
    const handleSubmit = hookFormSubmit(async data => {
        const { id } = JSON.parse(localStorage.getItem("user"));
        try {
            await mutateAsync({
                name: data.name,
                icon: data.icon,
                color: data.color,
                type: data.type,
                user_id: id
            });
            queryClient.invalidateQueries({
                queryKey: ['categories']
            });
            toast.success("Categoria cadastrada com sucesso!");
            closeNewCategoryModal();
            reset();
        } catch {
            toast.error("Erro ao cadastrar a categoria!")
        }
    })

    return {
        isNewCategoryModalOpen,
        closeNewCategoryModal,
        openNewCategoryModal,
        errors,
        control,
        handleSubmit,
        isLoading,
        reset
    }
}