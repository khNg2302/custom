"use client";
import useTheme from "@/hooks/useTheme";
import { HTMLAttributes, useState } from "react";

interface BoxI {
  label: string;
  type: string;
  style?: HTMLAttributes<HTMLDivElement>['style']
}

enum OptionDisplayState {
  display='display',
  hover='hover',
  selected='selected'
}

export const Option = ({ label, type, style }: BoxI) => {
  const theme = useTheme();
  const [displayState, setDisplayState] = useState<OptionDisplayState>(OptionDisplayState.display)
  return (
    <div
      style={{
        border: "1px solid",
        borderColor: theme?.borderColor,
        width: "fit-content",
        padding: '.25rem 1rem',
        borderRadius: theme?.borderRadius,
        ...style
      }}
    >
      <p style={{ color: theme?.color[type] }}>{label}</p>
    </div>
  );
};
