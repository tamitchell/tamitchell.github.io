;
const profilePic = () => {
  return require("../img/profile-me.jpg");
};

const profileData = {
  name: "Tasha Mitchell",
  occupationPrimary: "UX Designer",
  occupationSecondary: "Front End Developer",
  email: "tmitchell5801@gmail.com",
  portfolio: "tamitchell.github.io",
  phone: "123456789",
  placeOfWork: "Herndon, VA",
  linkedInLink: "https://www.linkedin.com/in/tashamitchell/",
  githubLink: "https://github.com/tamitchell"
};

const frontEnd = [
  "React.js",
  "Angular 8",
  "JavaScript (ES6)",
  "Typescript",
  "SASS/SCSS",
  "Bootstrap",
  "Handlebars.js",
  "HTML5",
  "CSS3",
  "AngularJS"
];

const backEnd = ["Node.js", "Python/Django", "Express.js"];

const dataBases = ["NoSQL", "MongoDB", "Firebase"];

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
  "Content Analysis",
  "User Journeys",
  "Storyboarding",
  "Usability testing",
  "Rapid Wireframing/Prototyping",
  "Adobe XD CC",
  "Adobe Illustrator/Photoshop",
  "Section 508 Standards",
  "InVision",
  "Sketch"
];

const softSkills = [
  "Ability to Work Under Pressure",
  "Creative",
  "Leadership",
  "Multitasking",
  "Quick to learn new technologies",
  "Self-Driven",
  "Time Management",
  "Growth mindset",
  "Trilingual in Spanish, English, and Chinese"
];

const summaryData = {
  paragraph1:
    "Tasha is a Web Developer/Designer Hybrid with a passion for bringing words from mere paper and concepts into a visual reality that’s both thought-provoking and interactive. Coming from a strong background in studying and speaking multiple languages (including Spanish and Chinese), Tasha displays a formidable talent in not only learning quickly, but also excelling in new disciplines that she comes across - demonstrable by her consistent line of projects and paid ventures that have helped to establish and maintain her growing network and potential within the small business community.",
  paragraph2:
    "As a new and promising consultant, Tasha's biggest asset is her fortitude for creating a detailed vision and that she is able to maintain from the beginning the project to end. Her qualities not only add up to make her a great programmer, but overall, someone highly skilled in the talent of both crafting and materializing human narratives that reach vast variety of people, cultures, and organizations."
};

const educationData = {
  college: [
    {
      logo: require("../img/logo/gmu.png"),
      schoolName: "George Mason University",
      degree: "Foreign Languages, Bachelor of Arts",
      graduationDate: "May 2018",
      additionalNote:
        "Graduated with honors with a double concentration in Spanish and Chinese",
      gpa: "3.67"
    },
    {
      logo: require("../img/logo/ga.png"),
      schoolName: "General Assembly",
      degree: "Web Development Immersive Program",
      graduationDate: "June 2018",
      additionalNote:
        "Full-stack web development program focused on common best practices in object-oriented programming, MVC frameworks, data modeling, and test-driven development. Developed a portfolio of individually focused and collaboratively focused projects.",
      gpa: null
    },
    {
      logo: require("../img/logo/dalian.png"),
      schoolName: "Dalian University of Technology",
      degree: "Immersive Study Abroad Program",
      graduationDate: "June 2017",
      additionalNote:
        "Studied Mandarin Oral and Written Communication in Dalian, China",
      gpa: null
    }
  ]
};

const experienceData = [
  {
    logo: require("../img/logo/bah.png"),
    jobName: "Booz Allen Hamilton",
    jobTitle: "Senior Consultant | Front-End Developer",
    location: "Alexandria, VA",
    dateStarted: "Jan 2019​ ",
    dateEnded: null,
    companyLink: null,
    skillsUsed: [
      "Served support role providing guidance to team members, project and product development support, process mentoring, and product technical assessments.",
      "As a mid-level developer, coded some of the more complicated solutions including dynamic page controls and dynamic tabbing and page scrolling.",
      "Reduced testing effort for integration teams by more than 70% by setting up chain of internal testing that can be performed by both UX and development teams before automated deployments are completed.",
      "Developed and promoted the usage of small, modularized components in Angular 8 framework, allowing for quick reuse and customization for cross-team use.",
      "Improved current CSS library used by instilling a modularized SCSS file structure for organization of styling per category rather than per component"
    ]
  },
  {
    logo: require("../img/logo/bah.png"),
    jobName: "Booz Allen Hamilton",
    jobTitle: "Senior Consultant | Lead UX Designer",
    location: "Alexandria, VA",
    dateStarted: "Jan 2019​ ",
    dateEnded: null,
    companyLink: null,
    skillsUsed: [
      "Conducted and lead  communication processes for UX and Dev teams, involving UX Reviews and open standups between cross-functional teams resulting in higher quality output of development",
      "Designed a user-friendly, configurable navigation system that became the standard for all other related UIs on the project. The technique designed allowed mapping and defaulting of data as well as the ability to preview and adjust the data on-screen prior to updating.",
      "Designed and generated fully-interactive prototypes and click-throughs which were used for client presentations, mock-ups, as well as user-testing studies.",
      "Analyzed data gathered from user research into meaningful reports for business clients, enhancing relationship between clientele and project leads during project demos.",
      "Leveraged client based requests against government initiated design codes  such as 508 Compliance, US Standards of Text Accessibility, and overall Usability"
    ]
  },
  {
    logo: require("../img/logo/desi.png"),
    jobName: "Diversified Electric Services	",
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
    logo: require("../img/logo/meti.png"),
    jobName: "MetiStream",
    jobTitle: "Graphic Designer",
    location: "Tyson's Corner, VA",
    dateStarted: "Nov 2018​ ",
    dateEnded: "Jan 2019",
    companyLink: null,
    skillsUsed: [
      "Provided graphic design support for projects with production status including layout alterations, color corrections, resizing existing projects, and designing new projects based on existing creative or established guidelines",
      "Created graphics, slide templates and PPT materials for meetings and appropriate mock-ups for client",
      "Researched and presented new ideas for creative marketing campaign.",
      "Collaborates with COO and CEO of company to ensure graphic accuracy, consistency, and high quality",
      "Workflow tools used: Adobe Illustrator, Photoshop, Autodesk Sketchbook Pro"
    ]
  },
  {
    logo: require("../img/logo/srt.png"),
    jobName: "SRTLabs: Science Robotics and Technology	",
    jobTitle: "Front End Developer",
    location: "Arlington, VA",
    dateStarted: "Oct 2018​ ",
    dateEnded: "Jan 2019",
    companyLink: null,
    skillsUsed: [
      "Responsible for implementation of the presentation layer (GUI) for the application.",
      "Troubleshooted and reported problems with ticketing system(Jira)",
      "Collaborated with agile team to migrate beta project to MVP that uses ReactJS, Symphony, PHP, and MySQL",
      "Participated in day-to-day meeting, status meeting, strong reporting and effective communication with project manager and developers."
    ]
  }
];

const projectData = [
  {
    projectName: "Growthsphere",
    previewImage: require('../img/growthsphere.gif'),
    deployedApplication: "https://growthsphere.herokuapp.com/",
    githubLink: "https://github.com/tamitchell/hair-journal",
    projectSummary:
      "Growthsphereis an online web application initially designed to create a space for African American women to track their Natural hair growth progress. What's more than a web application that logs hair regimens and product outcomes, I am hoping that this application can evolve to become a space where women of color can come to share, collaborate, and talk about their hair!",
    technologiesUsed:
      "NoSQL - MongoDB, Mongoose as ODM (Object Document Mapping), Express.js, Handlebars, Node.js, Passport (for user authentication)"
  },
  {
    projectName: "Happy Tail VA LLC",
    previewImage: require('../img/happy-tail.gif'),
    deployedApplication: "http://happytail-dev.surge.sh/",
    githubLink: "https://github.com/tamitchell/HappyTailLLC",
    projectSummary:
      "Happy Tails VA LLC is an upcoming dog walking company who wanted a launch site to expand to their growing clientel.",
    technologiesUsed:
      "Javascript(ES5), HTML + SASS, Bootstrap, Surge (for deployment)"
  },
  {
    projectName: "Storyteller",
    previewImage: require('../img/storyteller.png'),
    deployedApplication: "https://storyteller-ss.surge.sh/",
    githubLink: "https://github.com/tamitchell/storyteller",
    projectSummary:
      "Storyteller: A Web Appication for Short Stories is a modern organizational web app that helps to organize and write novels, poetry, and prose. While this project originally incorporated MERN (MongoDB, Express, React, and Node), I am currently refactoring it to also incorporate GraphQL. Therefore, it has been taken down from production.",
    technologiesUsed:
      "React.js, Express.js, Node.js, MVC, MongoDB/Mongoose, GraphQL"
  },
  {
    projectName: "First Call Weather",
    previewImage: require('../img/first-call.gif'),
    deployedApplication: "https://firstcall-weather.surge.sh/",
    githubLink: null,
    projectSummary:
      "First Call - Weather App</strong> is A React Based Application that uses Dark Sky's web API to gather weather data and Geocodio's API to render weather conditions based on user's desired location.",
    technologiesUsed:
      "Javascript(ES6), React, JSX, Babel, HTML + SASS, DarkSky API, GeoCodio API, Surge (for deployment)"
  },
  {
    projectName: "Browser Web Game",
    previewImage: require('../img/web-game.gif'),
    deployedApplication: "https://tamitchell.github.io/simple-game/",
    githubLink: "https://github.com/tamitchell/simple-game",
    projectSummary:
      "This game is an interactive, role-playing game for created learning and development",
    technologiesUsed:
      "HTML, Sass/CSS, Vanilla Javascript (ES6), GH pages (for deployment)"
  },
  {
    projectName: "Landscaping Client Template",
    previewImage: require('../img/landscaping.png'),
    deployedApplication: "landscaping-template.surge.sh",
    githubLink: "https://github.com/tamitchell/landscaping",
    projectSummary:
      "This was a design proposal for an upcoming business who wanted to do residential and commercial landscaping. This client has since moved on to become the owner of the Diversified Electric Service Company.",
    technologiesUsed:
      "React, SCSS, Bootstrap"
  }
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
  projectData
};
