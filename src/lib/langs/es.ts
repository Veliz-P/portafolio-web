import type { LangSchema } from '$lib/langs/langType';

export const es: LangSchema = {
  navbar: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    contact: 'Contacto',
    projects: 'Proyectos'
  },
  hero: {
    gretting: 'Hola, mi nombre es',
    name: 'Carlos Veliz',
    tagDesigner: 'Diseñador UI/UX',
    tagDeveloper: 'Desarrollador Web Full Stack',
    tagTechnician: 'Técnico Informático',
    description: 'Me apasiona transformar ideas en experiencias digitales innovadoras.',
    contactMe: 'Contáctame',
    myProjects: 'Mis proyectos'
  },
  skills: {
    title: 'Habilidades',
    sliderButtons: {
      techStack: 'Tecnologías',
      whatICanDo: 'Servicios'
    },
    techStackSection: {
      programmingLangs: 'Lenguajes de programación',
      markupStyles: 'Marcado y estilos',
      databases: 'Bases de datos',
      tools: 'Herramientas'
    },
    whatICanDoSection: {
      webApps: {
        title: 'Aplicaciones Web',
        description: 'Soluciones web modernas, dinámicas y adaptables a cualquier dispositivo.'
      },
      dbManagement: {
        title: 'Gestión de Bases de Datos',
        description: 'Diseño, modelado y mantenimiento de bases de datos SQL y NoSQL'
      },
      apis: {
        title: 'Desarrollo de APIs',
        description: 'APIs seguras y escalables para comunicación entre servicios y apps.'
      },
      desktopApps: {
        title: 'Aplicaciones de Escritorio',
        description: 'Software multiplataforma enfocado en usabilidad y eficiencia.'
      },
      systemDesign: {
        title: 'Diseño de Sistemas',
        description: 'Arquitecturas de software adaptadas a las necesidades del negocio.'
      }
    }
  }
};
