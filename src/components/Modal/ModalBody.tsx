import React from "react";
import { PropsWithChildren } from "react";

interface ModalBody extends PropsWithChildren {
    isOpen: boolean;
    toggle: () => void;
}

export default function ModalBody({children, toggle, isOpen}: ModalBody): JSX.Element {
    const enhancedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { toggle, isOpen } as ModalBody);
        }
        return child;
      });
        return <>{enhancedChildren}</>;
      
}