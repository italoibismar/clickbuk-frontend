import propTypes from "prop-types";

const Filter = ({
    size = 24,
    color = "black",
    className
}) => {
    return ( 
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} fillRule="evenodd" clipRule="evenodd" d="M13.9269 20.7216C13.3183 21.0815 12.5648 21.0932 11.9452 20.7524L10.127 19.7524C9.48791 19.4009 9.09084 18.7294 9.09084 18L9.09084 11.7086L3.61365 6.44161C3.02544 5.87597 2.83988 5.00969 3.14478 4.25274C3.44968 3.49579 4.18388 3 4.99993 3L18.9999 3C19.816 3 20.5502 3.49579 20.8551 4.25274C21.16 5.00969 20.9744 5.87597 20.3862 6.44161L14.909 11.7086L14.909 19C14.909 19.7071 14.5356 20.3617 13.9269 20.7216ZM11.0908 18L12.909 19L12.909 11.2829C12.909 11.1026 12.9577 10.9275 13.0476 10.775C13.0933 10.6974 13.1497 10.6257 13.2159 10.5621L18.9999 5L4.99993 5L10.784 10.5621C10.8501 10.6257 10.9065 10.6974 10.9523 10.775C11.0422 10.9275 11.0908 11.1026 11.0908 11.2829L11.0908 18Z" fill={color}/>
        </svg>
     );
}
 
export default Filter;

Filter.propTypes = {
    size: propTypes.number,
    color: propTypes.string,
    className: propTypes.string
}