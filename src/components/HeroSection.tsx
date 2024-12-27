// export default function HeroSection() {
//     return (
//       <section className="mx-auto px-4 py-12">
//         <div className="grid grid-cols-12 gap-8">
//           {/* Left Column Text */}
//           <div className="col-span-4 font-serif text-base leading-relaxed">
//             <p className="mb-4 first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
//               At the intersection of design and development, a frontend engineer emerges 
//               with an unconventional background. Starting with a foundation in foreign 
//               languages (Spanish and Chinese), Tasha Mitchell brings a translator's 
//               mindset to the technical realm - bridging the gap between user needs 
//               and technical solutions.
//             </p>
//             <p className="mb-4">
//               From federal contracting to commercial development, her journey showcases 
//               a unique perspective on building interfaces that serve both users and 
//               business needs.
//             </p>
//           </div>
  
//           {/* Center Illustration */}
//           <div className="col-span-4 flex items-center justify-center">
//             <div className="relative w-full aspect-[3/4]">
//               {/* Decorative frame */}
//               <div className="absolute inset-0 border-2 border-ink-gray/20"/>
//               <div className="p-4">
//                 {/* Could be replaced with your actual illustration/photo */}
//                 <svg className="w-full h-full" viewBox="0 0 200 250">
//                   <path 
//                     d="M100 50 C 150 50, 150 200, 100 200 C 50 200, 50 50, 100 50"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1"
//                     className="text-ink-gray/60"
//                   />
//                   {/* Add more decorative SVG elements here */}
//                 </svg>
//               </div>
//             </div>
//           </div>
  

  
//         {/* Bottom Note - Newspaper Style */}
//         <div className="text-center mt-8 pt-4 border-t border-ink-gray/20">
//           <p className="font-serif text-sm text-ink-gray/60 italic">
//             Currently available for new opportunities and collaborations
//           </p>
//         </div>
//       </section>
//     );
//   }
  


export default function HeroSection() {
    const skills = [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "JavaScript", "NextJS", "CSS/Tailwind"]
      },
      {
        category: "Design",
        items: ["UI/UX Design", "Figma", "Adobe XD", "Wireframing", "Prototyping"]
      },
      {
        category: "Tools",
        items: ["Git", "Jest", "React Query", "MobX", "Cypress"]
      }
    ];
  
    return (
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 font-serif text-base leading-relaxed">
            <p className="mb-6 first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              Frontend Engineer and UX Designer with 5+ years of experience bridging 
              technical implementation and user experience. Starting with a foundation 
              in foreign languages (Spanish and Chinese), I bring a translator's mindset 
              to technology - bridging the gap between user needs and technical solutions.
            </p>
            <p className="mb-6">
              From federal contracting to commercial development, my journey showcases 
              a unique perspective on building interfaces that serve both users and 
              business needs.
            </p>
            <p className="italic text-ink-gray/80 border-l-2 border-ink-gray/20 pl-4">
              Currently seeking opportunities where design and development intersect, 
              with a focus on creating intuitive interfaces that drive user engagement.
            </p>
          </div>
  
          {/* Center Image */}
          <div className="col-span-6 flex items-center justify-center">
            <div className="relative w-full border-2 border-ink-gray/20 p-2">
              <img 
                src="/api/placeholder/400/400" 
                alt="Tasha Mitchell" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-ink-gray/10 m-2"/>
            </div>
          </div>
  
           {/* Right Column Text */}
          <div className="col-span-3 font-serif text-base leading-relaxed">
             <p className="mb-4">
               "Currently seeking opportunities where design and development intersect, 
               with a focus on creating intuitive interfaces that drive user engagement 
               and business value."
             </p>
             <p className="mb-4">
               Recent works include First Watch Weather, a reimagining of the beloved 
               Dark Sky interface, and Growthsphere, a community-driven platform for                natural hair care tracking and sharing.
             </p>
             <p>
               <span className="italic">Areas of expertise include:</span> React, 
               TypeScript, UI/UX Design, and Frontend Architecture.
             </p>
           </div>
         </div>
  
        {/* Bottom Note - Newspaper Style */}
        <div className="text-center mt-12 pt-4 border-t border-ink-gray/20">
          <p className="font-serif text-sm text-ink-gray/60 italic">
            Based in Washington DC • Available for Remote Opportunities • EST. 2018
          </p>
        </div>
      </section>
    );
  }