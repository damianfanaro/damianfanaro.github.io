import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      // Navegación
      inicio: 'Home',
      blog: 'Blog',
      contacto: 'Contact',

      // Home Section
      homeHeader: 'Damian Fanaro',
      homeSubHeader: 'Software Engineer | MBA | CEO',

      // Footer
      footer: {
        rightsReserved: 'Damián Fanaro. All rights reserved.'
      },

      // Contact Section
      contact: {
        title: 'Contact',
        description: 'Feel free to reach out by filling the form below.',
        name: 'Name',
        namePlaceholder: 'Enter your name',
        email: 'Email',
        emailPlaceholder: 'Enter your email',
        message: 'Message',
        messagePlaceholder: 'Enter your message',
        sendButton: 'Send',
        successTitle: 'Message Sent',
        successMessage: 'Your message was sent successfully.',
        errorTitle: 'Error',
        errorMessage: 'There was an error sending your message. Please try again later.'
      },

      // Otros textos
      aboutMeParagraph: [
        'Time brings perspective, and for me, it has clarified my mission: to harness technology—the most powerful tool humanity has ever created—to build solutions that truly help people and organizations, while driving positive social impact. I’m fascinated by the idea of designing systems that run independently, evolve beyond their creator, and solve problems in a sustainable way. I deeply believe in a future where AI uplifts humanity—used ethically, responsibly, and for the greater good. This passion led me to co-found Igrowker, a company focused on upskilling digital talent to prepare them for the future and help them grow at the pace today’s market demands.',
        'I’m especially driven by creating tech solutions that respond to real-world challenges and help shape a more equitable, efficient, and connected future. Outside of work, I’m an avid reader and love diving into topics like negotiation, human behavior, personal growth, sales, and investing. Since 2023, I’ve been honing my skills in CPS (Complex Problem Solving)—a capability I see as essential for what’s coming next.'
      ],
      followMe: 'Follow Me',
      myLinkedInArticles: 'My LinkedIn articles',
      switchToSpanish: 'Cambiar a Español',
      switchToEnglish: 'Switch to English',

      igrowker: {
        title: 'About Igrowker',
        paragraph:
          'In 2024, I founded Igrowker with the conviction that IT talent isn’t built solely in universities—it’s forged through hands-on experience. Our goal is clear: to offer a learning journey that truly prepares people for the real challenges of today’s tech industry.',
        description:
          'At Igrowker, we’re committed to a Project-Based Learning (PBL) model, powered by a multi-agent AI system with specialized agents supporting each team role. This approach strengthens the key skills of the future: adaptability, technical judgment, and real-world problem-solving.',
        button: 'Visit Igrowker'
      }
    }
  },
  es: {
    translation: {
      // Navegación
      inicio: 'Inicio',
      blog: 'Blog',
      contacto: 'Contacto',

      // Home Section
      homeHeader: 'Damián Fanaro',
      homeSubHeader: 'Ingeniero de Software | MBA | CEO',

      // Footer
      footer: {
        rightsReserved: 'Damián Fanaro. Todos los derechos reservados.'
      },

      // Contact Section
      contact: {
        title: 'Contacto',
        description: 'No dudes en comunicarte completando el siguiente formulario.',
        name: 'Nombre',
        namePlaceholder: 'Introduce tu nombre',
        email: 'Correo electrónico',
        emailPlaceholder: 'Introduce tu correo electrónico',
        message: 'Mensaje',
        messagePlaceholder: 'Introduce tu mensaje',
        sendButton: 'Enviar',
        successTitle: 'Mensaje Enviado',
        successMessage: 'Tu mensaje fue enviado con éxito.',
        errorTitle: 'Error',
        errorMessage: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.'
      },

      // Otros textos
      aboutMeParagraph: [
        'El tiempo da perspectiva y en mi caso, ha aclarado mi misión: aprovechar la tecnología —la herramienta más increíble de la humanidad— para crear soluciones que realmente ayuden a las personas y a las organizaciones. Me fascina diseñar sistemas que funcionen de forma autónoma, prosperen independientemente de su creador y resuelvan problemas de manera sostenible. Creo de verdad en un futuro donde la IA potencie a la humanidad y se utilice de forma ética, accesible y consciente. Esta pasión me llevó a fundar Igrowker, una empresa cuyo objetivo es mejorar las habilidades del talento digital para prepararlo para el futuro y permitirle avanzar al ritmo que exige el mercado actual. Por ello, disfruto especialmente de brindar soluciones tecnológicas que respondan a problemas reales y ayuden a construir un futuro más justo, eficiente y conectado.',
        'Fuera del trabajo, soy un ávido lector y me sumerjo en temas como negociación, comportamiento humano, crecimiento personal e inversión. Desde 2023, he estado perfeccionando mis habilidades en CPS (Resolución de Problemas Complejos), una capacidad que considero crucial para el futuro.'
      ],
      followMe: 'Sígueme',
      myLinkedInArticles: 'Mis artículos en LinkedIn',
      switchToSpanish: 'Switch to Spanish',
      switchToEnglish: 'Switch to English',

      igrowker: {
        title: 'Sobre Igrowker',
        paragraph:
          'En 2024 fundé Igrowker con la convicción de que el talento en IT se construye no sólo en las universidades, sino también en la práctica . Tenemos un objetivo claro, ofrecer una experiencia formativa que prepare a las personas para los desafíos reales del mercado technologico.',
        description:
          'En Igrowker apostamos por un modelo de Aprendizaje Basado en Proyectos(PBL), impulsado por un sistema multiagente de IA especializados que acompañan a cada rol del equipo. Así fortalecemos las habilidades clave del futuro: adaptabilidad, criterio técnico y resolución de problemas reales.',

        button: 'Visita Igrowker'
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Cambiado a inglés por defecto
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
