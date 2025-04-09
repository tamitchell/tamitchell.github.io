import { ExperienceData, ProfileData, ProjectData } from "../types";
import profilePic from "@assets/profile-me.jpg";
import gmuLogo from "@assets/logo/gmu.png";
import gaLogo from "@assets/logo/ga.png";
import dalianLogo from "@assets/logo/dalian.png";
import bahLogo from "@assets/logo/bah.png";
import desiLogo from "@assets/logo/desi.png";
import metiLogo from "@assets/logo/meti.png";
import srtLogo from "@assets/logo/srt.png";
import sehaLogo from "@assets/logo/sehaConsulting.png";
import happyTailGif from "@assets/happy-tail.gif";
import firstWatchWeather from "@assets/firstwatchweather.png";

const profileData: ProfileData = {
  name: "Tasha Mitchell",
  occupationPrimary: "Senior UX Engineer",
  occupationSecondary: "Front End Developer",
  email: null,
  portfolio: "tamitchell.github.io",
  phone: "123456789",
  placeOfWork: "Remote (DMV)",
  linkedInLink: "https://www.linkedin.com/in/tashamitchell/",
  githubLink: "https://github.com/tamitchell"
};

const frontEnd = [
  "JavaScript (ES6)",
  "Typescript",
  "HTML5",
  "CSS3",
  "React",
  "React Native",
  "NextJS",
  "Cypress",
  "ReactSpring",
  "Anime.js",
  "Framer Motion",
  "SASS/SCSS",
  "TailwindCSS",
  "Bootstrap",
];

const backEnd = ["Node", "Python/Django", "Express"];

const dataBases = ["Basic SQL (via ORMs)", "MongoDB", "Firebase"];

const methodologies = [
  "Version Control (Git, Github, BitBucket)",
  "Agile Development/SCRUM",
  "Wire-framing/User Stories",
  "OOP (Object-Oriented Programming)",
  "MVC Methodologies",
  "Project Management/bug tracking: JIRA"
];

const design = [
  "Responsive Web Design",
  "User Research",
  "Content Writing and Strategy",
  "User Journeys",
  "Storyboarding",
  "Usability testing",
  "Rapid Wireframing/Prototyping",
  "Adobe XD CC",
  "Figma",
  "Adobe Illustrator/Photoshop",
  "Section 508 Standards",
  "Figma"
];

const softSkills = [
  "Ability to Work Under Pressure",
  "Creative",
  "Multitasking",
  "Quick to learn new technologies",
  "Self-Driven",
  "Time Management",
  "Growth mindset",
];

const summaryData = {
  paragraph1:
    "Tasha is a Web Developer/Designer Hybrid with a passion for bringing words from mere paper and concepts into a visual reality that’s both thought-provoking and interactive. Her biggest asset is her fortitude for creating a detailed vision and that she is able to maintain from the beginning of the project to the end. Her qualities not only add up to make her a great designer, but overall, someone highly skilled in the talent of both crafting and materializing human narratives that reach a vast variety of people, cultures, and organizations.",
  paragraph2:
    ""
};

const educationData = {
  college: [
    {
      logo: gmuLogo,
      schoolName: "George Mason University",
      degree: "Foreign Languages, Bachelor of Arts",
      graduationDate: "May 2018",
      additionalNote:
        "Graduated with honors with a double concentration in Spanish and Chinese",
        gpa: null,
    },
    {
      logo: gaLogo,
      schoolName: "General Assembly",
      degree: "Web Development Immersive Program",
      graduationDate: "June 2018",
      additionalNote:
        "Full-stack web development program focused on common best practices in object-oriented programming, MVC frameworks, data modeling, and test-driven development. Developed a portfolio of individually focused and collaboratively focused projects.",
      gpa: null
    },
    {
      logo: dalianLogo,
      schoolName: "Dalian University of Technology",
      degree: "Immersive Study Abroad Program",
      graduationDate: "June 2017",
      additionalNote:
        "Studied Mandarin Oral and Written Communication in Dalian, China",
      gpa: null
    }
  ]
};

// Main professional experience data
const experienceData: ExperienceData[] = [
  {
    logo: srtLogo,
    jobName: "Science Robotics and Technology	",
    jobTitle: "Software Engineer II",
    location: "Remote",
    dateStarted: "Feb 2021​ ",
    dateEnded: "Current",
    companyLink: null,
    skillsUsed: [
      "Collaborated cross-functionally with product team and backend developers to ensure seamless integration of new features and optimizations",
      "Successfully transitioned the application from bare HTML canvas to Open Layers, enhancing map functionality and performance",
      "Optimized state management using MobX for more predictable and maintainable state updates",
      "Enhanced data fetching and caching with React Query, reducing unnecessary network requests and improving load times",
      "Implemented responsive UI animations using React Spring for key interface elements such as sliding drawers, enhancing interface interactivity",
      "Designed and implemented animations complimenting micro-interactions using CSS and Tailwind on map-based canvas"
    ]
  },
  {
    logo: srtLogo,
    jobName: "Science Robotics and Technology	",
    jobTitle: "UX Designer",
    location: "Remote",
    dateStarted: "Oct 2021​ ",
    dateEnded: "Current",
    companyLink: null,
    skillsUsed: [
      "Served as a crucial liaison between UX design and engineering teams, ensuring seamless integration of design concepts into technical implementations while maintaining design integrity and optimizing for technical feasibility",
      "Conducted comprehensive research on map-based features for health metrics reporting, including user needs analysis, technical feasibility studies, and alignment with business goals. This research directly informed the design and implementation of interactive map interfaces that enhanced data visualization and reporting capabilities, improving user engagement and data comprehension",
      "Conceptualized and designed a comprehensive alert system for user notifications, enhancing user engagement and information delivery",
      "Designed and prototyped comprehensive administrative systems for user onboarding, management, and device integration, creating detailed wireframes that facilitated clear communication across product, engineering, and business teams",
      "Developed and maintained a shared component library and design system in React, improving design consistency and development efficiency across multiple projects while ensuring accessibility standards were met",
    ]
  },
  {
    logo: bahLogo,
    jobName: "Booz Allen Hamilton",
    jobTitle: "Senior Consultant | Front-End Developer",
    location: "Alexandria, VA",
    dateStarted: "Jan 2019​ ",
    dateEnded: "Feb 2021",
    companyLink: null,
    skillsUsed: [
      "Served support role providing guidance to team members, project and product development support, process mentoring, and product technical assessments",
      "As a mid-level developer, coded some of the more complicated solutions including dynamic page controls and dynamic tabbing and page scrolling from scratch",
      "Reduced testing effort for integration teams by more than 70% by setting up chain of internal testing that can be performed by both UX and development teams before automated deployments are completed",
      "Developed and promoted the usage of small, modularized components in Angular 8 framework, allowing for quick reuse and customization for cross-team use",
      "Improved current CSS library used by instilling a modularized SCSS file structure for organization of styling per category rather than per component"
    ]
  },
  {
    logo: bahLogo,
    jobName: "Booz Allen Hamilton",
    jobTitle: "Senior Consultant | Lead UX Designer",
    location: "Alexandria, VA",
    dateStarted: "Jan 2019​ ",
    dateEnded: "Feb 2021",
    companyLink: null,
    skillsUsed: [
      "Led cross-functional collaboration between UX and development teams, implementing structured UX review processes and facilitating open standup meetings, which significantly improved communication and resulted in higher quality output of development",
      "Designed a user-friendly, configurable navigation system that became the standard for all other related UIs on the project. The technique designed allowed easier mapping and defaulting of information as well as the ability to preview and adjust the data on-screen prior to updating",
      "Designed and generated fully-interactive prototypes and click-throughs which were used for client presentations, mock-ups, as well as user-testing studies",
      "Implemented informal A/B testing methodologies to optimize user interface designs, particularly for complex navigation systems.", 
      "Collaborated with product staff and development team to gather feedback, compare interaction patterns, and determine the most effective design for map saving and downloading features (such as graph-based map)",
      "Leveraged client based requests against government initiated design codes such as 508 Compliance, US Standards of Text Accessibility,and overall usability"
    ]
  },
  {
    logo: srtLogo,
    jobName: "SRTLabs: Science Robotics and Technology	",
    jobTitle: "Front End Developer",
    location: "Arlington, VA",
    dateStarted: "Oct 2018​ ",
    dateEnded: "Jan 2019",
    companyLink: null,
    skillsUsed: [
      "Contributed to the development of the presentation layer (GUI) for a key application, gaining hands-on experience with ReactJS to create user interface components",
      "Assisted in the migration of a beta project to MVP status, adapting quickly to work with multiple technologies including ReactJS, Symphony, PHP, and MySQL",
      "Collaborated with agile team to migrate beta project to MVP that uses ReactJS, Symphony, PHP, and MySQL",
      "Developed problem-solving skills by addressing issues reported through the Jira ticketing system, learning effective troubleshooting techniques",
      "Actively engaged in daily stand-ups and status meetings, honing communication skills and understanding of agile development processes"
    ]
  }
];

const projectData: ProjectData[] = [
  {
    projectName: "Library Cataloging System",
    previewImage: null,
    deployedApplication: "https://library-cataloging-system-rfht-nrcwqb1of.vercel.app/",
    githubLink: null,
    projectSummary:
      "A comprehensive library cataloging system that stores and organizes books using MARC records. Users can input bibliographic information (title, author, publisher, ISBN) and save it in a structured format. Features include search functionality for retrieving records by various metadata fields, import/export of MARC records, filtering by categories, and an admin interface for managing records.",
    technologiesUsed:
      "Node.js, Express.js, MongoDB, React"
  },
  {
    projectName: "Growthsphere.io",
    previewImage: null,
    // deployedApplication: "https://growthsphere.herokuapp.com/",
    githubLink: "https://github.com/tamitchell/hair-journal",
    projectSummary:
      "Growthsphere is an online web application initially designed to create a space for African American women to track their Natural hair growth progress. What's more than a web application that logs hair regimens and product outcomes, I am hoping that this application can evolve to become a space where women of color can come to share, collaborate, and talk about their hair!",
    technologiesUsed:
      "Materialize(CSS library), HTML5, SASS, CSS, MongoDB/Mongoose, Express.js, Handlebars, Node.js, Passport (for user authentication), React (updated branch)"
  },
  {
    projectName: "Happy Tail VA LLC",
    previewImage: happyTailGif,
    deployedApplication: "http://happytail-dev.surge.sh/",
    githubLink: "https://github.com/tamitchell/HappyTailLLC",
    projectSummary:
      "Happy Tails VA LLC is an upcoming dog walking company who wanted a launch site to expand to their growing clientel.",
    technologiesUsed:
      "Javascript(ES5), HTML + SASS, Bootstrap, Surge (for deployment)"
  },
  // {
  //   projectName: "Storyteller",
  //   previewImage: storytellerImg,
  //   deployedApplication: "https://storyteller-ss.surge.sh/",
  //   githubLink: "https://github.com/tamitchell/storyteller",
  //   projectSummary:
  //     "Storyteller: A Web Appication for Short Stories is a modern organizational web app that helps to organize and write novels, poetry, and prose. While this project originally incorporated MERN (MongoDB, Express, React, and Node), I am currently refactoring it to also incorporate GraphQL. Therefore, it has been taken down from production.",
  //   technologiesUsed:
  //     "React.js, Express.js, Node.js, MVC, MongoDB/Mongoose, GraphQL"
  // },
  {
    projectName: "First Watch Weather",
    previewImage: firstWatchWeather,
    deployedApplication: "https://weatherapp-nine-mauve.vercel.app/",
    githubLink: "https://github.com/tamitchell/weatherapp",
    projectSummary:
      "First Watch Weather - Weather App is A React Based Application that uses OpenWeathers's and Google Map Places API to gather weather data and Geocodio's API to render weather conditions based on user's desired location.",
    technologiesUsed:
      "A React, NextJS Based Application that uses OpenWeather's weather forecast API and Geocodio's API to render weather conditions based on user's current and/or desired location"
  },
  // {
  //   projectName: "Browser Web Game",
  //   previewImage: webGameGif,
  //   deployedApplication: "https://tamitchell.github.io/simple-game/",
  //   githubLink: "https://github.com/tamitchell/simple-game",
  //   projectSummary:
  //     "You found a momento! I keep this here because it was first project using javascript. This game is an interactive, role-playing game for created learning and development.",
  //   technologiesUsed:
  //     "HTML, Sass/CSS, Vanilla Javascript (ES6), GH pages (for deployment)"
  // },
  // {
  //   projectName: "Landscaping Client Template",
  //   previewImage: landscapingImg,
  //   deployedApplication: "landscaping-template.surge.sh",
  //   githubLink: "https://github.com/tamitchell/landscaping",
  //   projectSummary:
  //     "This was a design proposal for an upcoming business who wanted to do residential and commercial landscaping. This client has since moved on to become the owner of the Diversified Electric Service Company.",
  //   technologiesUsed:
  //     "React, SCSS, Bootstrap"
  // }
];
// Small business and contracting support data
const smallBusinessData: ExperienceData[] = [
  {
    logo: desiLogo,
    jobName: "Diversified Electric Services",
    jobTitle: "Web Developer | Designer",
    location: "Alexandria, VA",
    dateStarted: "Dec 2018​ ",
    dateEnded: "Jan 2019",
    companyLink: "http://desielectric.com/",
    skillsUsed: [
      "Solely designed, developed, and maintained commercial business website for Diversified Electric Services",
      "Communicated directly with clients to establish project parameters, drafted proposals (mockups and wireframes) for design work, analyzed competitor web sites, determined web site content, produced site maps for client approval, and communicated progress with client throughout length of project.",
      "Trained end users (client) on performing necessary updates.",
      "Workflow tools included: SCSS, Javascript, React, Reactstrap, Git"
    ]
  },
  {
    logo: metiLogo,
    jobName: "MetiStream",
    jobTitle: "Graphic Designer",
    location: "Tyson's Corner, VA",
    dateStarted: "Nov 2018​ ",
    dateEnded: "Jan 2019",
    companyLink: null,
    skillsUsed: [
      "Created a customized icon set and stylesheet for high-priority pitch decks, collaborating directly with C-level executive and marketing team to ensure design accuracy and quality across all deliverables",
      "Developed compelling graphics, slide templates, and presentation materials for critical client meetings and marketing campaigns, utilizing advanced design tools including Adobe Illustrator, Photoshop, XD, and Autodesk Sketchbook Pro",
      "Researched and presented new ideas for creative marketing campaign.",
      "Conducted market research and presented innovative concepts for creative marketing strategies, contributing to the company's competitive edge",
      "Demonstrated versatility by executing skilled layout alterations, color corrections, and design adaptations to meet evolving project requirements and stakeholder feedback, while maintaining brand cohesion"
    ]
  },
  {
    logo: sehaLogo,
    jobName: "Seha Consulting",
    jobTitle: "Web Developer",
    location: "Remote",
    dateStarted: "Feb 2025​ ",
    dateEnded: "Mar 2025",
    companyLink: "https://www.sehaconsulting.com/",
    skillsUsed: [
      "Created a customized icon set and stylesheet for high-priority pitch decks, collaborating directly with C-level executive and marketing team to ensure design accuracy and quality across all deliverables",
      "Developed compelling graphics, slide templates, and presentation materials for critical client meetings and marketing campaigns, utilizing advanced design tools including Adobe Illustrator, Photoshop, XD, and Autodesk Sketchbook Pro",
      "Researched and presented new ideas for creative marketing campaign.",
      "Conducted market research and presented innovative concepts for creative marketing strategies, contributing to the company's competitive edge",
      "Demonstrated versatility by executing skilled layout alterations, color corrections, and design adaptations to meet evolving project requirements and stakeholder feedback, while maintaining brand cohesion"
    ]
  },
];

export {
  profileData,
  profilePic,
  frontEnd,
  backEnd,
  dataBases,
  methodologies,
  design,
  softSkills,
  summaryData,
  educationData,
  experienceData,
  projectData,
  smallBusinessData
};
