import { Transition } from "@headlessui/react";
import { Spinner } from "./Spinner";

import propTypes from "prop-types"

export function LaunchScreen({ isLoading }) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-white dark:!bg-primary-950 z-50 fixed top-0 left-0 w-full h-full grid place-items-center">
          <Spinner className="dark:text-white/[10%]"/>
      </div>
    </Transition>
  )
}

LaunchScreen.propTypes = {
  isLoading: propTypes.bool
}