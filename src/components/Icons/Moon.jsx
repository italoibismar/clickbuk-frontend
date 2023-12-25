import propTypes from "prop-types";

const Moon = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={className} fillRule="evenodd" clipRule="evenodd" d="M13.574 3.13735C12.7837 2.99786 12.1416 3.79862 12.4769 4.54563C12.8127 5.29358 13 6.12358 13 7.00002C13 10.3137 10.3137 13 7 13C6.12356 13 5.29356 12.8127 4.54561 12.477C3.79866 12.1416 2.99783 12.7837 3.13734 13.574C3.8823 17.7942 7.56575 21 12 21C16.9706 21 21 16.9706 21 12C21 7.56576 17.7942 3.88231 13.574 3.13735ZM14.8809 5.61814C17.3098 6.7164 19 9.16152 19 12C19 15.866 15.866 19 12 19C9.1615 19 6.71639 17.3099 5.61813 14.8809C6.06734 14.9592 6.52913 15 7 15C11.4183 15 15 11.4183 15 7.00002C15 6.52915 14.9592 6.06736 14.8809 5.61814Z" fill={color}/>
    </svg>
  );
}

export default Moon;

Moon.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}