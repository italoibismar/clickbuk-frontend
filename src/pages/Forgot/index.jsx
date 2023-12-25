import { Link } from "react-router-dom";

import { useForgotController } from "./useForgotController";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Controller } from "react-hook-form";

const Forgot = () => {
    const {
        control,
        handleSubmit,
        errors,
        isLoading
    } = useForgotController();
    return ( 
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
            <form onSubmit={handleSubmit} className="flex flex-col items-center p-10 bg-white max-w-[510px] rounded-2xl">
                <h3 className="font-extrabold text-3xl text-gray-900">Recuperar senha</h3>
                <p className="mt-4 mb-10 text-center text-gray-600">Informe seu endereço de e-mail para receber um link que permitirá definir uma nova senha.</p>
                <div className="flex flex-col gap-10 w-full">
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
                    <Button 
                        type="submit"
                        isLoading={isLoading}
                    >
                        Recuperar
                    </Button>
                </div>
                <Link to="/acesso" className="text-gray-900 font-extrabold mt-6 hover:text-gray-800">Voltar ao login</Link>
            </form>
        </div>
     );
}
 
export default Forgot;