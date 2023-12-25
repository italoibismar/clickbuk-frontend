import propTypes from "prop-types";

const Education = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} fillRule="evenodd" clipRule="evenodd" d="M2.27845 8.99443C1.43874 8.59736 1.43877 7.40264 2.27845 7.00558L11.3588 2.71178C11.7647 2.51982 12.2353 2.51982 12.6413 2.71178L21.7216 7.00558C22.4551 7.35242 22.5479 8.30786 22 8.80867V13C22 13.5523 21.5523 14 21 14C20.4477 14 20 13.5523 20 13V9.80854L19 10.2814V14C19 17.866 15.866 21 12 21C8.13399 21 4.99998 17.866 4.99998 14V10.2814L2.27845 8.99443ZM17 9.00001H17.0313L19.146 8.00001L12 4.62089L4.85403 8.00001L6.96878 9.00001H6.99998V9.01476L12 11.3791L17 9.01481V9.00001ZM11.3588 13.2882L6.99998 11.2271V14C6.99998 16.7614 9.23856 19 12 19C14.7614 19 17 16.7614 17 14V11.2271L12.6413 13.2882C12.2353 13.4802 11.7647 13.4802 11.3588 13.2882Z" fill={color}/>
    </svg>
  );
}

export default Education;

Education.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}
