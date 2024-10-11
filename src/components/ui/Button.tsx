"use client";
import useTheme from "@/hooks/useTheme";
import { ButtonComp } from "@/types/ui";
import { ObjectValueType } from "@/types/utlis";
import { useRef, useState } from "react";

const Button = ({ label, onClick }: ButtonComp) => {
  const theme = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHover, setHover] = useState<boolean>(false);
  const [isClick, setClick] = useState<boolean>(false);
  const { hover, active, ...res } = theme?.button || {};
  const affect = isHover ? (isClick ? active : hover) : {};

  const setHoverAffect = () => {
    setHover(!isHover);
  };

  const setClickAffect = () => {
    setClick(!isClick);
  };

  return (
    <button
      ref={buttonRef}
      style={{ ...res, ...affect } as ObjectValueType}
      onMouseOver={setHoverAffect}
      onMouseLeave={setHoverAffect}
      onMouseDown={setClickAffect}
      onMouseUp={setClickAffect}
      onClick={onClick ?? onClick}
    >
      {label}
    </button>
  );
};

export default Button;
