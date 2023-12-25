import * as RdxDialog from '@radix-ui/react-dialog';
import cx from "classnames"
import propTypes from "prop-types"
import { Cross2Icon } from '@radix-ui/react-icons';

export function Modal ({ className, open, title, onClose, children }) {

  const handleClose = () => {
    document.body.style.pointerEvents = 'auto';

    onClose();
  }

    return ( 
        <RdxDialog.Root open={open} onOpenChange={handleClose}>
        <RdxDialog.Portal>
          <RdxDialog.Overlay
            className={cx(
              'fixed inset-0 bg-black/30 z-50 backdrop-blur-sm',
              'data-[state=open]:animate-overlay-show'
            )}
          />
  
          <RdxDialog.Content
            className={cx(
              'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 space-y-2 bg-white dark:bg-[#0D130B] rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0, 0, 0, 0.10)] w-full max-w-[466px] outline-none',
              'data-[state=open]:animate-content-show',
              className
            )}
          >
            <header
              className="flex items-center justify-between text-gray-800 dark:text-gray-50 mb-6"
            >
              <span
                className="text-xl font-bold tracking-[-0.2px]"
              >
                {title}
              </span>
              <button
                className="flex items-center justify-center outline-none"
                onClick={onClose}
              >
                <Cross2Icon className="text-gray-500 dark:text-gray-600 w-6 h-6" />
              </button>
  
            </header>
  
            <div>
              {children}
            </div>
          </RdxDialog.Content>
        </RdxDialog.Portal>
      </RdxDialog.Root >
     );
}

Modal.propTypes = {
    open: propTypes.bool,
    title: propTypes.string,
    onClose: propTypes.func,
    className: propTypes.string,
    children: propTypes.node
}