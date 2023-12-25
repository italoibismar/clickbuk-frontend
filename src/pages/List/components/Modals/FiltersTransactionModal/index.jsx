import propTypes from "prop-types";
import cx from "classnames";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { useFiltersModalController } from "./useFiltersTransactionModal";

import { Button } from "../../../../../components/Button";
import { Modal } from "../../../../../components/Modal";

export function FiltersTransactionModal({ open, onClose, setAccount, account, year, setYear }) {

  const {
    handleSelectedBankAccount,
    selectedBankAccountId,
    selectedYear,
    handleChangeYear,
    accounts,
    handleApplyFilters
  } = useFiltersModalController({account, setAccount, year, setYear, onClose});

  return (
    <Modal className="!w-[340px]" open={open} onClose={onClose} title="Filtros">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-base text-gray-800 dark:text-gray-300 tracking-[-0.2px]">Conta</span>
          <div className="flex flex-wrap gap-2">
            {accounts.map(item => (
              <button 
                type="button"
                key={item.id}
                onClick={() => handleSelectedBankAccount(item.id)}
                className={cx(
                  "py-1 px-2 border border-gray-300 dark:border-white/[8%] hover:bg-gray-50 dark:hover:bg-white/[3%] rounded text-sm text-gray-500",
                  item.id === selectedBankAccountId && '!bg-primary-50 dark:!bg-primary-800 dark:hover:!bg-primary-800 hover:!bg-primary-50 !border-primary-50 dark:!border-primary-800 !text-primary-600 dark:!text-primary-300',
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-semibold text-base text-gray-800 dark:text-gray-300 tracking-[-0.2px]">Ano</span>
          <div className="flex items-center justify-between rounded-full">
              <button
              onClick={() => handleChangeYear(-1)}
              >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
              </button>

              <div className="text-center flex-1">
              <span className="text-gray-700 dark:text-white font-semibold tracking-[0.2px]">
                  {selectedYear}
              </span>
              </div>

              <button
              onClick={() => handleChangeYear(1)}
              >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
              </button>
          </div>
        </div>
        <Button
          type="button"
          handleClick={handleApplyFilters}
        >
          Aplicar filtros
        </Button>

      </div>
    </Modal>
  )
}

FiltersTransactionModal.propTypes = { 
  open: propTypes.bool,
  onClose: propTypes.func,
  account: propTypes.oneOfType([
      propTypes.string,
      propTypes.number
  ]),
  setAccount: propTypes.func,
  year: propTypes.number,
  setYear: propTypes.func
}