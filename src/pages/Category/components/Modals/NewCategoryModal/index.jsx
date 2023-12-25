import { Controller } from "react-hook-form";
import { Button } from "../../../../../components/Button";
import { ColorsDropdownInput } from "../../../../../components/ColorsDropdownInput";
import { IconsDropdownInput } from "../../../../../components/IconsDropdownInput";
import { Input } from "../../../../../components/Input";
import { Modal } from "../../../../../components/Modal";
import { useNewCategoryModalController } from "./useNewCategoryModalController";
import { Select } from "../../../../../components/Select";

const NewCategoryModal = () => {
    const {
        isNewCategoryModalOpen,
        closeNewCategoryModal,
        control,
        errors,
        handleSubmit,
        isLoading,
        reset
    }  = useNewCategoryModalController();

    function closeModalAndResetform(){
        closeNewCategoryModal();
        reset();
    }
    return ( 
        <Modal
            header={true}
            title="Nova Categoria"
            open={isNewCategoryModalOpen}
            onClose={closeModalAndResetform}
            className="p-8"
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
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
                            name="type"
                            defaultValue=""
                            render={({ field: { value, onChange } }) => (                        
                                <Select 
                                    placeholder="Tipo"
                                    value={value}
                                    onChange={onChange}
                                    error={errors.type?.message}
                                    options={[
                                        { value: 'INCOME', label: 'Receita' },
                                        { value: 'EXPENSE', label: 'Despesa' }
                                    ]}
                                />
                            )}
                        />
                </div>


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
 
export default NewCategoryModal;