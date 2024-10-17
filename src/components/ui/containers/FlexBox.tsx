'use client'
import { ParentComp } from "@/types/ui";
import Container, { ContainerI } from "./Container";

export interface FlexBoxI extends ParentComp, ContainerI {
  flexDirection?: 'column' | 'row'
}

export const FlexBox = ({ styles, children, flexDirection='column' , ...res}: FlexBoxI) => {
  return (
    <Container
      getStyle={(theme) => ({
        display: "flex",
        gap: theme?.gap as string,
        flexDirection: flexDirection,
        justifyItems: flexDirection === 'column' ? "start" : 'center', 
        borderRadius: theme?.borderRadius,
        ...styles,
      })}
      {...res}
    >
      {children}
    </Container>
  );
};
