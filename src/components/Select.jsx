import * as RdxSelect from "@radix-ui/react-select";
import propTypes from "prop-types";
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import cx from "classnames";

import { useState } from "react";

export function Select({ placeholder="Selecionar", value, onChange, options, error, className }){
    const [selectedValue, setSelectedValue] = useState(value ?? '');

    function handleSelect(value) {
        setSelectedValue(value);
        onChange?.(value)
    }
    return (
        <div>
            <div className="relative">
            <label className={cx(
                'absolute z-10 top-1/2 -translate-y-1/2 left-3 text-gray-500 pointer-events-none',
                selectedValue && 'text-xs left-[13px] top-2 transition-all translate-y-0 !text-gray-600',
            )}>
            {placeholder}
            </label>
                <RdxSelect.Root value={value} onValueChange={handleSelect}>
                    <RdxSelect.Trigger
                        className={cx(
                        'bg-white dark:bg-transparent w-full rounded-lg border border-solid border-gray-300 dark:border-white/[8%] px-3 h-[56px] text-gray-900 dark:text-gray-50 focus:border-primary-500 dark:focus:border-primary-700 transition-all outline-none text-left relative pt-4',
                        error && '!border-red-base',
                        className
                        )}
                    >
                        <RdxSelect.Value />
                        <RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
                            <ChevronDownIcon className="w-6 h-6 text-gray-500 dark:text-gray-600"/>
                        </RdxSelect.Icon>

                    </RdxSelect.Trigger>
                    <RdxSelect.Portal>
                        <RdxSelect.Content className="overflow-hidden z-[99] bg-white dark:bg-primary-950 rounded-xl border border-gray-100 dark:border-white/[6%] drop-shadow-2xl">
                            <RdxSelect.ScrollUpButton>
                                <ChevronUpIcon className="w-6 h-6 text-gray-500"/>
                            </RdxSelect.ScrollUpButton>

                            <RdxSelect.Viewport className="py-2 flex flex-col gap-1">
                                {options?.map(option => (
                                    <RdxSelect.Item
                                        key={option.value}
                                        value={option.value}
                                        className="px-4 py-3 cursor-pointer text-sm text-gray-800 dark:text-gray-50 data-[state=checked]:font-bold data-[state=checked]:bg-primary-50 dark:data-[state=checked]:bg-primary-900 data-[state=checked]:hover:bg-primary-50 hover:bg-gray-50 dark:hover:bg-white/[3%] transition-colors outline-none"
                                    >
                                        <RdxSelect.ItemText>{option.label}</RdxSelect.ItemText>
                                    </RdxSelect.Item>
                                ))}
                            </RdxSelect.Viewport>

                            <RdxSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
                                <ChevronDownIcon className="w-6 h-6 text-gray-500"/>
                            </RdxSelect.ScrollDownButton>
                        </RdxSelect.Content>
                    </RdxSelect.Portal>
                </RdxSelect.Root>
            </div>
            {error && (
                <small className="text-red-600 mt-2 block">{error}</small>
            )}
        </div>
    )
}

Select.propTypes = {
    placeholder: propTypes.string,
    value: propTypes.string,
    onChange: propTypes.func,
    error: propTypes.string,
    className: propTypes.string,
    options: propTypes.array
}