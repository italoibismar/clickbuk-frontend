import propTypes from "prop-types";

const Grocery = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} fillRule="evenodd" clipRule="evenodd" d="M3.60006 2.70006C3.15823 2.36869 2.53143 2.45823 2.20006 2.90006C1.86869 3.34189 1.95823 3.96869 2.40006 4.30006L4.10781 5.58087L6.84679 17.4498C7.0562 18.3572 7.86426 19.0001 8.79557 19.0001H17.5001C18.0523 19.0001 18.5001 18.5523 18.5001 18.0001C18.5001 17.4478 18.0523 17.0001 17.5001 17.0001L8.79557 17.0001L8.53605 15.8755L15.8487 15.2661C18.2049 15.0697 20.1016 13.2497 20.3948 10.9035L20.8518 7.24807C21.001 6.05436 20.0702 5 18.8672 5H6.0216C5.89844 4.59417 5.64897 4.23674 5.30781 3.98087L3.60006 2.70006ZM6.48787 7L8.08165 13.9064L15.6826 13.273C17.0964 13.1552 18.2343 12.0632 18.4103 10.6555L18.8672 7H6.48787Z" fill={color}/>
        <path className={className} d="M10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21Z" fill={color}/>
        <path className={className} d="M16 22C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22Z" fill={color}/>
    </svg>
  );
}

export default Grocery;

Grocery.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}
