"use client";
import useTheme from "@/hooks/useTheme";
import { ButtonComp } from "@/types/ui";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMemo, useRef, useState } from "react";

const Button = ({ label, onClick, type = "default", icon }: ButtonComp) => {
  const theme = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHover, setHover] = useState<boolean>(false);
  const [isClick, setClick] = useState<boolean>(false);

  const { hover, active, type: typeConfigure, ...res } = theme?.button || {};
  const affect = isHover ? (isClick ? active : hover) : {};

  const typeStyle = useMemo(
    () => (typeConfigure || {})[type],
    [type, typeConfigure]
  );

  const setHoverAffect = () => {
    setHover(!isHover);
  };

  const setClickAffect = () => {
    setClick(!isClick);
  };

  return (
    <button
      ref={buttonRef}
      style={{ ...typeStyle, ...res, ...affect, display: 'flex', justifyItems: 'center', justifyContent: 'center', gap: ((theme?.button.padding as string) || '').split(' ')[1] }}
      onMouseOver={setHoverAffect}
      onMouseLeave={setHoverAffect}
      onMouseDown={setClickAffect}
      onMouseUp={setClickAffect}
      onClick={onClick ?? onClick}
    >
      {/* <Icon icon={icon as string} /> */}
      {label}
    </button>
  );
};

export default Button;
