import React, { ReactNode } from "react";
import clsx from "clsx";

interface FadeUpProps {
  children: ReactNode;
  cascade?: boolean;
  className?: string;
}

export default function FadeUp({ children, cascade = false, className = "" }: FadeUpProps): JSX.Element {
  // If cascade is true, map over the children and apply a delay for each one
  return (
    <div className={clsx("w-full", className)}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={clsx(
            "animate-fadeUp",
            cascade ? `delay-${index * 100}` : "",
            className
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
}