import { Controller } from "react-hook-form";
import propTypes from "prop-types"

import { useEditTransactionModalController } from "./useEditTransactionModalController"

import InputCurrency from "../../../../../components/InputCurrency";
import { Button } from "../../../../../components/Button";
import DatePickerInput from "../../../../../components/DatePickerInput";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { Input } from "../../../../../components/Input";
import { TrashIcon } from "@radix-ui/react-icons";
import { ConfirmDeleteModal } from "../../../../../components/ConfirmDeleteModal";

export function EditTransactionModal({ transaction, onClose, open }) {
    
    const {
        control,
        errors,
        accounts,
        categories,
        isLoading,
        handleSubmit,
        isDeleteModalOpen,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        isLoadingDelete,
        handleDeleteTransaction
    } = useEditTransactionModalController(transaction, onClose);

    
    const isExpense = transaction?.type === "EXPENSE";

    if(isDeleteModalOpen){
        return (
            <ConfirmDeleteModal 
                onConfirm={handleDeleteTransaction}
                isLoading={isLoadingDelete}
                onClose={handleCloseDeleteModal}
                title={`Você tem certeza que deseja excluir a ${isExpense ? "despesa" : "receita"} "${transaction.name}"?`}
            />
        )
    }
    
    return (
        <Modal
        header={true}
        title={isExpense ? "Editar Despesa" : "Editar Receita"}
        open={open}
        onClose={onClose}
    >
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <Controller 
                    control={control}
                    name="value"
                    defaultValue="0"
                    render={({ field: { onChange, value } }) => (
                        <InputCurrency 
                            value={value}
                            placeholder={isExpense ? "Valor da Despesa" : "Valor da Receita"}
                            error={errors.value?.message}
                            onChange={onChange}
                        />
                    )}
                />
            </div>
            <Controller 
                control={control}
                name="name"
                defaultValue={transaction.title}
                render={({ field: { value, onChange } }) => (
                    <Input 
                        placeholder={`Nome da ${isExpense ? "Despesa" : "Receita"}`}
                        value={value}
                        onChange={onChange}
                        error={errors.name?.message}
                        type="text"
                    />
                )}
            />

            <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
                <Controller 
                    control={control}
                    name="categoryId"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (
                        <Select 
                            placeholder="Categoria"
                            value={value}
                            onChange={onChange}
                            error={errors.categoryId?.message}
                            options={categories?.filter(data => data.type === (isExpense ? "EXPENSE" : "INCOME")).map(account => ({
                                value: account.id.toString(),
                                label: account.name
                            }))}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="accountId"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (
                        <Select 
                            placeholder={isExpense ? 'Pagar com' : 'Receber com'}
                            value={value}
                            onChange={onChange}
                            error={errors.accountId?.message}
                            options={accounts?.map(account => ({
                                value: account.id.toString(),
                                label: account.name
                            }))}
                        />
                    )}
                />
            </div>

            <Controller 
                control={control}
                name="date"
                defaultValue={new Date()}
                render={({ field: { value, onChange } }) => (
                    <DatePickerInput error={errors.date?.message} value={value} onChange={onChange} />
                )}
            />

            <div className="grid grid-cols-6 mt-8 w-full gap-4">
                <Button 
                    type="submit"
                    className="col-span-5"
                    isLoading={isLoading}
                >
                    Salvar
                </Button>

                <button type="button" onClick={handleOpenDeleteModal} className="bg-gray-200 dark:bg-white/[3%] hover:bg-gray-300/80 dark:hover:dark:bg-white/[5%] flex justify-center items-center rounded-xl">
                    <TrashIcon className="w-6 h-6 text-gray-600" />
                </button>
            </div>
        </form>
    </Modal>
    )
}

EditTransactionModal.propTypes = {
    transaction: propTypes.object,
    onClose: propTypes.func,
    open: propTypes.bool
}