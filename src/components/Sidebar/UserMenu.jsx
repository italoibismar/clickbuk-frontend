import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../../context/ThemeContext";
import cx from "classnames";

import UserMenuDropdown from './UserMenuDropdown';
import Icon from '../Icons/Icon';

const UserMenu = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const { logout } = useContext(AuthContext);
    const { theme, setTheme } = useTheme();

    const navigate = useNavigate();
    return ( 
        <>
            <div className='min-[1180px]:hidden'>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <div className="cursor-pointer flex justify-center items-center text-xl h-14 w-14 bg-primary-500/10 dark:bg-primary-500/[10%] rounded-full">
                            <span className="font-semibold tracking-[0.2px] text-primary-500 dark:text-primary-500">
                                {(user.name && user.name.substr(0, 2).toUpperCase())}
                            </span>
                        </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className="bg-white dark:bg-primary-950 w-[232px] drop-shadow-xl dark:drop-shadow-lg dark:border dark:border-primary-900 absolute z-20 bottom-0 left-10 py-2 rounded-xl" sideOffset={5}>
                        <div className='flex flex-col px-4 py-2'>
                            <strong className='text-gray-900 dark:text-gray-50 font-bold text-base tracking-[0.2px]'>{user.name}</strong>
                            <span className='text-xs text-gray-600 dark:text-gray-500 mt-1 font-medium tracking-[0.4px]'>{user.email}</span>
                        </div>
                        <DropdownMenu.Separator className="w-[85%] m-auto h-[1px] bg-gray-200 dark:bg-white/[8%] my-2" />
                        <DropdownMenu.Item onClick={() => navigate("minha-conta")} className="py-3 flex items-center gap-3 px-4 hover:bg-gray-100 dark:hover:bg-white/[3%] outline-none cursor-pointer">
                            <Icon name="user" className={cx("fill-gray-600 dark:fill-gray-500")} size={22} />
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-500 tracking-[0.2px]">Minha conta</span>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item onClick={() => window.open("https://wa.me/5585988054766?text=Oi,%20pode%20me%20ajudar?")} className="py-3 flex items-center gap-3 px-4 hover:bg-gray-100 dark:hover:bg-white/[3%] outline-none cursor-pointer">
                            <Icon name="support" className={cx("fill-gray-600 dark:fill-gray-500")} size={22} />
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-500 tracking-[0.2px]">Suporte</span>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item onClick={() => logout()} className="py-3 flex items-center gap-3 px-4 hover:bg-gray-100 dark:hover:bg-white/[3%] outline-none cursor-pointer">
                        <Icon name="exit" className={cx("fill-gray-600 dark:fill-gray-500")} size={22} />
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-500 tracking-[0.2px]">Sair</span>
                        </DropdownMenu.Item>

                        <DropdownMenu.Separator className="w-[85%] m-auto h-[1px] bg-gray-200 dark:bg-white/[8%] my-2" />

                        {theme === "ligth" ? (
                            <div onClick={() => setTheme("dark")} className="py-3 flex items-center gap-3 px-4 hover:bg-gray-100 dark:hover:bg-white/[3%] outline-none cursor-pointer">
                                <Icon name="moon" className={cx("fill-gray-600 dark:fill-gray-500")} size={22} />
                                <span className="text-sm font-semibold text-gray-900 dark:text-gray-500 tracking-[0.2px]">Alterar tema</span>
                            </div>
                        ) : (
                            <div onClick={() => setTheme("ligth")} className="py-3 flex items-center gap-3 px-4 hover:bg-gray-100 dark:hover:bg-white/[3%] outline-none cursor-pointer">
                                <Icon name="sun" className={cx("fill-gray-600 dark:fill-gray-500")} size={22} />
                                <span className="text-sm font-semibold text-gray-900 dark:text-gray-500 tracking-[0.2px]">Alterar tema</span>
                            </div>
                        )}
                        
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
            <div className="relative max-[1180px]:hidden flex items-center justify-between px-1.5 py-2 bg-primary-50 border dark:bg-primary-900 border-primary-100 dark:border-gray-900 rounded-xl">
                <div className="flex items-center gap-2">
                    <div className="flex justify-center items-center text-lg h-10 w-10 bg-primary-500/10 dark:bg-primary-500/[10%] rounded-full">
                        <span className="font-semibold tracking-[0.2px] text-primary-500 dark:text-primary-500">
                            {(user.name && user.name.substr(0, 2).toUpperCase())}
                        </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">Olá, {user.name.split(" ")[0]}</span>
                </div>
                <div className="relative">
                    <UserMenuDropdown />
                </div>
            </div>
        </>
     );
}
 
export default UserMenu;