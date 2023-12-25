import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useSubscribeTrialController } from "./useSubscribeTrialController";
import { useQuery } from "react-query";
import { api } from "../../../lib/Api";

const SubscribeTrial = () => {
    const {
        diasRestantes,
        progresso,
        assinaturaAtiva,
        isLoading
    } = useSubscribeTrialController();
    const { id } = JSON.parse(localStorage.getItem("user"));
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

    return ( 
        <>
            {diasRestantes >= 1 && !assinaturaAtiva && (
                <div className="max-[1180px]:hidden">
                    <div className="flex flex-col gap-4 py-4 px-[14px] bg-primary-500/[6%] rounded-xl border border-primary-500/[10%]">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-50">{diasRestantes} {diasRestantes > 1 ? "dias restantes" : "dia restante"}</span>
                            <div className="relative pt-1">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-black/[8%] dark:bg-white/[6%]">
                                    <div style={{width: `${progresso}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"></div>
                                </div>
                            </div>
                        </div>
                        <button onClick={redirectToCheckout} className="flex justify-center items-center gap-2 rounded-lg text-white font-bold bg-primary-500 hover:bg-primary-600 h-[44px] w-full text-sm">
                            Assinar agora 
                            <ArrowTopRightIcon className="w-[22px] h-[22px]" />
                        </button>
                    </div>
                </div>
            )}
        </>
     );
}
 
export default SubscribeTrial;