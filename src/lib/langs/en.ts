import type { LangSchema } from '$lib/langs/langType';

export const en: LangSchema = {
  navbar: {
    about: 'About',
    skills: 'Skills',
    contact: 'Contact',
    projects: 'Projects'
  },
  hero: {
    gretting: 'Hello, my name is',
    name: 'Carlos Veliz',
    tagDesigner: 'UI/UX Designer',
    tagDeveloper: 'Full Stack Web Developer',
    tagTechnician: 'Technician',
    description: 'I like turning ideas into innovative digital experiences.',
    contactMe: 'Contact me',
    myProjects: 'My projects'
  },
  skills: {
    title: 'Skills',
    sliderButtons: {
      techStack: 'Tech Stack',
      whatICanDo: 'What I Can Do'
    },
    techStackSection: {
      programmingLangs: 'Programming Languages',
      markupStyles: 'Markup and Styles',
      databases: 'Databases',
      tools: 'Tools'
    },
    whatICanDoSection: {
      webApps: {
        title: 'Web Applications',
        description: 'Modern, dynamic, and adaptable web solutions for any device.'
      },
      dbManagement: {
        title: 'Database Management',
        description: 'Design, modeling, and maintenance of SQL and NoSQL databases.'
      },
      apis: {
        title: 'API Development',
        description: 'Secure and scalable APIs for communication between services and applications.'
      },
      desktopApps: {
        title: 'Desktop Applications',
        description: 'Cross-platform software focused on usability and efficiency.'
      },
      systemDesign: {
        title: 'System Design',
        description: 'Software architectures tailored to business needs.'
      }
    }
  }
};
