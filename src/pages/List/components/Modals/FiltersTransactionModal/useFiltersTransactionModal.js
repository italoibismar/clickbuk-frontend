import { useState } from "react";
import { useWallets } from "../../../../../lib/hooks/useWallets";

export function useFiltersModalController({account, setAccount, year, setYear, onClose}) {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState(account);
  const [selectedYear, setSelectedYear] = useState(year);

  var { id } = JSON.parse(localStorage.getItem("user"));
  const { accounts } = useWallets(id);

  function handleSelectedBankAccount(bankAccountId) {
    setSelectedBankAccountId(prevState => (
      prevState === bankAccountId
        ? undefined
        : bankAccountId
    ));
  }
  function handleChangeYear(step) {
    setSelectedYear(prevState => prevState + step);
  }

  function handleApplyFilters() {
    setAccount(selectedBankAccountId);
    setYear(selectedYear);
    onClose();
  }

  return {
    selectedBankAccountId,
    handleSelectedBankAccount,
    selectedYear,
    handleChangeYear,
    accounts,
    setSelectedBankAccountId,
    setSelectedYear,
    handleApplyFilters
  }
}