import propTypes from "prop-types";

const ChevronRight = ({
    size = 24,
    color = "black",
    className
}) => {
    return ( 
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} d="M9 6L15 12L9 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
     );
}
 
export default ChevronRight;

ChevronRight.propTypes = {
    size: propTypes.number,
    color: propTypes.string,
    className: propTypes.string
}
