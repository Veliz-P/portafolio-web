export interface LangSchema {
  navbar: {
    about: string;
    skills: string;
    contact: string;
    projects: string;
  };
  hero: {
    gretting: string;
    name: string;
    tagDeveloper: string;
    tagDesigner: string;
    tagTechnician: string;
    description: string;
    contactMe: string;
    myProjects: string;
  };
  skills: {
    title: string;
    sliderButtons: {
      techStack: string;
      whatICanDo: string;
    };
    techStackSection: {
      programmingLangs: string;
      markupStyles: string;
      databases: string;
      tools: string;
    };
    whatICanDoSection: {
      webApps: {
        title: string;
        description: string;
      };
      dbManagement: {
        title: string;
        description: string;
      };
      apis: {
        title: string;
        description: string;
      };
      desktopApps: {
        title: string;
        description: string;
      };
      systemDesign: {
        title: string;
        description: string;
      };
    };
  };
  projects: {
    title: string;
    code: string;
    quickQuickNote: {
      title: string;
      description: string;
      shortDescription: string;
    };
    portfolioWeb: {
      title: string;
      description: string;
      shortDescription: string;
    };
  };
  contact: {
    title: string;
    formTitle: string;
    subject: string;
    name: string;
    message: string;
    readyToWork: string;
    contactMeMsg: string;
    send: string;
  };
}
