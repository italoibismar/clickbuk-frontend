import propTypes from "prop-types";

const User = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={className} fillRule="evenodd" clipRule="evenodd" d="M11 1.83331C8.4687 1.83331 6.41667 3.88534 6.41667 6.41665C6.41667 8.94795 8.4687 11 11 11C13.5313 11 15.5833 8.94795 15.5833 6.41665C15.5833 3.88534 13.5313 1.83331 11 1.83331ZM8.25 6.41665C8.25 4.89786 9.48122 3.66665 11 3.66665C12.5188 3.66665 13.75 4.89786 13.75 6.41665C13.75 7.93543 12.5188 9.16665 11 9.16665C9.48122 9.16665 8.25 7.93543 8.25 6.41665Z" fill={color}/>
    <path className={className} fillRule="evenodd" clipRule="evenodd" d="M7.33333 12.8333C4.80203 12.8333 2.75 14.8853 2.75 17.4166V18.3333C2.75 19.3458 3.57081 20.1666 4.58333 20.1666H17.4167C18.4292 20.1666 19.25 19.3458 19.25 18.3333V17.4166C19.25 14.8853 17.198 12.8333 14.6667 12.8333H7.33333ZM4.58333 17.4166C4.58333 15.8979 5.81455 14.6666 7.33333 14.6666H14.6667C16.1855 14.6666 17.4167 15.8979 17.4167 17.4166V18.3333H4.58333V17.4166Z" fill={color}/>
    </svg>
  );
}

export default User;

User.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}
