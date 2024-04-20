import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  name: string;
}

const Tab = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Tab;
