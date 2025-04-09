import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { projectData } from '../data/text';
import FadeUp from './FadeUp/FadeUp';
import TableOfContents from './TableOfContents';
import clsx from 'clsx';

// Custom components for ReactMarkdown
const MarkdownComponents = {
  h1: ({ children }: any) => {
    const id = children.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return <h1 id={id}>{children}</h1>;
  },
  h2: ({ children }: any) => {
    const id = children.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return <h2 id={id}>{children}</h2>;
  },
  h3: ({ children }: any) => {
    const id = children.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return <h3 id={id}>{children}</h3>;
  },
  h4: ({ children }: any) => {
    const id = children.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return <h4 id={id}>{children}</h4>;
  },
  h5: ({ children }: any) => {
    const id = children.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return <h5 id={id}>{children}</h5>;
  },
  h6: ({ children }: any) => {
    const id = children.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return <h6 id={id}>{children}</h6>;
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Find the project data
  const project = projectData.find(p => 
    p.projectName.toLowerCase().replace(/\s+/g, '-') === projectId
  );
  
  useEffect(() => {
    async function loadMarkdown() {
      try {
        // Import the markdown file dynamically
        const response = await fetch(`/data/projects/${projectId}.md`);
        if (!response.ok) {
          throw new Error('Markdown file not found');
        }
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error('Failed to load markdown:', error);
        
        // Create a fallback markdown from the project summary
        if (project) {
          const fallbackMarkdown = `# ${project.projectName}\n\n${project.projectSummary}\n\n## Technologies Used\n\n${project.technologiesUsed}`;
          setMarkdown(fallbackMarkdown);
        } else {
          setMarkdown('# Project details not found');
        }
      } finally {
        setLoading(false);
      }
    }
    
    if (projectId) {
      loadMarkdown();
    }
  }, [projectId, project]);
  
  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <FadeUp className="project-detail-container max-w-6xl mx-auto px-4 py-8 bg-white">
      <div className="mb-6">
        <Link to="/" className="text-blue-500 hover:text-blue-700 flex items-center">
          ← Back to Projects
        </Link>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-pulse">Loading project details...</div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with Table of Contents */}
          <aside className="md:w-1/4 lg:w-1/5">
            <div className="sticky top-8 p-4 bg-gray-50 rounded-lg shadow-sm">
              <TableOfContents markdown={markdown} />
            </div>
          </aside>
          
          {/* Main content */}
          <main className="md:w-3/4 lg:w-4/5">
            <div className="markdown-content prose prose-lg max-w-none">
              <ReactMarkdown components={MarkdownComponents}>{markdown}</ReactMarkdown>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {project.deployedApplication && (
                <a 
                  href={project.deployedApplication} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={clsx(
                    "px-6 py-2 rounded-md",
                    "bg-blue-500 text-white",
                    "hover:bg-blue-600 transition-colors",
                    "flex items-center gap-2"
                  )}
                >
                  View Live Project
                </a>
              )}
              
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={clsx(
                    "px-6 py-2 rounded-md",
                    "bg-gray-200 text-gray-800",
                    "hover:bg-gray-300 transition-colors",
                    "flex items-center gap-2"
                  )}
                >
                  View on GitHub
                </a>
              )}
            </div>
          </main>
        </div>
      )}
    </FadeUp>
  );
}
