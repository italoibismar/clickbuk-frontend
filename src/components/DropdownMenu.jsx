import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';

import cx from "classnames"

function DropdownMenuRoot({ children }) {
  return (
    <RdxDropdownMenu.Root>
      {children}
    </RdxDropdownMenu.Root>
  )
}

function DropdownMenuTrigger({ children }) {
  return (
    <RdxDropdownMenu.Trigger className="outline-none" asChild>
      {children}
    </RdxDropdownMenu.Trigger>
  )
}

function DropdownMenuContent({ children, className }) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cx(
          'rounded-2xl p-2 bg-white dark:bg-primary-950 border border-gray-100 dark:border-white/[6%] space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-[99]',
          'data-[side=bottom]:animate-slide-up-and-fade',
          'data-[side=top]:animate-slide-down-and-fade',
          className
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  )
}

function DropdownMenuItem({ children, className, onSelect }) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cx(
        'w-full min-h-[40px] outline-none mt-2 flex items-center gap-2 px-4 py-2 text-gray-800 text-sm hover:bg-gray-50 dar transition-colors rounded-2xl',
        'cursor-pointer',
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  )
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
}
