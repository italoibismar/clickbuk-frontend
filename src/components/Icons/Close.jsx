import propTypes from "prop-types"

const Close = ({
    size = 24,
    color = "black",
    className
}) => {
    return ( 
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} d="M16.9495 7.05023L7.04997 16.9497" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path className={className} d="M7.05005 7.05023L16.9495 16.9497" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
     );
}
 
export default Close;

Close.propTypes = {
    size: propTypes.number,
    color: propTypes.string,
    className: propTypes.string
}