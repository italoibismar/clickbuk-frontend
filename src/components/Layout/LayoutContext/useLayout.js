import { useContext } from "react";
import { LayoutContext } from ".";

export function useLayout() {
    return useContext(LayoutContext)
}