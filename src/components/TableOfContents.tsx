import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './TableOfContents.css';

interface Heading {
  id: string;
  depth: number;
  value: string;
  displayValue: string; // Added displayValue for cleaned heading text
}

// Function to clean decorative characters from heading text
const cleanHeadingText = (text: string): string => {
  // Remove level 2 heading decorations: ･ﾟﾟ･✧･ﾟ･✦ ... ✦･ﾟ･✧･ﾟﾟ･
  let cleanedText = text.replace(/^･ﾟﾟ･✧･ﾟ･✦\s*/, '').replace(/\s*✦･ﾟ･✧･ﾟﾟ･$/, '');
  
  // Remove level 3 heading decorations: ✧･ﾟ: *✧･ﾟ:* ... *:･ﾟ✧*:･ﾟ✧
  cleanedText = cleanedText.replace(/^✧･ﾟ:\s*\*✧･ﾟ:\*\s*/, '').replace(/\s*\*:･ﾟ✧\*:･ﾟ✧$/, '');
  
  return cleanedText.trim();
};

interface TableOfContentsProps {
  markdown: string;
}

const TableOfContents = ({ markdown }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');

  // Extract headings from markdown using regex
  useEffect(() => {
    if (markdown) {
      // Regular expression to match markdown headings (# Heading)
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const matches = [...markdown.matchAll(headingRegex)];
      
      const extractedHeadings = matches.map(match => {
        const depth = match[1].length; // Number of # symbols
        const text = match[2].trim();
        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        
        // Clean the heading text for display
        const displayValue = cleanHeadingText(text);
        
        return {
          id,
          depth,
          value: text,
          displayValue
        };
      });
      
      setHeadings(extractedHeadings);
    }
  }, [markdown]);

  return (
    <nav className="toc-sidebar">
      <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
      {headings.length > 0 ? (
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`toc-item depth-${heading.depth} ${
                activeId === heading.id ? 'active' : ''
              }`}
              style={{ 
                paddingLeft: `${(heading.depth - 1) * 0.75}rem`,
                borderLeft: activeId === heading.id ? '2px solid #3182ce' : '2px solid transparent',
                transition: 'all 0.2s ease'
              }}
            >
              <Link
                to={heading.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveId(heading.id)}
                className={`block py-1 px-2 text-sm hover:text-blue-600 cursor-pointer transition-colors ${
                  activeId === heading.id ? 'text-blue-600 font-medium' : 'text-gray-700'
                }`}
              >
                {heading.displayValue}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">No headings found</p>
      )}
    </nav>
  );
};

export default TableOfContents;
