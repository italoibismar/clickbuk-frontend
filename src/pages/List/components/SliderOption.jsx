import { useSwiper } from "swiper/react";
import propTypes from "prop-types";
import cx from 'classnames';

export function SliderOption({ isActive, month, index }) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cx('w-full text-center rounded-full h-12 text-sm text-gray-800 dark:text-gray-400 tracking-[-0.5px] font-medium', 
        isActive && "bg-white dark:bg-white/[3%] dark:text-gray-100"
      )}
    >
      {month}
    </button>
  );
}

SliderOption.propTypes = {
    isActive: propTypes.bool,
    month: propTypes.string,
    index: propTypes.number
}