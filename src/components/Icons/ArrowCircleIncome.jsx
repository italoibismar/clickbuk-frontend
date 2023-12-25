import propTypes from "prop-types";

const ArrowCircleIncome = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke={ color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={className} d="M16 12L12 8L8 12" stroke={ color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={className} d="M12 16L12 8" stroke={ color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default ArrowCircleIncome;

ArrowCircleIncome.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}



