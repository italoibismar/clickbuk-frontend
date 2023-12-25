import { useMemo, useState } from "react";

import { useCategories } from "../../lib/hooks/useCategories"

export function useCategoryController(){
    const [type, setType] = useState("EXPENSE");
    const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);
    const [categoryBeingEdited, setCategoryBeingEdited] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    var { id } = JSON.parse(localStorage.getItem("user"));

    const { categories:data, isLoading } = useCategories(id);

    let applyFilters = useMemo(() => {
        const filter = data?.filter(item => {
            return item.type.toString().includes(type)
    });

        return filter
    }, [data, type]);

    const categories = applyFilters;

    function openNewCategoryModal() {
        setIsNewCategoryModalOpen(true)  
    }

    function closeNewCategoryModal() {
        setIsNewCategoryModalOpen(false)
    }

    function handleOpenEditModal(transaction) {
        setIsEditModalOpen(true)
        setCategoryBeingEdited(transaction)
    }

    function handleCloseEditModal() {
        setIsEditModalOpen(false)
        setCategoryBeingEdited(null)
    }
    
    
    return {
        categories,
        type,
        setType,
        isNewCategoryModalOpen,
        openNewCategoryModal,
        closeNewCategoryModal,
        handleOpenEditModal,
        handleCloseEditModal,
        categoryBeingEdited,
        isEditModalOpen,
        isLoading
    }
}