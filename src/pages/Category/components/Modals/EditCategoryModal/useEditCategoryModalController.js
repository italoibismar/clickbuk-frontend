import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { z } from "zod";
import { categoriesService } from "../../../../../lib/services/categoriesService";
import { toast } from "react-toastify";

const schema = z.object({
    name: z.string().nonempty("Informe o nome"),
    color: z.string().nonempty("Informe a cor"),
    icon: z.string().nonempty("Informe o ícone")
});

export function useEditCategoryModalController(category, onClose) {
    const {
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: category?.name,
            color: category?.color,
            icon: category?.icon
        }
    });
    const queryClient = useQueryClient();

    const {
        isLoading,
        mutateAsync: updateCategory
    } = useMutation(categoriesService.update);

    const handleSubmit = hookFormSubmit(async data => {
        try {
            await updateCategory({
                id: category.id,
                name: data.name,
                icon: data.icon,
                color: data.color

            });
            queryClient.invalidateQueries({
                queryKey: ['categories']
            });
            queryClient.invalidateQueries({
                queryKey: ['transactions']
            });
            toast.success("Categoria editada com sucesso!") 
            onClose();        
        } catch (error) {
            toast.error("Erro ao salvar categoria!")
        }
    })

    return {
        control,
        errors,
        handleSubmit,
        isLoading
    }
}