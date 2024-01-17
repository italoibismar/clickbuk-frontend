import propTypes from "prop-types"

import { Swiper, SwiperSlide } from 'swiper/react';

const data = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez'
]

// Import Swiper styles
import 'swiper/css';
import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';


const TransactionMonthSlider = ({ month, setMonth}) => {

  return ( 
    <div className='relative mt-8'>
      <Swiper
        slidesPerView={3}
        centeredSlides
        onSlideChange={(swiper) => {
          setMonth(swiper.realIndex + 1)
        }}
        initialSlide={(month - 1)}
      >
        <SliderNavigation />
        {data.map((month, index) => (
          <SwiperSlide
            key={month}
          >
            {({ isActive }) => (
              <SliderOption 
                index={index}
                isActive={isActive}
                month={month}
              
              />
            )}
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   );
}
 
export default TransactionMonthSlider;

TransactionMonthSlider.propTypes = {
    month: propTypes.number,
    setMonth: propTypes.func
}