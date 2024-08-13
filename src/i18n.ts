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
        rightsReserved: 'Damián Fanaro. All rights reserved.',
      },

      // Otros textos
      aboutMeParagraph:
        'My mission is to create solutions for people and organizations using the most powerful vehicle humanity has: technology. Through this, I aim to generate positive social impact. Outside of work, I practice Kyokushin Karate and enjoy reading books on a variety of topics that I find interesting, such as negotiation, human behavior, personal development, sales, and investments. In 2023, I began to delve deeper into CPS (Complex Problem Solving), a skill I believe will be fundamental in the times to come. Don’t hesitate to reach out if you think we can create synergies!',
      followMe: 'Follow Me',
      myLinkedInArticles: 'My LinkedIn articles',
      switchToSpanish: 'Cambiar a Español',
      switchToEnglish: 'Switch to English'
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
        rightsReserved: 'Damián Fanaro. Todos los derechos reservados.',
      },

      // Otros textos
      aboutMeParagraph:
        'Mi misión es crear soluciones para personas y organizaciones utilizando el vehículo más potente que tiene la humanidad: la tecnología. Y con ello, generar impacto social positivo. Fuera del ambiente laboral, practico Karate Kyokushin y leo libros sobre una variedad de temas que encuentro interesantes como negociación, comportamiento humano, desarrollo personal, ventas e inversiones. En 2023, empecé a profundizar sobre CPS (Resolución de Problemas Complejos), una habilidad que creo será fundamental en los tiempos que se vienen. No dudes en escribirme si crees que podemos generar sinergias!',
      followMe: 'Sígueme',
      myLinkedInArticles: 'Mis artículos en LinkedIn',
      switchToSpanish: 'Switch to Spanish',
      switchToEnglish: 'Switch to English'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', 
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false 
  }
})

export default i18n
