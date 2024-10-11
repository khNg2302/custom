"use client";

import useResponsive from "@/hooks/useResponsive";
import { ThemeValues } from "@/types/ui";
import { ObjectValueType } from "@/types/utlis";
import { definePropsOfObjectWithFunc } from "@/utils";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

const themes: { [name: string]: ThemeValues } = {
  dark: {
    theme: "dark",
    color: {
      primary: "#000",
      second:''
    },
    borderColor: '#000',
    borderRadius: '3px',
    body: {
      // display: "flex",
      // justifyContent: "right",
      backgroundColor: "#fff",
      color: "#000",
      padding: {
        sm: ".5rem",
        md: "1rem",
        lg: "0rem",
      },
    },
    button: {
      backgroundColor: {
        default: "",
        primary: "",
      },
      padding: ".5rem 1rem",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: 'all .3s',
      hover: {
        boxShadow: "2px 2px 1px",
      },
      active: {
        boxShadow: "2px 2px 8px",
      }
    },
  },
  light: {
    theme: "light",
    color: {
      primary: "#000",
      second:''
    },
    borderColor: '#000',
    borderRadius: '3px',
    body: {
      backgroundColor: "#fff",
      color: "#000",
      padding: {
        sm: ".5rem",
        md: "1rem",
        lg: "0rem",
      },
    },
    button: {
      hover: {
        boxShadow: "2px 2px 1px",
      },
      backgroundColor: {
        default: "",
        primary: "",
      },
      padding: "",
      borderRadius: "",
    },
  },
};

export const ThemeContext = createContext<ThemeValues | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeValues, setThemeValues] = useState<ThemeValues | null>(null);
  const { screen } = useResponsive();

  useEffect(() => {
    setThemeValues(themes.dark);
  }, []);

  const responsiveThemeValues = useMemo(() => {
    const applyPropsThemeWithSize = (theme: ThemeValues) => {
      return definePropsOfObjectWithFunc({
        objectValue: theme as ObjectValueType,
        handleIfNotFlatten: (objectValue) => {
          return objectValue[screen as string] as string | number;
        },
        notHandleKeys: {
          body: true,
          button: true,
          hover: true,
          background: true,
          color:true
        },
      });
    };

    return themeValues && screen ? applyPropsThemeWithSize(themeValues) : null;
  }, [screen, themeValues]);

  return (
    <ThemeContext.Provider value={responsiveThemeValues as ThemeValues | null}>
      <body
        style={
          responsiveThemeValues
            ? (responsiveThemeValues.body as ObjectValueType)
            : {}
        }
      >
        <main>{children}</main>
      </body>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
