import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, }: ContainerProps) => {
  return (
    <div
      className= "w-full max-w-screen-2xl 2xl:px-20 xl:px-12 lg:px-10 md:px-8 sm:px-4 px-2 mx-auto"
    >
      {children}
    </div>
  );
};

export default Container;