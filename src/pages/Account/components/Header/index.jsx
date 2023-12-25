import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const Header = () => {
    const navigate = useNavigate();
    return ( 
        <section className="bg-white dark:bg-white/[3%] border-b border-gray-300 dark:border-white/[6%]">
            <div className="max-w-[1096px] m-auto px-6">
                <div className="flex justify-between items-center py-7">
                    <button onClick={() => navigate("/")}>
                        <ArrowLeftIcon className="w-6 h-6 text-gray-500" />
                    </button>

                    <span className="text-lg text-gray-900 dark:text-gray-50 tracking-[0.2px] font-bold">
                        Minha conta
                    </span>

                    <div></div>
                </div>
            </div>
        </section>
     );
}
 
export default Header;