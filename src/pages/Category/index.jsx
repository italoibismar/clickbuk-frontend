import CategoryTypeDropdown from "./components/CategoryTypeDropdown";
import Category from "./components/Category";
import { useCategoryController } from "./useCategoryController";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import NewCategoryModal from "./components/Modals/NewCategoryModal";
import { useNewCategoryModalController } from "./components/Modals/NewCategoryModal/useNewCategoryModalController";
import { Spinner } from "../../components/Spinner";

const Categories = () => {
    
    const {
        categories,
        type,
        setType,
        isLoading
    } = useCategoryController();

    const {
        isNewCategoryModalOpen,
        openNewCategoryModal
    } = useNewCategoryModalController();

    return ( 
        <>
            {isNewCategoryModalOpen && (
                <NewCategoryModal />
            )}
            <div className="p-10 bg-black/[5%] dark:bg-primary-950 min-h-screen">
                <div className="flex justify-between items-center">
                    <h4 className="text-2xl font-extrabold dark:font-bold text-gray-900 dark:text-gray-50">Categorias</h4>
                    <button 
                        onClick={openNewCategoryModal}
                        className="text-sm text-primary-600 font-bold py-2 px-3 bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-900/[70%] rounded-lg flex items-center gap-1"
                    >
                        <PlusCircledIcon className="w-6 h-6" />
                        Nova categoria
                    </button>
                </div>
                {isLoading && (
                    <div className="bg-white dark:bg-white/[3%] mt-8 rounded-xl min-h-[500px] p-6 flex flex-col items-center">
                        <div className="flex flex-1 justify-center h-full items-center">
                            <Spinner className="w-10 h-10 dark:text-white/[10%]" />
                        </div>
                    </div>
                )}

                {!isLoading && (
                    <div className="bg-white dark:bg-white/[3%] mt-8 rounded-xl min-h-[500px] p-6">
                            <>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 dark:text-gray-50 font-bold text-lg">
                                        {categories.filter(item => item.type === type).length}
                                        {categories.filter(item => item.type === type).length > 1 ? " Categorias " : " Categoria "}
                                        {type === "EXPENSE" ? "de Despesa" : "de Receita"}
                                    </span>
                                    <CategoryTypeDropdown type={type} setType={setType} />
                                </div>
                                <div className="mt-7 flex flex-col gap-3">
                                    {categories?.map((category, index) =>
                                        <div key={index}>
                                            <Category {...category} />
                                        </div>
                                    )}
                                </div>
                            </>
                    </div>
                )}
            </div>
        </>
     );
}
 
export default Categories;