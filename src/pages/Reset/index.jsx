import { Link, useParams } from "react-router-dom"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Controller } from "react-hook-form";
import { useResetController } from "./useResetController";

const Reset = () => {
    const { token } = useParams();

    const {
        control,
        handleSubmit,
        errors,
        isLoading
    } = useResetController(token);

    return ( 
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
            <form onSubmit={handleSubmit} className="flex flex-col items-center p-10 bg-white w-full max-w-[510px] rounded-2xl">
                <h3 className="font-extrabold text-3xl text-gray-900 mb-10">Alterar senha</h3>
                <div className="flex flex-col gap-10 w-full">
                    <div className="flex flex-col gap-4">
                        <Controller 
                            control={control}
                            name="email"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    error={errors.email?.message}
                                    placeholder="Digite seu e-mail" 
                                    type="email"
                                />
                            )}
                        />
                        <Controller 
                            control={control}
                            name="password"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input 
                                    value={value}
                                    onChange={onChange}
                                    error={errors.password?.message}
                                    placeholder="Sua nova senha" 
                                    variant="password"
                                />
                            )}
                        />
                        <Controller 
                            control={control}
                            name="confirmPassword"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input 
                                    value={value}
                                    onChange={onChange}
                                    error={errors.confirmPassword?.message}
                                    placeholder="Confirmar senha" 
                                    variant="password"
                                />
                            )}
                        />
                    </div>
                    <Button
                        type="submit"
                        isLoading={isLoading}
                    >
                        Alterar senha
                    </Button>
                </div>
                <Link to="/acesso" className="text-gray-900 font-extrabold mt-6 hover:text-gray-800">Ir para o login</Link>
            </form>
        </div>
     );
}
 
export default Reset;