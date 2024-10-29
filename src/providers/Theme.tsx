"use client";

import { FlexBox } from "@/components/ui/containers/FlexBox";
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
      second: "",
    },
    transition: '.15s',
    border: '1px solid',
    borderColor: "#000",
    borderRadius: ".5rem",
    padding: ".25rem .5rem",
    gap: "2rem",
    body: {
      // display: "flex",
      // justifyContent: "right",
      height: '100%',
      backgroundColor: "#fff",
      color: "#000",
      padding: {
        sm: "0",
        md: "0",
        lg: "0",
      },
      fontSize: {
        sm: "1.4rem",
        md: "1.6rem",
        lg: "1.6rem",
      },
    },
    button: {
      border: '1px solid',
      type: {
        default: {
          backgroundColor: "#fff",

        },
        ghost: {
          backgroundColor: "#fff",
          padding: '.2rem',
          borderColor: 'transparent'
        },
      },
      fontSize: {
        sm: "1.4rem",
        md: "1.6rem",
        lg: "1.6rem",
      },
      padding: ".5rem 1rem",
      borderRadius: ".5rem",
      cursor: "pointer",
      transition: "all .15s",
      hover: {
        borderColor: 'black',
        boxShadow: "2px 2px 1px",
      },
      active: {
        borderColor: 'black',
        boxShadow: "2px 2px 8px",
      },
    },
    option: {
      padding: '.5rem',
      selected: {
        background: 'yellow',
        color: 'white',

      },
      hover: {
        background: 'gray',
      }
    },
    sidebar: {
      transition: 'all .15s',
      height: '100%',
      overflow: 'auto',
      position: {
        sm: "absolute",
        md: "relative",
        lg: "relative",
      },

      active: {
        sm:false,
        md: true,
        lg: true
      }
    },
    scrollBar:{
      width: '1.5rem'
    }
  },
  light: {
    theme: "light",
    transaction: '5s',
    color: {
      primary: "#000",
      second: "",
    },
    borderColor: "#000",
    borderRadius: "3px",
    gap: "3rem",
    body: {
      backgroundColor: "#fff",
      color: "#000",
      padding: {
        sm: "1rem",
        md: "1rem",
        lg: "0rem",
      },
    },
    button: {
      type: {
        default: {
          backgroundColor: "#fff",
        },
      },
      hover: {
        boxShadow: "2px 2px 1px",
      },

      padding: "",
      borderRadius: "",
    },
    option: {
      padding: '1rem 2rem',
      selected: {},
      hover: {

      }
    },
    sidebar: {
      border: '1px solid',
      position: {
        sm: "absolute",
        md: "relative",

      },
      active: {
        sm:false,
        md: true,
        lg: true
      }
    },
    scrollBar:{
      width: '1.5rem'
    }
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
          option: true,
          hover: true,
          color: true,
          selected: true,
          type: true,
          default: true,
          ghost: true,
          sidebar: true,
          scrollBar:true
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
        <main style={{ height: '100%' }}>
          <FlexBox flexDirection="column" styles={{ width: '100%', margin: 'auto', height: '100%', padding: '0' }}>

            {children}

          </FlexBox>

        </main>
      </body>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
