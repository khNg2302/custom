import { HTMLAttributes, ReactNode } from "react";
import { ObjectValueType } from "../utlis";

type ParentComp = {
  children: ReactNode;
  styles: HTMLAttributes<unknown>["style"];
};

type BodyThemeValues = {
  backgroundColor: string;
  color: string;
  padding: {
    [size: string]: string;
  };
} & ObjectValueType &
  Omit<HTMLAttributes<unknown>["style"], "padding">;

type ThemeValues = {
  theme: "dark" | "light";
  body: BodyThemeValues;
  button: ButtonStylesType;
  [props: string]: unknown;
};

type ButtonComp = {
  label: string;
  onClick?: () => unknown
};

type ButtonStylesType = {
  hover?: HTMLAttributes<unknown>["style"]
  active?: HTMLAttributes<unknown>["style"]
  backgroundColor: {
    [variant: string]: string;
  };
} & ObjectValueType &
  Omit<HTMLAttributes<unknown>["style"], "backgroundColor">;

export type {
  ParentComp,
  ButtonComp,
  ButtonStylesType,
  ThemeValues,
  BodyThemeValues,
};
