import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { useProfileController } from "./useProfileController";

const Profile = () => {
    const {
        control,
        errors,
        handleSubmit,
        isLoading
    } = useProfileController();
    return ( 
        <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-white dark:bg-white/[3%] flex flex-col gap-8">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Dados do perfil</h4>
            <div className="flex flex-col gap-6">
            <Controller 
                    control={control}
                    name="name"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (
                        <Input
                            variant="normal" 
                            label="Nome" 
                            value={value}
                            onChange={onChange}
                            error={errors.name?.message}
                            type="text"
                        />

                    )}
                />
                <Controller 
                    control={control}
                    name="email"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (
                        <Input
                            variant="normal" 
                            label="E-mail de cadastro" 
                            value={value}
                            onChange={onChange}
                            error={errors.email?.message}
                            type="email"
                        />

                    )}
                /> 
            </div>
            <Button 
                isLoading={isLoading}
                type="submit"
                className="!max-w-[205px] !h-12 !text-sm !font-bold tracking-[0.2px]"
            >
                Salvar alterações
            </Button>
        </form>
     );
}
 
export default Profile;