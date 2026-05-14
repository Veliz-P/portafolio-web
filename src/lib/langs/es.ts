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
  },
  projects: {
    title: 'Proyectos',
    code: 'Código',
    quickQuickNote: {
      title: 'Quick Quick Note',
      description:
        'Aplicación web para tomas notas de forma rápida y sencilla. Una herramienta útil para organizar ideas, tareas o cualquier información directamente en el navegador.',
      shortDescription: 'App web para tomar notas personales.'
    },
    portfolioWeb: {
      title: 'Portafolio Web',
      description:
        'Mi portafolio web personal diseñado para presentar mis habilidades y experiencia como desarrollador, construido con un enfoque moderno, responsivo y optimizado',
      shortDescription: 'Mi sitio web personal que muestra mi trabajo'
    }
  },
  contact: {
    title: 'Contacto',
    formTitle: 'Formulario de contacto',
    subject: 'Asunto',
    name: 'Nombre',
    message: 'Mensaje',
    readyToWork: '¿Listo para colaborar juntos?',
    contactMeMsg: 'Contáctame para discutir sobre tus ideas o proyectos.',
    send: 'Enviar',
    successMsg: '¡Mensaje enviado con éxito!',
    errorMsg: 'Error al enviar el mensaje. Por favor, inténtelo más tarde.'
  },
  about: {
    title: 'Sobre mí',
    line1: 'Soy desarrollador web full-stack.',
    line2:
      'Disfruto crear aplicaciones que aporten valor real, transformando problemas complejos en soluciones simples y funcionales. Para mí, cada proyecto es una oportunidad para poner a prueba mi creatividad y lógica.',
    line3: 'Mis tres aficiones favoritas son la gastronomía, el aprendizaje de idiomas y el dibujo.'
  }
};
