import { NavLink } from "react-router-dom";
import cx from "classnames";

import Icon from "../Icons/Icon";

import SubscribeTrial from "./SubscribeTrial"

import LogoLigth from "../../assets/svg/logo.svg";
import LogoDark from "../../assets/svg/logo-clickbuq-dark.svg";
import IconLogo from "../../assets/svg/icon-logo.svg";
import UserMenu from "./UserMenu";
import { useTheme } from "../../context/ThemeContext";

const actions = [
    {
        icon: "list",
        title: "Listagem",
        path: ""
    },
    {
        icon: "category",
        title: "Categorias",
        path: "categorias"
    },
    {
        icon: "summary",
        title: "Resumos",
        path: "resumos"
    }
];

const Sidebar = () => {
    const { theme } = useTheme();
    return ( 
        <div className="bg-gray-50 dark:bg-white/[3%] flex flex-col max-[1180px]:items-center min-h-screen px-6 py-10">
            {theme === "ligth" ? (
                <>
                    <img src={IconLogo} className="w-[32px] h-[32px] min-[1180px]:hidden" alt="Clickbuk" />
                    <img className="w-[144px] max-[1180px]:hidden" src={LogoLigth} alt="Clickbuk" />
                </>
            ) : (
                <>
                    <img src={IconLogo} className="w-[32px] h-[32px] min-[1180px]:hidden" alt="Clickbuk" />
                    <img className="w-[144px] max-[1180px]:hidden" src={LogoDark} alt="Clickbuk" />
                </>
            )}
            <div className="flex flex-col gap-3 mt-10">
                {actions.map((action, index) =>    
                    <NavLink 
                        key={index} 
                        to={`/${action.path}`}
                        className={({ isActive }) => isActive ? "flex items-center gap-3 px-4 py-3.5 bg-primary-500 rounded-xl" : "flex items-center gap-3 px-4 py-3.5 hover:bg-gray-200/70 dark:hover:bg-white/[3%] rounded-xl"}
                    >
                        {({ isActive }) => (
                            <>
                                { isActive === true ? (
                                    <>
                                        <Icon name={action.icon} className={cx("fill-white")} size={20} />
                                        <span className="max-[1180px]:hidden text-white font-semibold text-sm tracking-[0.2px] leading-[100%]">{action.title}</span>
                                    </>
                                ) : (
                                    <>
                                        <Icon name={action.icon} className={cx("fill-gray-600 dark:fill-gray-500")} size={20} />
                                        <span className="max-[1180px]:hidden text-gray-600 font-medium dark:text-gray-500 text-sm tracking-[0.2px]">{action.title}</span>
                                    </>
                                ) }
                            </>
                        )}
                    </NavLink>
                )}
            </div>



            <div className="mt-auto flex flex-col gap-6">
                <SubscribeTrial />
                <UserMenu />
            </div>
        </div>
     );
}
 
export default Sidebar;