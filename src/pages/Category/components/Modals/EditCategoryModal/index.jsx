import { Controller } from "react-hook-form";
import { Button } from "../../../../../components/Button";
import { IconsDropdownInput } from "../../../../../components/IconsDropdownInput";
import { Modal } from "../../../../../components/Modal";
import { useEditCategoryModalController } from "./useEditCategoryModalController";
import { ColorsDropdownInput } from "../../../../../components/ColorsDropdownInput";
import { Input } from "../../../../../components/Input";

import propTypes from "prop-types";
import { TrashIcon } from "@radix-ui/react-icons";
import { DeleteCategoryModal } from "../DeleteCategoryModal";
import { useDeleteCategoryModalController } from "../DeleteCategoryModal/useDeleteCategoryModalController";
import { toast } from "react-toastify";

export function EditCategoryModal({ category, onClose, open }) {
    const {
        control,
        errors,
        handleSubmit,
        isLoading
    } = useEditCategoryModalController(category, onClose);

    const {
        categories,
        isDeleteModalOpen,
        handleOpenDeleteModal,
        handleCloseDeleteModal
    } = useDeleteCategoryModalController(category, onClose);

    const isExpense = category?.type === "EXPENSE";
    const data = categories?.filter(data => (data.type === (isExpense ? "EXPENSE" : "INCOME")));

    if(isDeleteModalOpen){
        return (
            <DeleteCategoryModal 
            open={isDeleteModalOpen}
            onClose={handleCloseDeleteModal}
            category={category}
        />
        )
    }
    
    return (
        <Modal
            title="Editar Categoria"
            open={open}
            onClose={onClose}
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Controller 
                    control={control}
                    name="name"
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            error={errors.name?.message}
                            placeholder="Nome da categoria"
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="color"
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <ColorsDropdownInput 
                            onChange={onChange}
                            value={value}
                            error={errors.color?.message}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="icon"
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <IconsDropdownInput
                            onChange={onChange}
                            value={value}
                            error={errors.icon?.message}
                        />
                    )}
                />

                <div className="grid grid-cols-6 w-full gap-4">
                    <Button 
                        type="submit"
                        className="col-span-5"
                        isLoading={isLoading}
                    >
                        Salvar
                    </Button>
                    {data.length <= 1 ? (
                            <button onClick={() => toast.error("Você não pode excluir todas as categorias. É preciso deixar pelo menos uma categoria ativa.")} type="button" className="bg-gray-200 dark:bg-white/[3%] hover:bg-gray-300/80 dark:hover:dark:bg-white/[5%] flex justify-center items-center rounded-xl">
                                <TrashIcon className="w-6 h-6 text-gray-600" />
                            </button>
                    ) : (
                        <button onClick={handleOpenDeleteModal} type="button" className="bg-gray-200 dark:bg-white/[3%] hover:bg-gray-300/80 dark:hover:dark:bg-white/[5%] flex justify-center items-center rounded-xl">
                            <TrashIcon className="w-6 h-6 text-gray-600" />
                        </button>
                    )}

                </div>
            </form>

        </Modal>
    )
}

EditCategoryModal.propTypes = {
    category: propTypes.object,
    onClose: propTypes.func,
    open: propTypes.bool
}