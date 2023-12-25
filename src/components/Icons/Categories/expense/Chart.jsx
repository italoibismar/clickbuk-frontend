import propTypes from "prop-types";

const Chart = ({
    size = 24,
    color = "black",
    className
}) => {
    return ( 
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} fillRule="evenodd" clipRule="evenodd" d="M8 5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V8H20C21.1046 8 22 8.89543 22 10V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V13C2 11.8954 2.89543 11 4 11H8V5ZM14 19V5H10V19H14ZM16 19H20V10H16V19ZM8 13V19H4V13H8Z" fill={color}/>
        </svg>
     );
}
 
export default Chart;

Chart.propTypes = {
    size: propTypes.number,
    color: propTypes.string,
    className: propTypes.string
}
