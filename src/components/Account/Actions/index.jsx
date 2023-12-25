import cx from "classnames"
import Icon from "../../Icons/Icon";

import { useLayout } from "../../Layout/LayoutContext/useLayout";
import { useAccountsController } from "../useAccountsController";
import { toast } from "react-toastify";

const Actions = () => {

    const { openNewTransactionModal, openNewTransferModal, openNewAccountModal } = useLayout();

    const { wallets } = useAccountsController();

    return ( 
        <div className="grid grid-cols-4 gap-2 mt-10">
            <button onClick={() => openNewTransactionModal("INCOME")} className="bg-white dark:bg-white/[3%] dark:hover:bg-white/[4%] flex flex-col gap-2 items-center rounded-xl px-3.5 py-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Icon name="income" className={cx("stroke-green-500")} />
                </div>
                <span className="font-medium text-gray-600 dark:text-gray-500 text-sm">Receita</span>
            </button>
            <button onClick={() => openNewTransactionModal("EXPENSE")} className="bg-white dark:bg-white/[3%] dark:hover:bg-white/[4%] flex flex-col gap-2 items-center rounded-xl px-3.5 py-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                    <Icon name="expense" className={cx("stroke-red-500 dark:stroke-red-400")} />
                </div>
                <span className="font-medium text-gray-600 dark:text-gray-500 text-sm">Despesa</span>
            </button>
            <button onClick={() => openNewAccountModal()} className="bg-white dark:bg-white/[3%] dark:hover:bg-white/[4%] flex flex-col gap-2 items-center rounded-xl px-3.5 py-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Icon name="bank" className={cx("fill-blue-500 dark:fill-blue-500")} />
                </div>
                <span className="font-medium text-gray-600 dark:text-gray-500 text-sm">Conta</span>
            </button>
            {wallets.length <= 1 ? (
                <button onClick={() => toast.error("Você precisa cadastrar pelo menos duas contas para fazer uma transferência.")} className="bg-white dark:bg-white/[3%] dark:hover:bg-white/[4%] flex flex-col gap-2 items-center rounded-xl px-3.5 py-4">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-full flex items-center justify-center">
                        <Icon name="transfer" className={cx("stroke-orange-400")} />
                    </div>
                    <span className="font-medium text-gray-600 dark:text-gray-500 text-sm">Transferir</span>
                </button>
            ) : (
                <button onClick={() => openNewTransferModal()} className="bg-white dark:bg-white/[3%] dark:hover:bg-white/[4%] flex flex-col gap-2 items-center rounded-xl px-3.5 py-4">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-full flex items-center justify-center">
                        <Icon name="transfer" className={cx("stroke-orange-400")} />
                    </div>
                    <span className="font-medium text-gray-600 dark:text-gray-500 text-sm">Transferir</span>
                </button>
            )}
        </div>
     );
}
 
export default Actions;