export interface ProfileData {
    name: string;
    occupationPrimary: string;
    occupationSecondary?: string;
    email: string | null;
    portfolio: string;
    phone: string;
    placeOfWork: string;
    linkedInLink: string;
    githubLink: string;
    openToWork: boolean;
  }

  export interface ExperienceData {
    logo?: string; // Assuming these are relative paths
    jobName?: string;
    jobTitle: string;
    location: string;
    dateStarted: string;
    dateEnded?: string | null; // This can be null or a string
    companyLink?: string | null; // Optional company link
    skillsUsed: string[]; // An array of skills or tasks
  }

  export interface ProjectData {
    projectName: string;
    previewImage: string | null; // Path to the image
    deployedApplication?: string;
    githubLink: string | null;
    projectSummary: string;
    technologiesUsed: string; // List of technologies as a string
  }

  export interface SkillCategory {
    title: string;
    content: string[]; 
  }