import { useRef, useState } from "react";
import clsx from "clsx";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface CustomCollapsibleProps {
    title: string;
    content: string[];
    className?: string;
        id: number;
  }

  export default function CustomCollapsible({title, content, className}: CustomCollapsibleProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className={clsx("mb-4", className)}>
        <button
          className={
            "w-full text-left text-lg font-bold py-2 uppercase text-charcoal flex flex-row justify-between"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>{title}</p>    
          <FontAwesomeIcon
          icon={faCaretDown}
          size="xl"
          className={clsx(
            "ml-2 transition-transform duration-300",
            isOpen ? "rotate-0" : "rotate-[-90deg]"
          )}
        />
        </button>
      
          <div     ref={contentRef}
        className={clsx(
          "transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}>
            <ul className="list-none no-underline list-inside text-no-decoration">
              {content.map((item, index) => (
                <li key={index} className="text-gray-600 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        
      </div>
    );
  }