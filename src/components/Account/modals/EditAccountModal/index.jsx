import { Controller } from "react-hook-form";
import { Modal } from "../../../Modal";
import { useEditAccountModal } from "./useEditAccountModalController";
import InputCurrency from "../../../InputCurrency";
import { Input } from "../../../Input";
import { Select } from "../../../Select";
import { ColorsDropdownInput } from "../../../ColorsDropdownInput";
import { Button } from "../../../Button";
import { TrashIcon } from '@radix-ui/react-icons';
import { ConfirmDeleteModal } from "../../../ConfirmDeleteModal";
import { useWallets } from "../../../../lib/hooks/useWallets";
import { toast } from "react-toastify";


export function EditAccountModal() {

    const {
        isEditAccountModalOpen,
        closeEditAccountModal,
        errors,
        control,
        handleSubmit,
        isLoading,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        isDeleteModalOpen,
        handleDeleteAccount,
        isLoadingDelete
    } = useEditAccountModal();

    const { id } = JSON.parse(localStorage.getItem("user"))
    const { accounts } = useWallets(id)

    if (isDeleteModalOpen) {
        return (
            <ConfirmDeleteModal 
            title="Quer mesmo excluir essa conta?"
            description="Ao excluir a conta, também serão excluídos todos os registros de receitas e despesas relacionados."
            open={isDeleteModalOpen}
            onClose={handleCloseDeleteModal}
            onConfirm={handleDeleteAccount}
            isLoading={isLoadingDelete}
        />
        )
    }

    return (
        <Modal
            title="Editar Conta"
            open={isEditAccountModalOpen}
            onClose={closeEditAccountModal}
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

            <div className="grid grid-cols-6 gap-4 w-full">
                <Button
                    className="col-span-5"
                    type="submit"
                    isLoading={isLoading}
                >
                    Salvar
                </Button>
                {accounts.length <= 1 ? (
                    <button type="button" onClick={() => toast.error("Você não pode excluir todas as contas. É preciso deixar pelo menos uma conta ativa.")} className="bg-gray-200 dark:bg-white/[3%] hover:bg-gray-300/80 dark:hover:dark:bg-white/[5%] flex justify-center items-center rounded-xl">
                        <TrashIcon className="w-[24px] h-[24px] text-gray-600" />
                    </button>
                ) : (
                    <button type="button" onClick={handleOpenDeleteModal} className="bg-gray-200 dark:bg-white/[3%] hover:bg-gray-300/80 dark:hover:dark:bg-white/[5%] flex justify-center items-center rounded-xl">
                        <TrashIcon className="w-[24px] h-[24px] text-gray-600" />
                    </button>
                )}


            </div>
        </form>

        </Modal>
    )
}