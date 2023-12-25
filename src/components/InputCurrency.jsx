import { NumericFormat } from "react-number-format";
import propTypes from "prop-types";
import cx from "classnames";

const InputCurrency = ({ placeholder, onChange, value, error }) => {
    return ( 
        <div>
        <div className={cx(
            "w-full p-3 border border-solid border-gray-300 dark:border-white/[8%] rounded-lg focus-within:border-primary-500 dark:focus-within:border-primary-700 transition-colors",
            error && "!border-red-600"
        )}>
            <span className="block text-gray-600 text-xs mb-2">{placeholder}</span>
            <div className="text-gray-900 dark:text-gray-50 font-extrabold text-lg flex gap-1">
                <span>R$</span>
                <NumericFormat 
                    thousandSeparator="."
                    decimalSeparator=","
                    onChange={event => onChange?.(event.target.value)}
                    value={value}
                    className="dark:bg-transparent placeholder:text-gray-900 w-full outline-none"
                />
            </div>
        </div>
        {error && <small className="text-red-600 mt-2 block">{error}</small>}
        </div>
     );
}
 
export default InputCurrency;

InputCurrency.propTypes = { 
    value: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
    ]),
    onChange: propTypes.func,
    error: propTypes.string,
    placeholder: propTypes.string
}