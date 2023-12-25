import { useEffect, useRef, useState } from "react";
import propTypes from "prop-types"
import cx from 'classnames';
import Icon from "../../../components/Icons/Icon";
import { useWallets } from "../../../lib/hooks/useWallets";

const TransactionFilterDropdown = ({setYear, setAccount}) => {
    const [open, setOpen] = useState(false);
    const [selectedBankAccountId, setSelectedBankAccountId] = useState("");
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    var { id } = JSON.parse(localStorage.getItem("user"));

    const { accounts } = useWallets(id)

    const transactionFilterDropdownRef = useRef();
    
    useEffect(() => {
        let handler = (e) => {
            if(!transactionFilterDropdownRef.current.contains(e.target)){
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);
    
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    }, []);

    function handleChangeYear(step) {
        setSelectedYear(prevState => prevState + step);
      }

      function handleClick(e) {
        e.preventDefault();
        setYear(selectedYear);
        setAccount(selectedBankAccountId)
        setOpen(false)
      }

      function handleSelectedBankAccount(bankAccountId) {
        setSelectedBankAccountId(prevState => (
          prevState === bankAccountId
            ? ""
            : bankAccountId
        ));
      }
    return ( 
        <div className="relative" ref={transactionFilterDropdownRef}>
            <button onClick={() => setOpen(!open)}>
                <Icon name="filter" className={cx("fill-gray-600 dark:fill-gray-600")} />
            </button>
            {open && (
                <div
                    className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 px-4 py-6 w-[300px] drop-shadow-xl absolute z-20 right-0 top-8 rounded-xl"
                >
                    <div>
                        <span className="text-sm font-extrabold tracking-[0.2px] text-gray-600 dark:text-gray-50 dark:font-medium">
                        Conta
                        </span>
                    </div>

                    <div className="mt-2 flex gap-2">
                        {accounts?.map(account => (
                        <button
                            key={account.id}
                            onClick={() => handleSelectedBankAccount(account.id)}
                            className={cx('bg-gray-100 dark:bg-gray-700 transition-colors p-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white', {
                                '!bg-violet-600 text-white dark:!bg-violet-600': account.id === selectedBankAccountId,
                                })}
                        >
                            {account.name}
                        </button>
                        ))}
                    </div>
                    <div className="mt-4">
                        <span className="text-sm font-extrabold tracking-[0.2px] text-gray-600 dark:text-gray-50 dark:font-medium">
                        Ano
                        </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between p-3 rounded-full">
                        <button
                        onClick={() => handleChangeYear(-1)}
                        className="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-full transition-colors"
                        >
                        <Icon name="chevron-left" className={cx("bg-gray-100 stroke-gray-500 dark:stroke-gray-300")} />
                        </button>

                        <div className="text-center flex-1">
                        <span className="text-gray-700 dark:text-white font-semibold tracking-[0.2px]">
                            {selectedYear}
                        </span>
                        </div>

                        <button
                        onClick={() => handleChangeYear(1)}
                        className="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-full transition-colors"
                        >
                        <Icon name="chevron-rigth" className={cx("bg-gray-100 stroke-gray-500 dark:stroke-gray-300")} />
                        </button>
                    </div>
                    <button
                    onClick={handleClick}
                    className="mt-6 w-full text-sm tracking-[0.2px] bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring focus:ring-purple-300 px-4 py-3 leading-5 rounded-xl font-extrabold transition-colors text-white"
                    >
                        Aplicar filtros
                    </button>
                </div>
            )}
        </div>        
     );
}
 
export default TransactionFilterDropdown;

TransactionFilterDropdown.propTypes = {
    setYear: propTypes.func,
    setAccount: propTypes.func
}