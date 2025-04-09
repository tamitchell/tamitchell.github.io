import { profileData, profilePic, frontEnd, backEnd, design } from "../data/text";
import FadeUp from "./FadeUp/FadeUp";
import clsx from "clsx";

export default function HeroSection(): JSX.Element {
  // Select a subset of skills to display as tags
  const skillTags = [
    ...frontEnd.slice(0, 5),
    ...backEnd.slice(0, 2),
    ...design.slice(0, 3),
  ];

  return (
    <div className="w-full py-12 px-6 bg-white">
      <FadeUp className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left side - Text content */}
          <div className="md:w-2/3">
            <h1 className={clsx(
              "text-5xl md:text-6xl lg:text-7xl font-bold",
              "text-blue-ocean-dark mb-4"
            )}>
              {profileData.name}
            </h1>
            <h2 className={clsx(
              "text-3xl md:text-4xl font-medium",
              "text-slate-steel mb-6"
            )}>
              {profileData.occupationPrimary} | {" "}
              {profileData.occupationSecondary} 
            
            </h2>
            <p className="text-lg text-charcoal mb-8 max-w-2xl">
              Creating intuitive digital experiences that blend form and function. 
              Passionate about crafting user-centered designs with clean, efficient code.
            </p>
          </div>

          {/* Right side - Profile image */}
          <div className="md:w-1/3">
            <div className="relative w-full aspect-square max-w-[350px] mx-auto md:mx-0">
              <img 
                src={profilePic} 
                alt={profileData.name} 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Skills tags */}
        <div className="mt-12">
          <div className="flex flex-wrap gap-3 overflow-x-auto pb-2">
            {skillTags.map((skill, index) => (
              <div 
                key={index}
                className={clsx(
                  "px-4 py-2 rounded-full",
                  "bg-cloud-light text-slate-steel",
                  "text-sm font-medium",
                  "transition-all hover:bg-blue-cornflower hover:text-white"
                )}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
