import cx from "classnames"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Actions from "./Actions";
import { useAccountsController } from "./useAccountsController";
import { SliderNavigation } from "./SliderNavigation";
import { Wallet, WalletSkeleton } from "../Wallet";
import { formatCurrency } from "../../lib/Utils";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const Account = () => {
    const { 
        areValuesVisible,
        toggleValueVisibility,
        windowWidth, 
        sliderState, 
        setSliderState, 
        currentBalance, 
        wallets,
        isLoadingWallet,
        isLoadingTransaction
    } = useAccountsController();
    return ( 
        <div className="p-10 bg-gray-50 dark:bg-white/[3%] min-h-screen">
            <div className="flex items-center justify-between px-6 py-5 bg-white dark:bg-white/[3%] rounded-xl">
                <div className="flex flex-col gap-2">
                    <span className="text-gray-600">Saldo total</span>
                    {(isLoadingTransaction) && (
                        <div className="duration-100 animate-pulse w-[190px] h-[30px] bg-gray-200 dark:bg-white/[5%] rounded"></div>
                    )}
                    {(!isLoadingTransaction) && (
                        <h4 className={cx("text-gray-900 dark:text-gray-50 text-2xl font-extrabold", !areValuesVisible && 'blur-md')}>{formatCurrency(currentBalance)}</h4>
                    )}
                </div>
                <button onClick={toggleValueVisibility}>
                    {areValuesVisible ? (
                        <EyeOpenIcon className="h-6 w-6 text-gray-400 dark:text-gray-600" />
                    ) : (
                        <EyeClosedIcon className="h-6 w-6 text-gray-400 dark:text-gray-600" />
                    )}
                </button>
            </div>

            <Actions />
            <div className="mt-10">
                <Swiper
                    spaceBetween={8}
                    slidesPerView={windowWidth >= 500 ? 2.2 : 1.1}
                    onSlideChange={swiper => {
                    setSliderState({
                        isBeginning: swiper.isBeginning,
                        isEnd: swiper.isEnd
                    })
                    }}
                >
                    <div className="flex justify-between items-center mb-6" slot="container-start">
                    <strong className="text-gray-900 dark:text-gray-50 tracking-[0.2px] text-lg font-bold">
                        Minhas contas
                    </strong>

                    <SliderNavigation
                        isBeginning={sliderState.isBeginning}
                        isEnd={sliderState.isEnd}
                    />
                    </div>
                    {(isLoadingWallet) && (
                        <div className="flex gap-2">
                            <WalletSkeleton items={3} />
                        </div>
                    )}

                    {(!isLoadingWallet) && (
                        <>
                            {wallets.map(wallet => (
                                <SwiperSlide key={wallet.id}>
                                    <Wallet data={wallet} areValuesVisible={areValuesVisible} />
                                </SwiperSlide>
                            ))}
                        </>
                    )}
                </Swiper>
            </div>

        </div>
     );
}
 
export default Account;