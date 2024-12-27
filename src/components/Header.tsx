export default function Header() {
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    return (
      <header className="w-full max-w-6xl mx-auto pt-6 pb-3">
      <div className="flex justify-between items-baseline text-xs uppercase mb-2">
        <span className="w-1/3 text-left">Portfolio Edition</span>
        <span className="text-ink-gray/60 w-1/3 text-center">{today}</span>
        <span className="w-1/3 text-right">Est. 2018</span>
      </div>
      
      <div className="text-center mb-3">
        <h1 className="font-serif text-5xl tracking-tight leading-none mb-1">
          <span className="font-light">TASHA</span>
          {" "}
          <span className="font-medium">MITCHELL</span>
        </h1>
        <div className="flex items-center justify-center gap-3 text-sm text-ink-gray/80">
          <span className="font-serif tracking-wide">UI DESIGNER</span>
          <span className="w-1 h-1 rounded-full bg-ink-gray/60"/>
          <span className="font-serif tracking-wide">FRONTEND DEVELOPER</span>
        </div>
      </div>

      <div className="text-center border-y-4 border-black py-4 border-double flex flex-row justify-between font-serif">
        <div className="flex gap-4">
          <a href="https://github.com/tamitchell" className="hover:underline">GITHUB</a>
          <a href="https://linkedin.com/in/tashamitchell" className="hover:underline">LINKEDIN</a>
        </div>
        <div className="font-serif italic">
          "Building interfaces that bridge design and technology"
        </div>
        <div>
          tamitchell.github.io
        </div>
      </div>
    </header>
//       <header className="w-full mx-auto max-w-6xl pt-10">
//         <div className="text-center mb-6">
//           <h2 className="font-serif text-lg tracking-[0.3em] uppercase text-ink-gray/80">
//             THE ILLUSTRATED
//           </h2>
//         </div>
        
//         <div className="flex items-center justify-center gap-12 mb-8" role="banner">
//   <h1 className="sr-only">
//     Tasha Mitchell
//   </h1>
  
//   <div className="flex items-center justify-center gap-12" aria-hidden="true">
//     <span className="font-serif text-4xl tracking-[0.15em]">
//       TASHA
//     </span>
    
//     <svg 
//       viewBox="0 0 60 60" 
//       className="w-24 h-24"
//       role="img"
//       aria-label="Established 2018 decorative shield"
//     >
//       <title>Decorative shield with text: Established 2018</title>
//       <desc>A shield-shaped design with two nested borders containing the text EST. 2018</desc>
//       <path
//         d="M30 5 L55 15 L55 30 C55 45 44 55 30 55 C16 55 5 45 5 30 L5 15 Z"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1"
//         className="text-ink-gray/60"
//       />
//       <path
//         d="M30 10 L50 18 L50 30 C50 42 41 50 30 50 C19 50 10 42 10 30 L10 18 Z"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="0.5"
//         className="text-ink-gray/40"
//       />
//       <text
//         x="30"
//         y="35"
//         textAnchor="middle"
//         className="font-serif text-[10px]"
//         fill="currentColor"
//       >
//         EST. 2018
//       </text>
//     </svg>
    
//     <span className="font-serif text-4xl tracking-[0.15em]">
//       MITCHELL
//     </span>
//   </div>
// </div>
        
//         <div className="text-center mb-6">
//           <h2 className="font-serif text-2xl tracking-[0.25em] uppercase text-ink-gray/80">
//             UI DESIGNER AND FRONTEND DEVELOPER
//           </h2>
//         </div>
        
//         <div className="text-center border-y-4 border-black py-4 border-double flex flex-row justify-between font-serif uppercase">
//             <span className="w-1/3 text-left">
//             Portfolio Edition
//             </span>
//           <span className="w-1/3 text-base tracking-[0.1em] text-ink-gray/60 uppercase">
//             {today}
//           </span>
//           <span className="w-1/3 text-right">
//             Est. 2018
//           </span>
//         </div>
//       </header>
    );
  }