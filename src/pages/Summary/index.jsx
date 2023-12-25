import cx from "classnames";
import * as Tabs from '@radix-ui/react-tabs';

import SummaryByCategory from "./components/SummaryByCategory";
import IncomeVsExpense from "./components/IncomeVsExpense";

const Summary = () => {
    return ( 
        <>
            <div className="p-10 bg-black/[5%] dark:bg-primary-950 min-h-screen">
                <h4 className="text-2xl font-extrabold dark:font-bold text-gray-900 dark:text-gray-50">Resumos</h4>
                <Tabs.Root defaultValue="tab1" orientation="vertical">
                    <Tabs.List className="flex gap-2 pt-8 pb-4" aria-label="Tabs summary">
                        <Tabs.Trigger className={cx("data-[state=active]:!bg-primary-500 data-[state=active]:!text-white bg-white dark:bg-white/[3%] hover:bg-white/[82%] dark:hover:bg-white/[5%] text-sm font-semibold text-gray-600 px-2.5 py-2 rounded-lg tracking-[-0.2px]")} value="tab1">
                            Despesas por categoria
                        </Tabs.Trigger>
                        <Tabs.Trigger  className={cx("data-[state=active]:!bg-primary-500 data-[state=active]:!text-white bg-white dark:bg-white/[3%] hover:bg-white/[82%] dark:hover:bg-white/[5%] text-sm font-semibold text-gray-600 px-2.5 py-2 rounded-lg tracking-[-0.2px]")} value="tab2">
                            Receitas por categoria
                        </Tabs.Trigger>
                        <Tabs.Trigger  className={cx("data-[state=active]:!bg-primary-500 data-[state=active]:!text-white bg-white dark:bg-white/[3%] hover:bg-white/[82%] dark:hover:bg-white/[5%] text-sm font-semibold text-gray-600 px-2.5 py-2 rounded-lg tracking-[-0.2px]")} value="tab3">
                            Despesas X Receitas
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="tab1">
                        <SummaryByCategory type="EXPENSE" />
                    </Tabs.Content>
                    <Tabs.Content value="tab2">
                        <SummaryByCategory type="INCOME" />
                    </Tabs.Content>
                    <Tabs.Content value="tab3">
                        <IncomeVsExpense />
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </>
     );
}
 
export default Summary;