import { Link } from "react-router-dom";

import Logo from "../../assets/svg/icon-logo.svg";

import "./styles.css"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useSignUpController } from "./useSignUpController";
import { Controller } from "react-hook-form";

const SignUp = () => {
    const {
        control,
        errors,
        handleSubmit,
        isLoading
    } = useSignUpController()
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
        <div className="hidden sm:block bg-signup"></div>
        <div className="flex flex-col min-h-screen px-4 pt-12 pb-16 sm:px-12 col-span-2">
            <div className="w-full m-auto">
                <img className="max-w-[149px] mx-auto" src={Logo} alt="ClickBuq"></img>
                <h1 className="text-3xl font-extrabold text-center text-gray-900 mt-6">Comece agora mesmo!</h1>
                <p className="text-gray-900 text-center mt-4">Já possui uma conta? <Link to="/acesso" className="font-bold text-primary-500 hover:text-primary-600">Fazer login</Link></p>
                
                <form onSubmit={handleSubmit} className="max-w-[440px] w-full mx-auto mt-10">
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
                                    placeholder="Seu e-mail" 
                                    type="email"
                                />
                            )}
                        />
                        <Controller 
                            control={control}
                            name="name"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input 
                                    value={value}
                                    onChange={onChange}
                                    error={errors.name?.message}
                                    placeholder="Seu nome" 
                                    type="text"
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
                                    placeholder="Sua senha" 
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
                                    placeholder="Confirme sua senha" 
                                    variant="password"
                                />
                            )}
                        />
                    </div>

                    <div className="mt-8">
                        <Button
                            type="submit"
                            isLoading={isLoading}
                        >
                            Criar conta
                        </Button>
                    </div>
                </form>
            </div>

        </div>
        
    </div>
     );
}
 
export default SignUp;