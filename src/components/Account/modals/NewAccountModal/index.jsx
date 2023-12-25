import { Button } from "../../../Button";
import { ColorsDropdownInput } from "../../../ColorsDropdownInput";
import InputCurrency from "../../../InputCurrency";
import { Modal } from "../../../Modal";
import { Input } from "../../../../components/Input"
import { Select } from "../../../Select";
import { useNewAccountModalController } from "./useNewAccountModalController";
import { Controller } from "react-hook-form";

const NewAccountModal = () => {
    const {
        closeNewAccountModal,
        isNewAccountModalOpen,
        errors,
        control,
        isLoading,
        handleSubmit,
        reset
    } = useNewAccountModalController();
    
    function closeModalAndResetform(){
        closeNewAccountModal();
        reset();
    }
    
    return ( 
        <Modal
            title="Nova Conta"
            open={isNewAccountModalOpen}
            onClose={closeModalAndResetform}
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Controller 
                    control={control}
                    name="initialAmount"
                    defaultValue="0"
                    render={({ field: { onChange, value } }) => (
                        <InputCurrency 
                            value={value}
                            placeholder="Saldo inicial"
                            error={errors.initialAmount?.message}
                            onChange={onChange}
                        />
                    )}
                />
                <Controller 
                    control={control}
                    name="name"
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <Input 
                            placeholder="Nome da conta"
                            onChange={onChange}
                            error={errors.name?.message}
                            value={value}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="type"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (                        
                        <Select 
                            placeholder="Tipo"
                            value={value}
                            onChange={onChange}
                            error={errors.type?.message}
                            options={[
                                { value: 'CHECKING', label: 'Conta Corrente' },
                                { value: 'INVESTMENT', label: 'Investimentos' },
                                { value: 'CASH', label: 'Dinheiro Físico' },
                            ]}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="color"
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <ColorsDropdownInput 
                            value={value}
                            onChange={onChange}
                            error={errors.color?.message}
                        />
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
     );
}
 
export default NewAccountModal;