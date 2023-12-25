import propTypes from "prop-types";

const CheckingIcon = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} fillRule="evenodd" clipRule="evenodd" d="M11.6489 3.06367C11.8753 2.97878 12.1247 2.97878 12.3511 3.06367L20.3511 6.06367C20.7414 6.21003 21 6.58316 21 7V10C21 10.5523 20.5523 11 20 11H19L19 15L19 19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H18H14L9.99999 21L6 21H4C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19H5L5.00001 15L5.00001 11H4C3.44772 11 3 10.5523 3 10V7C3 6.58316 3.25857 6.21003 3.64888 6.06367L11.6489 3.06367ZM7.00001 11L7.00001 15L7 19H9L9 15L9.00001 11H7.00001ZM11 11L11 15L11 19H13L13 15L13 11H11ZM15 11L15 15L15 19H17L17 15L17 11H15ZM18 9H14L5 9V7.693L12 5.068L19 7.693V9L18 9Z" fill={color}/>
    </svg>
  );
}

export default CheckingIcon;

CheckingIcon.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}

