import React, { MouseEventHandler } from "react";
import { PropsWithChildren, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface ModalProps extends PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    onConfirm: () => void;
    closeOnBackdropClick?: boolean;  // Make backdrop click closing optional
    className?: string;
    contentClassName?: string;
    overlayClassName?: string;
}

export default function Modal({ isOpen, onClose, onConfirm, title, children, closeOnBackdropClick = true, // Default to true
    className = '',
    contentClassName = '',
    overlayClassName = '' }: ModalProps): JSX.Element | null {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const previousFocus = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            // Store the currently focused element

            previousFocus.current = document.activeElement as HTMLElement;

            // Focus the modal when it's opened
            modalRef.current?.focus();

            // Disable page scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }

        // Handle the Escape key press to close the modal
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);

            // Re-enable page scrolling when modal is closed
            document.body.style.overflow = 'visible';

            // Restore focus to the previously focused element
            if (previousFocus.current) {
                (previousFocus.current as HTMLElement).focus();
            }
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleOutsideClick = () => {
        if (closeOnBackdropClick) onClose();
    };

    // Clone children and pass modal props to them
    const enhancedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { isOpen, title, onConfirm } as ModalProps);
        }
        return child;
    });

    return ReactDOM.createPortal(
        <div
            className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex ${overlayClassName}`}
            onClick={handleOutsideClick}
            role="dialog"
            aria-modal="true"
            title={title}
        >
            <div
                className={`relative bg-white m-auto flex-col flex rounded-lg ${className}`}
                ref={modalRef}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`${contentClassName}`}>
                    {enhancedChildren}
                </div>
            </div>
        </div>,
        document.body
    );
}