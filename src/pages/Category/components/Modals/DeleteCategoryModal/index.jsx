import { Modal } from "../../../../../components/Modal";
import { useDeleteCategoryModalController } from "./useDeleteCategoryModalController";
import { Select } from "../../../../../components/Select"
import { Button } from "../../../../../components/Button";
import { Controller } from "react-hook-form";

import propTypes from "prop-types";

export function DeleteCategoryModal({ category, onClose, open }) {
    const {
        control,
        errors,
        handleSubmit,
        isLoadingDelete,
        categories
    } = useDeleteCategoryModalController(category, onClose);

    const isExpense = category?.type === "EXPENSE"

    return (
        <Modal
            open={open}
            onClose={onClose}
            className="!max-w-[464px]" 
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-3 w-full max-w-[400px] m-auto">
                    <h3 className="font-bold text-2xl text-center text-gray-900 dark:text-gray-50">Antes de excluir, mova suas transações para outra categoria</h3>
                    <p className="text-center text-sm text-gray-500">As transações serão movidas para outra categoria, e a categoria <strong>{category?.name}</strong> será excluída.</p>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-600 text-sm tracking-[0.2px]">Movendo transações de</label>
                        <div className="h-[56px] p-4 cursor-not-allowed w-full flex items-center border border-gray-300 dark:border-white/[8%] rounded-lg">
                            <span className="font-bold text-gray-900 dark:text-gray-50 tracking-[-0.2px]">{category?.name}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-600 text-sm tracking-[0.2px]">Para a categoria</label>
                        <Controller 
                            control={control}
                            name="newCategoryId"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Select 
                                placeholder="Selecionar"
                                onChange={onChange}
                                error={errors.newCategoryId?.message}
                                value={value}
                                options={categories?.filter(data => (data.type === (isExpense ? "EXPENSE" : "INCOME") && (data.id != category?.id))).map(category => ({
                                    value: category?.id.toString(),
                                    label: category?.name
                                }))}
                                />
                            )}
                        />
                    </div>

                </div>


                <div className="flex flex-col gap-4">
                    <Button 
                        danger
                        isLoading={isLoadingDelete}
                    >
                        Excluir
                    </Button>
                    <Button variant="secondary" handleClick={onClose}>Cancelar</Button>
                </div>
            </form>
        </Modal>
    )
}

DeleteCategoryModal.propTypes = {
    category: propTypes.object,
    onClose: propTypes.func,
    open: propTypes.bool
}