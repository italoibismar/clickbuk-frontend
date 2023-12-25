import propTypes from "prop-types";

const Sun = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={className} d="M11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3Z" fill="#09244B"/>
    <path className={className} d="M11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20Z" fill="#09244B"/>
    <path className={className} d="M2 12C2 12.5523 2.44772 13 3 13H4C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11H3C2.44772 11 2 11.4477 2 12Z" fill="#09244B"/>
    <path className={className} d="M20 13C19.4477 13 19 12.5523 19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20Z" fill="#09244B"/>
    <path className={className} d="M6.34312 4.92888C5.9526 4.53836 5.31943 4.53836 4.92891 4.92888C4.53838 5.3194 4.53838 5.95257 4.92891 6.34309L5.63601 7.0502C6.02654 7.44072 6.6597 7.44072 7.05023 7.0502C7.44075 6.65968 7.44075 6.02651 7.05023 5.63599L6.34312 4.92888Z" fill={color}/>
    <path className={className} d="M16.9498 18.364C16.5593 17.9734 16.5593 17.3403 16.9498 16.9498C17.3403 16.5592 17.9735 16.5592 18.364 16.9498L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711C18.6806 19.4616 18.0474 19.4616 17.6569 19.0711L16.9498 18.364Z" fill={color}/>
    <path className={className} d="M4.92888 17.6569C4.53835 18.0474 4.53835 18.6806 4.92888 19.0711C5.3194 19.4616 5.95257 19.4616 6.34309 19.0711L7.0502 18.364C7.44072 17.9735 7.44072 17.3403 7.0502 16.9498C6.65968 16.5592 6.02651 16.5592 5.63599 16.9498L4.92888 17.6569Z" fill={color}/>
    <path className={className} d="M18.364 7.05022C17.9734 7.44074 17.3403 7.44074 16.9498 7.05022C16.5592 6.65969 16.5592 6.02653 16.9498 5.636L17.6569 4.9289C18.0474 4.53837 18.6805 4.53837 19.0711 4.9289C19.4616 5.31942 19.4616 5.95259 19.0711 6.34311L18.364 7.05022Z" fill={color}/>
    <path className={className} fillRule="evenodd" clipRule="evenodd" d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" fill={color}/>
    </svg>
  );
}

export default Sun;

Sun.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}
