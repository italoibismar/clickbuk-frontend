import { createContext, useEffect, useState } from "react";
import propTypes from "prop-types";
import { useUsers } from "../../../lib/hooks/useUsers";
import { calcularDiferencaDeDias, formatarData } from "../../../lib/Utils";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [areValuesVisible, setAreValuesVisible] = useState(true);
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    const [newTransactionType, setNewTransactionType] = useState("");
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [transactionBeingEdited, setTransactionsBeingEdited] = useState(null);
    const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);
    const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
    const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
    const [accountBeingEdited, setIsAccountBeingEdited] = useState(null);
    const [isNewTransferModalOpen, setIsNewTransferModalOpen] = useState(false);

    function verificarRestricoes(periodoTeste, assinaturaAtiva) {
        if (periodoTeste <= 0 && !assinaturaAtiva) {

        return false;
        } else if (periodoTeste <= 0 && assinaturaAtiva) {

        return true;
        } else {

        return true;
        }
    }

    const { id } = JSON.parse(localStorage.getItem("user"));

    const { user, isLoading, isError } = useUsers(id);

    useEffect(() => {
        const verificarAcesso = async () => {
            if (!isLoading && !isError) {
                const dataAtualFormatada = formatarData(new Date());
                const dataFinalFormatada = formatarData(new Date(user?.trial_period));

                const dataInicial = dataAtualFormatada;
                const dataFinal = dataFinalFormatada;
                const assinaturaAtiva = user?.subscription?.find(assinatura => assinatura?.subscription_status === "active");
                
                const periodoTeste = calcularDiferencaDeDias(dataInicial, dataFinal);

                const temAcesso = verificarRestricoes(periodoTeste, assinaturaAtiva);

                if (!temAcesso) {
                    window.location.href = "./assinatura";
                }
            }
        };

        verificarAcesso();
    }, [user, isLoading, isError]);

    function toggleValueVisibility() {
        setAreValuesVisible(prevState => !prevState)
    }

    function openNewTransactionModal(type) {
        setNewTransactionType(type)
        setIsNewTransactionModalOpen(true)  
    }

    function closeNewTransactionModal() {
        setNewTransactionType(null)
        setIsNewTransactionModalOpen(false)
    }

    function handleOpenEditModal(transaction) {
        setIsEditModalOpen(true)
        setTransactionsBeingEdited(transaction)
    }

    function handleCloseEditModal() {
        setIsEditModalOpen(false)
        setTransactionsBeingEdited(null)
    }

    function openNewCategoryModal() {
        setIsNewCategoryModalOpen(true)  
    }

    function closeNewCategoryModal() {
        setIsNewCategoryModalOpen(false)
    }

    function openNewAccountModal() {
        setIsNewAccountModalOpen(true)
    }
    
    function closeNewAccountModal() {
        setIsNewAccountModalOpen(false)
    }

    const openEditAccountModal = (bankAccount) => {
        setIsEditAccountModalOpen(true)
        setIsAccountBeingEdited(bankAccount)
    }
    
    const closeEditAccountModal = () => {
        setIsAccountBeingEdited(null)
        setIsEditAccountModalOpen(false)
    }

    function openNewTransferModal() {
        setIsNewTransferModalOpen(true)  
    }

    function closeNewTransferModal() {
        setIsNewTransferModalOpen(false)
    }

    return (
        <LayoutContext.Provider
        value={{
            areValuesVisible,
            toggleValueVisibility,
            isNewTransactionModalOpen,
            openNewTransactionModal,
            closeNewTransactionModal,
            newTransactionType,
            isEditModalOpen,
            handleOpenEditModal,
            handleCloseEditModal,
            transactionBeingEdited,
            isNewCategoryModalOpen,
            openNewCategoryModal,
            closeNewCategoryModal,
            openNewAccountModal,
            closeNewAccountModal,
            isNewAccountModalOpen,
            openEditAccountModal,
            closeEditAccountModal,
            isEditAccountModalOpen,
            accountBeingEdited,
            isNewTransferModalOpen,
            openNewTransferModal,
            closeNewTransferModal,
            verificarRestricoes
          }}        
        
        >
            {children}
        </LayoutContext.Provider>
    )
}

LayoutProvider.propTypes = {
    children: propTypes.node
}

