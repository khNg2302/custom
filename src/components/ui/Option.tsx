"use client";
import useTheme from "@/hooks/useTheme";
import { useMemo, useState } from "react";
import { Text } from "./Text";

interface OptionI {
  label: string;
  value: string
  select?: boolean
  onClick?: (key: string) => void
}

enum OptionDisplayState {
  display = "display",
  hover = "hover",
  selected = "selected",
}

export const Option = ({ label, value, select, onClick }: OptionI) => {
  const theme = useTheme();
  const [displayState, setDisplayState] = useState<OptionDisplayState>(
    OptionDisplayState.display
  );

  const displayStyle = useMemo(() => {
    switch (displayState) {
      case OptionDisplayState.selected:
        return theme?.option.selected
      case OptionDisplayState.hover:
        return theme?.option.hover
      default:
        return {}
    }
  }, [displayState, theme])
  const handleOnClick = () => {
    if (select && displayState === OptionDisplayState.selected) {
      setDisplayState(OptionDisplayState.display);
      return
    }
    setDisplayState(OptionDisplayState.selected);
    onClick && onClick(value)
  };

  const handleHover = () => {
    setDisplayState(OptionDisplayState.hover);
  }

  const handleLeave = () => {
    if (select && displayState === OptionDisplayState.selected) return
    setDisplayState(OptionDisplayState.display);
  }
  return (
    <div
      onClick={handleOnClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{
        ...displayStyle,
        width: "100%",
        cursor: 'pointer'
      }}
    >
      <Text level='p' style={{
        padding: theme?.option.padding as string,
      }}>{label}</Text>
    </div>
  );
};
