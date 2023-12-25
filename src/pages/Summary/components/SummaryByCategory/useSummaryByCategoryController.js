import { useMemo, useState } from "react";
import { useCategories } from "../../../../lib/hooks/useCategories";
import { useTransactions } from "../../../../lib/hooks/useTransactions";
import { addMonths, subMonths } from "date-fns";

export function useSummaryByCategoryController({type}) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    
    function handleChangeDate(action = "next" | "prev") {
        if(action === "next") {
            setSelectedDate(addMonths(selectedDate, 1))
        } else {
            setSelectedDate(subMonths(selectedDate, 1))
        }
    }
    
    var { id } = JSON.parse(localStorage.getItem("user"));
    const { transactions, isLoading:isLoadingTransaction } = useTransactions(id);
    const { categories, isLoading:isLoadingCategory } = useCategories(id);

    const totalByCategories = useMemo(() => {
        const expenses = transactions?.filter(item => item.type === type.toString() && 
            item.variant === "NORMAL" && new Date(item.date).getMonth() === selectedDate.getMonth() &&
            new Date (item.date).getFullYear() === selectedDate.getFullYear()
        );

        const transactionsTotal = expenses.reduce((accumulator, transaction) => {
            return accumulator + Number(transaction.value);
        }, 0);

        const totalByCategory = []

        categories?.forEach(category => {
            let categorySum = 0;
    
            expenses.forEach(expense => {
                if(expense.category_id === category.id.toString()) {
                    categorySum += Number(expense.value)
                }
            });
    
            if(categorySum > 0){
                const percent = `${(categorySum / transactionsTotal * 100).toFixed(0)}%`;

                totalByCategory.push({
                    icon: category.icon,
                    name: category.name,
                    total: categorySum,
                    color: category.color,
                    percent
                });
            }

        });
        
       return totalByCategory.sort((a, b) => Number(b.total) - Number(a.total));

    }, [type, categories, transactions, selectedDate])


    const chartTotal = totalByCategories.reduce((accumulator, transaction) => {
        return accumulator + Number(transaction.total);
    }, 0);

    const hasTransactions = totalByCategories.length > 0;

    return {
        totalByCategories,
        isLoadingTransaction,
        isLoadingCategory,
        handleChangeDate,
        selectedDate,
        chartTotal,
        hasTransactions
    }
}