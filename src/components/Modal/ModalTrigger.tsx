interface ModalTriggerProps {
    onOpen: () => void;
    triggerText: string;
  }

  export default function ModalTrigger({ onOpen, triggerText }: ModalTriggerProps): JSX.Element {
    return (
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={onOpen}
      >
        {triggerText}
      </button>
    );
  };