import React from "react";
import { PropsWithChildren } from "react";

interface ModalHeaderProps extends PropsWithChildren {
    toggle: () => void;
  }

  export default function ModalHeader({toggle, children }: ModalHeaderProps): JSX.Element {
    const enhancedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { toggle } as ModalHeaderProps);
        }
        return child;
      });
    return (
        <>
            {enhancedChildren}
  </>
      );
  }