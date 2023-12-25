import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Chart from 'react-apexcharts';
import HistoryCard from "../HistoryCard";
import { formatCurrency } from "../../../../lib/Utils";
import { IncomeVsExpenseController } from "./useIncomeVsExpenseController";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Spinner } from "../../../../components/Spinner";

import emptyStateImage from "../../../../assets/svg/empty-state.svg";

const IncomeVsExpense = () => {
    const {
        selectedDate,
        handleChangeDate,
        totalBalance,
        isLoading
    } = IncomeVsExpenseController();

    const options = {
        labels: ['Receitas', 'Despesas'],
        legend: {
            show: false, // Define para false para ocultar a legenda
        },
        colors: ["#22C55E", "#EF4444"],
        stroke: {
            show: false,
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
            if (val > 0) {
                return val.toFixed(0) + '%'; // Mostra a porcentagem sem casas decimais
            } else {
                return ''; // Retorna uma string vazia para ocultar o label
            }
            },
        },
    };

    const series = [totalBalance.totalIncome, totalBalance.totalExpense];


    return ( 
        <div className="bg-white dark:bg-white/[3%] p-6 rounded-xl min-h-[470px] flex flex-col">
            <div className="flex items-center gap-2.5 w-full justify-between">
                <div onClick={() => handleChangeDate("prev")} className="p-[2px] hover:bg-gray-100 dark:hover:bg-white/[3%] rounded-full cursor-pointer transition-colors">
                    <ChevronLeftIcon className="w-[24px] h-[24px] text-gray-600" />
                </div>
                <span className="text-gray-900 dark:text-gray-50 font-semibold capitalize text-lg">
                    { format(selectedDate, "MMMM, yyyy", { locale: ptBR }) }
                </span>
                <div onClick={() => handleChangeDate("next")} className="p-[2px] hover:bg-gray-100 dark:hover:bg-white/[3%] rounded-full cursor-pointer transition-colors">
                    <ChevronRightIcon className="w-[24px] h-[24px] text-gray-600" />
                </div>
            </div>

            {isLoading && (
                <div className="h-full flex flex-1 items-center justify-center">
                    <Spinner className="w-10 h-10 dark:text-white/[10%]" />
                </div>
            )}

            {(totalBalance?.totalIncome <= 0 && totalBalance?.totalExpense <= 0 && !isLoading) && (
                <div className="mt-16 h-full w-full flex flex-col gap-5 items-center justify-center">
                    <img src={emptyStateImage} alt="Ilustração em preto e branco de uma moça com uma lupa procurando algo em sua bolsa" />
                    <p className="text-gray-700 font-medium text-center">
                        Não encontramos nenhuma movimentação!
                    </p>
                </div>
            )}

            {(totalBalance?.totalIncome > 0 || totalBalance?.totalExpense > 0 && !isLoading) && (
                <>
                    <div className="w-96 h-96 m-auto relative flex justify-center items-center text-center">
                        <div className="absolute left-0 right-0">
                            <Chart 
                                options={options} 
                                series={series} 
                                type="donut" 
                                width="380" 
                            />
                        </div>
                        <div>
                            <span className="text-gray-900 dark:text-gray-50 font-semibold text-base">{formatCurrency(totalBalance?.balance)}</span>
                            <p className="text-sm text-gray-700 dark:text-gray-500 font-medium">Balanço mensal</p>
                        </div>
                    </div>
                
                    <div className="flex flex-col gap-6">
                        {totalBalance?.totalIncome > 0 && (
                            <HistoryCard 
                                icon="income"
                                title="Receitas"
                                amount={formatCurrency(totalBalance?.totalIncome)}
                                color="#66BB6A"
                            />
                        )}

                        {totalBalance?.totalExpense > 0 && (
                            <HistoryCard 
                                icon="expense"
                                title="Despesas"
                                amount={formatCurrency(totalBalance?.totalExpense)}
                                color="#F44336"
                            />
                        )}
                    </div>
                </>
            )}


        </div>
     );
}
 
export default IncomeVsExpense;