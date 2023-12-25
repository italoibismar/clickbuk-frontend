import { ArrowTopRightIcon, ExitIcon } from "@radix-ui/react-icons";
import { useUsers } from "../../lib/hooks/useUsers";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { calcularDiferencaDeDias, formatarData } from "../../lib/Utils";
import { api } from "../../lib/Api";
import { useQuery } from "react-query";

const Subscribe = () => {

    const { logout } = useContext(AuthContext);

    function verificarRestricoes(periodoTeste, assinaturaAtiva) {
        if (periodoTeste <= 0 && !assinaturaAtiva) {

        return false;
        } else if (periodoTeste <= 0 && assinaturaAtiva) {

        return true;
        } else {

        return true;
        }
    }

    const { id } = JSON.parse(localStorage.getItem("user"));

    const { user, isLoading, isError } = useUsers(id);


    const dataAtualFormatada = formatarData(new Date());
    const dataFinalFormatada = formatarData(new Date(user?.trial_period));

    const dataInicial = dataAtualFormatada;
    const dataFinal = dataFinalFormatada;
    const assinaturaAtiva = user?.subscription?.find(assinatura => assinatura?.subscription_status === "active");

    const nini = calcularDiferencaDeDias(dataInicial, dataFinal);

    const temAcesso = verificarRestricoes(nini, assinaturaAtiva);

    const fetchCheckoutLink = async () => {
        try {
            const response = await api.get(`/subscription/${id}`);

            return response.data
        } catch (error) {
            console.log("Erro ao obter o link do checkout")
        }
    }

    const { data, error, isLoading:loading } = useQuery("assinar", fetchCheckoutLink);  

    const redirectToCheckout = () => {
        window.location.href = data;
    }

    if (temAcesso && !isLoading && !isError) {
        window.location.href = "./";
    }

    return ( 
        <>
            {!temAcesso && !isLoading && !isError && (
                <div className="min-h-screen w-full bg-white">
                    <div className="flex justify-end py-8 px-8">
                        <button onClick={() => logout()} className="flex items-center gap-2 p-2 hover:bg-black/[3%] rounded">
                            <ExitIcon className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-900 font-bold text-sm">Sair da conta</span>
                        </button>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-8">
                        <h3 className="text-[32px] text-center text-gray-900 font-bold">Assine agora e tenha acesso <br /> imediato a plataforma 🥳</h3>
                        <div className="flex justify-between items-center max-w-[650px] w-full bg-primary-500/10 p-8 border-2 border-dashed border-primary-200 rounded-2xl">
                            <div className="flex flex-col gap-1">
                                <span className="text-sm font-bold text-primary-600">Assinatura mensal</span>
                                <p className="text-3xl font-semibold text-gray-900">R$ 19,90<span className="text-xl">/mês</span></p>
                            </div>
                            <button onClick={redirectToCheckout} className="flex justify-center items-center gap-2 rounded-lg text-white font-bold bg-primary-500 hover:bg-primary-600 h-[50px] w-[180px]">
                                Assinar agora 
                                <ArrowTopRightIcon className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex justify-between gap-4 max-w-[650px] w-full">
                            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-black/[5%] border border-black/[7%]">
                                <div className=" flex flex-col gap-1">
                                    <span className="text-gray-900 font-bold">Exportar seus dados</span>
                                    <p className="text-gray-600 text-sm">Clique no botão abaixo para exportar seus dados</p>
                                </div>
                                <button className="border border-black/[18%] rounded-lg w-[224px] h-[48px] text-sm font-bold text-gray-900 bg-transparent hover:bg-black/[6%]">Exportar dados</button>
                            </div>
                            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-black/[5%] border border-black/[7%]">
                                <div className=" flex flex-col gap-1">
                                    <span className="text-gray-900 font-bold">Ficou com dúvidas?</span>
                                    <p className="text-gray-600 text-sm">Envie uma mensagem, estamos à sua disposição</p>
                                </div>
                                <button onClick={() => window.open("https://wa.me/5585988054766?text=Oi,%20pode%20me%20ajudar?")} className="border border-black/[18%] rounded-lg w-[224px] h-[48px] text-sm font-bold text-gray-900 bg-transparent hover:bg-black/[6%]">Chamar no WhatsApp</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
     );
}
 
export default Subscribe;