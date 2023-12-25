import propTypes from "prop-types";

const Edit = ({
  size = 24,
  color = "black",
  className
}) => {
return ( 
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={className} fillRule="evenodd" clipRule="evenodd" d="M13.0081 2.15733C13.6623 1.50314 14.7229 1.50314 15.3771 2.15733L17.8425 4.62276C18.4967 5.27695 18.4967 6.3376 17.8425 6.99179L7.61793 17.2164C7.38508 17.4492 7.08876 17.6083 6.76601 17.6737L3.67427 18.3C3.12389 18.4115 2.55426 18.2398 2.15717 17.8427C1.76009 17.4456 1.58839 16.876 1.69988 16.3256L2.32618 13.2339C2.39156 12.9111 2.55062 12.6148 2.78347 12.3819L13.0081 2.15733ZM3.70274 14.8758L3.81045 14.3441L5.65575 16.1894L5.12401 16.2971L3.34169 16.6582L3.70274 14.8758ZM7.15033 15.315L4.6849 12.8495L11.8762 5.65826L14.3416 8.12369L7.15033 15.315ZM15.5261 6.93918L16.658 5.80728L15.4735 4.62276L15.3771 4.52636L14.1926 3.34184L13.0607 4.47374L15.5261 6.93918Z" fill={color}/>
    </svg>
  );
}

export default Edit;

Edit.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
}