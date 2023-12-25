import { useMemo, useState } from "react";
import { useCategories } from "../../lib/hooks/useCategories";
import { useTransactions } from "../../lib/hooks/useTransactions";
import { addMonths, subMonths } from "date-fns";

export function useSummaryController() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    
    function handleChangeDate(action = "next" | "prev") {
        if(action === "next") {
            setSelectedDate(addMonths(selectedDate, 1))
        } else {
            setSelectedDate(subMonths(selectedDate, 1))
        }
    }
    
    var { id } = JSON.parse(localStorage.getItem("user"));
    const { transactions, isLoading } = useTransactions(id);
    const { categories } = useCategories(id);

    const totalByCategories = useMemo(() => {
        const expenses = transactions?.filter(item => item.type === "EXPENSE" && 
            item.variant === "NORMAL" && new Date(item.date).getMonth() === selectedDate.getMonth() &&
            new Date (item.date).getFullYear() === selectedDate.getFullYear()
        );

        const expensesTotal = expenses.reduce((accumulator, expensive) => {
            return accumulator + Number(expensive.value);
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
                const percent = `${(categorySum / expensesTotal * 100).toFixed(0)}%`;

                totalByCategory.push({
                    icon: category.icon,
                    name: category.name,
                    total: categorySum,
                    color: category.color,
                    percent
                });
            }

        });
        
       return totalByCategory

    }, [categories, transactions, selectedDate])




    return {
        totalByCategories,
        isLoading,
        handleChangeDate,
        selectedDate
    }
}