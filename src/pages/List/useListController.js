import { useMemo, useState } from "react";
import { useTransactions } from "../../lib/hooks/useTransactions";

export function useListController() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [transactionBeingEdited, setTransactionsBeingEdited] = useState(null);
    const [isEditTransferModalOpen, setIsEditTransferModalOpen] = useState(false);
    const [tranferBeingEdited, setTransferBeingEdited] = useState(null);
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [type, setType] = useState("");
    const [account, setAccount] = useState(undefined);

    const today = new Date();

    const getMonth = today.getMonth();
    const getYear = today.getFullYear();

    const [year, setYear] = useState(getYear);
    const [month, setMonth] = useState(getMonth);



    var { id } = JSON.parse(localStorage.getItem("user"));

    const { transactions:data, isLoading, isInitialLoading } = useTransactions(id);

    // Função para filtrar transações
    function filtrarTransacoes(lista, ano, mes, tipoConta, tipoTransacao) {
        return lista.filter(transacao => {
            const dataTransacao = new Date(transacao.date);

            // Filtrar por mês e ano
            const filtroMesAno = (!ano || dataTransacao.getFullYear() === ano) && (!mes || dataTransacao.getMonth() + 1 === mes);

            // Filtrar por conta
            const filtroTipoConta = !tipoConta || transacao.wallet_id === tipoConta;

            // Filtrar por tipo de transação
            const filtroTipoTransacao = !tipoTransacao || transacao.type === tipoTransacao;

            return filtroMesAno && filtroTipoConta && filtroTipoTransacao;
        });
    }

    const applyFilters = useMemo(() => {
        const transacoesFiltradas = filtrarTransacoes(data, year, month, account, type);

        return transacoesFiltradas
    }, [data, year, month, account, type])

    const transactions = applyFilters.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));

    function handleOpenEditModal(transaction) {
        setIsEditModalOpen(true)
        setTransactionsBeingEdited(transaction)
    }

    function handleCloseEditModal() {
        setIsEditModalOpen(false)
        setTransactionsBeingEdited(null)
    }

    function handleOpenEditTransferModal(transaction) {
        setIsEditTransferModalOpen(true)
        setTransferBeingEdited(transaction)
    }

    function handleCloseEditTransferModal() {
        setIsEditModalOpen(false)
        setTransferBeingEdited(null)
    }

    function handleOpenFiltersModal() {
        setIsFiltersModalOpen(true)
    }

    function handleCloseFiltersModal() {
        setIsFiltersModalOpen(false)
    }

    return {
        isEditModalOpen,
        handleOpenEditModal,
        handleCloseEditModal,
        transactionBeingEdited,
        isFiltersModalOpen,
        handleOpenFiltersModal,
        handleCloseFiltersModal,
        type,
        setType,
        setYear,
        account,
        setAccount,
        month,
        setMonth,
        transactions,
        isLoading,
        year,
        isEditTransferModalOpen,
        tranferBeingEdited,
        handleOpenEditTransferModal,
        handleCloseEditTransferModal,
        isInitialLoading
    }
}