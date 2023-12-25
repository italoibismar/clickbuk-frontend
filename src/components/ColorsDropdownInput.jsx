import { ChevronDownIcon } from '@radix-ui/react-icons';
import cx from "classnames"
import { DropdownMenu } from "./DropdownMenu";
import { ColorIcon } from "./ColorIcon";
import { useState } from "react";

const colors = [
  { color: '#868E96', bg: '#F8F9FA' },
  { color: '#FA5252', bg: '#FFF5F5' },
  { color: '#E64980', bg: '#FFF0F6' },
  { color: '#BE4BDB', bg: '#F8F0FC' },
  { color: '#7950F2', bg: '#F3F0FF' },
  { color: '#4C6EF5', bg: '#EDF2FF' },
  { color: '#228BE6', bg: '#E7F5FF' },
  { color: '#15AABF', bg: '#E3FAFC' },
  { color: '#12B886', bg: '#E6FCF5' },
  { color: '#40C057', bg: '#EBFBEE' },
  { color: '#82C91E', bg: '#F4FCE3' },
  { color: '#FAB005', bg: '#FFF9DB' },
  { color: '#FD7E14', bg: '#FFF4E6' },
  { color: '#212529', bg: '#F8F9FA' },
];

export function ColorsDropdownInput({ error, value, onChange }) {
  const [selectedColor, setSelectedColor] = useState(() => {
    if (!value) {
      return null;
    }
    
    return colors.find(c => c.color === value) ?? null
  });

  function handleSelectColor(color) {
    setSelectedColor(color)
    onChange?.(color.color);
  }

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className={cx(
              'bg-white dark:bg-transparent w-full rounded-lg border border-gray-300 dark:border-white/[8%] px-3 h-[56px] text-gray-900 dark:text-gray-50 focus:border-primary-500 dark:focus:border-primary-700 transition-all outline-none text-left relative',
              error && '!border-red-600'
            )}
          >
            Cor

            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {!selectedColor && (
                <ChevronDownIcon className="w-6 h-6 text-gray-500 dark:text-gray-600"/>
              )}

              {selectedColor && (
                <ColorIcon className={cx(`fill-gray-100 dark:fill-white/[3%]`)} color={selectedColor.color} />
              )}
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="grid grid-cols-4">
          {colors.map(color => (
            <DropdownMenu.Item
              key={color.color}
              className="dark:hover:bg-white/[3%]"
              onSelect={() => handleSelectColor(color)}
            >
              <ColorIcon color={color.color} bg={`${color.bg}10`} />
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