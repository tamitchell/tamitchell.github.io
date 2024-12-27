import { Size, Orientation } from "../types";

interface ProjectArticleProps {
    size?: Size;
    title: string;
    subtitle: string;
    date: string;
    content: React.ReactNode; // Allows for rich content including JSX
    orientation?: Orientation;
    className?: string;
  }

export default function ProjectArticle({ 
    size = 'medium', // 'large', 'medium', or 'small'
    title,
    subtitle,
    date,
    content,
    orientation = 'vertical' // or 'horizontal'
  }: ProjectArticleProps) {
    const sizeClasses = {
      large: "col-span-8 row-span-2",
      medium: "col-span-4 row-span-2",
      small: "col-span-4 row-span-1"
    };
  
    return (
      <article className={`${sizeClasses[size]} border-ink-gray/10 relative overflow-hidden
        ${orientation === 'horizontal' ? 'flex gap-4' : ''}`}>
        {/* Article Content */}
        <div className="p-6 bg-paper-light border border-ink-gray/10 h-full">
          <span className="font-sans text-xs tracking-wider text-ink-gray/60 uppercase">
            {date}
          </span>
          <h2 className={`font-serif ${size === 'large' ? 'text-3xl' : 'text-2xl'} mt-2 mb-1`}>
            {title}
          </h2>
          <p className="font-serif text-ink-gray/80 italic mb-4">
            {subtitle}
          </p>
          <div className="font-serif text-ink-gray/80 leading-relaxed">
            {content}
          </div>
        </div>
      </article>
    );
  };
  