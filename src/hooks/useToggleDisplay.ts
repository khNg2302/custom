'use client'

import { ToggleDisplayEnum } from "@/types/ui";
import { useCallback, useEffect, useState } from "react";

interface UseToggleDisplayI {
    open: boolean
    onClose: () => void
}

export const useToggleDisplay = ({ open, onClose }: UseToggleDisplayI) => {

    const [displayState, setDisplayState] = useState(ToggleDisplayEnum.hidden);

    const handleOpen = useCallback(() => {
        setDisplayState(ToggleDisplayEnum.enter);
    }, []);

    const handleClose = useCallback(() => {
        setDisplayState(ToggleDisplayEnum.leave);
    }, []);

    const handleHidden = useCallback(() => {
        if (displayState === ToggleDisplayEnum.leave)
            setDisplayState(ToggleDisplayEnum.hidden);
    }, [displayState]);

    const changeDisplay = useCallback(() => {
        if (open === true) handleOpen();

        if (open === false && displayState === ToggleDisplayEnum.enter)
            handleClose();
    }, [open, handleOpen, displayState, handleClose]);



    const handleOutClose = () => {
        if (!onClose) return;
        onClose();
        handleClose();
    };

    useEffect(() => {
        changeDisplay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const isDisplay = open || displayState !== ToggleDisplayEnum.hidden

    return {
        isDisplay,
        displayState,
        handleOutClose,
        handleClose,
        handleHidden,
    }

}