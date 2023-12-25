import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button"

import Email from "../../assets/images/email.png";

const Confirm = () => {
    const navigate = useNavigate();

    return ( 
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
            <div className="flex flex-col items-center p-10 bg-white max-w-[510px] rounded-2xl">
                <img className="mb-6" src={Email} alt="Confirmar e-mail" />
                <h3 className="font-extrabold text-3xl text-gray-900">Falta pouco...</h3>
                <p className="mt-4 mb-10 text-center text-gray-600">Enviamos um link de confirmação para seu e-mail. Acesse e siga as instruções para concluir seu cadastro!</p>
                <div className="flex flex-col gap-10 w-full">
                    <Button handleClick={() => navigate("/acesso")}>
                        Ir para o login
                    </Button>
                </div>
            </div>
        </div>
     );
}
 
export default Confirm;