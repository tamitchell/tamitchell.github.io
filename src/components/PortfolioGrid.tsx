import ProjectArticle from "./ProjectArticle";

export default function PortfolioGrid() {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Section Header */}
        <header className="mb-12 text-center">
          <h2 className="font-serif text-xl tracking-wider uppercase text-ink-gray/80">
            Latest Works & Investigations
          </h2>
          <div className="w-40 h-px bg-ink-gray/20 mx-auto mt-4"/>
        </header>
  
        {/* Project Grid */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Featured Project - First Watch Weather */}
          <ProjectArticle 
            size="large"
            title="First Watch Weather"
            subtitle="A New Dawn in Weather Visualization"
            date="September 2024"
            content={
              <div>
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
                  When Dark Sky announced its shutdown, developers worldwide felt the impact. 
                  But where others saw loss, I saw opportunity. First Watch Weather reimagines 
                  the beloved interface for modern web technologies.
                </p>
                <p className="mt-4">
                  Built with React and Next.js, this project showcases the intersection 
                  of design and development...
                </p>
                <span className="block mt-4 text-sm italic">Continued on page 2...</span>
              </div>
            }
          />
  
          {/* Medium Articles - Growthsphere & MetiStream */}
          <ProjectArticle 
            size="medium"
            title="Growthsphere"
            subtitle="Building Community Through Data"
            date="Ongoing"
            content={
              <p>An online platform designed to help women track and share their natural 
              hair growth journey, creating a space for community and collaboration...</p>
            }
          />
  
          <ProjectArticle 
            size="medium"
            title="MetiStream"
            subtitle="Healthcare Meets Design"
            date="2022-2023"
            content={
              <p>Led the comprehensive redesign of MetiStream's marketing website, 
              transforming complex healthcare analytics concepts into an engaging 
              user experience...</p>
            }
          />
  
          {/* Small Articles - Additional Projects */}
          <ProjectArticle 
            size="small"
            title="The Bored Jar"
            subtitle="Breaking the Scroll Cycle"
            date="2024"
            content={
              <p>A mobile app designed to help users manage their free time more 
              effectively...</p>
            }
          />
  
          <ProjectArticle 
            size="small"
            title="Portfolio Archive"
            subtitle="Previous Works and Experiments"
            date="2018-2024"
            content={
              <p>A collection of notable projects and experiments from previous 
              years...</p>
            }
          />
        </div>
  
        {/* Bottom Note */}
        <div className="text-center mt-12 pt-4 border-t border-ink-gray/20">
          <p className="font-serif text-sm text-ink-gray/60 italic">
            Portfolio Updated Weekly • Inquiries Welcome • Contact for Full Case Studies
          </p>
        </div>
      </section>
    );
  };