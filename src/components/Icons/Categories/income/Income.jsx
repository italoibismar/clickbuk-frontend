import propTypes from "prop-types";

const Income = ({
    size = 24,
    color = "black",
    className
  }) => {
  return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={className} fillRule="evenodd" clipRule="evenodd" d="M1 8.5C1 7.94772 1.44772 7.5 2 7.5H14.5C15.0523 7.5 15.5 7.94772 15.5 8.5C15.5 9.05228 15.0523 9.5 14.5 9.5H2C1.44772 9.5 1 9.05228 1 8.5Z" fill={color}/>
      <path className={className} fillRule="evenodd" clipRule="evenodd" d="M5 16.5C5 15.9477 5.44772 15.5 6 15.5H8C8.55228 15.5 9 15.9477 9 16.5C9 17.0523 8.55228 17.5 8 17.5H6C5.44772 17.5 5 17.0523 5 16.5Z" fill={color}/>
      <path className={className} fillRule="evenodd" clipRule="evenodd" d="M9.5 16.5C9.5 15.9477 9.94772 15.5 10.5 15.5H14.5C15.0523 15.5 15.5 15.9477 15.5 16.5C15.5 17.0523 15.0523 17.5 14.5 17.5H10.5C9.94772 17.5 9.5 17.0523 9.5 16.5Z" fill={color}/>
      <path className={className} fillRule="evenodd" clipRule="evenodd" d="M3.59184 5.08985C3.24718 5.43063 3 6.1299 3 7.89V16.11C3 17.8701 3.24718 18.5694 3.59184 18.9102C3.94045 19.2548 4.65701 19.5 6.44 19.5H17.56C19.343 19.5 20.0596 19.2548 20.4082 18.9102C20.7528 18.5694 21 17.8701 21 16.11V14.03C21 13.4777 21.4477 13.03 22 13.03C22.5523 13.03 23 13.4777 23 14.03V16.11C23 17.8599 22.8022 19.3556 21.8143 20.3323C20.8304 21.3052 19.327 21.5 17.56 21.5H6.44C4.67299 21.5 3.16955 21.3052 2.18566 20.3323C1.19782 19.3556 1 17.8599 1 16.11V7.89C1 6.1401 1.19782 4.64437 2.18566 3.66765C3.16955 2.69483 4.67299 2.5 6.44 2.5H14.5C15.0523 2.5 15.5 2.94772 15.5 3.5C15.5 4.05228 15.0523 4.5 14.5 4.5H6.44C4.65701 4.5 3.94045 4.74517 3.59184 5.08985Z" fill={color}/>
      <path className={className} fillRule="evenodd" clipRule="evenodd" d="M20 2.5C20.5523 2.5 21 2.94772 21 3.5V7.08579L21.2929 6.79289C21.6834 6.40237 22.3166 6.40237 22.7071 6.79289C23.0976 7.18342 23.0976 7.81658 22.7071 8.20711L20.7071 10.2071C20.4211 10.4931 19.991 10.5787 19.6173 10.4239C19.2436 10.2691 19 9.90446 19 9.5V3.5C19 2.94772 19.4477 2.5 20 2.5Z" fill={color}/>
      <path className={className} fillRule="evenodd" clipRule="evenodd" d="M17.2929 6.79289C17.6834 6.40237 18.3166 6.40237 18.7071 6.79289L20.7071 8.79289C21.0976 9.18342 21.0976 9.81658 20.7071 10.2071C20.3166 10.5976 19.6834 10.5976 19.2929 10.2071L17.2929 8.20711C16.9024 7.81658 16.9024 7.18342 17.2929 6.79289Z" fill={color}/>
    </svg>
    );
  }
  
  export default Income;

  Income.propTypes = {
    size: propTypes.number,
    color: propTypes.string,
    className: propTypes.string
  }
