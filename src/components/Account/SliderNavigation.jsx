import { useSwiper } from "swiper/react"
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

export function SliderNavigation({ isBeginning, isEnd }) {
  const swiper = useSwiper()

  return (
    <div className="flex gap-2">
      <button
        className="p-1 rounded-full enabled:hover:bg-black/10 dark:enabled:hover:bg-white/[3%] transition-colors disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
      </button>

      <button
        className="p-1 rounded-full enabled:hover:bg-black/10 dark:enabled:hover:bg-white/[3%] transition-colors disabled:opacity-40"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        {/* <div  className="text-white w-6 h-6">{">"}</div> */}
        <ChevronRightIcon className="w-5 h-5 text-gray-600" onClick={() => swiper.slideNext()} />
      </button>
    </div>
  )
}
