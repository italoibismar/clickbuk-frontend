import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { usePasswordController } from "./usePasswordController";

const Password = () => {
    const {
        control,
        errors,
        handleSubmit,
        isLoading
    } = usePasswordController();
    return ( 
        <form onSubmit={handleSubmit} className="w-full p-8 rounded-xl bg-white dark:bg-white/[3%] flex flex-col gap-8">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Alterar senha</h4>
            <div className="flex flex-col gap-6">
                <Controller 
                    control={control}
                    name="password"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (
                        <Input 
                            variant="normal" 
                            label="Senha atual"
                            value={value}
                            onChange={onChange}
                            error={errors.password?.message}
                            type="password" 
                        />
                    )}
                />
                <Controller 
                    control={control}
                    name="newPassword"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (
                        <Input 
                            variant="normal" 
                            label="Nova senha"
                            value={value}
                            onChange={onChange}
                            error={errors.newPassword?.message}
                            type="password" 
                        />
                    )}
                />
                <Controller 
                    control={control}
                    name="confirmPassword"
                    defaultValue=""
                    render={({ field: { value, onChange } }) => (
                        <Input 
                            variant="normal" 
                            label="Confirme sua senha"
                            value={value}
                            onChange={onChange}
                            error={errors.confirmPassword?.message}
                            type="password" 
                        />
                    )}
                />
            </div>
            <Button 
                type="submit"
                isLoading={isLoading}
                className="!max-w-[205px] !h-12 !text-sm !font-bold tracking-[0.2px]"
            >
                Confirmar
            </Button>
        </form>
     );
}
 
export default Password;