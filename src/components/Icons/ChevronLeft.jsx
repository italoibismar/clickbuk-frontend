import propTypes from "prop-types";

const ChevronLeft = ({
    size = 24,
    color = "black",
    className
}) => {
    return ( 
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} d="M15 6L9 12L15 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
     );
}
 
export default ChevronLeft;

ChevronLeft.propTypes = {
    size: propTypes.number,
    color: propTypes.string,
    className: propTypes.string
}
