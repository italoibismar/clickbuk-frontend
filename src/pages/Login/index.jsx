import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

import { useLoginController } from "./useLoginController";
import "./styles.css"

import { Input } from "../../components/Input";
import Logo from "../../assets/svg/logo.svg";
import { Button } from "../../components/Button";

const Login = () => {
    const {
        handleSubmit,
        control,
        errors,
        isLoading
    } = useLoginController();
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
        <div className="flex flex-col min-h-screen px-4 sm:px-12 pt-12 pb-16 col-span-2 w-full">
            <img className="max-w-[149px]" src={Logo} alt="ClickBuq"></img>
            <div className="w-full m-auto">
                <h1 className="text-3xl font-extrabold text-center text-gray-900">Bem-vindo ao Clickbuk</h1>
                <p className="text-gray-900 text-center mt-4">Novo por aqui? <Link to="/cadastro" className="font-bold text-primary-500 hover:text-primary-600">Crie uma conta</Link></p>
                <form onSubmit={handleSubmit} className="max-w-[440px] w-full mx-auto mt-12">
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
                                    type="email"
                                    placeholder="Digite seu e-mail"
                                />
                            )}
                        />
                        <Controller 
                            control={control}
                            name="password"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input 
                                    variant="password"
                                    value={value}
                                    onChange={onChange}
                                    error={errors.password?.message}
                                    placeholder="Digite sua senha"
                                />
                            )}
                        />
                    </div>

                    <div className="mt-8">
                        <Button isLoading={isLoading} type="submit">Entrar</Button>
                        <p className="text-gray-900 text-center mt-6"><Link to="/esqueci-minha-senha" className="font-bold hover:text-gray-800">Esqueci minha senha</Link></p>
                    </div>
                </form>
            </div>

        </div>
        <div className="hidden sm:block bg-login"></div>
    </div>
     );
}
 
export default Login;