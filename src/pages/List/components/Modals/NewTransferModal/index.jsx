import { Button } from "../../../../../components/Button";
import DatePickerInput from "../../../../../components/DatePickerInput";
import { Input } from "../../../../../components/Input";
import InputCurrency from "../../../../../components/InputCurrency";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { useNewTransfertionModalController } from "./useNewTransferModalController";
import { Controller } from "react-hook-form";

export function NewTransferModal() {
    const {
        isNewTransferModalOpen,
        closeNewTransferModal,
        accounts,
        control,
        errors,
        isLoading,
        handleSubmit
    } = useNewTransfertionModalController()
    return (
        <Modal
            title="Nova Transferência"
            open={isNewTransferModalOpen}
            onClose={closeNewTransferModal}
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Controller 
                    name="value"
                    control={control}
                    defaultValue="0"
                    render={({ field: { onChange, value } }) => (                        
                        <InputCurrency 
                            value={value}
                            placeholder="Valor da transferência"
                            error={errors.value?.message}
                            onChange={onChange}
                        />
                    )}
                />
                <Controller 
                    name="name"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <Input 
                            value={value}
                            onChange={onChange}
                            placeholder="Descrição"
                            error={errors.name?.message}
                        />
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <Controller 
                        name="accountId"
                        control={control}
                        render={({ field: { onChange,value } }) => (
                            <Select 
                                value={value}
                                placeholder="Conta de origem"
                                options={accounts?.map(account => ({
                                    value: account.id.toString(),
                                    label: account.name
                                }))}
                                onChange={onChange}
                                error={errors.accountId?.message}
                            />
                        )}
                    />
                    <Controller 
                        name="accountTransferId"
                        control={control}
                        render={({ field: { onChange,value } }) => (
                            <Select 
                                value={value}
                                placeholder="Conta de destino"
                                options={accounts?.map(account => ({
                                    value: account.id.toString(),
                                    label: account.name
                                }))}
                                onChange={onChange}
                                error={errors.accountTransferId?.message}
                            />
                        )}
                    />
                </div>
                

                <Controller 
                    name="date"
                    control={control}
                    defaultValue={new Date()}
                    render={({ field: { value, onChange } }) => (
                        <DatePickerInput error={errors.date?.message} value={value} onChange={onChange} />
                    )}
                />

                <Button
                    type="submit"
                    isLoading={isLoading}
                >
                    Cadastrar
                </Button>
            </form>
        </Modal>
    )
}