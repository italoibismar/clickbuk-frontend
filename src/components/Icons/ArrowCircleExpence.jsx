import propTypes from "prop-types";

const ArrowCircleExpence = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={className}  d="M8 12L12 16L16 12" stroke={ color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={className}  d="M12 8L12 16" stroke={ color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default ArrowCircleExpence;

ArrowCircleExpence.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}


