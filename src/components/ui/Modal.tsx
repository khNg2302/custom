"use client";

import useTheme from "@/hooks/useTheme";
import { useToggleDisplay } from "@/hooks/useToggleDisplay";
import { ReactNode, useMemo } from "react";
import Button from "./Button";

interface ModalI {
  open: boolean;
  children: ReactNode;
  duration?: {
    common: number;
    enter?: number;
    leave?: number;
  };
  onClose: () => void;
  useOverlay: boolean
  onHidden?: () => void
}

enum ToggleDisplayEnum {
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

export const Modal = ({ open, duration = { common: .15 }, useOverlay, children, onClose, onHidden }: ModalI) => {
  const theme = useTheme();

  const { isDisplay, displayState, handleHidden: hidden, handleOutClose } = useToggleDisplay({
    open,
    onClose,
  })

  const handleHidden = () => {
    hidden()
    onHidden && onHidden()
  }

  const currentDisplayStyle =
    displayState === ToggleDisplayEnum.leave
      ? leaveStyle
      : displayState === ToggleDisplayEnum.hidden
        ? hiddenStyle
        : displayStyle;

  const transitionValue = useMemo(() => {
    switch (displayState) {
      case ToggleDisplayEnum.enter:
        return duration.enter || duration.common;
      case ToggleDisplayEnum.leave:
        return duration.leave || duration.common;
      default:
        return duration.common;
    }
  }, [displayState, duration]);

  return (
    <>
      {(isDisplay) && (
        <div
          style={{
            position: "fixed",
            padding: theme?.body.padding as string,
            inset: 0,
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div
            onTransitionEnd={handleHidden}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: useOverlay ? "rgba(0,0,0,.5)" : "",
              transition: "all " + transitionValue + "s",
              ...currentDisplayStyle,
            }}
            onClick={handleOutClose}
          ></div>
          <div
            style={{
              position: "absolute",
              ...currentDisplayStyle,
              zIndex: 2,
              maxHeight: '100%',
              overflow: 'auto',
              background: 'white',
              borderRadius: theme?.borderRadius,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'end', padding: '1rem' as string }}>
              <Button icon='bytesize:close' label='' type="ghost" onClick={onClose} />
            </div>
            <div style={{padding: '1rem 2rem', paddingTop:'0'}}> 
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
