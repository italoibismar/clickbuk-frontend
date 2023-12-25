import propTypes from "prop-types";

const CashIcon = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} fillRule="evenodd" clipRule="evenodd" d="M21 9.55773C21 8.0609 19.7943 6.83259 18.2584 6.70763L17.6224 4.93532C17.0695 3.39463 15.2812 2.60421 13.6908 3.19759L4.13569 6.76269C4.04025 6.7983 3.95378 6.84635 3.87753 6.90413C2.77675 7.32788 2 8.35631 2 9.55773V18.1394C2 19.7193 3.34315 21 5 21L18 21C19.6569 21 21 19.7193 21 18.1394V15.9773C21.5978 15.6475 22 15.0312 22 14.3253V12.4183C22 11.7124 21.5978 11.0961 21 10.7664V9.55773ZM19 10.5113V9.55773C19 9.03112 18.5523 8.60421 18 8.60421L5 8.60421C4.44772 8.60421 4 9.03112 4 9.55773L4 18.1394C4 18.6661 4.44772 19.093 5 19.093L18 19.093C18.5523 19.093 19 18.666 19 18.1394V16.2324H18C16.3431 16.2324 15 14.9517 15 13.3718C15 11.792 16.3431 10.5113 18 10.5113H19ZM15.7301 5.55276L16.1408 6.69717L9.7999 6.69717L14.4196 4.97351C14.9497 4.77572 15.5458 5.03919 15.7301 5.55276ZM17 13.3718C17 12.8452 17.4477 12.4183 18 12.4183H20V14.3253H18C17.4477 14.3253 17 13.8984 17 13.3718Z" fill={color}/>
    </svg>
  );
}

export default CashIcon;

CashIcon.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}