import React, { useEffect, useRef } from "react";

const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    clickOutSidefunc: () => void,
) => {
    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            if (ref && !ref.current?.contains(e.target as Node)) {
                clickOutSidefunc();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return() => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });






}

export default useOutsideClick;