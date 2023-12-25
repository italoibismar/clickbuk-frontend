import propTypes from "prop-types";

const Home = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} fillRule="evenodd" clipRule="evenodd" d="M13.2279 2.68814C12.5057 2.12641 11.4944 2.12641 10.7722 2.68814L2.38841 9.20884C1.63605 9.79401 2.04989 11 3.00297 11H4.00005V19C4.00005 20.1046 4.89548 21 6.00005 21H18.0001C19.1046 21 20.0001 20.1046 20.0001 19V11H20.9971C21.9492 11 22.3648 9.79463 21.6117 9.20884L13.2279 2.68814ZM15.0001 19H18.0001V10.01C18.0001 9.69295 18.1461 9.41003 18.3746 9.22486L12.0001 4.26685L5.62546 9.22486C5.85399 9.41004 6.00005 9.69297 6.00005 10.01V19H9.00005V14C9.00005 12.3431 10.3432 11 12.0001 11C13.6569 11 15.0001 12.3431 15.0001 14V19ZM11.0001 19H13.0001V14C13.0001 13.4477 12.5523 13 12.0001 13C11.4478 13 11.0001 13.4477 11.0001 14V19Z" fill={color}/>
    </svg>
  );
}

export default Home;

Home.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}

