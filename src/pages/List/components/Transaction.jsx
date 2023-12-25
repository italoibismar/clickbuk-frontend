import IconComponent from "../../../components/Icons/Categories/CategoryIcon";
import { formatCurrency, formatDate } from "../../../lib/Utils";
import { useListController } from "../useListController";
import { EditTransactionModal } from "./Modals/EditTransactionModal";
import propTypes from "prop-types";
import Icon from "../../../components/Icons/Icon";
import { EditTransferModal } from "./Modals/EditTransferModal";

export const Transaction = (transaction) => {
    const { 
        transactionBeingEdited, 
        handleCloseEditModal, 
        isEditModalOpen, 
        handleOpenEditModal,
        tranferBeingEdited,
        isEditTransferModalOpen,
        handleOpenEditTransferModal,
        handleCloseEditTransferModal
    } = useListController();

    return ( 
        <>
        {transactionBeingEdited && (
            <EditTransactionModal 
                open={isEditModalOpen}
                onClose={handleCloseEditModal}
                transaction={transactionBeingEdited}
            />
        )}
        {tranferBeingEdited && (
            <EditTransferModal 
                open={isEditTransferModalOpen}
                onClose={handleCloseEditTransferModal}
                transaction={tranferBeingEdited}
            />
        )}
        {transaction.variant === "NORMAL" ? (
            <div onClick={() => handleOpenEditModal(transaction)} className="px-6 py-4 rounded-2xl bg-white dark:bg-white/[3%] dark:hover:bg-white/[5%] flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                    <div style={{ backgroundColor: `${transaction.category_color}18` }} className={`h-12 w-12 flex items-center justify-center rounded-full`}>
                        <IconComponent name={transaction.category_icon} color={transaction.category_color} />
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-900 dark:text-white">{transaction.name}</strong>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{transaction.category_name}</span>
                    </div>
                </div>

                <div className="flex flex-col text-right gap-1">
                    <span className={transaction.type === "EXPENSE" ? "text-red-600 dark:text-red-500 font-medium" : "text-green-600 dark:text-green-500 font-medium"}>
                        {transaction.type === "EXPENSE" ? "- " : "+ "}
                        {formatCurrency(transaction.value)}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-500">{formatDate(new Date(transaction.date))}</span>
                </div>
    
            </div>
        ) :(
            <div onClick={() => handleOpenEditTransferModal(transaction)} className="px-6 py-4 rounded-2xl bg-white dark:bg-white/[3%] dark:hover:bg-white/[5%] flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                    <div style={{ backgroundColor: transaction.type === "INCOME" ? "#22C55E18" : "#EF444418" }} className={`h-12 w-12 flex items-center justify-center rounded-full`}>
                        <Icon name="transfer" color={transaction.type === "INCOME" ? "#22C55E" : "#EF4444"} />
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-900 dark:text-white">{transaction.name}</strong>
                        <span className="text-sm text-gray-600 dark:text-gray-500">
                            {transaction.type === "INCOME" ? "Transferência de entrada" : "Transferência de saída"}
                        </span>
                    </div>
                </div>
    
                <div className="flex flex-col text-right gap-1">
                    <span className={transaction.type === "EXPENSE" ? "text-red-600 dark:text-red-500 font-medium" : "text-green-600 dark:text-green-500 font-medium"}>
                        {transaction.type === "EXPENSE" ? "- " : "+ "}
                        {formatCurrency(transaction.value)}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-500">{formatDate(new Date(transaction.date))}</span>
                </div>
            </div>
        )}
        </>
     );
}

export const TransactionSkeleton = ({items}) => {
    return (
        <>
            {Array(items).fill(0).map((_, index) => 
                <div key={index} className="duration-100 px-6 py-3.5 rounded-2xl bg-white dark:bg-white/[3%] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="animate-pulse w-[48px] h-[48px] bg-gray-200 dark:bg-white/[5%] rounded-full"></div>
                        <div className="flex flex-col gap-2">
                            <div className="animate-pulse h-[16px] w-[148px] bg-gray-200 dark:bg-white/[5%] rounded-sm"></div>
                            <div className="animate-pulse h-[14px] w-[72px] bg-gray-200 dark:bg-white/[5%] rounded-sm"></div>
                        </div>
                    </div>
    
                    <div className="flex flex-col items-end gap-2">
                        <div className="animate-pulse h-[16px] w-[72px] bg-gray-200 dark:bg-white/[5%] rounded-sm"></div>
                        <div className="animate-pulse h-[14px] w-[100px] bg-gray-200 dark:bg-white/[5%] rounded-sm"></div>
                    </div>
                </div>
                
            )}
        </>
    )

    
}

TransactionSkeleton.propTypes = {
    items: propTypes.number
}