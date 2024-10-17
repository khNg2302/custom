import { HTMLAttributes, ReactNode } from "react";
import { ObjectValueType } from "../utlis";

type ParentComp = {
  children: ReactNode;
  styles?: HTMLAttributes<unknown>["style"];
};

type BodyThemeValues = {
  backgroundColor: string;
  color: string;
  padding: {
    [size: string]: string;
  } | string;
} & ObjectValueType &
  Omit<HTMLAttributes<unknown>["style"], "padding">;

type Color = {
  primary: string,
  second: string,
  [colorName: string]: string
}

type ThemeValues = {
  theme: "dark" | "light";
  body: BodyThemeValues;
  button: ButtonStylesType;
  borderColor: string
  borderRadius: string
  color: Color
  option: OptionStylesType
  [props: string]: unknown;
};

type ButtonComp = {
  label: string;
  type?: string
  onClick?: () => unknown
  icon?: string
};

type ButtonStylesType = {
  hover?: HTMLAttributes<unknown>["style"]
  active?: HTMLAttributes<unknown>["style"]
  type: {
    [type: string]: HTMLAttributes<unknown>["style"];
  };
} & ObjectValueType &
  Omit<HTMLAttributes<unknown>["style"], "backgroundColor">;

type OptionStylesType = {
  selected: HTMLAttributes<unknown>["style"]
  hover: HTMLAttributes<unknown>["style"]
  padding:string
  [field:string]: string | HTMLAttributes<unknown>["style"]
}

enum ToggleDisplayEnum {
  enter = "enter",
  leave = "leave",
  hidden = "hidden",
}

export type {
  ParentComp,
  ButtonComp,
  ButtonStylesType,
  ThemeValues,
  BodyThemeValues,
};

export { ToggleDisplayEnum }
