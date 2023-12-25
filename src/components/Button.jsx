import cx from "classnames"
import propTypes from "prop-types";
import { Spinner } from "./Spinner";

export const Button = (props) => {
    const { variant } = props;

    switch(variant) {
        case "secondary":
            return <SecondaryButton {...props} />
        case "primary": 
            return <DefaultButton {...props} />
        default:
            return <DefaultButton {...props} />
    }
}

export const DefaultButton = ({ isLoading, disable, children, handleClick, className, danger, ...props }) => {
    return ( 
        <button 
            {...props}
            className={cx("flex items-center justify-center w-full bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-200 dark:focus:ring-primary-600/[20%] p-4 leading-5 rounded-xl font-extrabold transition-colors text-white disabled:bg-primary-100 dark:disabled:bg-primary-500/[25%] dark:disabled:text-white/[20%] disabled:cursor-not-allowed", 
                className, danger && "!bg-red-base dark:!disabled:bg-red-base/[25%] hover:!bg-red-dark focus:!ring-red-200 dark:focus:!ring-red-400/[25%]"
            )}
            onClick={handleClick} 
            disabled={disable ?? isLoading}
        >
            {!isLoading && children}
            {isLoading && <Spinner className={cx("w-[22px] h-[22px] dark:text-white/[10%]", danger && "!fill-red-light !text-gray-200")} />}
        </button>
     );
}

export const SecondaryButton = ({ isLoading, disable, children, handleClick, className, ...props }) => {
    return ( 
        <button 
            {...props}
            className={cx("flex items-center justify-center btn w-full bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/[3%] border border-gray-300 dark:border-white/[20%] focus:outline-none focus:ring focus:ring-gray-100 dark:focus:ring-gray-100/[10%] p-4 leading-5 rounded-xl font-extrabold transition-colors text-gray-900 dark:text-gray-50 disabled:bg-primary-50 dark:disabled:bg-white/[2%] disabled:border-none disabled:text-gray-500 dark:disabled:text-gray-600 disabled:cursor-not-allowed", 
                className
            )}
            onClick={handleClick} 
            disabled={disable ?? isLoading}
        >
            {!isLoading && children}
            {isLoading && <Spinner className="w-[22px] h-[22px]" />}
        </button>
     );
}

Button.propTypes = {
    variant: propTypes.string
}

DefaultButton.propTypes = { 
    isLoading: propTypes.bool,
    disable: propTypes.bool,
    children: propTypes.node,
    handleClick: propTypes.func,
    className: propTypes.string,
    danger: propTypes.bool
}

SecondaryButton.propTypes = { 
    isLoading: propTypes.bool,
    disable: propTypes.bool,
    children: propTypes.node,
    handleClick: propTypes.func,
    className: propTypes.string,
    danger: propTypes.bool
}