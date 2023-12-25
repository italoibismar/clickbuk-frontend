import { ChevronDownIcon } from '@radix-ui/react-icons';
import cx from "classnames"
import { DropdownMenu } from "./DropdownMenu";
import { useState } from "react";
import CategoryIcon from "./Icons/Categories/CategoryIcon";

const icons = [
  { value: 'add' },
  { value: 'food' },
  { value: 'income' },
  { value: 'clothes' },
  { value: 'payment' },
  { value: 'minus' },
  { value: 'education' },
  { value: 'fun' },
  { value: 'grocery' },
  { value: 'chart' },
  { value: 'home' },
  { value: 'travel' },
  { value: 'transport' },
  { value: 'others' },
  { value: 'star' }
];

export function IconsDropdownInput({ error, className, value, onChange }) {
  const [selectedIcon, setSelectedIcon] = useState(() => {
    if (!value) {
      return null;
    }

    return icons.find(i => i.value === value) ?? null
  });

  console.log(selectedIcon)

  function handleSelectIcon(icon) {
    setSelectedIcon(icon)
    onChange?.(icon.value);
  }

  return (
    <div className={cx("", className)}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className={cx(
              'bg-white dark:bg-transparent w-full rounded-lg border border-gray-300 dark:border-white/[8%] px-3 h-[56px] text-gray-900 dark:text-gray-50 focus:border-primary-500 dark:focus:border-primary-700 transition-all outline-none text-left relative',
              error && '!border-red-600'
            )}
          >
                Ícone

            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {!selectedIcon && (
                <ChevronDownIcon className="w-6 h-6 text-gray-500 dark:text-gray-600"/>
              )}

              {selectedIcon && (
                <div className="p-[5px] bg-gray-100 dark:bg-white/[3%] rounded-full">
                  <CategoryIcon name={selectedIcon.value} className={cx("fill-gray-600")} />
                </div>
              )}
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="grid grid-cols-4">
          {icons?.map(icon => (
            <DropdownMenu.Item
              key={icon.value}
              className="dark:hover:bg-white/[3%]"
              onSelect={() => handleSelectIcon(icon)}
            >
                <div className="p-[5px] bg-gray-100 dark:bg-white/[3%] rounded-full">
                    <CategoryIcon name={icon.value} className={cx("fill-gray-600 dark:fill-gray-500")} />
                </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {error && (
        <small className="text-red-600 mt-2 block">{error}</small>
      )}
    </div>
  )
}