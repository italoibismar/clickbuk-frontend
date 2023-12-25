import propTypes from "prop-types"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import cx from "classnames"

import { ChevronDownIcon } from '@radix-ui/react-icons';
import Icon from "../../../components/Icons/Icon";

const TransactionTypeDropdown = ({ type, setType }) => {

    return ( 
        <div className="relative">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button className="flex items-center gap-2 bg-white dark:bg-white/[3%] hover:bg-white/[72%] dark:hover:bg-white/[5%] px-4 py-3.5 rounded-xl outline-none" aria-label="Transaction type dropdwon">
                        {type === "" && <Icon name="transaction" size={20} className={cx("stroke-gray-600 dark:stroke-gray-500")} />}
                        {type === "INCOME" && <Icon name="income" size={20} className={cx("stroke-gray-600 dark:stroke-gray-500")} />}
                        {type === "EXPENSE" && <Icon name="expense" size={20} className={cx("stroke-gray-600 dark:stroke-gray-500")} />}

                        <span className="text-sm text-gray-600 dark:text-gray-500 font-semibold dark:font-medium tracking-[0.2px]">
                        {type === "" && "Trasações"}
                        {type === "INCOME" && "Receitas"}
                        {type === "EXPENSE" && "Despesas"}
                        </span>
                        <ChevronDownIcon className="text-gray-600 w-5 h-5"/>
                    </button>  
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content className="w-[200px] bg-white dark:bg-primary-950 py-2 rounded-xl z-10 flex flex-col gap-1 drop-shadow-xl dakr:drop-shadow-lg dark:border dark:border-primary-900" sideOffset={8}>
                    <DropdownMenu.Item onClick={() => setType("")} className={cx("py-3 flex items-center gap-3 px-4 hover:bg-gray-100 dark:hover:bg-white/[3%] outline-none cursor-pointer", type === "" && "!bg-primary-50 dark:!bg-primary-900 hover:!bg-primary-50 dark:hover:!bg-primary-900")}>
                        <Icon name="transaction" size={22} className={cx("stroke-gray-600", type === "" && "stroke-primary-500")} />
                        <span className={cx("text-sm font-semibold text-gray-900 dark:text-gray-400 tracking-[0.2px]", type === "" && "!font-extrabold dark:!text-gray-50")}>Transações</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onClick={() => setType("EXPENSE")} className={cx("py-3 flex items-center gap-3 px-4 hover:bg-gray-100 dark:hover:bg-white/[3%] outline-none cursor-pointer", type === "EXPENSE" && "!bg-primary-50 dark:!bg-primary-900 hover:!bg-primary-50 dark:hover:!bg-primary-900")}>
                        <Icon name="expense" size={20} className={cx("stroke-gray-600", type === "EXPENSE" && "stroke-primary-500")} />
                        <span className={cx("text-sm font-semibold text-gray-900 dark:text-gray-400 tracking-[0.2px]", type === "EXPENSE" && "!font-extrabold dark:!text-gray-50")}>Despesas</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onClick={() => setType("INCOME")} className={cx("py-3 flex items-center gap-3 px-4 hover:bg-gray-100 dark:hover:bg-white/[3%] outline-none cursor-pointer", type === "INCOME" && "!bg-primary-50 dark:!bg-primary-900 hover:!bg-primary-50 dark:hover:!bg-primary-900")}>
                        <Icon name="income" size={20} className={cx("stroke-gray-600", type === "INCOME" && "stroke-primary-500")} />
                        <span className={cx("text-sm font-semibold text-gray-900 dark:text-gray-400 tracking-[0.2px]", type === "INCOME" && "!font-extrabold dark:!text-gray-50")}>Receitas</span>
                    </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </div>    
     );
}
 
export default TransactionTypeDropdown;

TransactionTypeDropdown.propTypes = {
    type: propTypes.string,
    setType: propTypes.func
}