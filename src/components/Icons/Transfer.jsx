import propTypes from "prop-types";

const Transfer = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} d="M5 17.0869H18.6957" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={className} d="M14.7822 21L18.6953 17.0869" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={className} d="M14.7822 13.1738L18.6953 17.0869" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={className} d="M18.6953 6.91309H4.99965" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={className} d="M8.91309 3.00004L5.00004 6.91309" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={className} d="M8.91309 10.8262L5.00004 6.91313" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default Transfer;

Transfer.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}
