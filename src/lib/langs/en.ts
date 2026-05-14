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
  },
  projects: {
    title: 'Projects',
    code: 'Code',
    quickQuickNote: {
      title: 'Quick Quick Note',
      description:
        'Web app for taking notes quickly and easily. It is an useful tool for organizing ideas, tasks, or any information you want to keep directly in your browser.',
      shortDescription: 'Web app for taking personal notes.'
    },
    portfolioWeb: {
      title: 'Web Portfolio',
      description:
        'My personal web portfolio designed to showcase my skills and experience as a developer, built with a modern, responsive, and optimized approach.',
      shortDescription: 'My personal website with my skills and projects.'
    }
  },
  contact: {
    title: 'Contact',
    formTitle: 'Contact form',
    subject: 'Subject',
    name: 'Name',
    message: 'Message',
    readyToWork: 'Ready to work together?',
    contactMeMsg: 'Contact me to discuss your ideas or projects.',
    send: 'Send',
    successMsg: 'Message sent successfully!',
    errorMsg: 'Error sending message. Please try again later.'
  },
  about: {
    title: 'About Me',
    line1:
      'I’m a full-stack web developer with over 2 years of experience. Beyond coding, I enjoy exploring other areas such as networking and cybersecurity.',
    line2:
      'I enjoy building applications that provide real value by turning complex problems into simple and functional solutions. For me, every project is an opportunity to challenge my creativity and logical thinking.',
    line3: 'My three favorite hobbies are gastronomy, language learning, and drawing.'
  }
};
