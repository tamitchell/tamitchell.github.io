import React from "react";
import { PropsWithChildren } from "react";

interface ModalFooterProps extends PropsWithChildren {
    onClose?: () => void;
    onConfirm?: () => void;
    isOpen: boolean;
    toggle: () => void;
  }

  export default function ModalFooter({onClose, onConfirm, isOpen, toggle, children}: ModalFooterProps): JSX.Element {
    const enhancedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onConfirm , onClose, isOpen, toggle} as ModalFooterProps);
        }
        return child;
      });
    
      return <>{enhancedChildren}</>;
  }