import { ParentComp } from "@/types/ui";

const Container = ({ children, styles }: ParentComp) => {
  return <div style={{
    ...styles
  }}>{children}</div>;
};

export default Container;
