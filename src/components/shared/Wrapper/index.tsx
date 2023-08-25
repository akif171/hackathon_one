import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-7xl mx-auto lg:px-20 sm:px-10 px-5">{children}</div>;
};

export default Wrapper;
