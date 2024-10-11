import { useEffect, useState } from "react";

type Breakpoint = {
  min?: number;
  max?: number;
  name: string;
};

const DefaultBreakPoints: Breakpoint[] = [
  {
    min: 600,
    max: 900,
    name: "md",
  },
  {
    min: 0,
    max: 600,
    name: "sm",
  },
  {
    name: "lg",
    min: 900,
  },
];

const useResponsive = (breakpoints = DefaultBreakPoints) => {
  const [screen, setScreen] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getResize = () => {
      const size = window.innerWidth;
      let sizeName: string | undefined = undefined;
      const setSizeName = (breakpoint: Breakpoint) => {
        sizeName = breakpoint.name;
      };
      breakpoints.forEach((breakpoint) => {
        if (breakpoint.min && size >= breakpoint.min) setSizeName(breakpoint);
        else if (breakpoint.max && size <= breakpoint.max)
          setSizeName(breakpoint);
        else if (
          size >= (breakpoint.min as number) &&
          size <= (breakpoint.max as number)
        )
          setSizeName(breakpoint);
      });
      setScreen(sizeName);
    };
    getResize();
    window.addEventListener("resize", getResize);

    return () => {
      window.removeEventListener("resize", getResize);
    };
  }, [breakpoints]);
  return { screen };
};

export default useResponsive;
