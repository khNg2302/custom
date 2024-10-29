"use client";
import useTheme from "@/hooks/useTheme";
import { ButtonComp } from "@/types/ui";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMemo, useRef, useState } from "react";
import { FlexBox } from "./containers/FlexBox";

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
      style={{  ...res,...typeStyle, ...affect, position: 'relative', overflow: 'hidden', width:'fit-content' }}

      onClick={onClick ?? onClick}
    >
      <FlexBox flexDirection="row" styles={{ alignItems: 'center', justifyContent: 'center', gap: ((theme?.button.padding as string) || '').split(' ')[1] }}>
        {icon && <Icon icon={icon as string} />} 
        {label}
      </FlexBox>
      <div onMouseOver={setHoverAffect}
        onMouseLeave={setHoverAffect}
        onMouseDown={setClickAffect}
        onMouseUp={setClickAffect} style={{ position: 'absolute', inset: 0 }}></div>
    </button>
  );
};

export default Button;
