import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "../../../../components/Button";
import { useSubscriptionsController } from "./useSubscriptionsController";
import { Spinner } from "../../../../components/Spinner";


const Subscriptions = () => {

    const {
        redirectToCheckout,
        redirectToPortal,
        hasSubscription,
        formatarTimestamp,
        isLoading
    } = useSubscriptionsController()

    return ( 
        <div className="p-8 rounded-xl bg-white dark:bg-white/[3%] flex flex-col gap-8">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Assinaturas</h4>

            {isLoading && (
                <div className="h-full min-h-[190px] flex flex-1 items-center justify-center">
                    <Spinner className="w-10 h-10 dark:text-white/[10%]" />
                </div>
            )}
            
            {!isLoading && hasSubscription && (
                <div className="border border-gray-300 dark:border-white/[8%]  rounded-lg">
                    <div className="flex justify-between items-center p-6">
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-gray-900 dark:text-gray-50">Assinatura Premium</span>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-500">Próxima cobrança: {formatarTimestamp(hasSubscription?.current_period_end)}</p>
                        </div>
                        <p className="text-[28px] font-bold text-gray-900 dark:text-gray-50">R$ 19,90<span className="text-base font-medium text-gray-700 dark:text-gray-300">/mês</span></p>
                    </div>
                    
                    <div className="h-[1px] w-full bg-gray-300 dark:bg-white/[8%]"></div>

                    <div className="flex justify-between items-center p-6">
                        {hasSubscription ? (
                            <div className="flex h-10 bg-primary-500/[18%] items-center gap-2 rounded-md px-4">
                                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                <p className="text-primary-500 font-medium">Ativo</p>
                            </div>

                        ) : (
                            <div className="flex h-12 bg-red-500/[18%] items-center gap-2 rounded-md px-4">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <p className="text-red-500 font-medium">Cancelado</p>
                            </div>
                        )}
                        <Button
                        handleClick={redirectToPortal}
                        variant="secondary"
                            type="submit"
                            className="!max-w-[205px] !h-12 !text-sm !font-bold tracking-[0.2px]"
                        >
                            Gerenciar assinatura
                        </Button>
                    </div>

                </div>
            )}

            {!isLoading && !hasSubscription && (
                <div className="border border-gray-300 dark:border-white/[8%]  rounded-lg">
                    <div className="flex justify-between items-center p-6">
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-gray-900 dark:text-gray-50">Assinatura Premium</span>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-500">Assine já e dê um upgrade nas suas finanças!</p>
                        </div>
                        <p className="text-[28px] font-bold text-gray-900 dark:text-gray-50">R$ 19,90<span className="text-base font-medium text-gray-700 dark:text-gray-300">/mês</span></p>
                    </div>
                    
                    <div className="h-[1px] w-full bg-gray-300 dark:bg-white/[8%]"></div>

                    <div className="items-center p-6">
                            <button onClick={redirectToCheckout} className="text-sm flex justify-center items-center gap-1 rounded-xl text-white font-bold bg-primary-500 hover:bg-primary-600 h-12 w-full">
                                Assinar agora 
                                <ArrowTopRightIcon className="w-5 h-5" />
                            </button>
                    </div>

                </div>
            )}
        </div>
     );
}
 
export default Subscriptions;