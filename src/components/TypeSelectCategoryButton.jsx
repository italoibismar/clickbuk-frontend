import { useState } from "react"
import cx from "classnames"
import Icon from "./Icons/Icon";

export function TypeSelectCategoryButton({value, onChange, error}) {
    const [selectedValue, setSelectedValue] = useState(value ?? '');

    function handleSelect(value) {
        setSelectedValue(value);
        onChange?.(value)
    }

    return (
        <div>
            <div className="flex gap-4">
                <button 
                    onClick={() => handleSelect("INCOME")} 
                    className={cx("w-full py-4 border border-gray-300 rounded-lg flex items-center justify-center gap-4", {
                        "border-green-600/60 bg-green-600/10 text-green-700": selectedValue === "INCOME"
                    })}
                    type="button"
                >
                    <Icon name="arrow-circle-income" className={cx("stroke-green-600")}/>
                    Receita
                </button>
                <button 
                    onClick={() => handleSelect("EXPENSE")}  
                    className={cx("w-full py-4 border border-gray-300 rounded-lg flex items-center justify-center gap-4", {
                        "border-red-600/40 bg-red-500/10 text-red-600": selectedValue === "EXPENSE"
                    })} 
                    type="button"
                >
                    <Icon name="arrow-circle-expense" className={cx("stroke-red-600")} />
                    Despesa
                </button>
            </div>
            {error && (
                <small className="text-red-600 mt-2 block">{error}</small>
            )}
        </div>
    )
}