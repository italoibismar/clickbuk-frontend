import { useMemo, useState } from "react";
import { useWindowWidth } from "../../lib/hooks/useWindowWidth";
import { useTransactions } from "../../lib/hooks/useTransactions";
import { useWallets } from "../../lib/hooks/useWallets";
import { useLayout } from "../Layout/LayoutContext/useLayout";

export function useAccountsController(){
    const windowWidth = useWindowWidth();

    const { id } = JSON.parse(localStorage.getItem("user"));

    const {
        areValuesVisible,
        toggleValueVisibility
    } = useLayout();

    const { transactions, isLoading:isLoadingTransaction } = useTransactions(id);
    const { accounts, isLoading:isLoadingWallet } = useWallets(id);

    const wallets = useMemo(() => {
       const wallet = accounts.map((wallet) => {
            const totalTransactions = transactions.filter(item => item.wallet_id === wallet.id.toString()).reduce((prev, transaction) => {
                if (transaction.type === "INCOME") {
                    return prev + Number(transaction.value)
                }
                return prev - Number(transaction.value)
            }, 0);
    
            const currentBalance = Number(wallet.initial_amount) + totalTransactions
            return {
                ...wallet,
                currentBalance,
            }
        });

        return wallet
    }, [transactions, accounts]);

    const currentBalance = useMemo(() => {
        const totalTransactions = transactions.reduce((prev, transaction) => {
            if (transaction.type === "INCOME") {
                return prev + Number(transaction.value)
            }
            return prev - Number(transaction.value)
        }, 0);

        const totalWallets = accounts.map(item => Number(item.initial_amount)).reduce((prev, wallet) => prev + wallet, 0);

        return totalWallets + totalTransactions;
    }, [transactions, accounts]);


    const [sliderState, setSliderState] = useState({
        isBeginning: true,
        isEnd: false,
    });

    return {
        windowWidth,
        sliderState,
        setSliderState,
        currentBalance,
        wallets,
        areValuesVisible,
        toggleValueVisibility,
        isLoadingWallet,
        isLoadingTransaction
    }
}