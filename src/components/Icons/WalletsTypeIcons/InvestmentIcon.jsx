import propTypes from "prop-types";

const InvestmentIcon = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} fillRule="evenodd" clipRule="evenodd" d="M16 2C14.8954 2 14 2.89543 14 4V7H10C8.89543 7 8 7.89543 8 9V12H4C2.89543 12 2 12.8954 2 14V20C2 21.1046 2.89543 22 4 22H9H15H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H16ZM14 20V9H10V14V20H14ZM16 20H20V4H16V9V20ZM8 14V20H4V14H8Z" fill={color}/>
    </svg>
  );
}

export default InvestmentIcon;

InvestmentIcon.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}
