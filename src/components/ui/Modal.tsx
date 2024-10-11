"use client";

import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";

interface ModalI {
  open: boolean;
  children: ReactNode;
  duration: {
    common: number;
    enter?: number;
    leave?: number;
  };
}

enum ModalDisplayEnum {
  enter = "enter",
  leave = "leave",
  hidden = "hidden",
}
const displayStyle = {
  opacity: 1,
};

const leaveStyle = {
  opacity: 0,
};
const hiddenStyle = {
  opacity: 0,
};

export const Modal = ({ open, duration, children }: ModalI) => {
  const [displayState, setDisplayState] = useState(ModalDisplayEnum.hidden);

  const handleOpen = useCallback(() => {
    setDisplayState(ModalDisplayEnum.enter);
  }, []);

  const handleClose = useCallback(() => {
    setDisplayState(ModalDisplayEnum.leave);
  }, []);

  const handleHidden = useCallback(() => {
    if (displayState === ModalDisplayEnum.leave)
      setDisplayState(ModalDisplayEnum.hidden);
  }, [displayState]);

  const changeDisplay = useCallback(() => {
    if (open === true) handleOpen();

    if (open === false && displayState === ModalDisplayEnum.enter)
      handleClose();
  }, [open, handleOpen, displayState, handleClose]);

  const transitionValue = useMemo(() => {
    switch (displayState) {
      case ModalDisplayEnum.enter:
        return duration.enter || duration.common;
      case ModalDisplayEnum.leave:
        return duration.leave || duration.common;
      default:
        return duration.common;
    }
  }, [displayState, duration]);

  useEffect(() => {
    changeDisplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const currentDisplayStyle =
    displayState === ModalDisplayEnum.leave
      ? leaveStyle
      : displayState === ModalDisplayEnum.hidden
      ? hiddenStyle
      : displayStyle;

  return (
    <>
      {(open || displayState !== ModalDisplayEnum.hidden) && (
        <div
          onTransitionEnd={handleHidden}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.5)",
            transition: "all " + transitionValue + "s",
            ...currentDisplayStyle,
          }}
        >
          <>{children}</>
        </div>
      )}
    </>
  );
};
