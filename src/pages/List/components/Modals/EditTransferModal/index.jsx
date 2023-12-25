import propTypes from "prop-types"

import InputCurrency from "../../../../../components/InputCurrency";
import { Button } from "../../../../../components/Button";
import DatePickerInput from "../../../../../components/DatePickerInput";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { Input } from "../../../../../components/Input";
import { TrashIcon } from "@radix-ui/react-icons";
import { useEditTransferModalController } from "./useEditTransferModalController";
import { Controller } from "react-hook-form";
import { ConfirmDeleteModal } from "../../../../../components/ConfirmDeleteModal";

export function EditTransferModal({ transaction, onClose, open }) {

    const {
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
    } = useEditTransferModalController(transaction, onClose);
    if(isDeleteModalOpen){
        return (
            <ConfirmDeleteModal 
                onConfirm={handleDeleteTransaction}
                isLoading={isLoadingDelete}
                onClose={handleCloseDeleteModal}
                title="Você tem certeza que deseja excluir essa transferência?"
            />
        );
    }
    return (
        <Modal
        title="Editar Transferência"
        open={open}
        onClose={onClose}
    >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Controller 
                name="value"
                control={control}
                defaultValue="0"
                render={({ field: { onChange, value } }) => (
                    <InputCurrency 
                        value={value}
                        onChange={onChange}
                        placeholder="Valor da transferência"
                        error={errors.value?.message}
                    />
                )}
            />

            <Controller 
                control={control}
                name="name"
                defaultValue={transaction.title}
                render={({ field: { value, onChange } }) => (
                    <Input 
                        placeholder="Descrição"
                        value={value}
                        onChange={onChange}
                        error={errors.name?.message}
                        type="text"
                    />
                )}
            />


            <div className="grid grid-cols-2 gap-4">
                <Controller 
                    control={control}
                    name="accountId"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (
                        <Select 
                            placeholder="Conta de origem"
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
                <Controller 
                    control={control}
                    name="accountTransferId"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (
                        <Select 
                            placeholder="Conta de destino"
                            value={value}
                            onChange={onChange}
                            error={errors.accountTransferId?.message}
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

            <div className="grid grid-cols-6 w-full gap-4">
                <Button 
                    type="submit"
                    className="col-span-5"
                    isLoading={isLoading}
                >
                    Salvar
                </Button>

                <button onClick={handleOpenDeleteModal} type="button" className="bg-gray-200 dark:bg-white/[3%] hover:bg-gray-300/80 dark:hover:dark:bg-white/[5%] flex justify-center items-center rounded-xl">
                    <TrashIcon className="w-6 h-6 text-gray-600" />
                </button>
            </div>
        </form>
    </Modal>
    )
}

EditTransferModal.propTypes = {
    transaction: propTypes.object,
    onClose: propTypes.func,
    open: propTypes.bool
}