import { useSwiper } from "swiper/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export const SliderNavigation = () => {
    const swiper = useSwiper();
    return ( 
        <>
            <button
            className="absolute left-0 top-1/2 -translate-y-1/2 dark:from-gray-900 to-transparent  z-10 flex items-center justify-center"
            onClick={() => swiper.slidePrev()}
            >
                <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
    
            <button
            className="absolute right-0 top-1/2 -translate-y-1/2 dark:from-gray-900 to-transparent z-10 flex items-center justify-center"
            onClick={() => swiper.slideNext()}
            >
                <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
        </>
     );
}
 
export default SliderNavigation;