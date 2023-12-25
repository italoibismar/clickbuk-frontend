import { Controller } from "react-hook-form";

import { Modal } from "../../../../../components/Modal";
import InputCurrency from "../../../../../components/InputCurrency";
import { Button } from "../../../../../components/Button";
import { Select } from "../../../../../components/Select";
import DatePickerInput from "../../../../../components/DatePickerInput";

import { useNewTransactionModalController } from "./useNewTransactionModalController";
import { Input } from "../../../../../components/Input"

export function NewTransactionModal() {
    const {
        control,
        errors,
        handleSubmit,
        accounts,
        categories,
        isNewTransactionModalOpen,
        closeNewTransactionModal,
        newTransactionType,
        isLoading,
        reset
      } = useNewTransactionModalController()

      function closeModalAndResetform(){
        closeNewTransactionModal();
        reset();
      }

    const isExpense = newTransactionType === "EXPENSE"
    return ( 
        <Modal
            title={isExpense ? "Nova Despesa" : "Nova Receita"}
            open={isNewTransactionModalOpen}
            onClose={closeModalAndResetform}
            className="p-8"
        >
            <form onSubmit={handleSubmit}>
                <div className="mb-6 mt-8">
                    <Controller
                        control={control}
                        name="value"
                        defaultValue="0"
                        render={({ field: { onChange, value } }) => (
                            <InputCurrency
                                value={value}
                                placeholder={isExpense ? 'Valor da Despesa' : 'Valor da Receita'}
                                error={errors.value?.message}
                                onChange={onChange}
                            />
                        )}
                    />
                </div>
                
                <Controller 
                    control={control}
                    name="name"
                    defaultValue=""
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
                                options={categories?.filter(data => data.type === (isExpense ? "EXPENSE" : "INCOME")).map(category => ({
                                    value: category.id.toString(),
                                    label: category.name
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

                <Button 
                    type="submit"
                    className="mt-6"
                    isLoading={isLoading}
                >
                    Cadastrar
                </Button>

            </form>
        </Modal>
     );
}