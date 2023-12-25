import { useMemo } from "react";
import { useTransactions } from "../../../../lib/hooks/useTransactions";
import { useState } from "react";
import { addMonths, subMonths } from "date-fns";

export function IncomeVsExpenseController () {
    const [selectedDate, setSelectedDate] = useState(new Date());
    var { id } = JSON.parse(localStorage.getItem("user"));
    const { transactions, isLoading } = useTransactions(id);

    // Função para calcular o Valor Total de Receitas, Despesas e o Saldo
    function calculateBalance(transactions) {
        let totalIncome = 0;
        let totalExpense = 0;

        // Itera sobre as transações
        for (const transaction of transactions) {
            // Verifica se a transação é uma receita ou despesa
            if (transaction.type === 'INCOME') {
                totalIncome += Number(transaction.value);
            } else if (transaction.type === 'EXPENSE') {
                totalExpense += Number(transaction.value);
            }
        }

        // Calcula o Saldo
        const balance = totalIncome - totalExpense;

        // Retorna um objeto JSON com os resultados
        return {
            totalIncome,
            totalExpense,
            balance
        };
    }

    // Chama a função com as transações como argumento
    const totalBalance = useMemo(() => {
        const balance = calculateBalance(transactions?.filter(item => item.variant === "NORMAL" 
            && new Date(item.date).getMonth() === selectedDate.getMonth() &&
            new Date (item.date).getFullYear() === selectedDate.getFullYear()
        ));

        return balance

    }, [transactions, selectedDate]);

    function handleChangeDate(action = "next" | "prev") {
        if(action === "next") {
            setSelectedDate(addMonths(selectedDate, 1))
        } else {
            setSelectedDate(subMonths(selectedDate, 1))
        }
    }


    return {
        isLoading,
        selectedDate,
        setSelectedDate,
        handleChangeDate,
        totalBalance
    }
}