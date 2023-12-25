import CategoryIcon from "../../../components/Icons/Categories/CategoryIcon";

import { useCategoryController } from "../useCategoryController";
import { EditCategoryModal } from "./Modals/EditCategoryModal"

const Category = (category) => {
    const {
        handleOpenEditModal,
        handleCloseEditModal,
        categoryBeingEdited,
        isEditModalOpen
    } = useCategoryController();
    
    return ( 
        <>
            {categoryBeingEdited && (
                <EditCategoryModal 
                    open={isEditModalOpen}
                    onClose={handleCloseEditModal}
                    category={categoryBeingEdited}
                />
            )}
            <div className="flex flex-col">
                <div className="h-[1px] bg-gray-100 dark:bg-white/[3%] mb-3"></div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div style={{ backgroundColor: `${category.color}18` }}  className="w-10 h-10 rounded-full flex justify-center items-center">
                            <CategoryIcon color={category.color} name={category.icon} size={24}/>
                        </div>
                        <span className="text-sm text-gray-900 dark:text-gray-50 font-bold">{category.name}</span>
                    </div>

                    <button onClick={() => handleOpenEditModal(category)} className="w-full max-w-[96px] border border-solid rounded-lg border-gray-300 dark:border-white/[8%] py-2.5 text-sm font-bold text-gray-900 dark:text-gray-50 tracking-[-0.2px] hover:bg-gray-50 dark:hover:bg-white/[2%]">
                        Editar
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default Category;