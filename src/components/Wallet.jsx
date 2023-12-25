import cx from "classnames"
import WalletIcon from "./Icons/WalletsTypeIcons/WalletIcon";
import { formatCurrency } from "../lib/Utils";
import { useLayout } from "./Layout/LayoutContext/useLayout";
import propTypes from "prop-types";

export const Wallet = ({data, areValuesVisible}) => {
    const { currentBalance, name, type, color } = data;
    const { openEditAccountModal } = useLayout();

    return ( 
        <div onClick={() => openEditAccountModal(data)} className="p-5 bg-white dark:bg-white/[3%] dark:hover:bg-white/[4%] rounded-2xl h-[200px] cursor-pointer flex flex-col justify-between">
            <div className="relative">
                <div style={{ backgroundColor: `${color}18` }} className={cx(`flex items-center justify-center w-[46px] h-[46px] rounded-full`)}>
                    <WalletIcon name={type} color={color} />
                </div>

                <span className="text-gray-900 dark:text-gray-50 font-semibold tracking-[0.2px] mt-4 block">
                {name}
                </span>
            </div>

            <div>
                <span
                className={cx(
                    'text-gray-900 dark:text-gray-50 font-semibold tracking-[0.2px] block', !areValuesVisible && 'blur-sm'
                )}
                >
                {formatCurrency(currentBalance)}
                </span>
                <small className="text-sm text-gray-600">Saldo atual</small>
            </div>
        </div>
     );
}

export const WalletSkeleton = ({items}) => {
    return (
        <>
            {Array(items).fill(0).map((_, index) => 
                <div key={index} className="duration-100 p-5 bg-white dark:bg-white/[3%] rounded-2xl h-[200px] cursor-pointer flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <div className="animate-pulse w-[48px] h-[48px] bg-gray-200 dark:bg-white/[5%] rounded-full"></div>
                        <div className="animate-pulse w-[132px] h-[20px] bg-gray-200 dark:bg-white/[5%] rounded-sm"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="animate-pulse w-[80px] h-[20px] bg-gray-200 dark:bg-white/[5%] rounded-sm"></div>
                        <div className="animate-pulse w-[100px] h-[14px] bg-gray-200 dark:bg-white/[5%] rounded-sm"></div>
                    </div>
                </div>
                
            )}
        </>
    )
}

Wallet.propTypes = {
    data: propTypes.object,
    areValuesVisible: propTypes.bool
}

WalletSkeleton.propTypes = {
    items: propTypes.number
}