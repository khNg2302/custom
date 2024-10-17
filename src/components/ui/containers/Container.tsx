'use client'
import useTheme from "@/hooks/useTheme";
import { ThemeValues } from "@/types/ui";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ContainerI extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,'style'> {
  children: ReactNode;
  styles?:HTMLAttributes<HTMLDivElement>["style"]
  getStyle?: (
    theme: ThemeValues | null
  ) => HTMLAttributes<HTMLDivElement>["style"];
}

const Container = ({ children, getStyle,styles,...res }: ContainerI) => {
  const theme = useTheme();
  return (
    <div
      style={{
        width: "fit-content",
        padding: theme?.padding as string,
        maxWidth: "1200px",
        ...styles,
        ...(getStyle ? getStyle(theme) : {}), 
      }}
      {...res}
    >
      {children}
    </div>
  );
};

export default Container;
