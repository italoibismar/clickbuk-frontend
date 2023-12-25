import cx from "classnames"

import { useListController } from "./useListController";
import { FiltersTransactionModal } from "./components/Modals/FiltersTransactionModal";

import Icon from "../../components/Icons/Icon";
import TransactionTypeDropdown from "./components/TransactionTypeDropdown";
import { Transaction, TransactionSkeleton } from "./components/Transaction";
import TransactionMonthSlider from "./components/TransactionMonthSlider";
import emptyStateImage from '../../../src/assets/svg/empty-state.svg';

const List = () => {
    const {
        type,
        setType,
        setYear,
        account,
        setAccount,
        month,
        setMonth,
        transactions,
        isLoading,
        isFiltersModalOpen,
        handleOpenFiltersModal,
        handleCloseFiltersModal,
        year
    } = useListController();

    const hasTransactions = transactions.length > 0;

    return ( 
        <>
            <div className="p-10 bg-black/[5%] dark:bg-primary-950 min-h-screen">
                <h4 className="text-2xl font-extrabold dark:font-bold text-gray-900 dark:text-gray-50">Listagem</h4>
                <div className="flex justify-between items-center mt-12">
                    <TransactionTypeDropdown type={type} setType={setType} />
                    <button onClick={handleOpenFiltersModal}>
                        <Icon name="filter" className={cx("fill-gray-600")}/>
                    </button>
                </div>

                <TransactionMonthSlider month={month} setMonth={setMonth} />

                {(!hasTransactions && !isLoading) && (
                    <div className="mt-16 h-full w-full flex flex-col gap-4 items-center justify-center">
                        <img src={emptyStateImage} alt="Ilustração em preto e branco de uma moça com uma lupa procurando algo em uma folha" />
                        <p className="text-gray-700 font-medium">
                            Não encontramos nenhuma transação!
                        </p>
                    </div>
                )}
                <main className="mt-6 flex flex-col gap-2.5">
                    {isLoading && (
                        <TransactionSkeleton items={4} />
                    )}
                    {(hasTransactions && !isLoading) && (
                        <>
                            {transactions?.map((transaction, index) => 
                                <div key={index}>
                                    <Transaction {...transaction} />
                                </div>
                                
                            )}
                        </>
                    )}
                </main>


                {isFiltersModalOpen && 
                    <FiltersTransactionModal
                        onClose={handleCloseFiltersModal}
                        open={isFiltersModalOpen}
                        year={year}
                        setYear={setYear} 
                        account={account} 
                        setAccount={setAccount}
                    />
                }
            </div>
        </>
     );
}
 
export default List;