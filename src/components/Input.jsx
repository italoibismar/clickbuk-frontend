import { useState } from "react";
import { forwardRef } from "react";
import propTypes from "prop-types";
import cx from "classnames";
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';


export const Input = (props) => {
    const { variant } = props;

    switch(variant) {
        case "password":
            return <PasswordInput {...props} />
        case "normal":
            return <LabelInput {...props} />
        case "default":
            return <DefaultInput {...props} />
        default:
            return <DefaultInput {...props} />
    }
};

export const DefaultInput = forwardRef(
    ({ placeholder, error, className, name, id, ...props }, ref) => {
        const inputId = id ?? name;

        return (
            <div className={cx("relative", className)}>
                <input 
                    {...props}
                    ref={ref}
                    name={name}
                    id={inputId}
                    className={cx(
                        'bg-white w-full rounded-lg border border-gray-300 dark:border-white/[8%] dark:bg-transparent px-3 h-[56px] text-gray-900 dark:text-gray-50 pt-4 peer placeholder-shown:pt-0 focus:border-primary-500 dark:focus:border-primary-700 transition-all outline-none',
                        error && '!border-red-base'
                    )}
                    placeholder=" "
                />
                    <label
                        htmlFor={inputId}
                        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-600 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 transition-all"
                    >
                        {placeholder}
                    </label>
                
                {error && <small className="text-red-base mt-2 block">{error}</small>}
            </div>
        )
    }
);

export const PasswordInput = ({ placeholder, error, className, onChange }) => {
    const [visible, setVisible] = useState(false);

    return ( 
        <div className={cx("relative", className)}>
        <input 
            type={visible ? "text" : "password"}
            onChange={onChange}
            className={cx(
                'bg-white w-full rounded-lg border border-gray-300 dark:border-white/[8%] px-3 h-[56px] text-gray-900 dark:text-gray-50 pt-4 peer placeholder-shown:pt-0 focus:border-primary-500 dark:focus:border-primary-700 transition-all outline-none',
                error && '!border-red-base'
            )}
            placeholder=" "
        />
            <label
                className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-600 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 transition-all"
            >
                {placeholder}
            </label>
        
        {error && <small className="text-red-base mt-2 block">{error}</small>}
        <div className="absolute top-[1rem] right-4 cursor-pointer" onClick={() => setVisible(!visible)}>
            {visible ? <EyeOpenIcon className="w-[24px] h-[24px] text-gray-400" /> : <EyeClosedIcon className="w-[24px] h-[24px] text-gray-400" /> }
        </div>
    </div>
     );
}

export const LabelInput = ({ placeholder, error, className, label, ...props }) => {
    return (
        <div>
            <div className={cx("flex flex-col gap-3", className)}>
                <label className="text-sm font-bold text-gray-600 dark:text-gray-500 tracking-[0.2px]">{label}</label>
                <input 
                    {...props}
                    className={cx(
                        'bg-white dark:bg-transparent w-full rounded-lg border border-gray-300 dark:border-white/[8%] px-3 h-[56px] text-gray-900 dark:text-gray-50 py-2 placeholder-shown:pt-0 focus:border-primary-500 dark:focus:border-primary-700 transition-all outline-none',
                        error && '!border-red-base', "disabled:cursor-no-drop"
                    )}
                    placeholder={placeholder}

                />
            </div>
            {error && <small className="text-red-base mt-2 block">{error}</small>}
        </div>
    )
}

Input.propTypes = {
    variant: propTypes.string
}

DefaultInput.displayName = 'Default Input';

DefaultInput.propTypes = { 
    id: propTypes.string,
    name: propTypes.string,
    className: propTypes.string,
    error: propTypes.string,
    placeholder: propTypes.string
}

PasswordInput.propTypes = { 
    className: propTypes.string,
    error: propTypes.string,
    placeholder: propTypes.string,
    onChange: propTypes.func
}

LabelInput.propTypes = { 
    className: propTypes.string,
    error: propTypes.string,
    placeholder: propTypes.string,
    onChange: propTypes.func,
    label: propTypes.string
}